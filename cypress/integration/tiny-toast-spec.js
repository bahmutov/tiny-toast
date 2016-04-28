/* global describe, it, beforeEach, cy, expect */
describe('tiny toast', () => {
  it('works', () => {
    expect(true).to.be.true
  })

  it('opens dist page as file', () => {
    cy.visit('dist/index.html')
  })

  it('opens simple test page', () => {
    cy.visit('cypress/integration/page.html')
  })

  describe('shows and hides fluent API', () => {
    beforeEach(() => {
      cy.visit('cypress/integration/page.html')
    })

    it('has tinyToast api', () => {
      cy
        .window().should('have.property', 'tinyToast')
        .window().then((w) => w.tinyToast)
        .then((tinyToast) => {
          expect(tinyToast).to.be.a('object')
          expect(tinyToast.show).to.be.a('function')
          expect(tinyToast.hide).to.be.a('function')
        })
    })

    it('does not exist by default', () => {
      cy.get('h3').should('not.exist')
    })

    it('can show and hide message', () => {
      cy
        .window().then((w) => w.tinyToast)
        .then((tinyToast) => {
          tinyToast.show('test message')
        })
        .contains('h3', 'test message').should('be.visible')
        .window().then((w) => w.tinyToast)
        .then((tinyToast) => {
          tinyToast.hide()
        })
        .contains('h3', 'test message').should('not.be.visible')
    })

    it('can show and hide message with fluent api', () => {
      cy
        .window().then((w) => w.tinyToast)
        .then((tinyToast) => {
          tinyToast.show('test message').hide(2000)
        })
        .contains('h3', 'test message').should('be.visible')
        .get('h3').should('not.exist') // will automatically wait up to 10 seconds
    })
  })
})
