import dotenv from "dotenv";
dotenv.config();
export default `mongodb+srv://crispen:${process.env.PASSWORD}@cluster0.2loxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
