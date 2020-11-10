import { LightningElement, track } from 'lwc';
import addTodo from '@salesforce/apex/ToDoController.addTodo';
import getCurrentTodos from '@salesforce/apex/ToDoController.getCurrentTodos';
getCurrentTodos
export default class ToDoManager extends LightningElement {
// make properties reactive for our HTML file >>>>> UPDATE I learned all private properties are reactive and these don't really need @track
    @ track time = "10:10 AM";
    @ track greeting = "Good Evening";
    @ track todos = [];
// fires when inserted into dom, initiating getTime and fetchTodos
    connectedCallback() {
        this.getTime();
        this.fetchTodos();
        //this.populateTodos(); test on server side only
        setInterval( () => {
            this.getTime();
        }, 1000 * 60);
      }
// input box
    addTodoHandler(){
        const inputBox = this.template.querySelector("lightning-input"); // assign our html input, save values
        const todo = {
            todoName: inputBox.value,
            done: false
        };
// stringify todo, pass into addTodo method as parameter
        addTodo({payload : JSON.stringify(todo)})
            .then(response => { // promise complete 
            this.fetchTodos(); // reload list after insert
        })
        .catch(error => {
            console.error('Error inserting todo item '+ error);
        });
        //this.todos.push(todo);
        inputBox.value = "";
    }

// use apex method to display all todos in DB
    fetchTodos(){
        getCurrentTodos().then(result => { 
            if(result){  // is true
            console.log("retrieved todos from server ", result.length);
            this.todos = result;
            }
        }).catch(error => {
                console.error('Error fetching todos '+ error);
        });
    }
// chained from child, updates todos when button is clicked
    updateHandler(){
        this.fetchTodos();
    }
    deleteHandler(){
        this.fetchTodos();
    }
    get upcomingTasks(){   // check to see if todos exists, if so return 
        return this.todos && this.todos.length 
        ? this.todos.filter(todo => !todo.done) 
        : [];
    }
    get completedTasks(){
        return this.todos && this.todos.length 
        ? this.todos.filter(todo => todo.done) 
        : [];
    }

///////////////////  TIME & GREETING ///////////////////////////
    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
        this.time = `${this.getHour(hour)} : ${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;   //interpolate our expressions creating time string
        this.setGreeting(hour);
    }
    getHour(hour){
        return hour == 0 ? 12 : hour > 12 ? (hour-12) : hour; // returns 12 digit format for hour
    }
    getDoubleDigit(digit){
        return digit >= 10 ? digit : "0" + digit; // returns minutes
    }
    getMidDay(hour){
        return hour >= 12 ? "PM" : "AM"; //returns PM or AM
    }
    setGreeting(hour){ // set our greeting depending on hour
        if (hour < 12){
            this.greeting = "good morning";
        } else if(hour >= 12 && hour < 17) {
            this.greeting = "good afternoon";
        } else { 
            this.greeting = "good evening";
        }
    }
}