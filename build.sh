#!/bin/bash
# exit on error
set -o errexit
npm install typescript
npm install
npm run build
npx prisma migrate deploy