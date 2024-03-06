#!/usr/bin/env bash

set -e

DENO_VERSION=${VERSION:-"latest"}
DENO_INSTALL=${DENO_INSTALL:-"/usr/local"}

echo "Activating feature 'deno@${DENO_VERSION}'"

# The 'install.sh' entrypoint script is always executed as the root user.

# If we don't already have Deno installed, install it now.
if ! deno --version > /dev/null ; then
  echo "Installing Deno..."
  if [ "${DENO_VERSION}" = "latest" ]; then
      curl -fsSL https://deno.land/install.sh | sh
  else
      curl -fsSL https://deno.land/install.sh | sh -s v${DENO_VERSION}
  fi
fi
