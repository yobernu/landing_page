#!/bin/bash
set -e

# Install dependencies
npm install

# Build the project
npm run build

# Create the output directory
mkdir -p .vercel/output/static

# Copy the built files to the output directory
cp -r dist/* .vercel/output/static/

# Create the configuration file
echo '{
  "version": 3,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}' > .vercel/output/config.json
