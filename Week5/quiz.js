// create something that helps organize events better.

// class Event {
//   constructor(title, date) {
//     this.title = title; //string
//     this.date = date; //string
//   }
// }
//  create a class named EventOrganizer that 
//  contains a property called events (an array of Events) 
//  two methods: addNewEvent, and removeEvent.

// addNewEvent should take an event and add it to the events array ONLY if an event with the same title doesn't exist already.

// removeEvent should take a string representing the event title and remove the event with the matching title



class Event {
  constructor(title, date) {
    this.title = title; //string
    this.date = date; //string
  }
  describe() {
    return `${this.title} is on ${this.date}.`;
}
}

class EventOrganier {
    constructor(events) {
        this.events = [];
    }
    addNewEvent() {
        let event = new Event();
        if (event instanceof Event) {
            this.events.push(event);
        } else {
            throw new Error(`You can only pass an instance of Event, Arguement is not an event: ${event}`);
        }
    }

        removeEvent() {
        let index = prompt('Remove Event:')
        if (index > -1 && index < this.events.length) {
        this.events.splice(index, 1);
    }
}

    describe() {
        return `${this.title} has ${this.events.length} events.`;
    }
}


// class Menu {
//     constructor() {
//         this.events = [];
//         this.selectedEventOrganizer = null;
//     }

//     start() {
//         let selection = this.showMainMenuOptions();
//         while (selection != 0) {
//             switch (selection) {
//                 case '1':
//                     this.addNewEvent();
//                     break;
//                 case '2':
//                     this.removeEvent();
//                     break;
//                 default:
//                     selection = 0;
//             }
//             selection = this.showMainMenuOptions();
//         }
//         alert('Goodbye!'); //if 0 selected
//     }

//     showMainMenuOptions() {
//         return prompt(`
//         0) exit
//         1) add new event
//         2) remove event
//         `);
//     }

//     addNewEvent() {
//         let title = prompt('Enter title for new event:')
//         // this.events.push(new Event(events));
//         let date = prompt('Enter date for new event');
//         this.selectedEventOrganizer.events.push(new Event(title, date));
//     }

//     removeEvent() {
//         let index = prompt('Remove Event:')
//         if (index > -1 && index < this.events.length) {
//         this.events.splice(index, 1);
//     }
// }
// }

// let menu = new Menu();
// menu.start();

let event1 = new Event('party', '10/20/21');
let event2 = new Event('wedding', '9/17/22');
let event3 = new Event('christmas', '12/25/21');
console.log(event1);
console.log(JSON.stringify(event1));
console.dir(event1);
console.table(event1);
