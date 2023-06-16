#!/bin/bash
# exit on error
set -o errexit
npm install
npm run build
npx prisma migrate reset
npx prisma migrate deploy