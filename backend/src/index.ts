import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";


// intialize express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/test", async (req: Request, res: Response) => {
    res.send("Hello World");
    }
);  

// port
const port = process.env.PORT || 5000;

// listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});