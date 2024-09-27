"use client";

import { deleteEvent } from "@/actions/events";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/use-fetch";
import { Link, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EventCard({ event, username, isPublic = false }) {
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window?.location.origin}/${username}/${event.id}`
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const { loading, fn: fnDeleteEvent } = useFetch(deleteEvent);

  const handleDelete = async () => {
    if (window?.confirm("Are you sure you want to delete this event?")) {
      await fnDeleteEvent(event.id);
      router.refresh();
    }
  };

  return (
    <Card
      className="flex flex-col justify-between transition-transform transform bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-xl shadow-md overflow-hidden lg:max-w-md md:max-w-sm sm:w-full sm:p-2"
    >
      {/* Card Header */}
      <CardHeader className="p-6 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 text-white">
        <CardTitle className="text-2xl font-bold sm:text-xl truncate">
          {event.title}
        </CardTitle>
        <CardDescription className="flex justify-between text-sm text-gray-200 mt-1 sm:text-xs">
          <span>
            {event.duration} mins | {event.isPrivate ? "Private" : "Public"}
          </span>
          <span>{event._count.bookings} Bookings</span>
        </CardDescription>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-6 sm:p-4">
        <p className="text-gray-700 sm:text-sm text-base leading-relaxed font-medium line-clamp-3">
          {event.description.indexOf(".") !== -1
            ? event.description.substring(0, event.description.indexOf(".")) +
              "."
            : event.description}
        </p>
      </CardContent>

      {/* Card Footer */}
      {!isPublic && (
        <CardFooter className="flex justify-between items-center p-6 border-t border-gray-200 sm:p-4">
          {/* Copy Link Button */}
          <Button
            variant="outline"
            onClick={handleCopy}
            className={`flex items-center text-sm sm:text-xs ${
              isCopied
                ? "text-green-600 border-green-600"
                : "text-violet-600 border-violet-600"
            } hover:bg-violet-50 transition-colors`}
          >
            <Link className="mr-2 h-5 w-5 sm:h-4 sm:w-4" />
            <span>{isCopied ? "Copied!" : "Copy Link"}</span>
          </Button>

          {/* Delete Button */}
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
            className="flex items-center bg-red-500 hover:bg-red-600 transition-colors text-white text-sm sm:text-xs"
          >
            <Trash2 className="mr-2 h-5 w-5 sm:h-4 sm:w-4" />
            <span>{loading ? "Deleting..." : "Delete"}</span>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
