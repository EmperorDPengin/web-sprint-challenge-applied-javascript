import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  //create the elems
  const cardElem = document.createElement('div');
  const headlineElem = document.createElement('div');
  const authorElem = document.createElement('div');
  const imgContainerElem = document.createElement('div');
  const imageElem = document.createElement('img');
  const authorNameElem = document.createElement('span');

  //give elems their classes
  cardElem.classList.add('card');
  headlineElem.classList.add('headline');
  authorElem.classList.add('author');
  imgContainerElem.classList.add('img-container');

  //fill in the elems details
  headlineElem.textContent = `${article.headline}`;
  imageElem.src = `${article.authorPhoto}`;
  authorNameElem.textContent = `${article.authorName}`;

  //create Hiarchy
  cardElem.appendChild(headlineElem);
  cardElem.appendChild(authorElem);
  authorElem.appendChild(imgContainerElem);
  imgContainerElem.appendChild(imageElem);
  authorElem.appendChild(authorNameElem);

  //events 
  cardElem.addEventListener('click', () => {
    console.log(`${headlineElem.textContent}`);
  })
  //return HTML markup
  return cardElem;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles` )
  .then((resp) => {
    const selectedAppend = document.querySelector(selector);
    const articlesData = resp.data.articles;
    for (const topic in articlesData){
      articlesData[topic].forEach( element => {
        selectedAppend.appendChild(Card(element));
      });
    }
  }).catch((err) => {
    const errorText = document.createElement('p');
    errorText.textContent = err;
    document.querySelector(selector).appendChild(errorText);
  });

}

export { Card, cardAppender }
