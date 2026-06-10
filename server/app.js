import express from "express";
import authRouter from "./router/auth.js";
import cors from "cors";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/auth", authRouter);


//middlewares
app.use(notFound);
app.use(errorHandler);

const port = 5000;

const start = () => {
	try {
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	} catch (error) {
    console.log(error);
  }
};

start();
