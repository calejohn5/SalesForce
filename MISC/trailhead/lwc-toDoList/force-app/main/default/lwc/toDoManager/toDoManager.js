import addTodo from '@salesforce/apex/ToDoController.addTodo';
import { LightningElement, track } from 'lwc';
export default class ToDoManager extends LightningElement {
// make properties reactive for our HTML file >>>>> UPDATE I learned all private properties are reactive and these don't really need @track
    @ track time = "10:10 AM";
    @ track greeting = "Good Evening";
    @ track todos = [];
// fires when inserted into dom, initiating our getTime function, update every second
    connectedCallback() {
        this.getTime();
        setInterval( () => {
            this.getTime();
        }, 1000 * 60);
      }
    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
//interpolate our expressions creating time string
        this.time = `${this.getHour(hour)} : ${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;
        this.setGreeting(hour);
    }
// returns 12 digit format for hour
    getHour(hour){
        return hour == 0 ? 12 : hour > 12 ? (hour-12) : hour;
    }
// returns minutes
    getDoubleDigit(digit){
        return digit >= 10 ? digit : "0" + digit;
    }
//returns PM or AM
    getMidDay(hour){
        return hour >= 12 ? "PM" : "AM";
    }
// set our greeting depending on hour
    setGreeting(hour){
        if (hour < 12){
            this.greeting = "good morning";
        } else if(hour >= 12 && hour < 17) {
            this.greeting = "good afternoon";
        } else { 
            this.greeting = "good evening";
        }
    }
// input box -- add to array
    addTodoHandler(){
        const inputBox = this.template.querySelector("lightning-input");
        
        const todo = {
            todoName:inputBox.value,
            done: false
        };
// stringify todo, passes into apex method as payload
// return promise in first then block...
        addTodo({payload : JSON.stringify(todo)}).then(response => {
            console.log("item inserted successfully");
        }).catch(error => {
            console.error('Error inserting todo item '+ error);
        });
        //this.todos.push(todo);
        inputBox.value = "";
    }
// check to see if todos exists, if so return 
    get upcomingTasks(){
        return this.todos && this.todos.length 
        ? this.todos.filter(todo => !todo.done) 
        : [];
    }
    get completedTasks(){
        return this.todos && this.todos.length 
        ? this.todos.filter(todo => todo.done) 
        : [];
    }
}