#!/usr/bin/env node
const yargs = require("yargs");
const fs = require("fs");
const { createSpinner } = require("nanospinner");
const useNameConverter = require("./helpers/useNameConverter.js");
const { useSeperatedDir } = require("./helpers/useSeperatedDir.js");

//Pasta references
const {
  reactNativeComponentContent,
  reactNativeComponentStyleContent,
  reactNativeIndexContent,
} = require("./reference/react-native.js");
const {
  reactComponentContent,
  reactComponentStyleContent,
} = require("./reference/react.js");

//Process spinner
const spinner = createSpinner("Pasta is beign made...");
spinner.start({});

//Yargs arguments
let args = yargs(process.argv.slice(2)).argv;
const { name, dir, type } = args;

//Pasta variables
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

const createNewFile = async (fileName, content) => {
  fs.writeFileSync(fileName, content);
};

const createReactComponent = async () => {
  await createNewFolder(dir ? currentPath + convertedName : convertedName)
    .then(() => {
      createNewFile(
        `${currentPath}${convertedName}/${convertedName}.tsx`,
        reactComponentContent(convertedName)
      );
      createNewFile(
        `${currentPath}${convertedName}/${convertedName}.css`,
        reactComponentStyleContent
      );
    })
    .then(() => {
      spinner.success({
        text: "Your react flavored pasta is ready!",
        color: "green",
      });
    })
    .catch(() => {
      spinner.error({
        text: "Process Error!",
        color: "red",
      });
    });
};

const createReactNativeComponent = async () => {
  await createNewFolder(dir ? currentPath + convertedName : convertedName)
    .then(() => {
      createNewFile(
        `${currentPath}${convertedName}/${convertedName}.tsx`,
        reactNativeComponentContent(convertedName)
      );
      createNewFile(
        `${currentPath}${convertedName}/${convertedName}.Style.ts`,
        reactNativeComponentStyleContent
      );
      createNewFile(
        `${currentPath}${convertedName}/index.ts`,
        reactNativeIndexContent(convertedName)
      );
    })
    .then(() => {
      spinner.success({
        text: "Your react native flavored pasta is ready!",
        color: "green",
      });
    })
    .catch(() => {
      spinner.error({
        text: "Process Error!",
        color: "red",
      });
    });
};

const selectedPasta = (type) => {
  switch (type) {
    case "react":
      createReactComponent();
      break;
    case "react-native":
      createReactNativeComponent();
      break;
    default:
      createReactNativeComponent();
      break;
  }
};

const createNewComponent = async () => {
  if (dir) {
    await createNewDirFolder();
  }
  selectedPasta(type);
};

createNewComponent();
