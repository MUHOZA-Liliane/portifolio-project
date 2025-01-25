

import { Link } from "react-router-dom"; // Ensure you import Link

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-black">404</h1>
      <h2 className="mt-4 text-5xl font-bold text-red-700">Page Not Found</h2>
      <Link
        to="/"
        className="mt-8 bg-green-900 text-white text-sm py-2 px-6 rounded-full hover:bg-green-800 focus:ring-2 focus:ring-green-600 focus:outline-none"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
