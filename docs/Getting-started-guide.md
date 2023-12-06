# Getting Started Guide

## Prerequisite

1. Node installed on your machine (For updates in server)
2. Docker installed on your machine (For build image or changes in build process).

## Setup

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [docker-node-server](https://github.com/Sunny-unik/docker-node-server) to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Create `.env` file and fill environment variables as following written in `.env.example` file.
4. Run `npm i` to install the dependencies and set up the project.

## Development

To run project on your local machine, run:

```shell
npm run dev
```

## Building Image

To build image, run:

```shell
docker build -t <image-name> .
```

## Run Image

To run development server via your image, run:

```shell
docker run -p <container-port>:<your-machine-port> -it <image-name>
```
