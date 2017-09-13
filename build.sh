#!/usr/bin/env bash

BASEDIR=$(dirname "$0")

cd ./build/

echo "Installation into $BASEDIR/build"

composer install

echo "Building API"

php "${BASEDIR}/build/vendor/sami/sami/sami.php" update "${BASEDIR}/build/docs.config.php"
