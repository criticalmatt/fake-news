var nodes = document.querySelectorAll('p, h1, h2, h3, h4, a, li');
var a = document.querySelectorAll('a');
var b = document.querySelectorAll('p');

var headline = prompt(`Describe the alt right in one sentence or less (profanity encouraged)`)
var headline2 = prompt(`Describe the DMV`)

var newH2 = {story1: 'Random racially charged propaganda story', fox2: 'Unaccomplished cousin of Steve Bannon pens story with sexist undertoned'};

// var places = [`LONDON`, `JERUSALEM`, `TEXAS`, `CALIFORNIA`, `BREITBART`];




for (var j = 0; j < a.length; j++) {
    var atext = a[j].innerText;
    console.log(a[j].innerText);
    a[j].innerText = a[j].innerText.replace(atext, headline);

}

for (var i = 0; i< b.length; i++) {
    var atext2 = b[i].innerText;
    console.log(b[i].innerText);
    b[i].innerText = b[i].innerText.replace(atext2, headline2);

}


for (var i = 0; i < a.length; i++) {
if(a[i].innerText.includes('BREITBART')) {

    console.log(a[i].innerText);
    var title = a[i].innerText.replace('BREITBART', "<span style = 'color: #ffffff;'>" + `shit ` + "</span>");
    a[i].innerHTML = title;


  }
}


// JIMS CODE

var nodes = document.querySelectorAll('p, h1, h2, h3, h4, a, li');
var a = document.querySelectorAll('a, li');

var newcity = prompt(`What do you call a racist city?`)

var places = [`LONDON`, `JERUSALEM`, `TEXAS`, `CALIFORNIA`, `BREITBART`];


document.querySelectorAll('p, h1, h2, h3, h4, a, li')

for (var i=0; i < nodes.length; i++) {
 var text = nodes[i].innerText;


   for (var j = 0; j < places.length; j++) {
     if (text.toLowerCase().includes(places[j])) {
       console.log(text.toLowerCase().replace(places[j], newcity));
       var resNoun = elems[i].innerText.toLowerCase().replace(places[j], "<span style = 'color: orange; font-style: italic;'>" + newcity + "</span>");
       elems[i].innerHTML = resNoun;
     }
   }
 }
