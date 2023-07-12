/// <reference types="cypress" />

describe('Status code test', () => {
  it('should return a 200 status code', () => {
    cy.request({
      method: 'GET',
      url: 'https://example.cypress.io/todo', // Replace with your live site URL
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
  it('should fail a 200 status code', () => {
    cy.request({
      method: 'GET',
      url: 'https://example.cypress.io/todo', // Replace with your live site URL
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.not.equal(200);
    });
  });
  it('should return a 200 status code', () => {
    cy.request({
      method: 'GET',
      url: 'https://example.cypress.io/todo', // Replace with your live site URL
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });it('should return a 200 status code', () => {
    cy.request({
      method: 'GET',
      url: 'https://example.cypress.io/todo', // Replace with your live site URL
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });it('should return a 200 status code', () => {
    cy.request({
      method: 'GET',
      url: 'https://example.cypress.io/todo', // Replace with your live site URL
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });it('should return a 200 status code', () => {
    cy.request({
      method: 'GET',
      url: 'https://example.cypress.io/todo', // Replace with your live site URL
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

