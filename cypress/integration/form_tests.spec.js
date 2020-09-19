//here lie the tests

describe("pizza app", () => {
  beforeEach("going to baseurl", () => {
    cy.visit("http://localhost:3000/orderform");
  });

  it("sanity check to make sure tests work", () => {
    // "expect" is an assertion
    // there can be several assertions per test
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // strict ===
    expect({}).not.to.equal({}); // strict ===
    expect({}).to.eql({}); // not strict
  });
  it("setting up", () => {
    cy.get("input[name=name]").type("pancho");
    cy.get("input[name=phone]").type("8089892904");
    cy.get("#size").select("medium");
    cy.get("#pep").check();
    cy.get("#ham").check();
    cy.get("#sausage").check();
    cy.get("button[id='button']").click();
  });
  // const name = () => cy.get("input[name=name]");
  // const pep = () => cy.get("[name=pepperoni]");
  // const ham = () => cy.get("[]");
  // const sausage = () => cy.get("[]");
  // const order = () =>

  // it("check can type", () => {
  //   name()
  //     .should("have.value", "")
  //     .type("pancho")
  //     .should("have.value", "pancho");
  //   pep().check();
  //   ham().check();
  //   sausage().check();
  //   order().click();
  // });
});
