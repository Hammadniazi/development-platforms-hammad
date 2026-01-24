# News Platform - Supabase Development

A modern, full-stack news platform built with React, Vite, Tailwind CSS, and Supabase. This platform allows users to register, authenticate, and submit news articles across various categories.

## Features

- **User Authentication**
  - User registration with email verification
  - Secure login/logout functionality
  - Protected routes for authenticated users

- **Article Management**
  - Submit articles with title, category, and content
  - Browse articles from all users
  - Real-time article updates
  - Category-based organization (Technology, Business, Sports, etc.)

- **Responsive Design**
  - Mobile-first approach
  - Clean and modern UI with Tailwind CSS
  - Custom components (buttons, cards, alerts)

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Backend & Database**: Supabase
- **Authentication**: Supabase Auth
- **Real-time**: Supabase Realtime

## Prerequisites

Before running this project, make sure you have:

- Node.js
- npm or yarn
- A Supabase account and project

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hammadniazi/development-platforms-hammad.git
   cd supabase-development-assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

## Project Structure

```
supabase-development-assignment/
├── src/
│   ├── components/
│   │   ├── ArticleCard.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── lib/
│   │   └── supabase.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── SubmitArticle.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Authentication Flow

1. Users register with email and password
2. Supabase sends a confirmation email
3. Users confirm their email address
4. Users can log in and access protected routes
5. Authenticated users can submit articles

### Deploy to Netlify

- Link

## Motivation

I chose Option 2 because I wanted to build a complete full-stack application and learn how modern web development works in practice. Supabase appealed to me as it provides a real backend with authentication, database, and real-time features.

### What i liked:

- Seeing authentication work for the first time – users could register, log in, and access protected routes
- The satisfaction of building something functional that could actually be used

### What was challenging:

- Implementing Row Level Security policies in Supabase
- Setting up environment variables and configuration files correctly

### Custom API VS Supabase:

- Custom API givs complete control over data and logic; no dependency on third-party services; better for learning how backends actually work
- Supabase allows faster development with built-in features like auth and database management, making it ideal for small projects or prototypes.

## License

This project was created as a assignment for Development Platforms course.

## Author

**Hammad Niazi**

- GitHub: [@Hammadniazi](https://github.com/Hammadniazi)
