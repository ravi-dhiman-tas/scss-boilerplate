#! /usr/bin/env node
var base_path = __dirname,
	fs = require('fs'),
	shell = require('shelljs'),
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


function projectPath(path) {
	var i = path.indexOf('/node_modules') != -1 ? path.indexOf('/node_modules') : -1;
	var basePath = '/';

	if(i !== -1) {
		basePath = path.split('/node_modules');
	} else {
		basePath = path.split('/bin');
	}

	return basePath[0];
}

var projectBase = projectPath(base_path);

if (fs.existsSync(projectBase + dirs.src)) {
	fs_extra.removeSync(projectBase + dirs.src, function(err) {
		if (err) {
			return console.error(err);
		}
	});
}

if (fs.existsSync(projectBase + dirs.dist)) {
	fs_extra.removeSync(projectBase + dirs.dist, function(err) {
		if (err) {
			return console.error(err);
		}
	});
}

if (fs.existsSync(base_path + '/gruntfile.js')) {
	fs_extra.removeSync(projectBase + '/Gruntfile.js', function(err) {
		if (err) {
			return console.error(err);
		}
	});
	fs_extra.copy(base_path + '/gruntfile.js', projectBase + '/Gruntfile.js', function (err) {
		if (err) return console.error(err)
	})
} else {
	fs_extra.copy(base_path + '/gruntfile.js', projectBase + '/Gruntfile.js', function (err) {
		if (err) return console.error(err)
	})
}

fs_extra.mkdir(projectBase + dirs.src, function(err) {
	if(err) return console.error(err);
});

fs_extra.mkdir(projectBase + dirs.dist, function(err) {
	if(err) return console.error(err);
});

fs_extra.mkdirSync(projectBase + dirs.scss, function(err) {
	if(err) return console.error(err);
});

fs_extra.mkdirSync(projectBase + dirs.module, function(err) {
	if(err) return console.error(err);
});

fs_extra.mkdirSync(projectBase + dirs.partial, function(err) {
	if(err) return console.error(err);
});

fs_extra.mkdirSync(projectBase + dirs.util, function(err) {
	if(err) return console.error(err);
});

fs_extra.outputFile(projectBase + dirs.scss + "/style.scss",
	"//include modules\n@import \'module/all\';\n\n//include partial\n@import \'partial/base\';",
	function(err) {
	if (err) {
		console.error(err);
	}
});

fs_extra.outputFile(projectBase + dirs.module + "/_all.scss", "//include all module files\n@import \'vars/vars'", function(err) {
	if (err) {
		console.error(err);
	}
});

fs_extra.outputFile(projectBase + dirs.partial + "/_base.scss", "//base file\nbody {\n\tpadding: $body-padding;\n}\n", function(err) {
	if (err) {
		console.error(err);
	}
});

fs_extra.outputFile(projectBase + dirs.util + "/_util.scss", "//utilites", function(err) {
	if (err) {
		console.error(err);
	}
});

fs_extra.outputFile(projectBase + dirs.vars + "/_vars.scss", "//all global variables\n\n$body-padding:\t\t0px;", function(err) {
	if (err) {
		console.error(err);
	}
});

// if(shell.exec("echo any").code !== 0) {
// 	shell.echo("Grunt file not found");
// 	shell.exit(1);
// }
