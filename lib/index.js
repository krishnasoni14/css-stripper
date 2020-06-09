var fs = require('fs');

module.exports = function () {
	return new Deresponsify();
};

Deresponsify.prototype.parseFile = function (path, callback) {
	return fs.readFile(path, function (err, file) {
		this.translateString(file.toString());
	}.bind(this));
};
