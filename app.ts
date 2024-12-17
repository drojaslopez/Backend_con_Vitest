import express from "express";
import userRoute from "./src/module/user/route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute);


export default app;

