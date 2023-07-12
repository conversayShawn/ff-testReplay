/// <reference types="cypress" />

describe("Status code test", () => {
  it("should return a 200 status code", () => {
    cy.request({
      method: "GET",
      url: "https://example.cypress.io/todo",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

    // This test should fail if a 200 response status is returned
  it("Failure: should fail if 200 status code", () => {
    cy.request({
      method: "GET",
      url: "https://example.cypress.io/todo",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.not.equal(200);
    });
  });

  it("should return a 200 status code", () => {
    cy.request({
      method: "GET",
      url: "https://example.cypress.io/todo",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("should return a 200 status code", () => {
    cy.request({
      method: "GET",
      url: "https://example.cypress.io/todo",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("should return a 200 status code", () => {
    cy.request({
      method: "GET",
      url: "https://example.cypress.io/todo",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("should return a 200 status code", () => {
    cy.request({
      method: "GET",
      url: "https://example.cypress.io/todo",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
