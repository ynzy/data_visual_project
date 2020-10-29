/**
 * ==============================
 * welcome to imooc.com
 * this is a rollup test project
 * ==============================
 **/
var name = "262083";
var version = "1.0.0";
var description = "";
var main = "index.js";
var scripts = {
	test: "echo \"Error: no test specified\" && exit 1"
};
var author = "";
var license = "ISC";
var devDependencies = {
	"@babel/core": "^7.12.3",
	"@babel/preset-env": "^7.12.1",
	rollup: "^2.32.1",
	"rollup-plugin-babel": "^4.4.0",
	"rollup-plugin-commonjs": "^10.1.0",
	"rollup-plugin-json": "^4.0.0",
	"rollup-plugin-node-resolve": "^5.2.0"
};
var dependencies = {
	"sam-test-data": "0.0.5",
	"sam-test-data-cjs": "0.0.1"
};
var json = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	author: author,
	license: license,
	devDependencies: devDependencies,
	dependencies: dependencies
};

console.log(json.name, json.main);
/**
 * ===============
 * powered by sam
 * copyright 2018
 * ===============
 **/
