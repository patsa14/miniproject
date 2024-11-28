import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
      const data = await req.json();
      const newContact = await prisma.contactForm.create({
        data,
      });
      return new Response(JSON.stringify(newContact), { status: 201 });
    } catch (error) {
      console.error('Error in POST /api/contact:', error);
      return new Response('Error saving contact form', { status: 500 });
    }
  }
  