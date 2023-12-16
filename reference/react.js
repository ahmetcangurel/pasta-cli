const reactComponentContent = (name) => `
import React, { FC } from "react";
import './${name}.css';

type ${name}Props = {};

const ${name}: FC<${name}Props> = ({}) =>  {
    return (
        <div>
            <p>${name}</p>
        </div>
    );
}

export default ${name};
`;

const reactComponentStyleContent = ``;

module.exports = {
  reactComponentContent,
  reactComponentStyleContent,
};
