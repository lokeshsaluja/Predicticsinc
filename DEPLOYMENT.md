# Deployment Guide for Predictics Inc. Website

This guide explains how to deploy the Predictics Inc. website with a working contact form that saves submissions to a SQL database.

## Database Setup with Vercel Postgres

Vercel Postgres is a serverless SQL database that's easy to set up and affordable for small to medium-sized websites.

### Step 1: Create a Vercel Account

If you don't already have one, create a [Vercel account](https://vercel.com/signup).

### Step 2: Push Your Code to GitHub

Make sure your project is in a GitHub repository.

### Step 3: Create a New Project on Vercel

1. Go to [Vercel](https://vercel.com/new)
2. Import your GitHub repository
3. Keep the default build settings for Next.js

### Step 4: Add Vercel Postgres

1. In your Vercel dashboard, go to your project
2. Navigate to "Storage" tab
3. Click "Connect Database"
4. Select "Postgres"
5. Follow the setup wizard to create a new Postgres database
6. Vercel will automatically add the required environment variables to your project

### Step 5: Run Database Migrations

The database table will be created automatically when the first contact form submission is made. You don't need to manually run migrations.

## Alternative: Using Railway for Database Hosting

If you prefer an alternative to Vercel Postgres, [Railway](https://railway.app/) is also an affordable option.

### Step 1: Create a Railway Account

Sign up at [Railway](https://railway.app/)

### Step 2: Create a PostgreSQL Database

1. In your Railway dashboard, create a new project
2. Add a PostgreSQL database to your project
3. Railway will provide you with connection details

### Step 3: Add Environment Variables

Add the following environment variables to your Vercel project:

```
POSTGRES_URL=your-railway-postgres-connection-string
```

## Environment Variables

Make sure your project has the following environment variables set (these will be automatically added if using Vercel Postgres):

```
POSTGRES_URL
POSTGRES_USER
POSTGRES_PASSWORD
POSTGRES_HOST
POSTGRES_DATABASE
```

## Monitoring and Management

- **Vercel Postgres**: Access your database from the Vercel dashboard under the "Storage" tab
- **Railway**: Access your database from the Railway dashboard

## Backup Strategy

It's recommended to set up regular backups of your contact form submissions:

1. For Vercel Postgres: Use the built-in backup functionality
2. For Railway: Set up scheduled backups via the Railway dashboard

## Costs

- **Vercel Postgres**: Free tier includes 256MB database with up to 1GB bandwidth
- **Railway**: Free tier includes $5 of usage, which is enough for a small website's contact form

Both options scale affordably as your needs grow.
