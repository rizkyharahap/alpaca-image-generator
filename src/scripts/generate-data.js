import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

function writeFileJson(obj, path) {
  fs.writeFileSync(
    path,
    JSON.stringify(obj, null, 4 ),
    (error) => {
      if (error) throw error;
    },
  );
}

function getFiles(path, extension) {
  const result = [];
  
  const files = fs.readdirSync(path, { withFileTypes: true });

  for (const file of files) {
    if(file.name.endsWith(extension)) {
      result.push(file.name);
    }
  }

  return result;
}

function getDirectories(path) {
  const result = {};

  const directories = fs.readdirSync(path, { withFileTypes: true });
  
  for (const directory of directories) {
    if(directory.isDirectory()) {
      result[directory.name] = getFiles(`${path}/${directory.name}`, ".png");
    }
  }

  return result;
}

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const basePath = path.join(__dirname, "../../public/assets/");

const imagesPath = `${basePath}/alpaca`;
const jsonPath = `${basePath}/aplaca-data.json`;

const filesTree = getDirectories(imagesPath);

writeFileJson(filesTree, jsonPath);