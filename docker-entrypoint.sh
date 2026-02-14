#!/bin/sh
set -e

# Ensure data directories exist and are writable
mkdir -p /app/data/template2
chown -R nextjs:nodejs /app/data

# Drop privileges and run the app
exec su-exec nextjs node server.js
