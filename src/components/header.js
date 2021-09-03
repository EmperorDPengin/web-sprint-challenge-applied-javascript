const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  //create Elememts
  const headerElem = document.createElement('DIV');
  const dateElem = document.createElement('span');
  const titleElem = document.createElement('h1');
  const tempElem = document.createElement('span');

  //give classes to elems
  headerElem.classList.add('header');
  dateElem.classList.add('date');
  tempElem.classList.add('temp');

  //fill in the Elem Data
  dateElem.textContent = `${date}`;
  titleElem.textContent = `${title}`;
  tempElem.textContent = `${temp}`;

  //create Hiarchy
  headerElem.appendChild(dateElem);
  headerElem.appendChild(titleElem);
  headerElem.appendChild(tempElem);

  return headerElem;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header('New Day', 'Jun 21', 'something temp'));
}

export { Header, headerAppender }
