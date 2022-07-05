describe('Google', function () {
    it('Проверка наличия безопасного поиска в выдаче картинок', function () {
    cy.visit('https://www.google.ru/')
    cy.get('.gLFyf').type('Котики').type('{enter}')
    cy.get('.MUFPAc > :nth-child(2) > a').click()
    cy.contains('Безопасный поиск'); 
        })
})