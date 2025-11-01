import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <main className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to VibeDemo
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          Mobile-first user profile showcase
        </p>
        <div className="space-y-4">
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-500">
            Visit user profiles at <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/users/[username]</code>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/users/example" 
              className="link-card bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium"
              aria-label="View example user profile"
            >
              View Example Profile
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
