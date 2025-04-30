//Assessment #2 - NodeJS and ReactJs - 30th April

//NodeAPI
//1. Explain your knowledge of - statelessness, http, REST, spa and classical applications
/*
-Statelessness: Statelessness refers to the property of a system where each request from a client to a server is treated as an independent transaction. 
The server does not retain any information about the client's previous requests. This means that each request must contain all the information needed for the server to fulfill it.

-Http: HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. 
It is a protocol used for transmitting hypertext documents, such as HTML, between a client (usually a web browser) and a server. 
HTTP is stateless, meaning that each request is independent and does not retain any information about previous requests.

-REST: REST (Representational State Transfer) is an architectural style for designing networked applications.
It is based on a set of principles that allow for the creation of scalable and stateless web services.

-spa: SPA (Single Page Application) is a web application that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server.
This approach allows for a more fluid and responsive user experience, as only the necessary content is updated without the need for full page reloads.

-classical applications: Classical applications are traditional web applications that follow a multi-page architecture.
They typically involve loading a new HTML page from the server for each user interaction, which can lead to slower response times and a less seamless user experience compared to SPAs.
*/

//2. Create an express setup, with a capability to expose end points for restful api


//3. Create an API with name CreateUser as get verb and pass user info such as name, session, address and age as query param
//4. Save the information passed in #3 to a json file name userInfo in local

//React
//5. create a webpack setup, index html and one css file to show css in next questions (can use app.css from our project)


//6. how react renders dom in conservative manner - explain, also explain 
/*
React uses a virtual DOM to optimize the rendering process. When a component's state or props change, React creates a new virtual DOM representation of the component. 
It then compares this new virtual DOM with the previous one using a process called "reconciliation." 
This allows React to identify the minimal set of changes needed to update the actual DOM, which is a more expensive operation. 
By only updating the parts of the DOM that have changed, React improves performance and reduces unnecessary re-renders.
This process is coupled with state updates and state update APIs, such as setState or useState, which trigger the re-rendering of components.
When a state update occurs, React schedules a re-render of the component and its children, allowing it to efficiently update the virtual DOM and subsequently the actual DOM.  
*/

//7. create a class component named - Success and show some quotes (messages) in it with h1,h2,h3 components

//8. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//9. create SuccessStory as another component, pass this as props in SuccessChild from Success component

//10. explain how virtual dom works and how it is coupled with state updates and state update API's
/*
The virtual DOM is a lightweight representation of the actual DOM. When a component's state or props change, React creates a new virtual DOM tree.
This new tree is then compared to the previous virtual DOM tree using a diffing algorithm.
This process identifies the differences between the two trees, allowing React to determine the minimal set of changes needed to update the actual DOM.
*/