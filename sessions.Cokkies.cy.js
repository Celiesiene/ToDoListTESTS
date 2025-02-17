//svetaine psrisijungimas ir registracija
//1. testuoti pacia registracija
//2.pati prisijungima
//3. integracinis testas:ar uzsiregistravus galima prisijungti ?
//4. musu rasomas testas tures buti prisijunges prie svetaines, atsiminti kad jis yra prisijunges
//5. kaip tas pats funkcionalumas atvaizduojamas prisijungus neprisijungus vartotojui

//prisijungimo atsiminimas (arba sesijos issaugojimas)
//sesija - serverio atminties vieta, kur svetaine gali issaugoti duomenis
//cookie - vieta vartotojo kompiuteryje, kur svetaine gali issaugoti infomacija


//kokia info saugau sesijoje? jautrus duomenys. slaptazodis, prisijungimo tokenas, asmens informacija..
//kokia info saugau cookie? viska isskyrus jautria informacija
//abiem galima nustatyti laika kiek jie egzistuoja


//sukurti/gauti sausainiuka


//ar sutinkate su slapukais popeup testavimas?
it('ar svetaine leidzia sukurti sausainiuka', () =>{
    cy.visit('https://todolist.james.am/#/');
    cy.setCookie('test', 'test') 
})

//ar informacija issisaugo po svetaines persikrovimo?
//1. uzeiti i svetaine
//2. sukurti informacini sausainiuka(json masyvas tekstiniame formate, kazkoks skaicius, tekstas ir t.t.)
//3. sukurti kelis sausainiukus
//3.1 sausainiuku informacija yra surasoma i div arba i ul ir tt.
//4. perkrauti svetaine
//5. patikrinti ar sausainiukai isliko po perkrovimo

it('ar informacija issisaugojo po svetaines perkrovimo?', () => {
    cy.visit('https://todolist.james.am/#/');
    cy.setCookie('test', '1');
    cy.setCookie('test1', 'test1');
    cy.setCookie('test2', '{user: bebras}')
    cy.reload();
    //cy.visit('https://todolist.james.am/#/');
    //po reload turim gauti cookie ir patikrinti ar jo vardas egzistuoja
    cy.getCookie('test').should('exist');
    cy.getCookie('test1').should('exist');
    cy.getCookie('test2').should('exist');

    //patikriname cookie reiksmes

    cy.getCookie('test').should('have.property', 'value', '1');
    cy.getCookie('test1').should('have.property', 'value', 'test1');
    cy.getCookie('test2').should('have.property', 'value', '{user: bebras}');
    cy.clearCookies()
    cy.getCookie('test').should('be.null');
    cy.getCookie('test1').should('be.null');
    cy.getCookie('test2').should('be.null');

});

it('uzeina i svetaine ToDoList', () =>{
    cy.visit('https://todolist.james.am/#/');
    //sausainiukas cypress aplinkoje egzistuoja tik tam testui
    cy.getCookie('test').should('exist');
    cy.getCookie('test1').should('exist');
    cy.getCookie('test2').should('exist');
});
