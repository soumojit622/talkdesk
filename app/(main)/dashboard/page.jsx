"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateUsername } from "@/actions/users";
import { BarLoader } from "react-spinners";
import useFetch from "@/hooks/use-fetch";
import { getLatestUpdates } from "@/actions/dashboard";
import { format } from "date-fns";
import { usernameSchema } from "@/app/lib/validator";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(usernameSchema),
  });

  useEffect(() => {
    if (isLoaded) {
      setValue("username", user?.username);
    }
  }, [isLoaded, user, setValue]); // Include 'user' and 'setValue' as dependencies

  const {
    loading: loadingUpdates,
    data: upcomingMeetings,
    fn: fnUpdates,
  } = useFetch(getLatestUpdates);

  useEffect(() => {
    (async () => await fnUpdates())();
  }, [fnUpdates]); // Include fnUpdates in the dependency array

  const { loading, error, fn: fnUpdateUsername } = useFetch(updateUsername);

  const onSubmit = async (data) => {
    await fnUpdateUsername(data.username);
  };

  return (
    <div className="p-6 min-h-screen space-y-8">
      <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">
            Welcome, {user?.firstName}!
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!loadingUpdates ? (
            <div className="space-y-6 font-light">
              <div>
                {upcomingMeetings && upcomingMeetings.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {upcomingMeetings.map((meeting) => (
                      <li key={meeting.id} className="text-gray-700">
                        <strong>{meeting.event.title}</strong> on{" "}
                        {format(
                          new Date(meeting.startTime),
                          "MMM d, yyyy h:mm a"
                        )}{" "}
                        with <span className="font-medium">{meeting.name}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No upcoming meetings</p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Loading updates...</p>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg rounded-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">
            Your Unique Link
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 text-lg font-semibold">
                  {window?.location.origin}/
                </span>
                <Input
                  {...register("username")}
                  placeholder="username"
                  className="border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all duration-300 shadow-sm"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm mt-1">{error?.message}</p>
              )}
            </div>
            {loading && (
              <BarLoader className="mb-4" width={"100%"} color="#9d4edd" />
            )}
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:from-violet-700 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 transition duration-200 py-2 rounded-md shadow-sm"
            >
              Update Username
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
