import { Request, Response } from 'express';
import prisma from '../db/prisma.js';
import bcrypt from 'bcryptjs';

export const signup = async (req : Request, res: Response) => {
  try {
    const { fullName, username, password, confirmPassowrd, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassowrd || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    // Check if the password and confirm password match
    if (password !== confirmPassowrd) {
      return res.status(400).json({ message: 'Password and Confirm Password do not match' });
    }
    
    const user = await prisma.user.findUnique({
      where: {
        username
      }
    });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // get profile picture from api
    // https://avatar.iran.liara.run/public/boy
    const profilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    
  } catch (error) {
    
  }

};
export const login = async (req : Request, res: Response) => {};
export const logout = async (req : Request, res: Response) => {};
