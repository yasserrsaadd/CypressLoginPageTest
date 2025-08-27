describe('Login page test', () => {
  // testing login with valid credentials
  beforeEach(() => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')  
    })

  it('should login successfully with valid credentials', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.url().should('contain', 'https://practicetestautomation.com/logged-in-successfully/')
    cy.contains('Logged In Successfully').should('be.visible')
    cy.screenshot("LoginSuccess")
  })

  //testing Logout functionality
  it("should logout successfully", () => {
  cy.get('#username').type('student')
  cy.get('#password').type('Password123')
  cy.get('#submit').click()

  cy.get('.wp-block-button__link').click()
  cy.url().should('contain', 'https://practicetestautomation.com/')
  cy.screenshot("LogoutSuccess")
})



  // testing login with invalid Username
  it('should display error message with invalid credentials', () => { 
    cy.get('#username').type('incorrectUser')
    cy.get('#password').type('Password123 ')
    cy.get('#submit').click()
    cy.get('#error').should('be.visible').and('contain', 'Your username is invalid!')
    cy.screenshot("InvalidUsernameError")
  })

  /// testing login with invalid Password
  it('should display error message with invalid password', () => { 
    cy.get('#username').type('student')
    cy.get('#password').type('incorrectPassword')
    cy.get('#submit').click()
    cy.get('#error').should('be.visible').and('contain', 'Your password is invalid!')
    cy.screenshot("InvalidPasswordError")
  })

  // testing login with empty fields
  it('should display error message when fields are empty', () => { 
    cy.get('#submit').click()
    cy.get('#error').should('be.visible').and('contain', 'Your username is invalid!')
    cy.screenshot("EmptyFieldsError")
  })

  
})