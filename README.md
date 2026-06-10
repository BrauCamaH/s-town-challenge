# Library Manager

A simple and powerful library management system built with **Laravel**, **React**, and **Inertia.js**.

## Prerequisites

Make sure you have the following installed:

- PHP >= 8.2
- Composer
- Nodejs LTS >= 24.16.0
- SQLite

## Getting Started

### 1. Clone the project

If you don't have the code yet, clone the repository:

```bash
git clone https://github.com/BrauCamaH/s-town-challenge.git
cd s-town-challenge
```

### 2. Install dependencies

```bash
composer install
npm install
```

### 3. Environment Configuration

Copy the example environment variables file and generate the application key:

```bash
cp .env.example .env
php artisan key:generate
```

### 4. Database Setup

```bash
php artisan migrate
```

### 5. Compile assets and run

You will need to run two commands in separate terminals:

#### Terminal 1 Frontend

```bash
npm run dev
```

#### Terminal 2 (PHP Server)

```bash
php artisan serve
```

Paste the next url in your browser `http://localhost:8000`.

## Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles assets for production.
- `php artisan migrate`: Runs database migrations.
- `php artisan db:seed`: Populates the database with sample data.
- `php artisan test`: Runs the system tests.

## Quick Deployment

To deploy to production:

1. Ensure your environment variables are correctly configured on the server.
2. Run `composer install --optimize-autoloader --no-dev`.
3. Run `npm install && npm run build`.
4. Run `php artisan migrate --force`.
