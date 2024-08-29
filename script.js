it("Checking Forward Typing", () => {
    cy.visit(baseUrl + "/main.html");

    // Type into the first input
    cy.get(".code-container").find("input.code").eq(0).focus().type('5');

    // Check that the next input is focused
    cy.get(".code").eq(1).should("have.attr", "id", "code-2");

    // Type into the second input
    cy.get(".code").eq(1).focus().type('1');

    // Check that the next input is focused
    cy.get(".code").eq(2).should("have.attr", "id", "code-3");

    // Type into the third input
    cy.get(".code").eq(2).focus().type('7');

    // Check that the next input is focused
    cy.get(".code").eq(3).should("have.attr", "id", "code-4");

    // Type into the fourth input
    cy.get(".code").eq(3).focus().type('2');

    // Check that the next input is focused
    cy.get(".code").eq(4).should("have.attr", "id", "code-5");

    // Type into the fifth input
    cy.get(".code").eq(4).focus().type('9');

    // Check that the last input is focused
    cy.get(".code").eq(5).should("have.attr", "id", "code-6");

    // Type into the last input
    cy.get(".code").eq(5).focus().type('6');
});
