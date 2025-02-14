describe('Testai', () => {

    it('Patikrina, ar <header> elementas egzistuoja', () => {
        cy.visit('https://todolist.james.am/#/');  // Apsilanko svetainėje
        cy.get('header').should('be.visible');     // Patikrina, ar header yra matomas
    });




    it('Patikrina, ar headeryje atvaizduojamas tekstas "To Do List', () => {
        cy.visit('https://todolist.james.am/#/');
        cy.contains('.header h1', 'To Do List').should('be.visible');

    });


    it('Ar atvaizduojamas Double-click to edit a todo tekstas', () => {
        cy.visit('https://todolist.james.am/#/');
        cy.contains('footer.info p', 'Double-click to edit a todo').should('exist');
        cy.contains('footer.info p', 'Double-click to edit a todo').should('be.visible');

    });
    //gramatinė klaida, vietoje todo, puslapyje tekstas yra toodo



    it('Ar input laukelyje atvaizduojamas tekstas What needs to be done?', () => {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').should('have.attr', 'placeholder', "What need's to be done?").should('be.visible');
        // cy.get('input.new-todo[placeholder="What need\'s to be done?"]').should('exist'); galima ir taip
    });


    it('Ar pridėjus kelias užduotis, užduočių sąrašas nėra tuščias', () => {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').type('1 uzduotis{enter}');
        cy.get('input.new-todo').type('2 uzduotis{enter}');
        cy.get('input.new-todo').type('3 uzduotis{enter}');
        cy.get('.todo-list li').should('have.length.at.least', 1);
        // cy.get('.todo-list li').should('have.length', 3); galima ir taip
        // cy.get('ul.todo-list li').each(($el) => {
        //     cy.log($el)
        // })
        cy.get('.todo-list li')
            .each(($el, $list) => {
                cy.log($el)
                cy.log($list)
            })
            .then(($list) => {
                expect($list).to.have.length(3);
            });
    });







});