import { createToDo } from "./create-to-do";
import { initialdomManip } from "./initial-dom-manip";
import { blankProjectLoad } from "./blank-project-load";

// Call blankProjectLoad on first land
blankProjectLoad()

// Call Dom manipulation module to control UI
initialdomManip();

// TODO: click event module HERE for todo and project creations

// Call create-to-to.js module fuile and apply some objects/properties
const myToDo = createToDo("Grocery", "Go get groceries", "6/15/2022", "Low", "Meat");
const myToDo2 = createToDo("Grocery2", "Go get groceries2", "6/15/202222", "Low2", "Meat2");
console.log("Show me properties on myToDo frome index.js....", myToDo);
console.log("Show me properties on myToDo2 frome index.js....", myToDo2);


