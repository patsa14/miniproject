import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    // Parse the incoming JSON body
    const data = await req.json();
    const { name, phone, email, message } = data;

    // Validate data fields
    if (!name || !phone || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Save the new contact form data
    const newContact = await prisma.contactForm.create({
      data: {
        name,
        phone,
        email,
        message,
      },
    });

    // Return a successful response with the saved data
    return new Response(
      JSON.stringify({ success: true, data: newContact }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in POST /api/contact:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Error saving contact form' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
