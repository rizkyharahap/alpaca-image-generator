import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

function getFiles(path) {
  // get array of files inside of directory path
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter((file) => file.isFile());
}

function getDirectories(path) {
  const directoriesObj = {};

  // get array of directories base on directory
  const directories = fs
    .readdirSync(path, { withFileTypes: true })
    .filter((directory) => directory.isDirectory());

  for (const directory of directories) {
    directoriesObj[directory.name] = {};

    const files = getFiles(`${directory.parentPath}/${directory.name}`);

    for (const file of files) {
      directoriesObj[directory.name][file.name] = {
        path: `/assets/${directory.name}/${file.name}`,
      };
    }
  }

  return directoriesObj;
}

console.log(getDirectories(path.join(__dirname, "../assets/alpaca")));
