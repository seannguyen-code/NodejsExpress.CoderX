# NodejsExpress.CoderX

A Node.js Express web application featuring authentication, product management, cart, and transfer functionalities. The project uses MVC architecture and Pug for templating.

## Features

- User authentication (login, session management)
- Product listing and management
- Shopping cart functionality
- User transfers
- RESTful API endpoints
- File uploads
- Custom middleware for authentication and session handling
- Pug-based views

## Technologies

- Node.js
- Express.js
- Pug (template engine)
- JSON-based database (for demo purposes)
- Middleware (custom and Express)
- Nodemon (for development)

## Folder Structure

```
.
├── api/                # API controllers and routes
├── controllers/        # Main controllers (auth, cart, product, transfer, user)
├── middlewares/        # Custom middleware (auth, session)
├── models/             # Data models (product, user)
├── public/             # Static files (images, styles, uploads)
├── routes/             # Main routes
├── validate/           # Validation logic
├── views/              # Pug templates
├── db.js               # Database connection logic
├── db.json             # Demo database
├── index.js            # App entry point
├── package.json        # Project metadata and dependencies
├── nodemon.json        # Nodemon config
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm start
```
Or for development with auto-reload:
```bash
npm run dev
```

### Configuration

- Edit `db.json` for demo data.
- Static files are served from `public/`.
- Views are in `views/` using Pug.

## API Endpoints

- `/auth` - Authentication routes
- `/products` - Product management
- `/cart` - Cart operations
- `/transfer` - Transfer operations
- `/users` - User management

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
