# Typescript Backend GUIDE

This repo is a guide for using Typescript in the backend

## Configuration

### Install Typescript

```bash
npm i -D typescript ts-node @types/node @types/express nodemon concurrently
```

> TIP: `concurrently` is used to run multiple scripts at the same time

### Create tsconfig.json

- Run to create a `tsconfig.json` file:

```bash
npx tsc --init
```

- `tsconfig.json` example:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "lib": ["es2015"]
}
```

- `target` : Specify ECMAScript target version: 'es5', 'es6', 'es2016', 'es2020', or 'ESNext'.
- `module` : Specify module code generation: 'commonjs', 'es6', 'es2020', or 'ESNext'.
- `outDir` : Redirect output structure to the directory.
- `rootDir` : Specify the root directory of input files. Use to control the output directory structure with --outDir.
- `strict` : Enable all strict type-checking options.
- `moduleResolution` : Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6).

### Create a `src` folder with an `index.ts` file

```bash
mkdir src
touch src/index.ts
```

### Add scripts to `package.json`

```json
"scripts": {
    "start": "tsc && node dist/index.js",
    "build": "tsc",
    "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
  },
```

### Run typescript in development

```bash
npm run dev
```

### Run typescript in production

```bash
npm start
```

## Syntax Tips

- Usually when using Typescript we use es6 syntax for imports:

  ```typescript
  import express from 'express'
  ```

- Express Request, Response, NextFunction:

  ```typescript
  import { Request, Response, NextFunction } from 'express'

  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello')
  })
  ```

- Declaring .env variables:

  ```typescript
  const mongoDB = process.env.MONGODB_URI || ‘’
  const PORT = process.env.PORT ? Number(process.env.PORT) || 3000
  ```

- Mongoose Schemas:

  ```typescript
  import { Schema } from 'mongoose'

  interface IUser {
    name: string
    avatar?: string
  }

  const UserSchema = new Schema<IUser>({
    name: {
      type: string,
      required: true,
    },
    avatar: String,
  })
  ```

- Another approach to declare a schema:

  ```typescript
  import { Schema, InferSchemaType } from 'mongoose'

  const UserSchema = new Schema({
    name: {
      type: string,
      required: true,
    },
    avatar: String,
  })

  type IUser = InferSchemaType<typeof UserSchema>
  ```

- Mongoose id type (NOTE: its better to let the database add the id for you)

```typescript
import { Type } from 'mongoose'
// Inside an Interface:
_id: Type.ObjectId
```
