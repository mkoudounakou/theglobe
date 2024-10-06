const fs = require('fs');
const path = require('path');
const prevConfig = require('../config.json');

// set config file
module.exports = function setConfig(pushRequest){
  const nextConfig = { ...prevConfig, ...pushRequest };
  const filePath = path.join(__dirname, '../config.js');
  fs.writeFileSync( filePath, nextConfig);
}
