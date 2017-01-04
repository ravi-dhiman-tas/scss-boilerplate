var base_path = __dirname,
	fs = require('fs'),
	fs_extra = require('fs-extra');

// var projectName = base_path.substring(base_path.lastIndexOf('/') + 1, base_path.length);

var dirs = {
	src: "/src",
	dist: "/dist",
	scss: "/src/scss",
	module: "/src/scss/module",
	partial: "/src/scss/partial",
	util: "/src/scss/util",
	vars: "/src/scss/module/vars"
}
//
// if (fs.existsSync(base_path + dirs.src)) {
// 	fs_extra.removeSync(base_path + dirs.src, function(err) {
// 		if (err) {
// 			console.error(err);
// 		}
// 	});
// }
//
// if (fs.existsSync(base_path + dirs.dist)) {
// 	fs_extra.removeSync(base_path + dirs.dist, function(err) {
// 		if (err) {
// 			console.error(err);
// 		}
// 	});
// }
//
// fs_extra.mkdir(base_path + dirs.src, function(err) {
// 	if(err) return console.error(err);
// });
//
// fs_extra.mkdir(base_path + dirs.dist, function(err) {
// 	if(err) return console.error(err);
// });
//
// fs_extra.mkdirSync(base_path + dirs.scss, function(err) {
// 	if(err) return console.error(err);
// });
//
// fs_extra.mkdirSync(base_path + dirs.module, function(err) {
// 	if(err) return console.error(err);
// });
//
// fs_extra.mkdirSync(base_path + dirs.partial, function(err) {
// 	if(err) return console.error(err);
// });
//
// fs_extra.mkdirSync(base_path + dirs.util, function(err) {
// 	if(err) return console.error(err);
// });
//
// fs_extra.outputFile(base_path + dirs.scss + "/style.scss",
// 	"//include modules\n@import \'module/all\';\n\n//include partial\n@import \'partial/base\';",
// 	function(err) {
// 	if (err) {
// 		console.error(err);
// 	}
// });
//
// fs_extra.outputFile(base_path + dirs.module + "/_all.scss", "//include all module files\n@import \'vars/vars'", function(err) {
// 	if (err) {
// 		console.error(err);
// 	}
// });
//
// fs_extra.outputFile(base_path + dirs.partial + "/_base.scss", "//base file\nbody {\n\tpadding: $body-padding;\n}\n", function(err) {
// 	if (err) {
// 		console.error(err);
// 	}
// });
//
// fs_extra.outputFile(base_path + dirs.util + "/_util.scss", "//utilites", function(err) {
// 	if (err) {
// 		console.error(err);
// 	}
// });
//
// fs_extra.outputFile(base_path + dirs.vars + "/_vars.scss", "//all global variables\n\n$body-padding:\t\t0px;", function(err) {
// 	if (err) {
// 		console.error(err);
// 	}
// });

function projectPath(path) {
	var i = path.indexOf('/node_modules') != -1 ? path.indexOf('/node_modules') : -1;
	var basePath = '/';

	if(i !== -1) {
		var str = path.split(i);
		console.log(str);
	} else {
		var p = base_path.split(base_path.lastIndexOf('/')),
			newPath = p[1];
			// path = p[1];
		console.log(newPath);
	}
}

projectPath(base_path);
