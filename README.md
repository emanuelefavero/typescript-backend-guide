# Typescript Backend Syntax GUIDE

This repo is a syntax guide for Typescript in the backend

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
