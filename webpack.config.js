var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`, //must have a index.jsx file in client/src
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [ 
      {
        test : /\.jsx?/, //? means the 'x' is optional
        include : SRC_DIR, //traverse the source directory and find anything that ends in jsx then 
        loader : 'babel-loader', //loads babel
        query: {
          presets: ['react', 'es2015'] //will conver jsx, and all es6 to es6
       }
      }
    ]
  }
};