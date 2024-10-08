const fs = require('fs');
const path = require('path');

// get actions file
module.exports = function setActions(){
  const filePath = path.join(__dirname, '../content/actions.json');
  let actions = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(actions);
}
