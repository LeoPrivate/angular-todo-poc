import { writeFile } from 'fs';// Configure Angular `environment.ts` file path
const dotenv = require('dotenv');

const targetPath = './src/environments/environment.ts';// Load node modules
const targetPathProd = './src/environments/environment.prod.ts';

const colors = require('colors');
require('dotenv').config();

const envConfigFile = `export const environment = {
    production: false,
    apiUrl: 'http://${process.env.URL}:${process.env.PORT}'
};
`;

const envConfigFileProd = `export const environment = {
    production: true,
    apiUrl: 'http://${process.env.URL}:${process.env.PORT}'
 };
 `;


console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));

writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});

writeFile(targetPathProd, envConfigFileProd, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
 });