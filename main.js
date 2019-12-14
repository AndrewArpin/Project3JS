let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = "https://edgeonyx.github.io/Project3JS/coolThings.json";

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
  let coolThings = request.response;
  console.log(coolThings);
  info(coolThings);
  coolestThings(coolThings);
}

function info(jsonObj) {
  let headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['Website' + "!"];
  header.appendChild(headerH1);


  let headerPara = document.createElement('p');
  headerPara.textContent = 'Welcome to ' + jsonObj['Website'] + 'the site with the wackiest deals on the internet!';
  header.appendChild(headerPara);
}


function coolestThings(jsonObj) {


  let items = jsonObj['items'];

  for (let i = 0; i < items.length; i++) {

    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');

    img.setAttribute('src', 'https://edgeonyx.github.io/Project3JS/images/' + items[i].image);
    img.setAttribute('alt', items[i].image );

    h2.textContent = items[i].name;
    p1.textContent = items[i].buy;
    p2.textContent = 'This product is sold by: ' + items[i].seller;

    let description = items[i].descriptions;
    for(let j = 0; j < description.length; j++ ) {
      let listItem = document.createElement('li');
      listItem.textContent = description[j];
      list.appendChild(listItem);
    }

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(list);
    section.appendChild(article);

  }
}
