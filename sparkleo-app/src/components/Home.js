import React from "react";

function Home() {
  
  return (
    <div className="flex-1 bg-red-500 h-screen flex flex-col justify-center items-center text-white p-10 rounded-bl-3xl">
      <div className="text-center">
      <p>UserName: {localStorage.getItem('username') || ""}</p>
      <p className="">Token: {localStorage.getItem('Token')|| ""}</p>
        <div className="flex items-center justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.75V6.75c0-.621-.504-1.125-1.125-1.125H4.125C3.504 5.625 3 6.129 3 6.75v12.75h18V15M15 18l3-3m0 0l-3-3m3 3H9m9-3v-.75"
            />
          </svg>
          <span className="text-2xl font-bold border rounded-lg p-4">
            Spark
          </span>
        </div>
        <div className="border border-gray-400 rounded p-4">
          <p className="text-gray-200 mb-4">Learn more about Air Drive on</p>
          <a
            href="https://spark.pl"
            className="text-white font-medium underline"
          >
            Spark.pl
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
