import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Video } from "lucide-react";
import CancelMeetingButton from "./cancel-meeting";

export default function MeetingList({ meetings, type }) {
  if (meetings.length === 0) {
    return (
      <p className="text-center text-gray-500 italic text-lg">
        No {type} meetings found.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {meetings.map((meeting) => (
        <Card
          key={meeting.id}
          className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-lg"
        >
          <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-t-lg p-4">
            <CardTitle className="text-xl font-bold text-white">
              {meeting.event.title}
            </CardTitle>
            <CardDescription className="text-md text-white">
              with {meeting.name}
            </CardDescription>
            <CardDescription className="text-md text-white italic">
              &quot;{meeting.additionalInfo}&quot;
            </CardDescription>
          </CardHeader>

          <CardContent className="p-4">
            <div className="flex items-center mb-3 text-gray-700">
              <Calendar className="mr-3 h-5 w-5 text-violet-500" />
              <span className="font-medium">
                {format(new Date(meeting.startTime), "MMMM d, yyyy")}
              </span>
            </div>
            <div className="flex items-center mb-3 text-gray-700">
              <Clock className="mr-3 h-5 w-5 text-violet-500" />
              <span className="font-medium">
                {format(new Date(meeting.startTime), "h:mm a")} -{" "}
                {format(new Date(meeting.endTime), "h:mm a")}
              </span>
            </div>
            {meeting.meetLink && (
              <div className="flex items-center">
                <Video className="mr-3 h-5 w-5 text-violet-500" />
                <a
                  href={meeting.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 font-medium hover:underline"
                >
                  Join Meeting
                </a>
              </div>
            )}
          </CardContent>
          {type === "upcoming" && (
            <CardFooter className="flex justify-between p-4 bg-gray-50 rounded-b-lg">
              <CancelMeetingButton meetingId={meeting.id} />
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
}
