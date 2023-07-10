const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  projectId:"yrin2w",
  retries: {
    openMode: 0,
    runMode: 2
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("after:spec", (spec, results) => {
        // if (Cypress.isBrowser('firefox')) {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === "failed")
          );
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video);
          }
        }
      });
    },
  },
});
