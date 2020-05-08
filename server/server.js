var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/manga', function(req, response){
	//Web Scraping

 	url = "https://www.anime-planet.com/users/kyoharato"

 	manga = request(url, function(err, res, html) {
  	//If statement to check for no errors
  	if(!err){
            //Cheerio Library gives jQuery functionality

            const $ = cheerio.load(html);
            var json = { read : "", reading : "", wtr : "", stalled: "", dropped: "", ts: ""};

            var str = "";

            json.read = $('.status1').last().children().children().first().text();
            json.reading = $('.status2').last().children().children().first().text();
            json.dropped = $('.status3').last().children().children().first().text();
            json.wtr = $('.status4').last().children().children().first().text();
            json.stalled = $('.status5').last().children().children().first().text()

            var tr = $('.pure-1-6').each(function(){
 				str += $(this).text() + " ";
 			})

 			str = str.split(" ")

            var i;
            var arr = []

            for(i = 0; i<(str.length-1); i++) {
            	if(!isNaN(str[i])){
            		arr.push(parseInt(str[i], 10));
            	}
            }

            json.ts = (1+arr[7]+arr[8]*24+arr[9]*7*24+arr[10]*30*24+arr[11]*365*24).toString();

            console.log(json)


            response.send(json);


        }
  })

})

app.listen('3001')

console.log('Magic happens on port 3001');

exports = module.exports = app;