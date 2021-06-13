import dotenv from "dotenv";
dotenv.config();

const dbName: string = "users";
export default `mongodb+srv://crispen:${process.env.PASSWORD}@cluster0.izhvn.mongodb.net/${dbName}?retryWrites=true&w=majority`;
