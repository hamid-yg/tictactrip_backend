import express, { Express, Response} from 'express';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import justifyRoute from './src/routes/justify.route';
import authRoute from './src/routes/auth.route';
import connect_db from './src/config/db';
import swaggerDocument from './swagger-output.json';
import config from './src/config/config';


const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));

connect_db();

app.get('/', (_, res: Response) => {
    res.json({"msg": "Server running successfully"})
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/token', authRoute);

app.use('/api/justify', justifyRoute);

app.listen(config.port, () => {
    console.log("Server is running at http://localhost:5000");
})
