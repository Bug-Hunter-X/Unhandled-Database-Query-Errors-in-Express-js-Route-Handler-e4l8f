# Unhandled Database Query Errors in Express.js

This example demonstrates a common error in Express.js applications: failing to handle errors properly during database queries.  If a database query fails, the server crashes instead of gracefully handling the error and responding to the client.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution that includes proper error handling.

## How to reproduce:

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Run the application: `node bug.js`
4.  Simulate a database query failure (e.g., by introducing a deliberate error in the database connection or query).

## Solution:

The solution uses `try...catch` blocks to handle potential errors during the database query. If an error occurs, a proper error response is sent to the client, preventing the server from crashing.