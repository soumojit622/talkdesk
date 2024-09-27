import { notFound } from "next/navigation";
import { getUserByUsername } from "@/actions/users";
import EventCard from "@/components/event-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateMetadata({ params }) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: `${user.name}'s Profile | Your App Name`,
    description: `Book an event with ${user.name}. View available public events and schedules.`,
  };
}

export default async function UserProfilePage({ params }) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
      <div className="flex flex-col items-center mb-10 p-6 md:p-8 bg-gradient-to-r from-blue-200 to-purple-200 shadow-lg rounded-xl border border-gray-300 transition-transform transform duration-300 ease-in-out">
        <Avatar className="w-32 h-32 mb-4 border-4 border-violet-500">
          <AvatarImage
            src={user.imageUrl}
            alt={user.name}
            className="rounded-full"
          />
          <AvatarFallback className="bg-violet-500 text-white">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-2 text-center tracking-wide hover:text-violet-600 transition duration-300">
          {user.name}
        </h1>
        <p className="text-gray-700 text-center text-md md:text-lg mb-4 leading-relaxed px-2">
          Greetings! You're on my scheduling page. Feel free to explore the
          available events and book a call at your convenience.
        </p>
        <p className="text-gray-500 text-center text-md mb-4 leading-relaxed px-2 italic">
          Your journey towards valuable insights begins here. I'm excited to
          connect and collaborate with you.
        </p>
      </div>

      {user.events.length === 0 ? (
        <p className="text-center text-gray-500 text-lg md:text-xl italic">
          No public events available.
        </p>
      ) : (
        <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {user.events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              username={params.username}
              isPublic
            />
          ))}
        </div>
      )}
    </div>
  );
}
