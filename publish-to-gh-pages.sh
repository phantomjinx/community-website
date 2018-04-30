#!/bin/sh

function show_help {
  echo "Usage: $0 -r <repository-alias>"
  echo "-h show this help"
  echo "-r the alias used in this git clone of the target gh-pages repository"
  exit 1
}

#
# Determine the command line options
#
while getopts "hr:" opt;
do
        case $opt in
        h) show_help ;;
        r) ALIAS=$OPTARG ;;
        *) show_help ;;
        esac
done

if [ -z "${ALIAS}" ]; then
  echo "WARNING: No Repository alias specified. Assuming 'origin'"
  ALIAS=origin
fi

echo "Publishing to repository with alias: ${ALIAS}"

if [[ -n "$(git status -s | grep -v yarn.lock)" ]]; then
  echo "The working directory is dirty. Please commit any pending changes."
  exit 1;
fi

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public ${ALIAS}/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Generating site"
gulp build

cd public
if [[ -n "$(git status -s)" ]] ; then
  echo "Updating gh-pages branch"
  git add --all && git commit -m "[ci skip] Publishing to gh-pages" && git push ${ALIAS}
fi
