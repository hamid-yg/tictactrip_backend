import express, { Express, Response} from 'express';
import justifyRoute from './src/routes/justify.route';
import authRoute from './src/routes/auth.route';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));

app.get('/', (_, res: Response) => {
    res.json({"msg": "Server running successfully"})
});

app.use('/api/token', authRoute);

app.use('/api/justify', justifyRoute);

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
})
