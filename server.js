// server.js

// Import the built-in Node.js 'http' module.
// This module allows Node.js to act as an HTTP server, demonstrating its server-side capabilities.
const http = require('http');

// Define the port on which the server will listen for incoming requests.
const port = 3000;

// Create an HTTP server instance.
// The callback function (req, res) => { ... } is executed for every incoming HTTP request.
const server = http.createServer((req, res) => {
  // Set the HTTP status code to 200 (OK) and the Content-Type header.
  // 'charset=utf-8' ensures proper display of Turkish characters.
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // Send the response body to the client.
  // This message directly relates to the article's context, indicating the application is running on Node.js.
  res.end('Merhaba Node.js! Rocky Linux 9 üzerinde çalışıyorum.\n');
});

// Make the server listen on the specified port.
// The callback function is executed once the server successfully starts listening.
server.listen(port, () => {
  console.log(`Node.js sunucusu http://localhost:${port} adresinde çalışıyor.`);
  console.log('Tarayıcınızda bu adresi ziyaret ederek uygulamayı test edebilirsiniz.');
  console.log('Sunucuyu durdurmak için terminalde Ctrl+C tuşlarına basın.');
});

// This example demonstrates a fundamental use case for Node.js: creating a web server.
// After installing Node.js (as described in the article), you can run this file to see it in action.
