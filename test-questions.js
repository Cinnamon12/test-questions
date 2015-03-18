// Please save all your work in https://jsfiddle.net/ 
// Return the jsfiddle.net link to your work
// Answer five out of the six questions
// Use test data when provided, however your functions should work with any similiarly structured data
// Use any additional libraries you like
// If you have any questions about this test, please email mgable@marketshare.com

// 1: Write a function that searches collection "projects" to find the object with the lowest "e" value and return that object's "i" value.
var projects = [{i:1, e:41}, {i:5, e:4}, {i:3, e:2}, {i:1, e:90}, {i:5, e:40}, {i:3, e:20}];

// 2: Write a HTML layout which has three columns which stretch 100% of the height of the browser, where the left and right column are 200px wide and the center column fills the leftover width.


// 3: write a function which takes an array of words and a string and finds all occurances of each array word in the string and returns that data as a collection.
// findWords(["cat", "at"], "Of the many cats in the catacombs, only the black cat and the white cat where at bat") // returns [{"cat": 2}, {"at": 1}]
// findWords(["foo", "bar", "a"], "after a foo, bar and foobar, we all went to a bar ") // returns [{"foo": 1}, {"bar": 2}, {"a":2}]

// 4: Write a function that sums all the values of "data". 
var data = [[[1,2,3,4,5],[[1],[2],[3],[4],[5],[6],[[1]]],[9,8,7,6,5,[1,2,3]]],[10,20,30,40,50],[21,33,55,66,77,88],[11,12,13,14,15,16,17,18,19],[[1000,1234],154,2122],[45,66,88,99,100,101]];

// 5: write function "makeObject" which takes two strings as parameters and returns an object. The first parameter will be the nested object made, and the second parameter will be the value of that object.
// makeObject("foo.bar", "buzz") // returns {foo: {bar: "buzz"}}
// makeObject("one.two.three", "foobar")  // returns {one: {two: {three: "foobar"}}}
// makeObject("kingdom.phylum.class.order", "primates")  // returns {kingdom: {phylum: {class: {order: "primates"}}}}

// 6: when sorting an array of names and acronyms, all of the acronyms are listed at the top. Please make it so sorting an array puts all items in the correct alphabetal order
var data = [
	'ACL',
	'accelerated graphics port',
	'ATM',
	'Address Resolution Protocol',
	'American Standard Code For Information Interchange',
	'Active Server Page',
	'ASP'
]

console.info(data.sort()) //["ACL", "ASP", "ATM", "Active Server Page", "Address Resolution Protocol", "American Standard Code For Information Interchange", "accelerated graphics port"]

//What we want the return to be is ["accelerated graphics port", "ACL", "Active Server Page", "Address Resolution Protocol", "American Standard Code For Information Interchange", "ASP", "ATM"]


