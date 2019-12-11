//Step One - create variables that store a reference to header and section elements
let header = document.querySelector('header');
let section = document.querySelector('section');

//Step Two - create a variable to store request URL
let requestURL = "";

// Step Three - create a new XHR object
let request = new XMLHttpRequest();

//Step Four - open a new request, using the open method
request.open('GET', requestURL);

//Step Five - set up the request to accept JSON

request.responseType = 'json';

//Step Six - send the request using the send method

request.send();
