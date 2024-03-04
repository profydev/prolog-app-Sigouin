import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusNames = ["Critical", "Warning", "Stable"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(statusNames[index]);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});

describe("Loading Indicator Test", () => {
  it("Displays loading indicator during data fetching", () => {
    cy.intercept("GET", "https://prolog-api.profy.dev/project").as(
      "getProjects",
    );
    cy.visit("http://localhost:3000/dashboard");
    cy.get('[data-testid="loading-indicator"]').should("be.visible");
    cy.wait("@getProjects").then(() => {
      cy.get('[data-testid="loading-indicator"]').should("not.exist");
    });
  });
});

describe("Error Screen Test", () => {
  it("shows an error message", () => {
    // setup request mock
    cy.intercept(
      { url: "https://prolog-api.profy.dev/project", times: 4 },
      {
        statusCode: 500,
      },
    );

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // check that the error message is shown
    cy.get("[data-testid='projects-error-message']", { timeout: 15000 })
      .should("be.visible")
      // click retry button
      .find("button")
      .click();

    cy.get("[data-testid='project-list']").should("be.visible");
  });
});
