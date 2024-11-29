'use client';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  // Parse the incoming JSON request body
  const { name, email, phone, message } = await req.json();

  // Validate input
  if (!name || !email || !phone || !message) {
    return new Response(
      JSON.stringify({ message: 'All fields (Name, Email, Phone, and Message) are required.' }),
      { status: 400 }
    );
  }

  // Basic email validation (for format)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return new Response(
      JSON.stringify({ message: 'Invalid email format.' }),
      { status: 400 }
    );
  }

  try {
    // Create the contact form record in the database
    const contactForm = await prisma.contactForm.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    // Successfully created
    return new Response(JSON.stringify(contactForm), { status: 201 });
  } catch (error) {
    // Log the error
    console.error('Error creating contact form:', error);

    // Respond with an error message
    return new Response(
      JSON.stringify({ message: 'An error occurred while submitting the form.' }),
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma Client to avoid memory leaks (important in serverless environments)
    await prisma.$disconnect();
  }
}
