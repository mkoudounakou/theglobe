const fs = require('fs');
const path = require('path');
const prevActions = require('../content/actions.json');

// set actions file
module.exports = function setActions(pushRequest){
  const nextActions = { ...prevActions, ...pushRequest };
  console.log("nextActions = ");
  console.log(nextActions);
  const filePath = path.join(__dirname, '../content/actions.json');
  fs.writeFileSync( filePath, JSON.stringify(nextActions));
}
