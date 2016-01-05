#!/bin/bash

set -o errexit
set -o pipefail

GITHUB_REPO="github.com/adborden/disclosure-frontend-alpha"

#if [ -z "$GITHUB_TOKEN" ]; then
#    echo "GITHUB_TOKEN is required." >&2
#    exit 1
#fi

# Clean
rm -rf ./dist

# Build
gulp prod

# Copy index to 404.html
cp dist/index.html dist/404.html

# Copy CNAME
cp CNAME dist/

# Git init
cd dist
git --version
git init
git config user.name "CA Civic Lab deploy script"
git config user.email "opencal@googlegroups.com"
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://x-api-token:${GITHUB_TOKEN}@${GITHUB_REPO}.git" master:gh-pages
