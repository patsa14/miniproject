import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; // Ensure bcrypt is installed
import Cors from 'cors';

const prisma = new PrismaClient();

// Initialize CORS
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: '*', // Adjust this to the front-end URL in production
});

const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });

export async function POST(req, res) {
  // Run CORS middleware
  await runMiddleware(req, res, cors);

  try {
    const data = await req.json();
    const { name, email, password } = data;

    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
    }

    // Basic email format validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format.' });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'User already exists with this email.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return res.status(201).json({ success: true, message: 'User registered successfully.' });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
}
