//Global Scope
var firstFunction = function(){
	//firstFunction Scope
	var secondFunction = function () {
		//secondFunction Scope
	}
}


function doSomething(){
	var num = 1;
	if(num >= 0){
		let secondNum = 2;
		console.log('this is num',num)
		console.log('this is secondNum',secondNum)
	}
	console.log('this is num outside the if', num)
	console.log('this is secondNum outside the if',secondNum)
}

// doSomething();

function doSomethingElse(){
	const num = 1;
	num = 2;
	consoel.log(num)
}
// doSomethingElse()

const user = {
	name:'Chicken',
	age:15
}

user.name = 'Duck'

console.log(user)