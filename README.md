
               What server framework did you choose and why?
---------------------------------------------------------------------------
   I chose Node.js framework for the following reasons:
   
1. Node.js is Javascript. So the same language can be used on the backend and frontend.
   This breaks down the boundaries between backend and frontend.

2. Node.js enables high throughput and application scalability due to asynchronous, 
   event-driven processing.

3. Inexpensive to test/deploy using services like Heroku(Pay per resources).

4. Unified programming language and datatype(JavaScript and JSON).

5. It is lightweight and efficient, perfect for data-intensive real time applications 
   that run across distributed systems.

6. It is fast because Node.js is a JavaScript runtime that uses the V8 engine developed
   by Google for use in Chrome.

7. Code re-usability is achieved as the same code can be used on both sides of the stack.



                What client framework did you choose and why?
---------------------------------------------------------------------------------- 
   I chose JQuery as client framework for the following reasons:
   
1. JQuery uses simple, clean and powerful syntax. Five lines of JQuery are equivalent to
   25 lines of conventional Javascript code. This means smaller files and faster loading 
   pages. Hence it saves lot of time.

2. Easy implementation for web developers in comparison to other applications.

3. JQuery is cross-browser friendly. It is currently the most popular JavaScript library
   and works in all browsers.

4. JQuery is free, open-source software.

5. JQuery lets you develop AJAX templates with ease. Actions can be performed on the pages
   without requiring entire page to be reloaded. Data can be retrieved from server in the
   background without worrying about how the web page behaves.

6. JQuery is search engine optimized. Everything in JQuery is set up as text. Hence it is  
   completely readable to search engines, exposing its keyword rich content.

7. JQuery makes web pages more exciting, interactive, cleaner, and more user friendly.

8. JQuery is supported by any mobile device whose web browser supports JavaScript.

9. Large software companies, like Microsoft, supports using jQuery in their applications,
   such as Visual Studio, as evidence of their support of jQuery’s superior product. 

10. Web page elements display even if JavaScript is disabled in the browser.

11. Detailed documentation and useful examples for using JQuery on its website.



              What aspect of the implementation did you find easy, if any, and why?
------------------------------------------------------------------------------------

* Performing AJAX call to RESTful web services available on server-side framework was 
  easy for me as I used JQuery for client-side framework and JQuery simplifies AJAX.
  
  
             What aspect of the implementation did you find hard, if any, and why?
  -------------------------------------------------------------------------------------
*  I had a hard time displaying dots on Google Maps even after including latitude and 
   longitude values in JSON data.



          What components OTHER than your client and server framework did you install,
if any, and if so, what is their purpose for your solution?
—-----------------------------------------------------------------------------------

* Other than client and server framework Express.js was used. It is a Node.js framework.

* If we use Express.js framework, we don’t have to repeat same code over and over again.
 
* Node.js is a low level I/O mechanism which has an HTTP module.

* If you just use a HTTP module, a lot of work like parsing the payload, cookies, storing
  sessions, selecting the best route based on regular expressions will have to be re-
  implemented. 

* With express.js, it is already there for you to use it.

* In this project, I had to write a small REST API on server-side. Using Express.js, it 
  took 5 - 10x less time and less lines of code.



         What Ubuntu commands are required to deploy and run your server?
------------------------------------------------------------------------------------- 

- $ heroku login
- $ git clone https://github.com/heroku/node-js-getting-started.git
- $ cd node-js-getting-started
- $ heroku create
- $ git push heroic master
- $ heroku ps:scale web=1
- $ heroku open
- $ heroku logs —-tail
- $ heroic local web
- $ npm install
- $ heroku local
- $ git remote -v
- $ git add .
- $ git commit -m “Demo”
- $ git push heroic master
- $ heroku open

