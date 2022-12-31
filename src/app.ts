import * as express from 'express';
import { Express } from 'express';

import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { routes } from './routes/routes';

dotenv.config();

const app: Express = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(routes);

app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT);
});
