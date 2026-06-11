import express from "express";
import authRouter from "./router/auth.js";
import cors from "cors";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import dbconnect from "./config/db_config.js";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

//middlewares
app.use(notFound);
app.use(errorHandler);

const port = 3000;
const url = process.env.MONGOOSE_URI;

const start = async () => {
	try {
		await dbconnect(url);
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
