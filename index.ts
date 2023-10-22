import express, { Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.json({"msg": "Server running successfully"})
});

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
})
