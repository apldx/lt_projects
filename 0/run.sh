#!/bin/bash

argn=1
set -o nounset
set -o pipefail
ee () { echo -e "$@" 1>&2; }

script=$(basename "$0")

usage=$(cat <<HERE

USAGE: $script <test number>

HERE
)


if [ $# -ne $argn ]; then
  ee "$usage"
  exit 65
fi

npm run test -- $1 --watch
