// ES6 Modules in Node.js
// Making a server
// const http = require('node:http'); // CommonJS module syntax
/*
import http from "node:http"; // ES6 module syntax 
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // Set content type to HTML
  res.end('<h1>HELLO BLACK MAN i like you</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
/*
import { a, b, c, d, e } from './mymodule.js';
console.log(a, b, c, d, e);

// import defaultFunction from './mymodule.js'; // exports set as default can be imported under any name
// defaultFunction();

import muneebsobject from "./mymodule.js";
console.log(muneebsobject.x);
console.log(muneebsobject);

// Using wildcard to import all named exports
import * as mymodule from './mymodule.js';
console.log(mymodule.a);
console.log(mymodule.b);
*/

//COMMONJS MODULE SYNTAX (you have to use .cjs extension or set "type": "commonjs" in package.json which is the default type)

const a = require('./commonjs.js')
console.log(a, __dirname, __filename)

//this is where the weird random functions come from in commonjs, whatever code you write in commonjs.js it gets wrapped in this function by nodejs
(function(exports,module, require, __filename, __dirname) {
    // Module code actually lives in here
});

