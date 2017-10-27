let dog = {
	sound: 'woof',
	talk: function() {
		console.log(this.sound)
	}
}

dog.talk()

let talkFunction = dog.talk

talkFunction()

let crab = {
	sound: 'chirp'
}

let boundFunction = talkFunction.bind(crab);

boundFunction()