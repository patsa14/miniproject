// app/api/register/route.js
'use client';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req) {
  const { name, email, password } = await req.json();

  // Basic validation for input fields
  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({ message: 'All fields are required.' }),
      { status: 400 }
    );
  }

  try {
    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'Email is already taken.' }),
        { status: 400 }
      );
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword, // Store hashed password
      },
    });

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: 'An error occurred while registering the user.' }),
      { status: 500 }
    );
  }
}
