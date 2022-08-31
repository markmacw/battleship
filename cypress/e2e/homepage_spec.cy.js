describe('The Home Page', () => {
  it('Successfully loads', () => {
    cy.visit('http://localhost:8000/battleship.html')  
  })
  it('Title contains "Battleship"',() => {
    cy.get('h1').contains('Battleship')
  })
})
