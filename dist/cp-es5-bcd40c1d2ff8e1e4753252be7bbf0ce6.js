"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var md5 = require("md5");
var BUILD_DIR = 'build';
var EXPORT_DIR = 'dist';
var tsconfigJson = fs.readFileSync('tsconfig.json').toString();
var hash = md5(tsconfigJson);
var target = JSON.parse(tsconfigJson).compilerOptions.target;
glob.sync('build/**/*.{js,jsx,map,d.ts}').map(function (file) {
    var extname = path.extname(file);
    var basename = path.basename(file, extname);
    var dirnamePaths = path.dirname(file).split(path.sep).slice(1);
    var exportDir = path.resolve(EXPORT_DIR, path.join.apply(path, dirnamePaths));
    if (!fs.existsSync(exportDir)) {
        fs.mkdirSync(exportDir, { recursive: true });
    }
    var exportFilePath = path.resolve(exportDir, basename + "-" + target + "-" + hash + extname);
    var tsconfigFilePath = path.resolve(exportDir, basename + "-" + target + "-" + hash + ".tsconfig.json");
    fs.copyFileSync(file, exportFilePath);
    fs.copyFileSync('tsconfig.json', tsconfigFilePath);
    console.log(exportFilePath);
    console.log(tsconfigFilePath);
});
//# sourceMappingURL=cp.js.map