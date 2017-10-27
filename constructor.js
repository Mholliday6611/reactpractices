//Constructor Methods

function Person(first, last, age, eye){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
	this.cool = function(){return this.firstName +" is soooo coool"}
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 50, "blue")


// myFather.name = function(){
// 	console.log(this.firstName + " "+this.lastName )
// }
// myFather.name()

// console.log(myMother,myFather)

// var cats = "Cats"
// var dogs = "Dogs"

// function testz(){
// 	this.first = cats;
// 	this.second =dogs;
// }
//  var buts = new testz()
//  console.log(buts)
//  
Person.prototype.name= function() {
	return this.firstName + " " + this.lastName
}

console.log(myFather.name(),myMother.name())
console.log(myFather.cool())


// function callMe(string, alertMessage) {
// 	return alertMessage(string);
// }

// callMe('Kirk', function(string){alert(string + ' Lazarus')})
