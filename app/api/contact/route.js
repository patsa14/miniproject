import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // Parse the incoming JSON request body
    const { name, email, message } = await req.json();

    // Log received data
    console.log("Received data:", { name, email, message });

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'All fields are required.' }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return new Response(
        JSON.stringify({ message: 'Invalid email format.' }),
        { status: 400 }
      );
    }

    // Create the contact form record in the database
    const contactForm = await prisma.contactForm.create({
      data: {
        name,
        email,
        message,
      },
    });

    return new Response(JSON.stringify(contactForm), { status: 201 });
  } catch (error) {
    console.error('Error creating contact form:', error);
    return new Response(
      JSON.stringify({ message: 'An error occurred while submitting the form.' }),
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}
