#!/usr/bin/env bash

rm -r node_modules .next --force
mkdir uploads server/log

printf "\nInstalling packages...\n" && \
yarn install && \

printf "All done...\n"