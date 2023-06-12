describe("rendering all pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("a").click();
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/home");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/GestionarPedidos");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/declaracionjurada");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/packages");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/repartidores");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/addpackages");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/courier_details");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/gestionarpaquetes");
    cy.get(".ml-4").contains("Hay");
    cy.get(".mx-4 > .font-bold").contains("Paquetes");
  });
});


export {}