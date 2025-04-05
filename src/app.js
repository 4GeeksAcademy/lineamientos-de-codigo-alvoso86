import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  console.log("Hello Rigo from the console!");
}
  let pronoun = ['the','your', 'our', 'his', 'she'];
  let adj = ['great', 'big', 'amazing' ,'awesome'];
  let noun = ['jogger', 'bird', 'dog', 'rabbit', 'cat'];

  for(let i = 0; i < pronoun.length; i++) {
  for(let a = 0; a < adj.length; a++) {
  for(let b = 0; b < noun.length; b++) {
  console.log(pronoun[i] + adj[a] + noun[b]+'.com'); 
      }
    }
  }

