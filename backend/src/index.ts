import express from 'express';

const app = express();

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
