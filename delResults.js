const fs = require('fs-extra');

const directoryPath = 'mochawesome-report';

fs.remove(directoryPath, (err) => {
  if (err) {
    console.error('Error deleting directory:', err);
  } else {
    console.log('Directory deleted successfully.');
  }
});
