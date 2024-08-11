import express from 'express';
import path from 'node:path';
import url from 'node:url';

import indexRouter from './routes/index.js';
import newRouter from './routes/new.js';
import messageRouter from './routes/message.js';

const app = express();
const PORT = 5005;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
