/*
class Player {
    constructor(name, trait) {
        this.name = name;
        this.trait = trait;
    }

    describe() {
        return `${this.name} plays ${this.trait}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only ass an instance of Player, Arguement is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}
//important
class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!'); //if 0 selected
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
        0) back
        1) create player
        2) delete player
        -----------------------
        ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamstring);
    }
    createTeam() {
        let name = prompt('Enter name for new team:')
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ') ' + this.selectedTeam.players[i].name + ' - ' + this.selectedTeam.players[i].trait + '\n';
            }

            let selection = this.showTeamMenuOptions(description); //submenu
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }

    createPlayer() {
        let name = prompt('Enter name for new player:');
        let position = prompt('Enter position for new player:');
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer(){
        let index = prompt('Enter the index of the player you wish to delete:');
        if(index > -1 && index < this.selectedTeam.players.length){
            this.selectedTeam.players.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
*/

class Breed {
    constructor(name, trait) {
        this.name = name;
        this.trait = trait;
    }

    describe() {
        return `${this.name} is ${this.trait}.`;
    }
}

class Animal {
    constructor(name) {
        this.name = name;
        this.breeds = [];
    }

    addBreed(breed) {
        if (breed instanceof Breed) {
            this.breeds.push(breed);
        } else {
            throw new Error(`You can only pass an instance of Breed, Arguement is not a breed: ${breed}`);
        }
    }

    describe() {
        return `${this.name} has ${this.breeds.length} breeds.`;
    }
}
//important
class Menu {
    constructor() {
        this.animals = [];
        this.selectedAnimal = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createAnimal();
                    break;
                case '2':
                    this.viewAnimal();
                    break;
                case '3':
                    this.deleteAnimal();
                    break;
                case '4':
                    this.displayAnimals();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!'); //if 0 selected
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new animal
        2) view animal
        3) delete animal
        4) display all animals
        `);
    }

    showAnimalMenuOptions(animalInfo) {
        return prompt(`
        0) back
        1) create breed
        2) delete breed
        -----------------------
        ${animalInfo}
        `);
    }

    displayAnimals() {
        let animalString = '';
        for (let i = 0; i < this.animals.length; i++) {
            animalString += i + ') ' + this.animals[i].name + '\n';
        }
        alert(animalString);
    }
    createAnimal() {
        let name = prompt('Enter name for new animal:')
        this.animals.push(new Animal(name));
    }

    viewAnimal() {
        let index = prompt('Enter the index of the animal you wish to view:');
        if (index > -1 && index < this.animals.length) {
            this.selectedAnimal = this.animals[index];
            let description = 'Animal Name: ' + this.selectedAnimal.name + '\n';

            for (let i = 0; i < this.selectedAnimal.breeds.length; i++) {
                description += i + ') ' + this.selectedAnimal.breeds[i].name + ' - ' + this.selectedAnimal.breeds[i].trait + '\n';
            }

            let selection = this.showAnimalMenuOptions(description); //submenu
            switch (selection) {
                case '1':
                    this.createBreed();
                    break;
                case '2':
                    this.deleteBreed();
            }
        }
    }
    deleteAnimal() {
        let index = prompt('Remove Animal:')
        if (index > -1 && index < this.animals.length) {
        this.animals.splice(index, 1);
    }
}

createBreed() {
    let name = prompt('Enter name for new breed:');
    let trait = prompt('Enter trait for new breed:');
    this.selectedAnimal.breeds.push(new Breed(name, trait));
}

deleteBreed(){
    let index = prompt('Enter the index of the breed you wish to delete:');
    if(index > -1 && index < this.selectedAnimal.breeds.length){
        this.selectedAnimal.breeds.splice(index, 1);
    }
}
}

let menu = new Menu();
menu.start();
//need to call describe function

