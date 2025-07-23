import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import gameRoutes from './routes/gameRoutes.js';
import wishRoutes from './routes/wishRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', gameRoutes);
app.use('/api', wishRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});