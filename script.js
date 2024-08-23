it("Checking Deletion", () => {
  cy.visit(baseUrl + "/main.html");
  cy.get(".code-container").find("input.code").eq(5).type("{backspace}");
  cy.get("#code-5").should("be.focused");
  cy.get(".code").eq(4).type("{backspace}");
  cy.get("#code-4").should("be.focused");
  cy.get(".code").eq(3).type("{backspace}");
  cy.get("#code-3").should("be.focused");
  cy.get(".code").eq(2).type("{backspace}");
  cy.get("#code-2").should("be.focused");
  cy.get(".code").eq(1).type("{backspace}");
  cy.get("#code-1").should("be.focused");
  cy.get(".code").eq(0).type("{backspace}");
});
