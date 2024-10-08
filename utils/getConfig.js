const fs = require('fs');
const path = require('path');

// get config file
module.exports = function setConfig(){
  const filePath = path.join(__dirname, '../config.json');
  let config = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(config);
}
