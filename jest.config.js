module.exports = {
    modulePathIgnorePatterns: ['FitCzar-fitness-App/Home/', 'FitCzar-fitness-App/Home/HomeNested/'],
    setupFilesAfterEnv: ['./setupTests.js'],
    maxConcurrency: 1, // Run tests one at a time
  };
  