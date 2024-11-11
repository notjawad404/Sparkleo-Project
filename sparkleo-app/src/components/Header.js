import React from 'react';

function Header() {
  return (
    <div>
      <button className="text-blue-500 text-sm mb-4">&larr; Back</button>
      <h1 className="text-3xl font-bold text-red-600 mb-2">Sign In</h1>
      <p className="text-gray-500 mb-6">Enter your email and password to sign in!</p>
    </div>
  );
}

export default Header;
