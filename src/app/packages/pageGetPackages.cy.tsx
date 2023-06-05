import React from "react";
import GetPackages from "./page";

describe("<GetPackages />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GetPackages />);
  });
});
