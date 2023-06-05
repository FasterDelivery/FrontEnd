import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
  projectId: 'nx751f',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        resolve: {
          alias: {
            "@components": path.resolve(__dirname, "./src/app/Components")
          }
        }
      }
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
