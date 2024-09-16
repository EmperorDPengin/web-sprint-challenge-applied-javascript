import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  //create elems
  const topicElem = document.createElement('div');
  topicElem.classList.add('topics');
  //create all elems in array, add class and create hyarchy
  topics.forEach (topic => {
    const topicTabElem = document.createElement('div');
    topicTabElem.classList.add('tab');
    topicTabElem.textContent = `${topic}`;
    topicElem.appendChild(topicTabElem);
  })

  return topicElem;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  // try {
  //   const resp = await axios.get(`http://localhost:5000/api/topics`);
  //   // console.log(resp.data.topics);
  //   document.querySelector(`${selector}`).appendChild(Tabs(resp.data.topics));

  // } catch(err) {
  //   const errorText = document.createElement('p');
  //   errorText.textContent = "Oh noes! Try again later :(";
  //   document.body.appendChild(errorText);
  // } finally {
  //   console.log("We're baaaaaaack!");
  // }
  axios.get(`http://localhost:5000/api/topics`)
  .then((resp) => {
    document.querySelector(selector).appendChild(Tabs(resp.data.topics));
  }).catch((err) => {
    const errorText = document.createElement('p');
    errorText.textContent = err;
    document.querySelector(selector).appendChild(errorText);
  });
}

export { Tabs, tabsAppender }
