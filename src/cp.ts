import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
import * as md5 from 'md5';

const BUILD_DIR = 'build';
const EXPORT_DIR = 'dist';

const tsconfigJson = fs.readFileSync('tsconfig.json').toString();
const hash = md5(tsconfigJson);
const {target} = JSON.parse(tsconfigJson).compilerOptions;

glob.sync('build/**/*.{js,jsx,map,d.ts}').map((file) => {
  const extname = path.extname(file);
  const basename = path.basename(file, extname);

  const dirnamePaths = path.dirname(file).split(path.sep).slice(1);
  const exportDir = path.resolve(EXPORT_DIR, path.join(...dirnamePaths));

  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }

  const exportFilePath = path.resolve(exportDir, `${basename}-${target}-${hash}${extname}`);
  const tsconfigFilePath = path.resolve(exportDir, `${basename}-${target}-${hash}.tsconfig.json`);

  fs.copyFileSync(file, exportFilePath);
  fs.copyFileSync('tsconfig.json', tsconfigFilePath);
  console.log(exportFilePath);
  console.log(tsconfigFilePath);
});
