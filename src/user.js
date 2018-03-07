import { capitalize, pluralize } from "./helpers";

function greetUser(name) {
  console.log(`Hello ${capitalize(pluralize(name))}`);
}

greetUser("anonymous");
