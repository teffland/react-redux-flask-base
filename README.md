# React Redux Router Base

This repo gives the boiler plate for a client-server architecture that has the following setup:

### Client

The client application is a single page application (SPA) built with:
* React for UI rendering
* Redux for state management
* Routing for semantic routing within the application

It's configured with webpack and babel to allow use of the more legible ES2015 javascript syntax.

### Server

The server is a simple REST API Flask App for serving data to the client along with the client index.html

It is setup to allow authentication using JWT tokens, see [server readme]() for details.
