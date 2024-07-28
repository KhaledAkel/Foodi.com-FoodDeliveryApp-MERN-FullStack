import express, {Request, Response} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';                    
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
const db = process.env.MONGODB_URI as string;


// Connect to the database
mongoose.connect(db)
    .then(() => {
        console.log("Connected to the database");    
        // listen
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
});                               
    }
    )
    .catch((error) => {
        console.log("Error connecting to the database");
        console.log(error);
    }
    );
