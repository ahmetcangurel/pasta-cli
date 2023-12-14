#!/usr/bin/env node
const yargs = require("yargs");
const fs = require("fs");
const useNameConverter = require("./helpers/useNameConverter.js");
const {
  componentContent,
  componentStyleContent,
} = require("./reference/react-native.js");
const { useSeperatedDir } = require("./helpers/useSeperatedDir.js");
const { createSpinner } = require("nanospinner");

const spinner = createSpinner("Pasta is beign made...");

spinner.start({});

let args = yargs(process.argv.slice(2)).argv;

const { name, dir, custom, type } = args;

const convertedName = useNameConverter(name);

let currentPath = "";

const createNewDirFolder = async () => {
  let dirList = useSeperatedDir(dir);
  dirList.forEach((dir) => {
    currentPath += `${dir}/`;
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath);
    }
  });
};

const createNewFolder = async (folderName) => {
  fs.mkdirSync(folderName);
};

const createNewComponentFile = async (fileName, content) => {
  fs.writeFileSync(fileName, content);
};

const createNewComponentStyle = async (fileName, content) => {
  fs.writeFileSync(fileName, content);
};

const createNewComponent = async () => {
  const componentName = `${convertedName}.tsx`;
  const componentStyleName = `${convertedName}.Style.ts`;

  if (dir) {
    await createNewDirFolder();
    await createNewFolder(currentPath + "/" + convertedName)
      .then(() => {
        if (custom) {
          const customPasta = require("./pasta.js");
          createNewComponentFile(
            `${currentPath + "/" + convertedName}/${componentName}`,
            customPasta.customComponentContent(convertedName)
          );
          createNewComponentStyle(
            `${currentPath + "/" + convertedName}/${componentStyleName}`,
            customPasta.customComponentStyleContent
          );
        } else {
          createNewComponentFile(
            `${currentPath + "/" + convertedName}/${componentName}`,
            componentContent(convertedName)
          );
          createNewComponentStyle(
            `${currentPath + "/" + convertedName}/${componentStyleName}`,
            componentStyleContent
          );
        }
      })
      .catch(() => {
        spinner.error({
          text: "Process Error!",
          color: "red",
        });
      });
  } else {
    await createNewFolder(convertedName)
      .then(() => {
        if (custom) {
          const customPasta = require("./pasta.js");
          createNewComponentFile(
            `${convertedName}/${componentName}`,
            customPasta.customComponentContent(convertedName)
          );
          createNewComponentStyle(
            `${convertedName}/${componentStyleName}`,
            customPasta.customComponentStyleContent
          );
        } else {
          createNewComponentFile(
            `${convertedName}/${componentName}`,
            componentContent(convertedName)
          );
          createNewComponentStyle(
            `${convertedName}/${componentStyleName}`,
            componentStyleContent
          );
        }
      })
      .catch(() => {
        spinner.error({
          text: "Process Error!",
          color: "red",
        });
      });
  }

  setTimeout(() => {
    spinner.success({
      text: "Pasta is ready!",
      color: "green",
    });
  }, 1000);
};

createNewComponent();
