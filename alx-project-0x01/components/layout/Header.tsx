import React from 'react'
import Link from 'next/link';

export default function Header() {
  return (
    <div>
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">My Application</h1>
            <nav className="mt-2">
            <div className="flex space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/users">Users</Link>
                <Link href="/posts">Posts</Link>
            </div>
            </nav>
        </header>
      
    </div>
  )
}
