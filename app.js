var TwitterPackage = require('twitter');
// Store Keys here, added to .gitignore
var apiKeys = require('./config.js');

var Twitter = new TwitterPackage(apiKeys);

// // Post a Tweet! (Uncomment to run)
// Twitter.post('statuses/update', {status: 'I like Football! #TweetedByBot'}, function(error, tweet, response){
//     if(error){
//         console.log(error);
//     }
//     console.log(tweet); // Console.log the tweet body
//     // console.log(response); // Console.log the raw response object
// });

/* Notes for above:
1) Twitter.post is a call to the post function in the Twitter object
2) 'statuses/update' means want to post a status update (aka a tweet)
3) {status: 'I love Football! #TweetedByBot'} is a JS object setting the actual status body message
4) We finish with a function that can catch any errors and show us other information if needed
*/

// Streaming API
Twitter.stream('statuses/filter', {track: '#NationalPumpkinDay'}, function(stream){
    stream.on('data', function(tweet){
        console.log(tweet.text);
    });

    stream.on('error', function(error){
        console.log(error);
    });
});

/* Notes for above:
1) Basically we look for any tweets that contain #NationalPumpkinDay
2) Then simply console.log the text of that tweet (we could get anything from the tweet object)
3) If there is any error is getting a tweet, console.log it!
*/