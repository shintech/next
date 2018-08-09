#!/usr/bin/env bash

if [ -d "node_modules" ] || [ -d ".next" ]; then
  echo "Removing existing files..."
  rm -rv node_modules .next --force
fi

echo "Creating file directories..." && \
mkdir upload && \

printf "\nInstalling packages...\n" && \
yarn install && \

printf "All done...\n"