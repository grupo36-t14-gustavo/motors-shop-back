#!/bin/bash
# exit on error
set -o errexit
npm install
npx prisma generate