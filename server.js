import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const filePath = fileURLToPath(import.meta.url);
const fileDir = dirname(filePath);

const app = express();

app.use(express.static(`${fileDir}/docs`));

app.listen(3001, () => {
  console.log('Servidor listo en el puerto 3001');
});