'use strict';

const fs = require('fs');
const path = require('path');


const db = {};
const modelsDir = path.resolve(__dirname, '../../models');
const basename = path.basename(__filename);
fs.readdirSync(modelsDir)
  .filter(file => (
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js'
  ))
  .forEach(file => {
    const modelDef = require(path.join(modelsDir, file));
    db[modelDef.name] = modelDef;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
