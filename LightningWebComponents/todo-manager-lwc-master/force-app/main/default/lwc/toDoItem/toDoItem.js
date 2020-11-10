import deleteTodo from "@salesforce/apex/ToDoController.deleteTodo";
import updateTodo from "@salesforce/apex/ToDoController.updateTodo";
import { LightningElement, api } from "lwc";

export default class ToDoItem extends LightningElement {
  //public properties
  @api todoId;
  @api todoName;
  @api done = false;

  updateHandler(){
    const todo = {
      todoId: this.todoId,
      todoName: this.todoName,
      done: !this.done
    };
    updateTodo({ payload: JSON.stringify(todo) })
    .then(result => {
        console.log("item updated successfully");
        const updateEvent = new CustomEvent('update') // create an event to call to parent component to update. , {detail:{id:name}})  (plain JSON object) can be used to pass from payload to our event
        this.dispatchEvent(updateEvent);
    })
    .catch(error => {
      console.log("error updating record", error)
    });
  }

// delete
  deleteHandler(){
    deleteTodo({ todoId: this.todoId })
    .then(result => {
      console.log("item deleted");
      const deleteEvent = new CustomEvent('delete'); // send another event to our parent to listen for
      this.dispatchEvent(deleteEvent);
    })
    .catch(error => {
      console.log("error deleting record", error)
    });
  }

  get containerClass(){
    return this.done ? "todo completed" : "todo upcoming";
  }

// change display of first button depending if task is complete or not
  get iconName(){
    return this.done ? "utility:check" : "utility:add"; 
  }
}