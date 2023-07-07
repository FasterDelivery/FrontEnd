describe("rendering all pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/addpackages");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/affidavit");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/courierdetails");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/delivery");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/deliverypersons");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/login");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/manageorders");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/managepackages");
    // cy.get(".ml-4").contains("Hay");
    // cy.get(".mx-4 > .font-bold").contains("Paquetes");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/packages");
  });
  // it("passes", () => {
  //   cy.visit("http://localhost:3000/recovery");
  // });
  it("passes", () => {
    cy.visit("http://localhost:3000/register");
  });
});

export {};
