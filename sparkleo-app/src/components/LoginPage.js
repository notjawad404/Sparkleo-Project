import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SideInfo from './SideInfo';

function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Login form */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-10">
        <div className="max-w-md w-full">
          <Header />
          <LoginForm />
        </div>
      </div>

      {/* Right side - Brand information */}
      <SideInfo />
    </div>
  );
}

export default LoginPage;
