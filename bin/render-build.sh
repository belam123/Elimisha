#!/usr/bin/env bash
# exit on error
set -o errexit

# Check if bundler is installed
if ! command -v bundle &> /dev/null
then
    echo "Bundler is not installed. Please install bundler."
    exit 1
fi

# Check if rails is installed
if ! command -v rails &> /dev/null
then
    echo "Rails is not installed. Please install Rails."
    exit 1
fi

# Install dependencies, run database-related commands, and start the server
echo "Installing dependencies..."
bundle install &&

echo "Running database migrations..."
rails db:migrate &&

echo "Seeding the database..."
rails db:seed &&

echo "Starting the Rails server..."
rails server

# Disable command tracing
set +o xtrace
