FROM mcr.microsoft.com/devcontainers/typescript-node:20

RUN apt-get update \
    && apt-get install -y openssl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace