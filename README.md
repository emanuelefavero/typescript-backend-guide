# Typescript Backend GUIDE

This repo is a guide for using Typescript in the backend

## Configuration

### Install Typescript

```bash
npm install -g typescript
```

### Create tsconfig.json

```bash
tsc --init
```

- `target` : Specify ECMAScript target version: 'es5', 'es6', 'es2016', 'es2020', or 'ESNext'.
- `module` : Specify module code generation: 'commonjs', 'es6', 'es2020', or 'ESNext'.
- `outDir` : Redirect output structure to the directory.
- `rootDir` : Specify the root directory of input files. Use to control the output directory structure with --outDir.
- `strict` : Enable all strict type-checking options.
- `moduleResolution` : Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6).

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
