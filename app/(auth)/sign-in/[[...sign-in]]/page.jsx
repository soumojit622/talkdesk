import { SignIn } from "@clerk/nextjs";
import Image from "next/image"; // Import the Image component from next/image

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Image Section */}
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Signin Background"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            layout="fill" // Use layout fill to cover the div
            objectFit="cover" // This will maintain the aspect ratio of the image
            className="absolute inset-0" // Keep the absolute positioning for proper layout
          />
        </aside>

        {/* SignIn Section */}
        <main className="flex items-center justify-center px-6 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-16 xl:col-span-6 bg-gray-50">
          <div className="max-w-xl lg:max-w-3xl">
            <a
              href="#"
              className="block text-blue-600 hover:opacity-80 transition"
            >
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.41 10.3847C1.14777 7.4194..." fill="currentColor" />
              </svg>
            </a>

            <h1 className="mt-8 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Welcome Back! 👋
            </h1>

            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Sign in to access your dashboard and continue exploring amazing
              features!
            </p>

            {/* Clerk SignIn Component */}
            <div className="mt-10">
              <SignIn
                path="/sign-in"
                routing="path"
                signUpUrl="/sign-up"
                appearance={{
                  variables: {
                    colorPrimary: "#4f46e5",
                    colorText: "#111827",
                    colorTextSecondary: "#6b7280",
                    colorBackground: "#f9fafb",
                    borderRadius: "0.5rem",
                  },
                  elements: {
                    card: "shadow-lg bg-white p-6 rounded-lg",
                    logoImage: "h-12 w-12",
                    formFieldInput:
                      "border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200",
                    formButtonPrimary:
                      "w-full bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-200 hover:from-violet-700 hover:to-blue-600", // Updated for gradient
                  },
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
