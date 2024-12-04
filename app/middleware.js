// /app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const { cookies } = req;
  const token = cookies.get('admin-token');  // Check if the admin token is set

  // If there's no token or it's invalid, redirect to the login page
  if (!token || token !== 'your-secret-token') {
    return NextResponse.redirect('/login');  // Redirect to a login page or unauthorized page
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/**'],  // Protect the admin page route
};
