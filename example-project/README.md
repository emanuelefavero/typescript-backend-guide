# Typescript Node Example Project

This is an example project for using Typescript in the backend.

## Configuration

### Install Typescript

```bash
npm install -g typescript
```

### Create tsconfig.json

```bash
tsc --init
```

- change settings `moduleResolution` to `node` and `module` to `commonjs`

### Initialize npm

```bash
npm init -y
```

### Install dependencies

```bash
npm i express
npm i @types/express @types/node nodemon ts-node typescript
```

- _NOTE: Even if you already have typescript or nodemon installed globally it is better to still install them in the project so the package.json will be updated with those_

### Add scripts to package.json

```json
 "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.ts",
    "build": "tsc"
  },
```

### Run Typescript with nodemon

```bash
nodemon app.ts
```
