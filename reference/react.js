const reactComponentContent = (name) => `
import React from 'react';
import './${name}.css';

const ${name} = () => {
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
