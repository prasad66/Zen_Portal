
## HyperText Transfer Protocol (HTTP)
<br>

<div align="justify">Invented by Tim Berners-Lee at CERN in the years 1989–1991, HTTP (Hypertext Transfer Protocol) is the underlying communication protocol of World Wide Web. HTTP functions as a request–response protocol in the client–server computing model. HTTP standards are developed by the Internet Engineering Task Force (IETF) and the World Wide Web Consortium (W3C), culminating in the publication of a series of Requests for Comments (RFCs). The following are the versions</div> <br>       


| year   | version   |      Features                      |
| ------ |:---------:| :----------------------------------|
| 1991   | HTTP/0.9  | The One-line Protocol              |
| 1996   | HTTP/1.0  | Building extensibility             |
| 1997   | HTTP/1.1  | The standardized protocol          |
| 2015   | HTTP/2    | protocol for greater performance   | 
| 2015   | HTTP/3    | HTTP over QUIC (upcomming & draft) | 

<br>
 
 ![Timeline of HTTP](https://github.com/prasad66/August_07/blob/main/timeline.JPG)
  
 <br>
 
### HTTP/0.9 — The One-line Protocol (1991)
***
* Initial version of HTTP — a simple client-server, request-response, telenet-friendly protocol
* Request nature: single-line (method + path for requested document) <br>
   ``` 
   GET /mypage.html
   ```
* Methods supported: GET only
* Response type: hypertext only (extremely simple too: it only consisted of the file itself.)
   ``` 
  <HTML>
  A very simple HTML page
  </HTML>
   ```
* Connection nature: terminated immediately after the response
* No HTTP headers (cannot transfer other content type files), No status/error codes, No URLs, No versioning
* In case of a problem, a specific HTML file was sent back with the description of the problem contained in it, for human consumption.
<br>

### HTTP/1.0 - Building extensibility (1996)
***

HTTP/0.9 was very limited and both browsers and servers quickly extended it to be more versatile:

  * Versioning information is now sent within each request (HTTP/1.0 is appended to the GET line)
      ``` 
      GET /mypage.html HTTP/1.0
      User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)
      ```
  * A status code line is also sent at the beginning of the response, allowing the browser itself to understand the success or failure of the request and to adapt its behavior in consequence (like in updating or using its local cache in a specific way)
      ``` 
      200 OK
      Date: Tue, 15 Nov 1994 08:12:31 GMT
      Server: CERN/3.0 libwww/2.17
      Content-Type: text/html
      <HTML>
      A page with an image
        <IMG SRC="/myimage.gif">
      </HTML>
       ```
  * The notion of HTTP headers has been introduced, both for the requests and the responses, allowing metadata to be transmitted and making the protocol extremely flexible and extensible.
  * With the help of the new HTTP headers, the ability to transmit other documents than plain HTML files has been added (thanks to the Content-Type header).
  * Methods supported:  ```GET``` , ```HEAD``` , ```POST```
  <br>

### Establishing a new connection for each request — major problem in both HTTP/0.9 and HTTP/1.0
***
<div align="jusitfy">Both HTTP/0.9 and HTTP/1.0 required to open up a new connection for each request (and close it immediately after the response was sent). Each time a new connection establishes, a TCP three-way handshake should also occur. For better performance, it was crucial to reduce these round-trips between client and server. HTTP/1.1 solved this with persistent connections.</div>
<br>
<div align="jusitfy">These novelties have not been introduced as concerted effort, but as a try-and-see approach over the 1991-1995 period: a server and a browser added one feature and it saw if it got traction. A lot of interoperability problems were common. In November 1996, in order to solve these annoyances, an informational document describing the common practices has been published, RFC 1945. This is the definition of HTTP/1.0 and it is notable that, in the narrow sense of the term, it isn't an official standard. </div>

### HTTP/1.1 - The Standardized Protocol (1997)
***
Since 1995, well before the publication of HTTP/1.0 document the next year, proper standardization was in progress. The first standardized version of HTTP, HTTP/1.1 was published in early 1997, only a few months after HTTP/1.0.

HTTP/1.1 clarified ambiguities and introduced numerous improvements:

  * A connection can be reused, saving the time to reopen it numerous times to display the resources embedded into the single original document retrieved.
  * Pipelining has been added, allowing to send a second request before the answer for the first one is fully transmitted, lowering the latency of the communication.
  * Chunked responses are now also supported.
  * Additional cache control mechanisms have been introduced.
  * Content negotiation, including language, encoding, or type, has been introduced, and allows a client and a server to agree on the most adequate content to exchange.
  * Thanks to the Host header, the ability to host different domains at the same IP address now allows server colocation.

### Keep-Alive header
***
  * The Keep-Alive header was used prior to HTTP/1.1 and was obsoleted by HTTP/1.1 making persistent connections the default behavior. 
  * Keep-Alive header can be used to define policies for long-lived communication between hosts (i.e. allows a connection to stay active until an event occurs). 
  * This laid foundation for persistence, reusable connections, pipelining, and many more enhanced capabilities in modern web communication protocols.

### Hyper Text Transfer Protocol Secure (HTTPS)
***

  * Hyper Text Transfer Protocol Secure (HTTPS) is the secure version of HTTP. It uses SSL/TLS for secure encrypted communications.
  * Originally developed by Netscape in mid-1990s, SSL (Secure Socket Layer) is a cryptographic protocol enhancement to HTTP, which defines how client and server should communicate with each other securely. TLS (Transport Layer Security) is the successor of SSL.
  * An HTTPS connection can protect the data transfer from the man-in-the-middle attacks and common security threats by providing bidirectional encryption for communications between a client and server.
  * Although HTTPS is secure by its design, the SSL/TLS handshake process consumes a significant time before establishing an HTTPS connection. It normally costs 1–2 seconds and drastically slows down the startup performance of a website.

### HTTP/2 - A Protocol For Greater Performance 
***
 * In the first half of the 2010s, Google demonstrated an alternative way of exchanging data between client and server, by implementing an experimental protocol SPDY. This amassed interest from developers working on both browsers and servers.  
 * SPDY served as the foundations of the HTTP/2 protocol.
 * SPDY defined an increase in responsiveness, and solving the problem of duplication of data transmitted.

### The HTTP/2 protocol has several prime differences from the HTTP/1.1 version:
***
 * It is a binary protocol rather than text. It can no longer be read and created manually. Despite this hurdle, improved optimization techniques can now be implemented.
 * It is a multiplexed protocol. Parallel requests can be handled over the same connection, removing the order and blocking constraints of the HTTP/1.x protocol.
 * It compresses headers. As these are often similar among a set of requests, this removes duplication and overhead of data transmitted.
 * It allows a server to populate data in a client cache, in advance of it being required, through a mechanism called the server push.

Officially standardized, in May 2015, HTTP/2 has had much success. By July 2016, 8.7% of all Web sites were already using it (see these stats), representing more than 68% of all requests (see these statistics). High-traffic Web sites showed the most rapid adoption, saving considerably on data transfer overheads and subsequent budgets.
