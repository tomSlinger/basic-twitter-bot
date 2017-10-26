var TwitterPackage = require('twitter');
// Store Keys here, added to .gitignore
var apiKeys = require('./config.js');

var Twitter = new TwitterPackage(apiKeys);

// Post a Tweet!
Twitter.post('statuses/update', {status: 'I like Football! #TweetedByBot'}, function(error, tweet, response){
    if(error){
        console.log(error);
    }
    console.log(tweet); // Console.log the tweet body
    // console.log(response); // Console.log the raw response object
})