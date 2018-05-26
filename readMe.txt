In this article we go over what web servers are, how they work, and why they're important.

Prerequisites:	You should already know how the Internet works, and understand the difference between a web page, a web site, a web server and a search engine.
Objective:	You will learn what a web server is and gain a general understanding of how it works.
Summary
"Web server" can refer to hardware or software, or both of them working together.

On the hardware side, a web server is a computer that stores web server software and a website's component files (e.g. HTML documents, images, CSS stylesheets, and JavaScript files). It is connected to the Internet and supports physical data interchange with other devices connected to the web.
On the software side, a web server includes several parts that control how web users access hosted files, at minimum an HTTP server. An HTTP server is a piece of software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). It can be accessed through the domain names (like mozilla.org) of websites it stores, and delivers their content to the end-user's device.
At the most basic level, whenever a browser needs a file which is hosted on a web server, the browser requests the file via HTTP. When the request reaches the correct web server (hardware), the HTTP server (software) accepts request, finds the requested document (if it doesn't then a 404 response is returned), and sends it back to the browser, also through HTTP.
To publish a website, you need either a static or a dynamic web server.

A static web server, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files "as-is" to your browser.

A dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending them to your browser via the HTTP server.

For example, to produce the final webpages you see in the browser, the application server might fill an HTML template with contents from a database. Sites like MDN or Wikipedia have many thousands of webpages, but they aren't real HTML documents, only a few HTML templates and a giant database. This setup makes it easier and quicker to maintain and deliver the content.

Active learning
There is no active learning available yet. Please, consider contributing.

Deeper dive
To fetch a webpage, as we already said, your browser sends a request to the web server, which proceeds to search for the requested file in its own storage space. On finding the file, the server reads it, processes it as needed, and sends it to the browser. Let's look at those steps in more detail.

Hosting files
A web server first has to store the website's files, namely all HTML documents and their related assets, including images, CSS stylesheets, JavaScript files, fonts, and videos.

Technically, you could host all those files on your own computer, but it's far more convenient to store them all on a dedicated web server that

is always up and running
is always connected to the Internet
has the same IP address all the time (not all ISPs provide a fixed IP address for home lines)
is maintained by a third-party provider
For all these reasons, finding a good hosting provider is a key part of building your website. Dig through the various services companies offer and choose one that fits your needs and your budget (services range from free to thousands of dollars per month). You can find more details in this article.

Once you set up a web hosting solution, you just have to upload your files to your web server.

Communicating through HTTP
Second, a web server provides support for HTTP (Hypertext Transfer Protocol). As its name implies, HTTP specifies how to transfer hypertext (i.e., linked web documents) between two computers.

A Protocol is a set of rules for communication between two computers. HTTP is a textual, stateless protocol.

Textual
All commands are plain-text and human-readable.
Stateless
Neither the server nor the client remember previous communications. For example, relying on HTTP alone, a server cannot remember a password you typed or what step you're on in a transaction. You need an application server for tasks like that. (We'll cover that sort of technology in further articles.)
HTTP provides clear rules for how a client and server communicate. We'll cover HTTP itself in a technical article later on. For now, just be aware of these things:

Only clients can make HTTP requests, and then only to servers. Servers can only respond to a client's HTTP request.
When requesting a file via HTTP, clients must provide the file's URL.
The web server must answer every HTTP request, at least with an error message.
oughly speaking, a server can serve either static or dynamic content. "Static" means "served as-is". Static websites are the easiest to set up, so we suggest you make your first site a static site.

"Dynamic" means that the server processes the content or even generates it on the fly from a database. This solution provides more flexibility, but the technical stack becomes more difficult to handle, making it dramatically more complex to build the website.

Take for example the page you're reading right now. On the web server hosting it, there is an application server that takes article content from a database, formats it, puts it inside some HTML templates, and sends you the results. In this case, the application server is called Kuma and is built with Python (using the Django framework). The Mozilla team built Kuma for the specific needs of MDN, but there are many similar applications built on many other technologies.

There are so many application servers that it's pretty hard to suggest a particular one. Some application servers cater to specific website categories like blogs, wikis or e-shops; others, called CMSs (content management systems), are more generic. If you're building a dynamic website, take the time to choose a tool that fits your needs. Unless you want to learn some web server programming (which is an exciting area in itself!), you don't need to create your own application server. That's just reinventing the wheel.
Learning area
Learning web development
This set of articles provides beginners with everything they need to start coding simple websites.
Progressive Web Apps
Progressive web apps use modern web APIs along with traditional progressive enhancement strategy to create cross-platform web applications. These apps work everywhere and provide several features that give them the same user experience advantages as native apps. This set of docs and guides tell you all you need to know about PWAs.
Other topics
Developing web applications
This set of articles explains the techniques used in developing web apps for mobile, desktop, and Firefox OS environments.
Accessibility
Accessible websites enable as many people as possible to use the web, including those whose visual, auditory, or other abilities are limited in some way. This set of articles provides information about accessible web development.
Localization (L10n) and Internationalization (I18n)
The web is a global community! Make sure your site is part of it by keeping in mind the need to provide content in the language and layout expected by everyone that might want to use your site or app.
Security
Don't let your website or app leak private data to the bad guys. Use this set of articles to make sure your projects are secure.
WebAssembly
WebAssembly is a new type of code that can be run in modern web browsers — it is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages such as C/C++ with a compilation target so that they can run on the web. It is also designed to run alongside JavaScript, allowing both to work together.
The open nature of the World Wide Web presents incredible opportunities for people who want to create websites or online applications. To take full advantage of the web's capabilities, you need to know how to use them. Explore the links below to learn more about various web technologies.

Web technologies
Basics
HTML
HyperText Markup Language (HTML) is used to describe and define the content of a webpage.
CSS
Cascading Style Sheets (CSS) are used to describe the appearance or presentation of content on a webpage.
HTTP
Hypertext Transfer Protocol (HTTP) is used to deliver HTML and other hypermedia documents on the web.
Scripting
JavaScript
JavaScript is the programming language that runs in your browser. You can use it to add interactivity and other dynamic features to your website or application.
With the advent of Node.js, you can also run JavaScript on the server.
Web APIs
Web Application Programming Interfaces (Web APIs) are used to perform a variety of tasks, such as manipulating the DOM, playing audio or video, or generating 3D graphics.
The Web API interface reference lists all the object types you can use while developing for the web.
The WebAPI page lists all the communication, hardware access, and other APIs you can use in web applications.
The Event reference lists all the events you can use to track and react to interesting things that have taken place in your webpage or application.
Web components
Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.
Graphics
Canvas
The <canvas> element provides APIs to draw 2D graphics using JavaScript.
SVG
Scalable Vector Graphics (SVG) lets you use lines, curves, and other geometric shapes to render graphics. With vectors, you can create images that scale cleanly to any size.
WebGL
WebGL is a JavaScript API that lets you draw 3D or 2D graphics using the HTML5 <canvas> element. This technology lets you use standard OpenGL ES in Web content.
Audio, video, and multimedia
Web media technologies
A list of media-related APIs with links to the documentation you'll need for each.
Overview of media technology on the web
A general look at the open web technologies and APIs that provide support for audio and video playback, manipulation, and recording. If you're not sure which API you should use, this is the place to start.
Media Capture and Streams API
A reference for the API which makes it possible to stream, record, and manipulate media both locally and across a network. This includes using local cameras and microphones to capture video, audio, and still images.
Using HTML5 audio and video
Embedding video and/or audio in a web page and controlling its playback.
WebRTC
The RTC in WebRTC stands for Real-Time Communications, technology that enables audio/video streaming and data sharing between browser clients (peers).
Other
MathML
Mathematical Markup Language (MathML) lets you display complex mathematical equations and syntax.
JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs specific to Web pages, please see Web APIs and DOM.

The standard for JavaScript is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2019.

Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and uses.

Tutorials
Learn how to program in JavaScript with guides and tutorials.

For complete beginners
Head over to our Learning Area JavaScript topic if you want to learn JavaScript but have no previous experience of JavaScript or programming. The complete modules available there are as follows:

JavaScript first steps
Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
JavaScript building blocks
Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code block such as conditional statements, loops, functions, and events.
Introducing JavaScript objects
The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.
JavaScript guide
JavaScript Guide
A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.
Intermediate
Client-side web APIs
When writing client-side JavaScript for web sites or applications, you won't go very far before you start to use APIs — interfaces for manipulating different aspects of the browser and operating system the site is running on, or even data from other web sites or services. In this module we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work. 
A re-introduction to JavaScript
An overview for those who think they know about JavaScript.
JavaScript data structures
Overview of available data structures in JavaScript.
Equality comparisons and sameness
JavaScript provides three different value-comparison operations: strict equality using ===, loose equality using ==, and the Object.is() method.
Advanced
Inheritance and the prototype chain
Explanation of the widely misunderstood and under-estimated prototype-based inheritance.
Strict mode
Strict mode defines that you can not use any variable before initializing it. It is a restricted variant of ECMAScript 5, for faster performance and easier debugging.
JavaScript typed arrays
JavaScript typed arrays provide a mechanism for accessing raw binary data.
Memory Management
Memory life cycle and garbage collection in JavaScript.
Concurrency model and Event Loop
JavaScript has a concurrency model based on an "event 


JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs specific to Web pages, please see Web APIs and DOM.

The standard for JavaScript is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2019.

Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and uses.

Tutorials
Learn how to program in JavaScript with guides and tutorials.

For complete beginners
Head over to our Learning Area JavaScript topic if you want to learn JavaScript but have no previous experience of JavaScript or programming. The complete modules available there are as follows:

JavaScript first steps
Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
JavaScript building blocks
Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code block such as conditional statements, loops, functions, and events.
Introducing JavaScript objects
The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.
JavaScript guide
JavaScript Guide
A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.
Intermediate
Client-side web APIs
When writing client-side JavaScript for web sites or applications, you won't go very far before you start to use APIs — interfaces for manipulating different aspects of the browser and operating system the site is running on, or even data from other web sites or services. In this module we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work. 
A re-introduction to JavaScript
An overview for those who think they know about JavaScript.
JavaScript data structures
Overview of available data structures in JavaScript.
Equality comparisons and sameness
JavaScript provides three different value-comparison operations: strict equality using ===, loose equality using ==, and the Object.is() method.
Advanced
Inheritance and the prototype chain
Explanation of the widely misunderstood and under-estimated prototype-based inheritance.
Strict mode
Strict mode defines that you can not use any variable before initializing it. It is a restricted variant of ECMAScript 5, for faster performance and easier debugging.
JavaScript typed arrays
JavaScript typed arrays provide a mechanism for accessing raw binary data.
Memory Management
Memory life cycle and garbage collection in JavaScript.
Concurrency model and Event Loop
JavaScript has a concurrency model based on an "event 
JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs specific to Web pages, please see Web APIs and DOM.

The standard for JavaScript is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2019.

Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and uses.

Tutorials
Learn how to program in JavaScript with guides and tutorials.

For complete beginners
Head over to our Learning Area JavaScript topic if you want to learn JavaScript but have no previous experience of JavaScript or programming. The complete modules available there are as follows:

JavaScript first steps
Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
JavaScript building blocks
Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code block such as conditional statements, loops, functions, and events.
Introducing JavaScript objects
The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.
JavaScript guide
JavaScript Guide
A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.
Intermediate
Client-side web APIs
When writing client-side JavaScript for web sites or applications, you won't go very far before you start to use APIs — interfaces for manipulating different aspects of the browser and operating system the site is running on, or even data from other web sites or services. In this module we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work. 
A re-introduction to JavaScript
An overview for those who think they know about JavaScript.
JavaScript data structures
Overview of available data structures in JavaScript.
Equality comparisons and sameness
JavaScript provides three different value-comparison operations: strict equality using ===, loose equality using ==, and the Object.is() method.
Advanced
Inheritance and the prototype chain
Explanation of the widely misunderstood and under-estimated prototype-based inheritance.
Strict mode
Strict mode defines that you can not use any variable before initializing it. It is a restricted variant of ECMAScript 5, for faster performance and easier debugging.
JavaScript typed arrays
JavaScript typed arrays provide a mechanism for accessing raw binary data.
Memory Management
Memory life cycle and garbage collection in JavaScript.
Concurrency model and Event Loop
JavaScript has a concurrency model based on an "event 
JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs specific to Web pages, please see Web APIs and DOM.

The standard for JavaScript is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2019.

Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and uses.

Tutorials
Learn how to program in JavaScript with guides and tutorials.

For complete beginners
Head over to our Learning Area JavaScript topic if you want to learn JavaScript but have no previous experience of JavaScript or programming. The complete modules available there are as follows:

JavaScript first steps
Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
JavaScript building blocks
Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code block such as conditional statements, loops, functions, and events.
Introducing JavaScript objects
The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.
JavaScript guide
JavaScript Guide
A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.
Intermediate
Client-side web APIs
When writing client-side JavaScript for web sites or applications, you won't go very far before you start to use APIs — interfaces for manipulating different aspects of the browser and operating system the site is running on, or even data from other web sites or services. In this module we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work. 
A re-introduction to JavaScript
An overview for those who think they know about JavaScript.
JavaScript data structures
Overview of available data structures in JavaScript.
Equality comparisons and sameness
JavaScript provides three different value-comparison operations: strict equality using ===, loose equality using ==, and the Object.is() method.
Advanced
Inheritance and the prototype chain
Explanation of the widely misunderstood and under-estimated prototype-based inheritance.
Strict mode
Strict mode defines that you can not use any variable before initializing it. It is a restricted variant of ECMAScript 5, for faster performance and easier debugging.
JavaScript typed arrays
JavaScript typed arrays provide a mechanism for accessing raw binary data.
Memory Management
Memory life cycle and garbage collection in JavaScript.
Concurrency model and Event Loop
JavaScript has a concurrency model based on an "event 
JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs specific to Web pages, please see Web APIs and DOM.

The standard for JavaScript is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2019.

Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and uses.

Tutorials
Learn how to program in JavaScript with guides and tutorials.

For complete beginners
Head over to our Learning Area JavaScript topic if you want to learn JavaScript but have no previous experience of JavaScript or programming. The complete modules available there are as follows:

JavaScript first steps
Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
JavaScript building blocks
Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code block such as conditional statements, loops, functions, and events.
Introducing JavaScript objects
The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.
JavaScript guide
JavaScript Guide
A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.
Intermediate
Client-side web APIs
When writing client-side JavaScript for web sites or applications, you won't go very far before you start to use APIs — interfaces for manipulating different aspects of the browser and operating system the site is running on, or even data from other web sites or services. In this module we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work. 
A re-introduction to JavaScript
An overview for those who think they know about JavaScript.
JavaScript data structures
Overview of available data structures in JavaScript.
Equality comparisons and sameness
JavaScript provides three different value-comparison operations: strict equality using ===, loose equality using ==, and the Object.is() method.
Advanced
Inheritance and the prototype chain
Explanation of the widely misunderstood and under-estimated prototype-based inheritance.
Strict mode
Strict mode defines that you can not use any variable before initializing it. It is a restricted variant of ECMAScript 5, for faster performance and easier debugging.
JavaScript typed arrays
JavaScript typed arrays provide a mechanism for accessing raw binary data.
Memory Management
Memory life cycle and garbage collection in JavaScript.
Concurrency model and Event Loop
JavaScript has a concurrency model based on an "event 
JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.

This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs specific to Web pages, please see Web APIs and DOM.

The standard for JavaScript is ECMAScript. As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2019.

Do not confuse JavaScript with the Java programming language. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and uses.

Tutorials
Learn how to program in JavaScript with guides and tutorials.

For complete beginners
Head over to our Learning Area JavaScript topic if you want to learn JavaScript but have no previous experience of JavaScript or programming. The complete modules available there are as follows:

JavaScript first steps
Answers some fundamental questions such as "what is JavaScript?", "what does it look like?", and "what can it do?", along with discussing key JavaScript features such as variables, strings, numbers, and arrays.
JavaScript building blocks
Continues our coverage of JavaScript's key fundamental features, turning our attention to commonly-encountered types of code block such as conditional statements, loops, functions, and events.
Introducing JavaScript objects
The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language and write more efficient code, therefore we've provided this module to help you.
JavaScript guide
JavaScript Guide
A much more detailed guide to the JavaScript language, aimed at those with previous programming experience either in JavaScript or another language.
Intermediate
Client-side web APIs
When writing client-side JavaScript for web sites or applications, you won't go very far before you start to use APIs — interfaces for manipulating different aspects of the browser and operating system the site is running on, or even data from other web sites or services. In this module we will explore what APIs are, and how to use some of the most common APIs you'll come across often in your development work. 
A re-introduction to JavaScript
An overview for those who think they know about JavaScript.
JavaScript data structures
Overview of available data structures in JavaScript.
Equality comparisons and sameness
JavaScript provides three different value-comparison operations: strict equality using ===, loose equality using ==, and the Object.is() method.
Advanced
Inheritance and the prototype chain
Explanation of the widely misunderstood and under-estimated prototype-based inheritance.
Strict mode
Strict mode defines that you can not use any variable before initializing it. It is a restricted variant of ECMAScript 5, for faster performance and easier debugging.
JavaScript typed arrays
JavaScript typed arrays provide a mechanism for accessing raw binary data.
Memory Management
Memory life cycle and garbage collection in JavaScript.
Concurrency model and Event Loop
JavaScript has a concurrency model based on an "event 
Bố Già ( The Godfather ) - Chương 01
Amerigo Bonasera có việc ra tòa, Tòa đại hình New York, Phòng 3 để nghe công lý phán xét, trừng trị hai thằng khốn can tội bạo hành, toan cưỡng dâm con gái lão. Ngài chánh án uy nghi, bệ vệ vén áo thụng đen làm như sắp đích thân ra tay trị hai thằng nhãi ranh đang đứng xớ rớ trước Toà. Giọng ngài sang sảng, lạnh tanh:

- Tụi bây hành động như những quân côn đồ tồi tệ nhất. Tụi bây làm như thú dữ ở rừng vậy! Cũng may mà cô bé đáng thương kia chưa bị tụi bây xâm phạm tiết hạnh, bằng không thì mỗi đứa 20 năm chắc…

Cả hai thằng cúi mặt làm như tủi hổ, hối hận. Tóc chúng hớt cao, mặt mũi sáng sủa quá. Nhưng chúng quả là thú vật, thú vật lắm mới dám càn rỡ vậy. Bonasera nghĩ thế, nhưng không hiểu sao lão vẫn mang máng cảm thấy có một cái gì giả trá bên trong vụ xử nầy.

Dưới cặp lông mày chổi xể, đôi mắt sáng lóng lánh của ngài Chánh án khẽ liếc nhìn khuôn mặt bí xị của Bonasera rồi dừng lại trên chồng đơn xin khoan hồng trước mặt. Ngày cau mặt, rồi nhún vai như sắp phải có một quyết định ngược với chính lòng mình.

- Xét vì tụi bây còn nhỏ, chưa có tiền án và con nhà đàng hoàng… Vả lại xét vì luật pháp đặt ra chẳng phải để trả thù nên toà tuyên phạt mỗi đứa 3 năm tù, cho hưởng án treo!

Bốn mươi năm hành nghề chủ xe đàn, chôn người chết đã quen nên Bonasera giận sôi sùng sục vẫn ngậm miệng làm thinh. Con nhỏ xinh đẹp là thế ngày giờ này còn nằm liệt giường, chiếc cằm bể còn kẹp chưa lành mà cả hai thằng khốn, hai con vật lại ra về thong thả. Vậy là toà phường tuồng còn gì? Kìa cha mẹ chúng đang tíu tít bao quanh hai cậu quý tử. Họ sung sướng, họ cười hả hê.

Bonasera nghiến răng nghe nỗi đắng cay trào lên nghẹn họng. Lão đưa chiếc khăn tay trắng lên bụm chặt miệng, ngó hai thằng khốn đi tà tà trở ra. Mặt chúng tươi rói, chúng tỉnh bơ không thèm nhìn lão một phát. Đành đứng trơ ra vậy. Cha mẹ chúng tò tò đi theo: hai cặp vợ chồng Mỹ trạc tuổi lão, bề ngoài Mỹ rặt bẽn lẽn ra mặt nhưng ánh mắt vẫn cứ vênh váo ngầm.

Không nhịn nổi, Bonasera vuột ra khỏi hàng ghế hét toáng lên:”Được rồi! Tụi mày sẽ được khóc như tao. Con cái tụi mày làm khó tao thì tao sẽ cho tụi mày thử nếm mùi đau khổ!”

Thấy vậy mấy ông luật sư đi sau cùng vội đẩy các thân chủ đi tới, đi nhập một với hai thằng con đang chậm bước hẳn lại làm như chúng sẵn sàng đứng ra bảo vệ cha mẹ vậy. Một bố lục sự đồ sộ còn đứng ra chắn lối Bonasera, sợ lão làm hoảng… nhưng có chuyện gì xảy ra đâu?

Bao nhiêu năm lập nghiệp ở đất này, ăn nên làm ra được cũng vì Bonasera một mặt tin tưởng ở công lý, ở trật tự xã hội. Đứng ngơ ngẩn trước toà, căm thù đến toé khói, đầu óc chỉ lởn vởn ý định trả thù, nghĩa là sắm ngay một khẩu súng, bắn bỏ cả hai thằng khốn, nhưng Bonasera cứ phải cắn răng an ủi mụ vợ đang đứng lặng người chưa hiểu chuyện gì:”Thôi vậy là mình bị chúng giỡn mặt rồi! Điệu này đành phải lết tới ông Trùm mới xong… “

Lão quyết định tìm tới cố nhân Corleone, tốn bao nhiêu thì tốn…

Một mình trong căn phòng khách sạn diêm dúa ở Los Angeles, kép Johnny Fontane cũng mượn rượu giải sầu như bất cứ thằng đàn ông nào bị vợ bỏ trên cõi đời này. Nằm bật ngửa trên tấm nệm đó, hắn đưa chay úytki lên uống ừng ực, rồi vớ xô nước đá lạnh tợp vài ngụm đưa cay.

Bốn giờ khuya, rồi men rượu bốc lên, đầu óc hắn chỉ lởn vởn ý định “thịt” con vợ, nếu nó về đây. Nếu nó còn về. Không lẽ giờ này “phôn” về cho con vợ cũ, thăm hỏi mấy đứa con hay phá mấy thằng bạn, gọi dựng nó dậy? Kỳ cục quá. Mình xuống dốc rồi. Chớ hồi đang lên thì nửa đêm chợt nhớ ra “phôn” chơi chơi cho bạn bè mới là tình sâu nghĩa nặng. Chán mớ đời. Hắn mỉm cười chua chát, nhớ ngày nào chỉ nội chuyện lên, xuống của chàng Johnny Fontane cũng làm nhức tim mấy cô đào lớn nhất nước Mỹ.

Mãi mới nghe tiếng khoá mở lách cách. Johnny biết là nó về, nhưng vẫn làm bộ tỉnh bơ nốc rượu. Nó bước vô, nó đứng sững ngay trước mặt, hắn cũng cứ ì ra. Coi, con này còn đẹp quá chớ? Khuôn mặt thiên thần, đôi mắt tím mơ huyền, khổ người mình dây vô cùng cân đối. Trên màn bạc nó càng lộng lẫy, mỹ miều nữa. Trách nào cả triệu anh mê, sẵn sàng bỏ tiền mua vé xinê chỉ cốt để chiêm ngưỡng dung nhan Margot Ashton.

Johnny lè nhè hỏi:”Mày đi đâu về giờ này?” Nó buông một câu:”Đi ngủ với trai”. Giận quá, hắn gạt tung cái bàn, nhảy dựng lên túm cổ. Toan đập thì khựng lại, buông xuôi tay. Con khốn nạn cười ngặt nghẽo, cười phá lên. Đành phải đập. Họng nó la lớn: ”Ê, không đánh vào mặt. Tao đang đóng phim nghe!”

Thế là Johnny cứ bụng mà loi. Nó té ngửa, hắn nhào theo, đè cứng. Nó nghẹt thở, há miệng thở hồng hộc, hơi thở nghe lại thơm thơm nữa! Hắn bèn lựa mấy chỗ thịt non, phơi nắng đỏ hồng ở đùi, ở vai để cứ thế mà giộng túi bụi, giộng ồ ạt như hồi còn nhỏ quen bắt nạt mấy đứa nhỏ đầu đường xó chợ. Cái lối “tẩm quất” này thấm đòn đáo để mà khỏi sợ để lại vết tích, tang chứng như gãy răng, bể miệng.

Nhưng làm sao “tẩm quất” nó mãi được. Johnny chịu. Con khốn nạn biết vậy nên cười hăng hắc, cười thách thức. Lớp váy lụa thêu bên trong lộ ra, nó nằm xoạc cẳng, nằm tô hô ra, miệng la lớn:”Đây này. Mày cứ đánh đi, đánh nữa đi… Mày thì chỉ có thế!”

Chán quá, Johnny lồm cồm bò dậy. Hận lắm nhưng lại đánh không nổi con điếm này chỉ vì nó đẹp quá, đẹp quá đi. Margot cũng vùng dậy theo, nhún một phát là đứng phắt dậy, đứng chống nạnh trước mặt…, rồi đi một đường vũ ưỡn ẹo, nhún nhẩy “chọc quê”.

- Mày đập tao… ăn thua gì! Như con nít vậy… Cái thứ mày thì làm ăn gì? Không bằng một đứa con nít! Vậy mà cũng đàn ông. Bộ mày cũng làm tình cũng như mày “sủa” mấy bài máy nước ấy hả? Còn lâu! Thôi nhé, bái bai Johnny…

Thế là nó biến vào phòng ngủ, khoá cứng cửa lại. Johnny ngồi bệt xuống sàn, chán nản úp mặt vào hai bàn tay, mệt mỏi, nhục nhã đến rã rời người.

Một lúc sau, nhờ chịu đựng thất bại đã quen nên gắng gượng lấy lại tinh thần, Johnny nhấc điện thoại lên, gọi một chiếc tắc xi ra phi trường cấp tốc. Phải bay về New York ngay. Tình hình này nguy ngập quá. Chỉ có một người cứu vãn nổi hắn. Chỉ có một người đủ thế lực đủ sáng suốt thương yêu hắn. Đó là bố già Corleone.

Ông chủ lò bánh Nazorine người mập mạp in hệt một ổ bánh mì Ý. Quần áo bám đầy bột, hắn bực bội cằn nhằn vợ con. Chú làm công Enzo đâm hoảng hồn vì vụ này: bộ đồ tù binh mặc vô rồi, đeo băng tay chữ xanh đàng hoàng rồi mà trễ giờ sang trại tập hợp thì nguy quá! Hắn thuộc đám vài ngàn tù binh Ý được trưng dụng làm thợ để phục vụ kỹ nghệ sản xuất nên lỡ có chuyện lộn xộn phải trở về nghiệp cũ thì đau khổ lắm lắm.

Ông chủ lớn tiếng chất vấn:”Mày tính bêu xấu gia đình tao? Mày biết là hết chiến tranh này mày sớm muộn cũng bị tống cổ về Sicile nên mày cố tình để lại cho con gái tao một cái bầu kỷ niệm chứ gì?”. Cu cậu Enzo người thấp lùn, vạm vỡ vội cuốn quýt đưa tay lên ngực thề:”Thưa ông chủ… Tôi xin thề có Đức Mẹ, tôi không dám lợi dụng lòng tốt của ông chủ. Tôi thương cô chủ thiệt tình, tôi muốn xin cưới hỏi đàng hoàng. Tôi thật không nên không phải, nhưng nếu bị tống về xứ thì chẳng thế nào trở qua được. Đành phải xa Katherine vĩnh viễn”.

Lúc bấy giờ bà chủ mới gắt:”Thôi im đi, đừng vớ vẩn nữa. Anh biết phải làm gì mà? Thằng Enzo cứ việc ở lại, có gì gởi nó qua Long Island với bà con mình”.

Katherine chỉ có khóc. Con bé mập tròn, quê mùa và trông như có ria mép thế kia thì kiếm sao nổi một thằng chồng bảnh như Enzo? Cái thằng lại biết chiều chuộng đúng cách, đúng chỗ nữa! Quay sang phía bố, con bé nức nở:”Ba không có cách gì giữ Enzo thì con sẽ bỏ nhà này đi theo anh ấy. Con về Ý liền…”

Nazorine ngắm con nhỏ. Đúng típ con gái bố. Nó hăng lắm. Có lần rõ ràng, ban ngày ban mặt nó dám âu yếm cạ bàn toạ vào trán thằng Enzo lúc thằng này cúi phía sau lom khom bưng khay bánh chất vô quầy. Vụ này không khéo dàn xếp thì tụi nó dám làm bậy lắm. Đành phải kiếm cách vận động cho nó ở lại, nhập tịch dân Mỹ. Chỉ có một người thu xếp nổi. Bố già Corleone chớ ai?

Ba người nói trên cũng như nhiều người khác đều nhận được thiếp mời của bố già Corleone dự lễ vu quy của cô gái út Costanzia vào thứ Bảy cuối tháng Tám năm 1945. Dù bây giờ nhà cao cửa rộng bên Long Island nhưng một người như Vito Corleone đâu thể quên bạn bè cũ, láng giềng giềng xưa.

Đám cưới linh đình, khách đến đông, ăn uống suốt ngày. Một dịp vui đúng lúc quá. Chiến tranh với Nhật vừa dứt xong, đâu còn nơm nớp sợ tin dữ chợt tới cho đứa con ngoài mặt trận nên ai nấy cùng vui thả dàn. Muốn vui thì còn gì bằng đi đám cưới?

Vì lẽ đó sáng thứ Bảy bạn bè Ông Trùm từ New York kéo rốc sang. Đồ mừng cô dâu là những phong bao màu kem đầy tiền, tiền mặt chớ ngân phiếu thì khỏi. Kèm theo là tấm thiếp ghi rành rẽ tên người mừng, càng tôn kính ông bố bao nhiêu thì tiền mừng cô dâu càng bộn bấy nhiêu.

Ông trùm Vito Corleone típ Mạnh thường quân, ai có chuyện nhờ vả cũng không để cho thất vọng. Không hứa hão, không có lối chối từ “Tôi không đủ sức”. Không cứ bạn bè quen biết mà cũng chẳng cần sau này có thể đền đáp được hay không. Chỉ cần mỗi một thứ, đó là tình bạn, do đích thân đương sự nói lên. Chừng đó thì bất luận giàu nghèo sang hèn, Ông Trùm cũng lưu ý giải quyết giùm kỳ được, san bằng mọi trở ngại cho lúc thành toàn mới thôi.

Vì đức tính đó, Vito Corleone có nhiều bạn và được tôn xưng Ông Trùm, thình thoảng còn có người thân mật gọi Bố Già. Và để tỏ lòng tôn kính thì một món quà nhỏ mọn đủ rồi, đừng nói đến lợi. Một bình rượu chát nhà cất lấy, một giỏ bánh cay tarelles ngày lễ giáng sinh. Cùng lúc đó nếu biết điều thì nên kín đáo tự coi như mình có nợ để ân nhân có quyền cho gọi tới, mỗi khi có chút việc muốn nhờ lại.

Ngày gả con gái là ngày trọng đại, đích thân Ông Trùm ra đón khách tận bậc cửa lớn. Toàn bạn bè quen thân, tin cậy cả, trong số đó thiếu gì kẻ nhờ giúp đõ mà làm nên sự nghiệp, nhân dịp vui mừng này mới dám gọi tiếng bố già thân mật? Giúp đỡ đám cưới toàn là bạn bè tự động chạy tới. Chẳng hạn như khoản rượu, tất cả mọi thứ rượu đã có một ông bạn già bao hết, lại còn xung phong lãnh chân barman. Dọn bàn ghế, bưng thức ăn là đám bạn của mấy đứa con trai. Nấu cỗ là mấy bà bạn trong khi bồ bịch cô dâu lãnh vụ treo đèn kết hoa tưng bừng đầy một khu vươn nửa mẫu.

Đã là khách thì Ông Trùm tiếp đón như nhau hết, tuyệt không có kẻ khinh người trọng. Xưa này vẫn vậy. Đặc biệt hôm nay Ông Trùm lên bộ đồ lớn cắt thật khéo, chạy tới chạy lui lăng xăng nên anh nào không biết dám tưởng bậy là chú rể lắm!

Đứng sau Ông Trùm là hai trong số ba đứa con trai. Đứa lớn tên Santino nhưng trừ ông bố ra ai cũng gọi là Sonny. Cậu cả này bị các bậc cha chú kỵ lắm nhưng bọn trẻ lại khoái. Gốc Ý, mới nhập tịch dân Mỹ có một đời mà vóc dáng được như hắn có thể gọi là lớn con: Sonny cỡ thước tám nhưng nhờ mớ tóc quăn dày cộm trông cao hơn nhiều.

Khuôn mặt hắn đều đặn và rõ nét đa tình, miệng rộng môi dày và cằm lẹm vô một chút nên trông càng dâm.

Mấy bà sồn sồn hông to miệng rộng thấy cậu cả là tha hồ ngắm nhưng đặc biệt trong đám cưới này có ngắm cũng vô ích. Vì dù có mặt vợ hắn và ba đứa con nhỏ, Sonny vẫn ngấp nghé cô bé phù dâu Lucy Mancini đang ngồi đây kia, rực rỡ trong bộ phù dâu màu hồng, mớ tóc đen nhánh cài một vòng hoa. Làm gì cô nàng không biết? Suốt một tuần nay hai đứa nhấm nháy nhau chán chê và sáng hôm diễn tập trước bàn thờ Chúa nàng còn bấm tay chàng một phát. Phù dâu bạo đến thế là cùng.

Đối với em Lucy thì chẳng cần anh Sonny phải hách như ông già. Mạnh khoẻ, gan dạ đủ rồi. Tính hắn rộng rãi, bụng dạ cũng hào sảng chớ đâu phải chỉ giỏi cái khoản kia? So với Ông Trùm thì Sonny thiếu đứt nết khiêm tốn, dễ giận, dễ cáu, quyết định nông nổi. Vì vậy trong công việc làm ăn hắn giúp bố rất đắc lực mà ít ai tin một ngày kia hắn sẽ là người kế vị.

Cậu hai Frederico, gọi tắt là Fred có thể nói là đứa con trai trong mộng của mọi gia đình; y chăm chỉ, có hiếu, bố gọi đến là dạ ngay. Ba mươi tuổi đầu vẫn chưa có vợ, vẫn ở chung với bố mẹ. Không hề cãi lại, dây dưa với cô nào để gây phiền phức cho gia đình. Người tầm thước, mặt mũi không được bảnh trai nhưng cũng phảng phất nét đa tình nghĩa là mái tóc xoăn rậm, cặp môi chì dầy thưỡi ra.

Típ người Fred chẳng phải trời sinh ra để chỉ huy. Hắn mềm quá, thiếu hẳn cái mãnh lực buộc người khác phải tuân lệnh nên chắc chắn việc kế nghiệp chẳng bao giờ đến hắn.

Đứa con trai út trong nhà, cậu ba Michael không đứng cùng hai anh phía sau lưng Ông Già mà ngồi riêng một nơi, ở tuốt một góc vườn. Nhưng có ngồi tách ra vẫn cứ bị thiên hạ chú ý như thường vì cả nhà chỉ có một mình hắn là dám cưỡng lệnh Ông Trùm. Trông hắn không đa tình như hai anh, mái tóc đen láng chớ không xoăn. Da mịn như con gái nên hắn đẹp trai một cách thanh tú. Hồi còn nhỏ Ông Trùm cứ e ngại thằng út quá nhiều nữ tính, mãi đến năm 17 tuổi ông mới yên tâm.

Chủ ý của Michael là tuyệt đối không muốn dính dáng đến việc nhà, không dây dưa vào công việc làm ăn của bố nên ngồi cũng ngồi tách ra một nơi. Bên cạnh hắn là cô bồ cả nhà chỉ nghe nói, mãi hôm nay hắn mới dẫn về. Michael giới thiệu rất chững chạc nhưng xem ra chẳng ai khoái vì nhà này quả không hạp với típ đàn bà con gái Mỹ. Họ chê cô này gầy quá, mặt mũi “trí thức” quá mà cứ chỉ quá luông tuồng. Ngay cái tên nghe cũng lạ tai rồi, đàn bà con gái gì mà tên Kay Adams? Nó Mỹ quá, ngắn ngủn quá… nghe không vô.

Ông Trùm làm như không chịu Michael, điều đó thấy rõ. Chẳng là hồi trước hắn là con cưng trong nhà, sẵn sàng kế nghiệp sau này vì hắn giống bố in hệt ở chỗ ngoài sự khôn ngoan còn có một quyền lực tiềm ẩn, làm như trời sinh ra để làm lãnh tụ, hễ cất tiếng nói là thiên hạ không nghe không xong vậy.

Có điều chiến tranh vừa bùng nổ là cậu ba Michael hăng hái nhảy ngay vô Thủy quân lục chiến, coi lệnh cấm của bố như không có. Ai chớ Ông Trùm đời nào chấp nhận để cho thằng con trai út nhào đầu vô chỗ chết, phục vụ cho những thằng ở đâu đâu và hy sinh lãng nhách như vậy? Lập tức có màn tung tiền ra vận động ngầm, lo lót bác sĩ nhà binh. Vận động đủ mọi mặt, tốn kém kể gì nhưng làm sao cản nổi một gã con trai 21 tuổi khi nó nhất định xung phong?

Sau đó Michael đi tác chiến, đánh trận tùm lum miền Thái bình dương, lên lon Đại úy và bắt nhiều huy chương. Năm 1944, tạp chí Life đi nguyên một phóng sự bằng hình ca ngợi chiến công hiển hách của Đại úy Michael Corleone. Tờ báo một ông bạn đưa cho Ông Trùm coi chứ người nhà đâu dám? Ông bố chỉ nhún vai lẩm bẩm: ”Cái thằng… chỉ hùng cho người ngoài!”

Đầu 1945, sau thời gian nghỉ dưỡng thương, Michael được giải ngũ mà không ngờ chính ông bố đã vận động vụ này. Nhưng về nhà mới có vài tuần thì chẳng cần bàn bạc hỏi ý kiến ai, cậu Út đã mau mau ghi tên học Dartmouth. Để có cớ không phải ở nhà. Phải vụ đám cưới con em gái, Michael mới bò về nhà để luôn thể trình diện vị hôn thê.

Ngồi sóng vai ở tuốt một góc vườn, Kay lấy làm khoái chí nghe chàng kể những mẩu “chuyện vui” về mấy ông khách kỳ dị hiện có mặt trong đám cưới ngày hôm nay. Với cô nàng thì bất kỳ chuyện gì vui lạ, ngồ ngộ đều khoái nghe lắm. Michael càng ham kể…

Sau cùng Kay nhận ra một đám bốn ông khách đang quanh quẩn quanh hũ rượu chát tổ bố. Nàng đoán mấy ông này phải có chuyện bối rối, bứt rứt chớ chẳng đi ăn cưới khơi khơi. Michael khen ngay: ”Em nhận xét tinh lắm. Mấy cha đó chắc có chuyện nan giải, muốn gặp riêng ông già để nhờ vả đấy. Thấy không, ông già đi đến đâu là mắt họ dõi theo theo đến đấy".

Ông Trùm Corleone đang đứng đón khách thì một chiếc Chevy đen ở đâu chạy tới dừng ở vỉa hè bên kia phía ngoài cư xá. Có hai thằng ngồi băng trước. Chúng lấy sổ tay ghi từng số xe một, không cần dấu diếm.

Sonny vội phi báo: ”Cớm, bố ạ!”

Ông Trùm nhún vai: ”Kệ chúng nó… Ngoài lộ thì chúng làm gì tha hồ. Mình đâu có mua hết đất nhà nước?”

Sonny giận đỏ mặt. “Mấy thằng khốn…, không nể nang gì hết!” Nó hăm hở nhảy mấy bậc cửa, chạy băng ngang cư xá tới kế bên chiếc Chevy đen, thò cổ vào toan hùng hổ với mấy thằng lái xe. Thằng cớm phớt tỉnh móc ví chìa tấm thẻ hình sự. Sonny làm thinh lùi lại, nhằm cửa sau xe nhổ một phát nước bọt rồi quay lưng tà tà đi. Hắn cố ý mong cho thằng lái xe chạy theo để lọt vào cư xá là có chầu ăn đòn hội chợ, nhưng đời nào nó mắc mưu.

Vừa bước lên Sonny vừa cằn nhằn: ”Bọn FBI bố ạ! Nó lấy hết số xe”

Vụ FBI cho agiăng tới “đi đám cưới” đã được tiên liệu rồi nên theo lời khuyến cáo của Ông Trùm, bọn đàn em và mấy ông bạn thân nhất bữa nay đều xài xe đi mượn hết. Thằng Sonny nóng giận vô lý thật nhưng xét ra cũng có lợi là chứng minh cho bà con anh em biết chẳng ai mời cớm đến mà e ngại.

Giận thì Ông Trùm không giận vì từ bao lâu rồi ông vẫn chủ trương là trên cõi đời này có nhiều khi bị người ta chửi vào tận mặt cũng vẫn phải nhịn nhục lờ đi với niềm an ủi miễn còn sống được, còn mở mắt ra được thì còn có ngày một thằng hèn yếu nhất có quyền rửa hận một tay thế lực nhất. Nhiều anh phải phục lăn Vito Corleone ở điểm nhịn nhục này.

Ở sân sau ban nhạc bắt đầu chơi. Khách khứa đủ mặt rồi. Ông Trùm Corleone bèn quên béng vụ FBI để hớn hở dẫn hai thằng con trở vô.

Khu vườn rộng đen nghẹt cả trăm người. Ai khoái khiêu vũ thì nhảy lên chiếc bàn gỗ kê cao khỏi mặt đất chung quanh treo đèn kết hoa. Bằng không thì ngồi dài dài khắp vườn vì chỗ nào cũng có bàn, thức ăn thơm ngon chất như núi và rượu chát, thứ nhà làm đặc biệt thì từng hũ lớn 5 lít một.

Bàn danh dự của cô dâu chú rể dĩ nhiên phải cao hơn một chút. Bọn phù dâu phù rể đứng ngồi quây quần quanh cô dâu Connie. Đám cưới tổ chức đặc biệt theo phong tục cổ của người Ý, dĩ nhiên cô dâu chẳng hài lòng chút nào. Nhưng có “nhà quê” cũng phải chịu, phải chìu vì nội cái vụ chọn thằng Carlo Rizzi làm chồng cũng đã nghịch ý ông bố quá sá rồi! Vì đối với gia đình này thì Carlo Rizzi “lai” 50%. Cha nó gốc Sicile thật nhưng mẹ người miền Bắc nên nó có mớ tóc vàng và cặp mắt xanh thế kia. Cha mẹ nó lập nghiệp ở Nevada nhưng cu cậu phải bỏ xứ đi vì có chuyện lộn xộn với pháp luật. Lên New York sống nó gặp Sonny và chớp luôn con em. Trước khi gả con, dĩ nhiên Ông Trùm phải cử một số đàn em tin cẩn đi Nevada để điều tra về gia thế cậu rể tương lai. Thì ra Carlo bị dính vô một vụ súng ống sao đó nên phải trốn chứ thực ra vụ này giải quyết dễ cái một. Nhưng cái hay trong vụ này là Ông Trùm đã đánh hơi ra vụ thầu sòng bạc ở Nevada kiếm ăn rất ngon nên tiện thể sai bọn đàn em đi làm một công hai việc.

Conny Corleone thực ra không đẹp vì thuộc típ con gái thì gầy nhưng lấy chồng ít năm sẽ mập thù lù. Tuy nhiên nhờ còn con gái và nhờ bộ đồ cô dâu trắng muốt, cô bé trông lộng lẫy, xinh đáo để. Ngồi bàn danh dự mà tay nó cứ luồn xuống phía dưới bấm đùi chú rể môi chúm lại hôn gió lia lịa.

Connie chịu thằng Carlo ở khoản nó vừa đẹp trai, vừa lực sĩ. Tay nó, vai nó bắp thịt vun lên, cái lưng làm như căng rách bộ đồ đến nơi. Cứ như điệu nó biểu diễn thì Carlo cưng vợ lắm, chìu vợ lắm, rót rượu nó cũng rót hầu. Tuy nhiên tất cả cũng chỉ là kịch, cặp mắt nó chỉ nhấm nháy ngó chiếc túi lụa trắng con nhỏ đeo một bên vai. Cái túi bây lớn và căng ra như thế kia thì phải biết là bộn tiền phong bì! Dám 10.000 hay 20.000 đô không chừng… Carlo mỉm cười. Bấy nhiêu đó đủ rồi. Giai đoạn đầu mà. Chớp được con nhỏ này thì cả đời cứ nằm dài ra cũng không lo đói.

Trong đám quan khách cũng có một vị trẻ tuổi, “lên cây” rất hách đang bận tâm “nghiên cứu” túi bạc kè kè của Connie. Đó là thằng Paulie Gatto mặt lưỡi cày. Thì ra vì quen nghề “ngánh” nên thấy túi bạc ngon ăn là nó động lòng ngó chơi tưởng tượng đớp cách nào ăn chắc cho đỡ buồn, chớ ở đây thì ông nội nó cũng không dám biểu diễn nghề nghiệp.

Vì Xếp Peter Clemenza của nó đây kia! Xếp đang hăng máu khiêu vũ loạn. Già rồi, có bụng rồi mà Clemenza cứ thấy em nào ngon mắt là ôm bừa, nhảy loạn. Ban nhạc chơi một bản Tarantella siêu bình dân nên cô bác hoan nghênh ầm ĩ, Xếp Clemenza lại có dịp biểu diễn những bước lả lướt vô cùng điệu nghệ, nên dù có sừng sững như một ông hộ pháp cũng không “thất nghiệp” một giây một phút. Các cô khoái đã đành, mấy bà sồn sồn cũng bám lấy Xếp, không cho nghỉ! Rốt cuộc mấy cặp trẻ đành rút lui, nhường sàn nhảy cho một mình Xếp quay cuồng. Gặp một bà nhỏ con thì ngực vừa đụng đến cái bụng phệ của Clemenza và hai bên cứ cạ qua cạ lại giữa tiếng rên rỉ của một cây mandoline: hoạt cảnh vừa tục tĩu, dâm đãng lại vừa tức cười nên cử toạ hò reo như sấm.

Rốt cuộc Clemenza mệt bở hơi tai, mồ hôi vã ra, mặt nhợt nhạt đành rút lui và té ngồi trong lòng ghế, đàn em Paulie Gatto vừa kịp thời đưa ra đỡ! Rất mau mắn thằng Gatto bưng ly rượu chát lên tận miệng Xếp, một tay rút chiếc mùi soa lụa lau hầu lia lịa. Cứ uống một hớp rượu là Xếp lại nghỉ mệt một hơi và thở rống như trâu. Vừa lấy lai tí hơi sức là Xếp quay ra sửa lưng thằng đàn em: ” Đây đâu phải chỗ mày đứng làm giám khảo khiêu vũ? Đi cha mày ra ngoài kia, coi xem có gì lộn xộn không nào?". Đàn em Paulie lỉnh gấp.

Ban nhạc cũng nghỉ xả hơi. Lúc bấy giờ thằng Nino Valenti mới nhẩy lên khán đài, vớ lấy một chiếc mandoline rồi chân trái ghếch lên một chiếc ghế, nó vừa vê đàn vừa gân cổ biểu diễn một bản tình ca độc đáo của dân Sicile. Thằng Nino khá đẹp trai nhưng mặt nó say rượu đỏ nhừ. Nó vừa nháy mắt vừa dùng lưỡi điểm lóc chóc những chỗ lời ca tục tĩu nên mấy bà mấy cô ôm bụng cười, còn bọn đàn ông thì khoái chí rống lên phụ hoạ theo từng chập.

Bà Trùm khoái chí bắt nhịp theo như điên nhưng ông Trùm xưa nay đâu có chịu những vụ trai gái lẳng lơ nên lỉnh vào nhà để khỏi phải nghe tiếp. Thấy vậy cậu cả Sonny bèn mắt trước mắt sau xề lại em phù dâu Lucy Mancini. Hắn chỉ ngán có Ông Già và biết dư mụ vợ giờ này còn phải ở dưới bếp sửa lại chiếc bánh cưới. Do đó không biết hắn rỉ tai cái gì mà con nhỏ đứng ngay lên, biến vô trong nhà. Sonny làm bộ đợi vài phút, nói dăm ba câu chuyện bâng quơ rồi theo hút em bé gấp. Vậy mà không dấu được ai vì xét ra em phù dâu Lucy đâu có phải tay vừa? Em Mỹ hoá đến độ vô đại học ba năm là cóc cần tai tiếng nữa. Lucy mấy bữa nay cứ đeo cứng cậu cả Sonny và lả lơi ra mặt vì phù dâu với lại phù rể mà! Mặc dầu thiên hạ thừa biết nhưng em vẫn cứ ngây thơ vén váy cười ngỏn ngoẻn khi leo thang lầu lên phòng tắm. Chỉ một loáng sau đã thấy đàn anh Sonny đưa tay ngoắt rồi

Cái vụ móc ngoéo tưởng là bí mật này có một người biết hết: Đứng trên lầu hé rèm cửa nhìn xuống thì còn cái gì qua mắt nổi Thomas Hagen? Nãy giờ hắn đứng trong phòng Ông Trùm “theo dõi nội vụ” từ đầu đến cuối.

Trên nguyên tắc Hagen là luật sư riêng của nhà này nhưng trên thực tế lại là xử lý thường vụ consigliori tức cố vấn kiêm phụ tá, nghĩa là nhân vật tối quan trọng, chỉ đứng dưới một mình Ông Trùm. Cho nên vừa thấy ổng đi vô là Hagen đã mau mắn có mặt sẵn trong văn phòng. Đâu phải chỉ vì bận đám cưới mà Ông Trùm Corleone buông xuôi hết công việc?

Việc đầu tiên mà Hagen muốn báo cáo gấp là vụ “làm ăn” của cậu cả Sonny nhưng sau khi cân nhắc lợi hại hắn nhăn mặt gác qua một bên. Lờ đi thì hại thật xong cho ông bố biết cái vụ này thì Sonny chỉ có chết. Hắn còn lạ gì tính nết của Bố Già? Ngay trong căn phòng bốn bề toàn sách luật này hắn đã từng phụ tá và cố vấn cho Ông Trùm biết bao nhiêu là vụ điên đầu nên hợp “giơ” quá rồi!

Hagen đi tới bàn bureau, cầm miếng giấy ghi tên những người Ông Trùm bằng lòng tiếp hôm nay. Bố Già vừa bước vô là hắn đưa liền để nghe một lệnh ngắn ngủn: ”Để Bonasera sau cùng nghe”. Hagen vội chạy đi kiếm ông chủ lò bánh mì Nazorine và hướng dẫn vô văn phòng. Thấy Nazorine, Ông Trùm vui mừng đứng lên ôm hôn. Hai thằng chơi với nhau từ thuở bé tí ở quê nhà mà? Sang đất Mỹ hai gia đình còn qua lại thân thiết. Bất cứ lúc nào, nhà Corleone cần đến bánh là có ngay cả xe do ông bạn Nazorine vui vẻ cung cấp. Năm nào cũng vậy, nhiều ít Nazorine cũng đóng niên liễm thật hăng cho nghiệp đoàn làm bánh của Ông Trùm sáng lập từ lâu lắm rồi, vậy mà trừ mấy cái “bông” đường hồi còn chợ đen Nazorine đâu có xin xỏ đòi hỏi gì? Chỗ thân tình như vậy, trung thành như vậy thì Ông Trùm chỉ chờ hỏi đến là giúp đỡ liền.

Đưa mời điếu xì gà Di Nobili và tự tay đưa một ly Strega, Ông Trùm thân mật khoác vai để hai người tâm tình thân mật, khiến Nazorine mạnh miệng hỏi han. Ông chủ lò bánh mang vụ thằng rể tương lai Enzo kể lể. Nó người gốc Sicile, bị quân Mỹ bắt làm tù binh nhưng tạm thời được ở lại làm thợ chuyên môn. Nó mới giúp việc lò bánh và quyến luyến con Katherine. Tụi nó thương nhau quá, nếu thằng này mà bị tống về thì con bé đến chết mất. Và bây giờ chỉ có mình Bố Già Corleone là có thể cứu được chúng.

Hai người đi lại trong phòng, Nazorine kể đến đâu Bố Già Corleone gật gù đến đấy và sau cùng vỗ vai cười mỉm: ”Có vậy thôi ư? Cái vụ này dễ quá mà” Tiếp xúc một ông dân biểu rồi ông dân biểu sẽ đưa nội vụ này ra Hạ viện, nhờ các bồ bịch thông qua một đạo luật nhập tịch đâu vào đấy hết. Có điều phải xì tiền ra, theo thời giá cỡ 2 ngàn đô la chớ mấy? Bảo đảm là xong và chỗ anh em với nhau thì 2 ngàn đô đâu ăn nhằm gì mà đặt cọc hay đưa trước?

Ông chủ lò bánh mì gật đầu gấp, và không ngờ mọi việc lại dễ dàng và Bố Già lại nhân đức đến thế. Lão cám ơn tíu tít, nước mắt rưng rưng khi được đưa ra tận cửa và nghe Ông Trùm xác nhận lại: “Bạn đừng lo nghĩ vớ vẩn nữa. Sẽ có người đến tận nhà bạn lo giùm mọi thủ tục”.

Hagen mỉm cười: ”Khi không được một thằng rể, một chuyên viên giúp việc đắc lực mà lại có người chỉ giùm cho hai ngàn đô xong việc mới trả sau thì cha Nazorine sướng quá còn gì? Vụ này mình giao cho ai thưa bác?”

Ông Trùm cau mày suy nghĩ. Chớ giao cho thằng nhà quê Luteco nghe. Để thằng Fisher làm hay hơn. Nếu cần thì bảo Enzo đổi địa chỉ đi. À chiến tranh chấm dứt tất sẽ có rất nhiều vụ tương tự. Mi nhớ gài sẵn người của mình ở Washington để có áp phe nhập tịch là bắt liền. Mỗi vụ tối thiểu 2 ngàn đô đâu phải đồ bỏ”.

Người thứ hai bước vô là Anthony Coppola. Vụ nhờ vả của nó giản dị hơn nhiều vì nó là chỗ con cháu nhà, xưa kia cha nó cũng làm phu hoả xa với Ông Trùm hồi còn đói khổ. Bây giờ cu cậu cần 5 trăm đô để mở cửa tiệm bánh chiên, mua lò, sắm đồ vặt vãnh mà đào không ra tiền. Nhưng đối với Ông Trùm thì vụ này quá dễ. Người móc túi rút ra mớ bạc nhỏ đếm vừa vặn trên 4 trăm bèn quay sang phía Hagen: ”Mi cho mượn đỡ 100 đô, sáng thứ hai ra băng lấy tiền nhớ nhắc”. Coppola thấy vì mình mà Bố Già phải ngửa tay đi mượn đã ấp úng ”Dạ 4 trăm cũng đủ rồi” nhưng Ông Trùm vỗ vai âu yếm: ”Cháu thông cảm. Đám cưới tốn quá sá nên bác hết tiền mặt”.

Hagen lấy tiền túi đưa ra 1 trăm cho đủ số, đưa thẳng Coppola ra mà phục lăn lối xử thế khôn khéo của Bố Già. Ra điều vì mình mà một nhân vật cỡ Bố Già phải đi vay trăm bạc để cho mượn vốn làm ăn thì cu cậu cảm động để đâu cho hết! Có mấy ông triệu phú chịu làm cái việc phiền phức này bao giờ?

Ông Trùm vừa ngước mắt lên là Hagen báo cáo tiếp:

- Cháu không ghi sẵn…, nhưng thằng Luca Brasi nói muốn vô gặp bác. Chắc có chuyện cần.

- Có gì cần đâu?

- Vụ này chắc bác hiểu nó hơn cháu nhưng cháu đoán nó nhận được thiếp mời nên lấy làm cảm động, muốn gặp bác để cám ơn chắc.

Ông Trùm gật đầu ra hiệu đồng ý.

Đúng lúc đó ở ngoài vườn Kay Adams cũng đang hỏi thăm Michael về ông khách lạ có bản mặt thật cô hồn mang tên Luca Brasi. Trước sau cũng phải giải thích cho cô bé vị hôn thê hiểu sơ qua về gia thế mình nhưng Michael áp dụng chiến thuật tiết lộ từ từ để Kay khỏi sửng sốt hết hồn vì cho tới giờ này cô bé vẫn cứ tưởng Ông Già là người làm ăn, tuy hơi khác thường một chút. Rất thản nhiên, Michael giới thiệu Luca Brasi như một hung thần của giới giang hồ miền Đông. Nét độc đáo trong việc làm ăn của nó là giết người khỏi cần ai phụ giúp và một khi nó đã làm thì pháp luật có biết cũng bó tay vì kiếm được bằng chứng sát nhân của Luca Brasi là một việc xưa nay chưa ai làm được. Không hiểu có đúng như vậy không nhưng nó đối với Ông Già thì trung thành lắm.

Kay trợn mắt ngạc nhiên “Bộ Ông Già xài cả những người như vậy sao anh?”

Cái vụ này chẳng thể trả lời trực tiếp nên Michael đành vòng vo:

- Cỡ 15 năm về trước hình như vụ nhập cảng dầu ăn của ông già bị một bọn toan cưỡng đoạt. Chúng mưu sát ổng tới mấy lần và chút xíu nữa là rồi. May nhờ có Luca Brasi. Người ta kể rằng hồi đó hắn hạ một hơi 6 mạng, vỏn vẹn trong 2 tuần. Phe bên kia ngán quá bỏ cuộc luôn.

- Nói vậy ông già bị bọn găng tơ mưu sát sao?

- Ấy là chuyện 15 năm về trước kìa chứ bây giờ đâu có chuyện gì?

Rất hóm hỉnh, Kay hích cho Michael một cú:”Thôi bồ đừng bịa chuyện để tôi rét, tôi né là bồ khỏi phải làm đám cưới chứ gì? Bồ láu quá!”

- Không, anh nói thật đó.

- Nghĩa là Luca Brasi thủ tiêu 6 mạng thật sao?

- Thì người ta đồn đại, báo chí đăng tùm lum vậy… chớ có bằng chứng gì đâu. Nhưng hình như nó còn làm một vụ gì ghê gớm hơn thế, hãi hùng đến nỗi chính ông già cũng không dám nhắc đến. Vụ này thằng Hagen cũng biết, anh có hỏi mấy lần mà lần nào nó cũng gạt đi. Do đó anh chắc nó phải ghê gớm lắm.

Luca Brasi quả thực là người mà quỉ cũng phải chê. Cứ thấy dạng nó là thiên hạ đã hết hồn vì cả khổ người chắc nịch của nó toát ra sự kinh khủng, cái sọ tổ bố, bản mặt lầm lì rất ư là cô hồn. Cặp mắt nâu lờ đờ không sinh khí mà miệng nó tàn ác ở đôi môi mỏng quẹt như hai miếng thịt bò sống gắn vô.

Trong giới giang hồ, Luca Brasi nổi danh hung thần cực kỳ tàn bạo nhưng cả nước biết nó một lòng thần phục Ông Trùm Corleone. Một trung thần hiếm có, một trong những cột trụ chống đỡ dắc lực. Luca Brasi không sợ trời sợ đất, địa ngục thiên đường nó đều coi như không. Không có cảm tình với bất cứ một ai, không ngán một người nào, kể cả Cảnh sát. Nhưng riêng với Ông Trùm thì nó tự quyết định phải yêu, phải sợ và do đó, phải phục vụ hết mình!

Được đưa vào văn phòng, tự nhiên hung thần đâm ra khép nép, kính cẩn trước mặt Ông Trùm. Nó ấp úng mãi mới ngỏ được lời chúc mừng, đại để mong sao Người sớm có cháu bế, cháu trai. Rồi vụng về đưa ra một bao thư lớn mừng cô dâu chú rể, song đích thân Ông Trùm phải nhận cho mới quý! Nó chỉ muốn có bấy nhiêu mà!

Đứng bên cạnh, Hagen lưu ý cung cách Bố Già tiếp Luca Brasi. Hay thật! Rõ ra là quý mến, từng lời nói cử chỉ đều bộc lộ rõ. Có đều không hề thân mật, làm như đấng quân vương sẵn lòng chấp nhận sự cung kính của một bầy tôi và nó có đích thân đòi đưa đồ mừng tận tay cũng là lẽ tự nhiên vậy.

Một phong dày cộm thế kia thì hiển nhiên phải bộn tiền hơn bất cứ một phong bao nào khác. Luca Brasi đã suy tính cả giờ về vụ phải “đi” cỡ bao nhiêu để hơn hết mọi người và phải đưa tận tay để Bố Già biết cho là nó cung kính hơn ai hết. Biết vậy nên nó có ăn nói vụng về, ngớ ngẩn Ông Trùm cũng vẫn lờ đi.

Hagen nhận thấy rõ bong là được hậu đãi quý hoá như vậy, vẻ mặt cô hồn của Luca Brasi bỗng dưng hiền hậu, ngờ nghệch hẳn đi. Làm như nó khoan khoái lắm, vinh hạnh lắm. Trước khi xin từ biệt nó còn kính cẩn hôn tay Ông Trùm rồi mới theo Hagen đi ra. Mở cửa cho thằng cô hồn này Hagen cũng cẩn thận áp dụng chiến thuật tay mở cửa, miệng nở sẵn nụ cười cảm tình. Vậy mà cái đầu bự của Luca Brasi chỉ sẽ gục gặc và cặp môi thịt thì chỉ khẽ vén lên, đủ để biểu diễn một nụ cười nhạt.

Không riêng gì Hagen, ngay Ông Trùm Corleone đối với Luca Brasi xem ra vẫn cứ “kính nhi viễn chi”. Thấy mặt nó là phải lưu ý, chừng nó đi khuất mới nhẹ nhõm thở ra. Chẳng là Luca Brasi tính nết ngang tàng, như ngựa hoang vậy. Không dễ gì “nắm” được nên dùng nó dễ sợ như phải sử dụng cốt mìn. Sơ sẩy là không xong nhưng vẫn cứ phải dùng… và dùng rất hiệu quả.

Khi cửa đóng lại, Ông Trùm hất hàm hỏi:”Còn một mình Bonasera hả? Nếu vậy đi kiếm thằng Santino (Sonny), biểu nó vô đây trước. Có thể nó có một bài học hữu ích”.

Hagen tất tả trở ra ngoài vườn. Bảo thằng cha Bonasera gắng chờ thêm ít phút rồi hỏi Michael và Kay coi có thấy nó đâu không. Michael lắc đầu là hắn bắt đầu ngại. Thằng Sonny dám lôi con nhỏ vào một xó nào “quất” bừa lắm. Nó đi theo con nhỏ đến nửa giờ còn gì? Sơ sẩy mà đổ bể là mất mặt với gia đình Mancini và con vợ Sonny cũng chẳng hiền gì!

Hắn vừa đi khuất là Kay hỏi ngay:”Ai đấy anh? Anh giới thiệu là anh em… nhưng tên hắn đâu có giống, mà coi chẳng có vẻ người Ý nữa!”

- Vì thằng Tom ở nhà này từ năm nó 12 tuổi mà. Nó mồ côi cha mẹ, và đau mắt tưởng đâu mù luôn. Nó đang sống lang thang thì Sonny bắt gặp và đưa về nhà ở luôn từ hồi đó. Lấy vợ rồi nó cũng không đi đâu hết.

- Nếu vậy thì ông già nhân đức đấy chứ? Có tới 4 mặt con mà còn nuôi thêm thằng con nuôi nữa.

Chẳng buồn giải thích là đối với một gia đình Ý có 4 con chưa phải là nhiều, Michael chỉ cải chính:

- Đâu phải con nuôi? Tom chỉ ở lại, coi nhà này như nhà hắn vậy thôi.

- Ủa, sao không nhận nuôi cho rồi?

- À, tại ông già không muốn. Theo ổng thì bắt con nhà người ta đổi tên họ là hỗn xược. Nhất là đối với những người đã khuất.

Lúc bấy giờ họ nhìn lên thấy Hagen đang đẩy Sonny bước vô căn phòng và đưa tay ngoắt Bonasera. Cô bé Kay ngạc nhiên lắm. Ô hay, sao mấy người này lại kỳ cục vậy? Nhè đúng bữa nhà người ta có đám cưới mà bàn chuyện là ăn!”

Michael lại phải tươi cười giải thích:

- Phong tục xứ Sicile đấy! Đúng truyền thống thì chẳng ai nỡ từ chối ai điều gì trong ngày gả con. Biết vậy nên họ cứ nhè ngày này mà nhờ vả cho chắc ăn.

Lucy Mancini vén cao chiếc váy hồng, tất tả bước lên thang. Cứ tưởng tượng ra khuôn mặt bì bì và đa tình của Sonny giờ này đỏ nhừ vì hơi rượu thì quả thực dễ sợ quá… Nhưng cả tuần nay cô phù dâu chỉ nhắm có bấy nhiêu đó mà? Hồi ở Đại học, Lucy có hai kép thật song anh trước anh sau đều “chạy”, chỉ một tuần lễ du dương là tối đa. Thằng bồ thứ hai còn phê phán:”Đàn bà con gái gì mà… vĩ đại kinh khủng thế” làm nàng hiểu ngay thân phận khác người của mình, không bắt bồ thêm thằng nào nữa trong suốt cả một niên học.

Dịp nghỉ hè được mời làm phù dâu cho bồ Connie, nàng nghe thiếu gì chuyện về kỳ tích của đàn anh Sonny. Hôm chiều chúa nhật, lúc bọn đàn bà con gái quây quần dưới bếp, chính miệng mụ vợ hắn nói ra mà? Mụ Sandra coi mập mạp, tốt tướng, gốc Ý song sang Mỹ từ hồi còn để chỏm. Cao lớn, vú bự như mụ thì lấy chồng 5 năm 3 mặt con là phải.

Sandra doạ dẫm cô em chồng Connie về vụ động phòng kinh khủng.

Mọi người cười ầm lên, riêng Lucy chỉ cảm thấy nhột nhạt cả một khoảng người.

Chính sự nhột nhạt đó làm người nàng bốc lửa lúc bước lên thang lầu. Chừng Sonny ló mặt ra, kéo tuốt nàng qua hành lang, vô một căn phòng trống trơn và đóng sập cửa lại thì Lucy rùng mình, hai chân đứng không nổi. Coi, miệng hắn toàn mùi thuốc lá khét lẹt! Nàng hé môi nín thở vì dưới lớp lụa mát dịu, bàn tay hắn bỗng nóng như lửa, tới chỗ nào là nhột nhạt, khó chịu chỗ ấy.

Tụi nó còn ôm nhau đứng nữa, đứng mãi nếu không có tiếng gõ cửa nhè nhẹ, thận trọng. Rất lẹ làng, Sonny đẩy Lucy về phía sau, rồi sửa sơ qua quần áo hắn đi vội ra phía cửa nhưng cố ý chắn lối… để cửa có mở ra thì thằng ở ngoài vẫn không vô lọt! Trong lúc Lucy cuống quít vuốt lại xiêm y, mắt nhấp nháy mở ra chờ đợi thì có tiếng Hagen hỏi khẽ:”Sonny, phải mày không?”

Mừng ra mặt, Sonny vừa nháy nó vừa hỏi:”Có chuyện gì đó Tom?”

“Ông Già sai tao kêu mày gấp. Lên buya-rô ngay đi”. Chỉ mới nghe loáng thoáng như vậy đã thấy tiếng chân bước đi xa dần. Sonny chỉ kịp hôn từ biệt em bé một phát là mở cửa hối hả chạy theo.

Còn một mình. Lucy bình tĩnh chải lại mớ tóc, móc lại dây nịt coóc xê, vuốt thẳng nếp váy. Người thì mệt rã rời, nghe ngây ngây ở môi, ở má. Tuy thấy rõ cảm giác vướng víu, nhớp nhúa ở mỗi bước chân đi nhưng không ghé qua phòng tắm mà mở cửa ra tất tả đi một mạch xuống vườn. Thản nhiên như không có chuyện gì, Lucy vừa ghé mông ngồi xuống chỗ cũ đã nghe tiếng Connie trách yêu:”Mày đi đâu về… mà coi lừ đừ như say rượu vậy? Ngồi bên tao này, cấm đi nghe!”

Chú rể Carlo bèn xốc tới, hóm hỉnh bưng ly rượu chát tới mời cô phù dâu nhưng cười cái điệu biết hết… Lucy phớt tỉnh nâng ly uống ngon lành. Cả người chợt run run, nàng kín đáo phóng tầm mắt qua vành ly để kiếm thử hình bóng Sonny nhưng chẳng thấy hắn đâu. Ngoài Sonny ra còn kiếm ai làm chi mất công?

Rất hóm hỉnh, Lucy ghé tai bồ Connie tâm sự:”Mày đừng nên nóng! Ráng đợi vài giờ đồng hồ nữa là biết hết. Thú vị lắm nghe!” Cô dâu phát cười sằng sặc trong khi Lucy ra vẻ đàn chị, rất nghiêm trang ngồi hai tay đặt trên bàn đàng hoàng. Như không hề có chuyện gì xảy ra.

Lúc Bonasera được Hagen đưa vô thì Ông Trùm đang ngồi sau chiếc buyarô rộng thênh thang và Sonny đứng ở cửa sổ nhìn xuống vườn. Trọn ngày hôm nay mới thấy nét mặt bố già thản nhiên, lạnh nhạt là một. Không có vụ ôm hôn, một cái bắt tay cũng không vì nếu bà Trùm và vợ lão nhà đòn đám ma chẳng phải bạn từ hồi con gái thì sức mấy Bonasera được mời đi ăn đám cưới? Mà chính lão Bonasera cũng chẳng thèm chơi, chẳng thèm dây dưa với ông bạn Vito Corleone!

Lão chủ xe đòn nhập đề xéo, rất có chiến thuật sau khi đưa mắt nhìn Hagen và Sonny, rõ ràng không muốn có mặt hai thằng này trong phòng nhưng Ông Trùm vẫn cứ lờ đi.

- Xin ông bạn tha lỗi cho con bé cháu không đến dự lễ cưới để chia vui cùng mẹ đỡ đầu của nó được vì cháu còn nằm bệnh viện.

- Chúng tôi biết. Tội nghiệp con nhỏ… Nếu chúng tôi có thể giúp đỡ cháu phần nào thì ông bạn cứ việc cho biết. Bề nào cũng là con đỡ đầu của bà nhà tôi mà?

Cái vụ này là ăn miếng trả miếng! Ra điều “Vợ tôi là mẹ đỡ đầu của nó nhưng ông bạn đâu thèm cho nó nhận thằng này là cha đỡ đầu!” Khuôn mặt bí xị của Bonasera xám như tro. Lão đành nói huỵch toẹt: ”Tôi có chút chuyện muốn nói riêng với ông bạn được không”. Ông Trùm lắc đầu: ”Không được. Hai thằng này không những là phụ tá mà còn là con cháu trong nhà… tôi không tin chúng thì con biết tin ai? Đuổi chúng ra đâu được?”

Bonasera đành nhắm mắt lại bắt đầu kể lể. Giọng lão đều đều như mọi lần vẫn “Xin thành thật có lời chia buồn cùng tang quyến” vậy.

- Tôi chỉ có một mụn con gái là nó. Tôi tin tưởng ở nước Mỹ nên làm ăn có tiền là nuôi con thật đàng hoàng, như bất cứ người Mỹ nào. Tôi không giữ rịt nó ở trong nhà vì tin là đã giáo huấn nó về danh dự gia đình. Nó có thằng bạn thân, không phải người Ý. Đi xi nê với nhau, đi chơi tối với nhau, mà thằng kia chẳng thèm biết đến vợ chồng tôi là ai. Tôi công nhận tôi sơ xuất chỗ đó. Cách đây 2 tháng một hôm nó lái xe rủ con nhỏ đi chơi cùng một thằng bạn nữa. Chúng cho con nhỏ uống uýtky rồi toan làm hỗn. Dĩ nhiên con nhỏ chống cự. Không chịu là tụi nó đập, như đập một con vật vậy. Khốn nạn, lúc tôi vô nhà thương thì con nhỏ mặt mũi tím bầm, mũi dập hàm bể phải kẹp không biết bao nhiêu chỗ! Thấy tôi con nhỏ cứ nức nở: ”Bố ơi, con có làm gì đâu mà chúng nỡ… làm con thế này? Sao chúng nó hành hạ con vậy này?”. Chao ơi, tôi trả lời nó thế nào được? Tôi đành nhìn con mà ôm mặt khóc!

Bonasera ôm mặt khóc thật. Khóc nức nở, nghẹn ngào không nói nên lời thật, dừ tiếng khóc quả tình chẳng có vẻ khóc bao nhiêu! Tuy nhiên, Ông Trùm vẫn phải có một cử chỉ an ủi để lão kể lể thêm chút nữa. Khuôn mặt Bonasera chảy dài ra, mắt lão đỏ ngầu…

- Tôi khóc vì con nhỏ là cuộc đời tôi. Nó đẹp, hiền hậu, dễ thương biết chừng nào… lại tin người có một. Bây giờ thì nó hết tin ai… và còn đẹp với ai được nữa!

Thế rồi tôi mang nội vụ đi thưa Cảnh sát. Cả hai thằng bị bắt ngay và bị truy tố ra toà, đúng theo luật pháp Mỹ quốc. Tang chứng rành rành, cả hai thằng cùng nhận tội hết. Vậy mà toà xử chúng 3 năm tù, cho hưởng án treo.

Chúng ung dung ra về ngay sau phiên xử. Tôi đứng ngơ ngẩn trước toà còn bị hai thằng súc sinh cười vào mặt nữa. Tôi bèn nói với nhà tôi: ”Việc này phải nhờ đến Ông Trùm mới xong…”

Ông Trùm khẽ cúi đầu thông cảm nỗi đau khổ của lão. Nhưng khi lên tiếng thì tiếng nào cũng gằn giọng, bực bội: ”Biết thế thì ông bạn sao lại đi thưa với Cảnh sát? Tại sao không đến tôi ngay chứ?”

Bonasera không trả lời mà chỉ sụt sịt: ”Bây giờ tôi nhờ ông bạn. Ông bạn muốn thế nào xin cứ cho biết. Bao nhiêu cũng được, miễn xong công việc… “Muốn thế nào, bao nhiêu cũng được. Cái thằng chỉ có tiền, chẳng biết đến tình, chẳng còn biết cái gì nữa. Ông Trùm bèn gằn giọng: ”Ông bạn nhờ cái gì mới được chứ?”

Bonasera liếc nhìn Hagen, Sonny và lắc đầu quầy quậy. Không nỡ lòng, Ông Trùm bèn xích người gần lại chút nữa và chìa tai ra để cho hắn thầm thì. Lão chồm tới, rỉ tai khe khẽ. Người thì thào, người chìa tai ngó mông như linh mục nghe xưng tội vậy. Một lát sau, Bonasera mới ngồi ngay người lại, chờ đợi.

Ông Trùm ngó ngay mặt làm lão đỏ mặt nhưng vẫn cứ giương lên…

“Cái vụ đó làm thế nào được. Ông bạn điên đầu rồi!”. Vậy mà lão còn đề nghị với một phát “Ông bạn muốn bao nhiêu tôi cũng chịu hết”.

Giọng rành rẽ, tỉnh bơ của Bonasera làm Hagen khẽ nhăn mặt, lắc đầu. Thằng Sonny nãy giờ đứng quay lưng nhìn ra cửa sổ cũng phải quay quắt lại ngó sững. Đang ngồi ở sau buya rô. Ông Trùm đứng dậy lên tiếng. Giọng không hề giận dữ mà tiếng nào tiếng đó như búa bổ:

- Ông bạn và tôi, tụi mình biết nhau quá lâu rồi. Nhưng có bao giờ ông bạn thèm hạ cố tới chơi, hay nhờ vả chuyện gì? Mà ông bạn cũng chẳng thèm mời lại nhà chơi, dù chỉ để uống một chén trà. Mà vợ tôi lại là mẹ đỡ đầu của con bé cháu đấy! Xin lỗi, tôi nói đâu có sai? Ông bạn không thèm chơi, không thèm dây dưa… làm gì tôi chẳng biết.

- Tại tính tôi không muốn rắc rối…