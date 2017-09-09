/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Shubham Setia");
 //var firstName = "Shubham";
 //var age = 19;
 //console.log(firstName);
 //var awesomeThought = "I am Shubham and i am awesome";
 //console.log(awesomeThought);
 //var lastName = firstName.replace("Shubham","Setia");+
 //console.log(lastName);
 //var funThought = awesomeThought.replace("awesome","fun");
 //$("#main").append(funThought);


var formattedName = HTMLheaderName.replace("%data%","Shubham Setia");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
//$("#main").append(formattedName);
//$("#main").append(formattedRole);
$("#header").prepend(formattedRole);
//$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
