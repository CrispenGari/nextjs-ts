### Creating REST API using next.js

We want to create a simple api that will be able to perform some CRUD operations using mongoDB database.

- All api endpoints will be in the `pages/api` which is where we create file-based routes in Next.js/ts

### Hello World API

`pages/api/api.ts`

```ts
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send({
    method: req.method,
    message: "Hello World",
  });
};
```

So now if we visit http://localhost:3000/api/hello we get the following response:

```json
{
  "method": "GET",
  "message": "Hello World"
}
```

### Now let's create a system using mongodb that allows us to add students, delete, update and fetching them from the api.

Let's create a folder called `db`. This folder will contain our connection url and a `model`.

`db/connection/index.ts`

```ts
export default `mongodb+srv://crispen:${process.env.PASSWORD}@cluster0.hgcop.mongodb.net/Students?retryWrites=true&w=majority`;
```

`db/models/index.ts`

```ts
import mongoose from "mongoose";
const Student = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
export default mongoose.models?.Students || mongoose.model("Students", Student);
```

Let's create a file that will handle the connection part of mongodb. We are going to create a folder `mongodb` in the `api/students` folder. I recommend creating this folder outside the api folder in the `.` aka the root folder so that it wont appear as an api route. Let's add the following code to it:

```ts
import mongoose, { mongo } from "mongoose";
import connection from "../../../../db/connection";
import Students from "../../../../db/models";
export default mongoose.connect(
  connection,
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  },
  (error: Error) => {
    if (error) {
      return error;
    }
    console.log("Connected to mongodb");
  }
);

export const Student = mongoose.models.Student
  ? mongoose.models.Student
  : Students;
mongoose.connection.once("open", (error: Error) => {
  console.log("MongoDB connection open");
});
```

To use it in any file we just have to import it for example:

```ts
import "../mongodb";
```

### Creating our first API route for adding a student to the database.

```
/api/students/create
```

First let's create a Student type `interface` which will be in the `.` folder in the `types` directory.

`./types/index.ts`

```ts
export interface IStudent {
  name: string;
  email: string;
  age: number;
  _id?: string;
}
```

We are going to use postman to make api request to the server.

There's a config file we should pass to every route which is very important:

```ts
export const config = {
  api: {
    bodyParser: Boolean,
    externalResolver: Boolean,
  },
};
```

```ts
import { NextApiRequest, NextApiResponse } from "next";
import "../mongodb";
import { Student } from "../mongodb";
export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).json({
      message: "You only create a student by POST method.",
      code: 405,
    });
    return;
  }
  (async () => {
    if (!req.body) {
      return res.status(500).json({
        code: 500,
        message: "Internal Sever Error.",
        ...{ helpMessage: "email, age and name required." },
      });
    }
    const { email, age, name } = await req.body;
    const student = await new Student({
      name,
      email,
      age,
    });
    await student.save();
    return res.json(student);
  })();
};
```

### Creating our second API endpoint.

Getting all the students in the database.

```
/api/students/find/all
```

In the config the `bodyParser` should be false.

```ts
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
```

```ts
import { NextApiRequest, NextApiResponse } from "next";
import "../mongodb";
import { Student } from "../mongodb";
import { IStudent } from "../../../../types";
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "You only get a student(s) by GET method.",
      code: 405,
    });
  }
  await Student.find({}, (error: Error, doc: IStudent) => {
    if (error) {
      return res.status(500).json({
        code: 500,
        message: error?.message,
      });
    }
    return res.status(200).send(doc);
  });
};
```

### Creating our 3rd API endpoint.

Getting student by `_id` from our database..

```
/api/students/find/:id
```

In the config the `bodyParser` should be false.

```ts
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
```

```ts
import { NextApiRequest, NextApiResponse } from "next";
import "../mongodb";
import { Student } from "../mongodb";
import { IStudent } from "../../../../types";
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = await req.query;
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "You only get a student(s) by GET method.",
      code: 405,
    });
  }
  if (!id) {
    return res.json({
      code: 500,
      message: "Student id is required.",
    });
  }

  try {
    Student.findById(id, (error: Error, doc: IStudent) => {
      if (!doc) {
        return res.status(404).json({
          code: 404,
          message: `Could not find the student of id ${id} in the database`,
        });
      }
      return res.status(200).send(doc);
    });
  } catch (err) {
    return res.status(500).end("Server Error");
  }
};
```

### 4th API endpoint deleting a student.

We are going to create an endpoint that allows us to delete a student based on id. We created a file `pages/api/students/delete/[id.ts]`. We are using `[id.ts]` because this route is dynamic

```ts
import { NextApiRequest, NextApiResponse } from "next";
import "../mongodb";
import { Student } from "../mongodb";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method !== "DELETE") {
    return res.status(405).json({
      message: "You only DELETE a student(s) using DELETE method.",
      code: 405,
    });
  }
  if (!id) {
    return res.status(500).json({
      code: 500,
      help: "_id/id required",
      message: "Failed to delete the student of id null.",
    });
  }
  await Student.findByIdAndDelete(id)
    .then(() => {
      return res.status(204).json({
        code: 204,
        message: "Deleted",
      });
    })
    .catch((error) => {
      return res.status(500).send({
        code: 500,
        message: error.message,
      });
    });
};
```

### 5. Updating a student data by id.

We are going to use the route `/api/students/update/:id` to update the student by id. So we need to create a file `pages/api/students/update/[id.ts]`.

```ts
import { NextApiRequest, NextApiResponse } from "next";
import "../mongodb";
import { Student } from "../mongodb";

export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method !== "PUT") {
    return res.status(405).json({
      message: "You only UPDATE a student(s) using PUT/PATCH method.",
      code: 405,
    });
  }
  if (!id) {
    return res.status(500).json({
      code: 500,
      help: "_id/id required",
      message: "Failed to update the student of id null.",
    });
  }

  if (!req.body) {
    return res.status(500).json({
      code: 500,
      message: "Internal Sever Error.",
      ...{ helpMessage: "should update name, email and age." },
    });
  }
  const { email, age, name } = req.body;
  await Student.findByIdAndUpdate(id, {
    $set: {
      email: email,
      age: age,
      name: name,
    },
  })
    .then(() => {
      return res.status(204).json({
        code: 204,
        message: "Updated",
      });
    })
    .catch((error) => {
      return res.status(500).send({
        code: 500,
        message: error.message,
      });
    });
};
```

That's how we can create Next.js REST to perform CRUD operations in mongodb.
