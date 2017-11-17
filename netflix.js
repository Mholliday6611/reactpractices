// The following are episodes for Arrested Development. 

const episodes = [
  { id: 's06e01', title: 'Pilot' },
  { id: 's06e02', title: 'Top Banana' },
  { id: 's06e03', title: 'Charity Drive' },
  { id: 's06e04', title: 'Visiting Ours' },
  { id: 's06e05', title: 'My Mother, the Car' },
  { id: 's06e06', title: 'In God We Trust' },
  { id: 's06e07', title: 'Storming the castle' },
  { id: 's06e08', title: 'Pier Pressure' },
  { id: 's06e09', title: 'Public Relations' },
];

const spongbob = [
  { id: 's01e01', title: 'Bikini Botom' },
  { id: 's01e02', title: 'Patrick' },
]

const wannaAdd = { id: 's01e04', title: 'Sandy' }
const finaleEpisode = { id: 's06e10', title: 'Bringing Up Buster' };


 // Add this finaleEpisode to the episodes object  and save that into addToPlaylist.
const addToPlaylist = function(list,episodes){
	return list.concat(episodes)
}
// console.log(addToPlaylist)

var newList = addToPlaylist(spongbob,wannaAdd)
// console.log(newList)
// You may want to add a function which takes away the current episode you were just watching and returns the new object consisting only of the 
// rest of the episodes which you have not viewed yet. 

const removeFromPlaylist = function(list,current){
	return list.filter(function(episode){return episode != current})
}

// console.log(removeFromPlaylist(episodes,episodes[5]))

// You might want to create a function which shows the viewer the next episode. 
// ** this would be a useful function after you have filtered or sliced the previous episode object out of the array ** 
const getNextEpisodeInPlaylist = function(list){
	if(list.length ==0){

	}
	else{
		console.log(" The next episdoe is " + list[0].title)
	}
	
}

// getNextEpisodeInPlaylist(removeFromPlaylist(episodes[0]))

var emulateMarathon = function(list){
	if(list.length == 0){
		console.log("Tune into next Season ")
	}
	else{
		currentEpisode = list[0]


		console.log("\n You are currently watching " + currentEpisode.title)

		getNextEpisodeInPlaylist(removeFromPlaylist(list, currentEpisode))

		console.log("Episodes remaining " + (list.length-1))

		emulateMarathon(removeFromPlaylist(list, currentEpisode))
	}
}

emulateMarathon(addToPlaylist(episodes,finaleEpisode))