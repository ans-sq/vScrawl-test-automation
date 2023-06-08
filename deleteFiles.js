const fs = require('fs');

const filesToDelete = [
  'Report-Result.json',
  'mochawesome-report.zip'
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