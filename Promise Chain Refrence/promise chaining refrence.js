// not a functional code. Just for demonstrating structure of promise chaining

gerWordOfTheDay()
.then (function(word){
    //I am the success callback
    return tellFriend(word);
}).then(function(response){
    // success callback for tellFriend
    console.log(response);
}).catch(function (err) {
    //I am the error callback for both functions
    console.log('something went wrong');
    console.log(err);
});

//this is a pyramid of doom. don't do it like this:-----
gerWordOfTheDay()
.then((word) => {
    console.log(`The word of the day is ${word}.`);
    console.log('sending to friend');
    tellFriend(word)
    .then((response) => {
        console.log('friend responded:');
        console.log(response);
    },(err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});  
//-------------------------------------------------------
//Here is better way:
gerWordOfTheDay()
.then((word) => {
    console.log(`Theword of the day is ${word}.`);
    console.log('Sending to a friend');
    return tellFriend(word);
}).then((response) => {
    console.log('friend responded:');
    console.log(response);
}).catch((err) => {
    console.log(err);
});
//-------------------------------------------------------