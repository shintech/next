#!/usr/bin/env bash

rm -r node_modules .next --force
mkdir uploads log

printf "\nInstalling packages...\n" && \
yarn install && \

printf "All done...\n"