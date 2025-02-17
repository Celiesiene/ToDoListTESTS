# ToDoListTESTS
# To Do List - Cypress Testai

## Aprašymas
Šis projektas yra automatizuotų testų rinkinys, parašytas naudojant [Cypress](https://www.cypress.io/) testavimo įrankį. Testai skirti patikrinti svetainės [To Do List](https://todolist.james.am/#/) pagrindines funkcijas.

## Reikalavimai
- Node.js (versija 12 ar naujesnė)
- NPM arba Yarn
- Cypress

## Diegimas
1. Klonuokite šią repozitoriją:
   ```
  https://github.com/Celiesiene/ToDoListTESTS/tree/main
   ```
2. Įdiekite priklausomybes:
   ```sh
   npm install
   ```

## Testų paleidimas
Testams paleisti naudokite vieną iš šių komandų:

- Paleisti Cypress GUI režimu:
  ```sh
  npx cypress open
  ```
  Pasirinkite testų failą ir paleiskite testus.

- Paleisti testus terminale (headless režimu):
  ```sh
  npx cypress run
  ```

## Testų scenarijai
### 1. Tikrina, ar `<header>` elementas egzistuoja
- Svetainė yra aplankoma.
- Patikrinama, ar `header` elementas yra matomas.

### 2. Tikrina, ar headeryje atvaizduojamas tekstas "To Do List"
- Svetainė yra aplankoma.
- Patikrinama, ar `h1` elemente esantis tekstas yra "To Do List".

### 3. Tikrina, ar puslapio footer`yje yra tekstas "Double-click to edit a todo"
- Svetainė yra aplankoma.
- Patikrinama, ar `footer.info p` elemente yra atitinkamas tekstas.
- **Pastaba:** Dabartinėje svetainės versijoje yra klaida – vietoje "todo" parašyta "toodo".

### 4. Tikrina, ar input laukelyje yra tekstas "What needs to be done?"
- Svetainė yra aplankoma.
- Tikrinama, ar `input.new-todo` laukelis turi placeholder tekstą "What need's to be done?".

### 5. Tikrina, ar pridėjus kelias užduotis, sąrašas nėra tuščias
- Svetainė yra aplankoma.
- Pridedamos trys užduotys į sąrašą.
- Tikrinama, ar užduočių sąrašas nėra tuščias ir jame yra bent trys įrašai.

## Pastabos ir klaidos
- Tekstas "Double-click to edit a todo" puslapyje šiuo metu atvaizduojamas su klaida („toodo“).
- Placeholder tekstas „What need's to be done?“ turi nereikalingą apostrofą.



