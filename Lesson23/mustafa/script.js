/* Json - JavaScript Object Notation
- JSON is a lightweight data interchange format.
- It is often used to transmit data between a server and a web application.
- JSON data is represented as key-value pairs, similar to JavaScript objects.
*/

/* Asyncronous programming
- Asynchronous operations do not block the execution and allow other tasks to run concurrently.

Callbacks:
   - Callbacks are a common way to handle asynchronous operations in JavaScript.
   - A callback function is passed as an argument to another function and gets invoked when the operation completes.

   function greet() {
    const name = getUserName();
    return name + ' hi';
   }

Promises:
   - Promises provide an alternative to callbacks for handling asynchronous operations.
   - A promise represents the eventual completion or failure of an asynchronous operation.
   - Promises can be chained and allow for a more readable code structure.

Async/Await:
   - Async/await is a modern syntax introduced in ES2017 for writing asynchronous code in a more synchronous style.
   - Async functions return a promise and can use the `await` keyword to pause the execution until a promise settles.
*/

/* AJAX (Asynchronous JavaScript and XML)
- AJAX is a technique for updating parts of a web page without requiring a full page reload.
- It allows for asynchronous communication between the client and server.
*/

/* API requests: Fetch API
The Fetch API is a modern JavaScript API that provides an interface for making network requests, typically for retrieving resources from a server. It offers a more powerful and flexible alternative to the older XMLHttpRequest (XHR) object for making HTTP requests.


Example requests

HTTPS methods: 
- GET (to request data)
- POST (to send data)
- UPDATE
- DELETE

GET request
fetch('https://api.example.com/data?name=John&surname=Doe')
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

const requestData = {
  name: 'John',
  age: 25
};


POST request
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' - Required in POST and PUT requests to specify the format of the data that is being sent
  },
  body: JSON.stringify(requestData)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


*/

const container = document.getElementById("posts-container");
const newtitles = [
  "Economic Growth and Sustainability",
  "Technology and Innovation in the 21st Century",
  "Sports and Physical Health",
  "Entertainment and Media Trends",
  "Health and Wellness in Modern Society",
];

const newcontent = [
  "Economic growth is a crucial aspect of any nation's development, but it must be balanced with sustainability to ensure long-term prosperity. Sustainable economic growth focuses on meeting the needs of the present without compromising the ability of future generations to meet their own needs. This involves adopting environmentally friendly practices, promoting social equity, and fostering economic resilience.",
  "Technology and innovation are driving forces in the 21st century, transforming industries and reshaping the way we live and work. From artificial intelligence to renewable energy, technological advancements are creating new opportunities and challenges for societies around the world.",
  "Sports play a vital role in promoting physical health and well-being. Regular participation in sports activities helps individuals maintain a healthy lifestyle, build teamwork skills, and develop resilience. Whether it's team sports or individual activities, physical exercise contributes significantly to overall health.",
  "Entertainment and media trends evolve rapidly in the digital age. With the rise of streaming platforms, social media, and interactive content, the way we consume and engage with entertainment has changed dramatically. These trends influence culture, communication, and consumer behavior.",
  "Health and wellness are fundamental aspects of a fulfilling life. In modern society, maintaining physical and mental well-being is increasingly recognized as essential for productivity and happiness. This includes adopting healthy lifestyle choices, seeking medical care when needed, and prioritizing mental health."
];

fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const card = document.createElement("article");
      card.classList.add("post-card");

      const name = document.createElement("span");
      name.textContent = `Mustafa: ${post.userId}`;
      name.style.fontSize = "0.9em";
      name.style.color = "#555";
      card.appendChild(name);

      const title = document.createElement("h3");
      title.textContent = newtitles[post.id - 1] || post.title;
      title.style.color = "#333";
      title.style.marginTop = "10px";

      const body = document.createElement("p");
      body.textContent = newcontent[post.id - 1] || post.body;
      body.style.color = "#666";
      body.style.lineHeight = "1.5";
 
      card.appendChild(name);
      card.appendChild(title);
      card.appendChild(body);
      container.appendChild(card);
    });
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("İşlem bitti!"));
