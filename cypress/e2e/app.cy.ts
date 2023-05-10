/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/about')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page')
  })

  it('should show a hidden about page element on mouse over', () => {
    cy.visit('http://localhost:3000/about')

    const hiddenDiv = cy.contains('I was hidden')
    hiddenDiv.should('exist')
    hiddenDiv.should('not.be.visible')

    const hideToggleDiv = cy.contains('Hover over me')
    hideToggleDiv.trigger('mouseover')
    hiddenDiv.should('be.visible')
  })

  it('should navigate back to the home page', () => {
    cy.visit('http://localhost:3000/about')

    const backButton = cy.get('a[href*="/"]')
    backButton.contains('Go Back')
    backButton.click()

    cy.get('p').contains('Get started by editing')
  })
})

// Prevent TypeScript from reading file as legacy script
export { }
