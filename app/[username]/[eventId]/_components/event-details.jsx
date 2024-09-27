import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EventDetails({ event }) {
  const { user } = event;
  
  return (
    <div className="relative p-6 sm:p-8 md:p-10 lg:w-1/3 bg-white rounded-lg shadow-lg transition-transform transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 opacity-30 rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition duration-300">
          {event.title}
        </h1>

        <div className="flex items-center mb-4">
          <Avatar className="w-12 h-12 mr-4">
            <AvatarImage src={user.imageUrl} alt={user.name} />
            <AvatarFallback className="bg-violet-500 text-white">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-600 text-sm md:text-md">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center mb-2 text-gray-700">
          <Clock className="mr-2 text-violet-600" />
          <span>{event.duration} minutes</span>
        </div>
        <div className="flex items-center mb-4 text-gray-700">
          <Calendar className="mr-2 text-violet-600" />
          <span>Google Meet</span>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm md:text-md mb-6">
          {event.description}
        </p>
      </div>
    </div>
  );
}
