const fs = require('fs');

const filesToDelete = [
  'cypress\\results\\mochawesome_001.json',
  'cypress\\results\\mochawesome.json',
  'Report-Result.json',
  'node_modules'
  // Add more files to delete if needed
];

filesToDelete.forEach((file) => {
  try {
    fs.unlinkSync(file);
    console.log(`Deleted ${file}`);
  } catch (err) {
    console.error(`Error deleting ${file}: ${err}`);
  }
});