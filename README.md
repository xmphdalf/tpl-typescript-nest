# NestJS Template

Minimal NestJS template with PostgreSQL, Docker, and CRUD operations.

## Quick Start

```bash
# Start PostgreSQL
npm run docker:up

# Install dependencies
npm install

# Start dev server
npm run start:dev

# Seed database
npm run db:seed
```

## Project Overview

```
src/
├── config/          # App & DB configs
├── modules/         # Feature modules
│   └── example/     # Sample CRUD module
│       ├── entities/    # TypeORM entities
│       ├── example.controller.ts
│       ├── example.service.ts
│       └── example.module.ts
└── database/       # DB migrations & seeds
```

## API Endpoints

```
POST   /example     - Create
GET    /example     - List all
GET    /example/:id - Get one
PUT    /example/:id - Update
DELETE /example/:id - Delete
```

## Scripts

```bash
npm run start:dev   # Start dev server
npm run docker:up   # Start PostgreSQL
npm run docker:down # Stop PostgreSQL
npm run db:seed     # Seed database
npm run build      # Build for production
npm run lint       # Lint code
npm run format     # Format code
```

## Stack

- NestJS - Backend framework
- PostgreSQL - Database
- TypeORM - ORM
- Docker - Containerization
- ESLint + Prettier - Code quality
