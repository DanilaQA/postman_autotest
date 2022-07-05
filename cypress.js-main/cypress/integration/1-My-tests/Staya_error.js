describe('Staya тестирование формы регистрации', function () {
    it('Тестирование авторизаци с неверным паролем', function () {
    cy.visit('https://staya.dog/')  
    cy.get('.header-bottom__right--link').click()
    cy.get('.auth-form > form > [type="email"]').type('testmailstaya@mail.ru')
    cy.get('.auth-form > form > [type="password"]').type('Staya2021')
    cy.get('.auth-form__submit > .s-button__content').click()
    cy.contains('Невозможно войти с предоставленными учетными данными');

        })
})