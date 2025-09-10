# Instagram Clone

A minimal Instagram clone web app built with:
- React (frontend)
- Node.js + Express (backend)
- MongoDB (database)

## Features

- User signup & login (JWT authentication)
- Photo uploads
- Feed with posts
- Like and comment stubs (extendable)

## Getting Started

### Prerequisites

- Node.js >= 16
- MongoDB

### Setup

Install dependencies for both client and server:

```bash
cd client
npm install
cd ../server
npm install
```

Create a `.env` file in `server/` (see `.env.example`).

### Run Locally

Start backend:
```bash
cd server
npm start
```

Start frontend:
```bash
cd client
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

This is a minimal demo. Extend with comments, likes, profiles, etc as needed!