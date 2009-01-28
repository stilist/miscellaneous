#!/bin/bash
RSYNC="rsync --size-only --delete -vax --modify-window=3 --exclude-from=/Users/stilist/.rsync/exclude.txt"

SOURCE=/Volumes/Leviathan/
TARGET=/Volumes/MUSICBKP/

if [ -d $SOURCE ]
then
  if [ -d $TARGET ]
  then
    # first, back up iTunes library files
    $RSYNC ~/Music/iTunes/iTunes\ * $SOURCE

    # then sync everything
    $RSYNC $SOURCE $TARGET
  else
    echo "Whoops! Destination disk (${TARGET}) missing."
  fi
else
  echo "Whoops! Source disk (${SOURCE}) missing."
fi
