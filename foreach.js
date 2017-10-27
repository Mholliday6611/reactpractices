var numbers = [1,2,3,4,5]

numbers.forEach(function(num){
	console.log(num);
});

numbers.map(function(num){
	console.log(num)
})

numbers.map(function(num){
	return num
})

console.log(numbers.reduce(function(accumalator,currentValue,currentIndex,array){
		return accumalator + currentValue
	})
)

var issues =[
{
	"comments_count": 5,
	"id": 144948778,
},
{
	"comments_count": 109,
	"id": 144467778,
},
{
	"comments_count": 1,
	"id": 143883618.
}]

var comentCountAcrossIssues = issues.reduce(function(total, issue){
	return total+ issue.comments_count
},3)

console.log(comentCountAcrossIssues)

var newArray = issues.filter(function(issue){ return issue.comments_count != 1})

console.log(newArray)

console.log(numbers.concat(9))