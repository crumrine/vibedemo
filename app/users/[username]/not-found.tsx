import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-gray-100">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
          User Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          The user profile you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block touch-target bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
