var TwitterPackage = require('twitter');
// Store Keys here, added to .gitignore
var apiKeys = require('./config.js');

var Twitter = new TwitterPackage(apiKeys);

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