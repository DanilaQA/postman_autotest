describe('Staya тестирование формы регистрации', function () {
    it('Тестирование авторизаци с валидными данными', function () {
    cy.visit('https://staya.dog/')  
    cy.get('.header-bottom__right--link').click()
    cy.get('.auth-form > form > [type="email"]').type('testmailstaya@mail.ru')
    cy.get('.auth-form > form > [type="password"]').type('Staya2022')
    cy.get('.auth-form__submit > .s-button__content').click()
    cy.contains('Мои заказы');

        })
})