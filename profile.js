// connect to the API URL (https://teamtreehouse.com/username.json)
// Read the data
// Parse the data
// Print the data

//Require https module
const https = require('https');
const http = require('http');
const print = require("./print.js");
//Print Error Messages

function get(username){
  try{
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if(response.statusCode === 200){
      let body = "";
      response.on('data',data =>{
        body += data.toString();
      });
      response.on('end',()=>{
        try {
          const profile = JSON.parse(body);
          print.m(username, profile.badges.length, profile.points.JavaScript);
        } catch (error) {
          print.e(error);
        }

      });
    } else {
      const message  =` There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
      const statusCodeError = new Error(message);
      print.e(statusCodeError);
    }
    });
    request.on('error', print.e);
  } catch (error) {
    print.e(error);
  }
}

module.exports.get = get;
