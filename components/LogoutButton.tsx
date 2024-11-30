// components/LogoutButton.tsx
'use client';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('auth'); // Remove auth data
        router.push('/login');            // Redirect to login page
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
            Logout
        </button>
    );
}
