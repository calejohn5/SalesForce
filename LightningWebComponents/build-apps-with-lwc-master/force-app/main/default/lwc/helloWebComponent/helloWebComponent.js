import { LightningElement } from 'lwc';
export default class HelloWebComponent extends LightningElement {
// define currentdate property and data bound greeting 
    greeting = 'Trailblazer';
    currentDate = new Date().toDateString();
// getter function - expression to use logic in function to display values
    get capitalizedGreeting() {
	    return `Hello ${this.greeting.toUpperCase()}!`;
}
// change greeting to their input (Name), data bound so it refreshes automatically
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
}