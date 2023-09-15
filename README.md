# Rhythm and Rizz API

This app is the back-end server for the Rhythm and Rizz UI.

## Getting started

### Installation

1. Clone down this repository.
    - `git clone git@github.com:Scotty-Brown/rhythm-rizz-api.git`
2. Change into the new directory.
    - `rhythm-rizz-api`
3. Install the dependencies.
    - `npm install`

### Usage

1. To fire up the server, run `node server.js`.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/poems` | GET | not needed | Object of 'poems' whith an Array of all existing poems: `{poems: [{ id: 1, title: 'Happy Day' author: "the kapaowies" poem: "happy poem..." }, {...}, ... ]` |
| `http://localhost:3001/api/v1/poems` | POST | `{title: <String>, author: <String>, poem: <String>}` | New poem: `{ { id: 2, title: 'Sad Day' author: "the kapaowies" poem: "sad poem..." }` |
| `http://localhost:3001/api/v1/poems/:id` | GET | not needed | Object of asingle poem: `{ id: 1, title: 'Happy Day' author: "the kapaowies" poem: "happy poem..." }` |

Note: All of these endpoints will return semantic errors if something is wrong with the request.
s

