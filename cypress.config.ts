import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha",
      reportFilename: "[status]-[name]-report",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      timestamp: "yyyy-mm-dd_HH-MM-ss",
      inlineAssets: true,
      saveJson: true,
      quiet: true,
      video: true,
      videoLink: true,
      reportTitle: "Cypress Test Report",
      reportPageTitle: "Cypress Test Results",
    },
    env: {},
  },
});
