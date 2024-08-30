# News API

## Overview

The **News API** is a simple RESTful API built with Express.js that interacts with the GNews API to fetch and manage news articles. It provides endpoints to retrieve a specified number of news articles, search for articles by keywords, and find articles by title. The API also includes caching to reduce redundant requests and improve performance.

## Features

- **Fetch Articles:** Retrieve a specified number of news articles.
- **Search by Keyword:** Search for news articles using keywords.
- **Find by Title:** Retrieve a specific news article by its title.
- **Caching:** Implements in-memory caching to reduce API calls and enhance performance.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- A GNews API Key

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/news-api.git
cd news-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
```bash
API_KEY=
```

### 4. Start the Server
```bash
node src/app.js
```