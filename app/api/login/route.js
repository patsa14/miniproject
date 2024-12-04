import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // Optional for token-based authentication

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // Parse the request body
    const { email, password } = await req.json();

    // Validate the input
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: 'Email and password are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Check if the user exists
    if (!user) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password.' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password.' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Optional: Generate a JWT token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'default_secret_key',
      { expiresIn: '1h' }
    );

    return new Response(
      JSON.stringify({ message: 'Login successful!', token, user }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error during login:', error);
    return new Response(
      JSON.stringify({ message: 'An error occurred during login.', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}
