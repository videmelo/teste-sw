import dotenv from 'dotenv';
dotenv.config({ quiet: true });

const PORT = process.env.PORT || 3000;

import express from 'express';
import cors from 'cors';

import { logger } from './logger.js';
import routes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/', routes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
