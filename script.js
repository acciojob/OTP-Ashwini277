it("Checking Forward Typing", () => {
    cy.visit(baseUrl + "/main.html");

    // Type into the first input and verify that it is focused
    cy.get(".code-container").find("input.code").eq(0).type('5');
    cy.get(".code").eq(1).should("have.attr", "id", "code-2");
    cy.get(".code").eq(1).focus().type('1');
    cy.get(".code").eq(2).should("have.attr", "id", "code-3");
    cy.get(".code").eq(2).focus().type('7');
    cy.get(".code").eq(3).should("have.attr", "id", "code-4");
    cy.get(".code").eq(3).focus().type('2');
    cy.get(".code").eq(4).should("have.attr", "id", "code-5");
    cy.get(".code").eq(4).focus().type('9');
    cy.get(".code").eq(5).should("have.attr", "id", "code-6");
    cy.get(".code").eq(5).focus().type('6');
});
