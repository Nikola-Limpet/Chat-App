import express from 'express';

const router = express.Router();

router.get('/login' , (req, res) => {
    res.send('Loginned Ok!');
});

router.get('/logout' , (req, res) => {
  res.send('Logout Ok!');
});

router.get('/register' , (req, res) => {
  res.send('Register Ok!');
});


export default router;