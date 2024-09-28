"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createBooking } from "@/actions/bookings";
import "react-day-picker/style.css";
import useFetch from "@/hooks/use-fetch";
import { bookingSchema } from "@/app/lib/validator";

export default function BookingForm({ event, availability }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  useEffect(() => {
    if (selectedDate) {
      setValue("date", format(selectedDate, "yyyy-MM-dd"));
    }
  }, [selectedDate, setValue]);

  useEffect(() => {
    if (selectedTime) {
      setValue("time", selectedTime);
    }
  }, [selectedTime, setValue]);

  const { loading, data, fn: fnCreateBooking } = useFetch(createBooking);

  const onSubmit = async (data) => {
    if (!selectedDate || !selectedTime) {
      console.error("Date or time not selected");
      return;
    }

    const startTime = new Date(
      `${format(selectedDate, "yyyy-MM-dd")}T${selectedTime}`
    );
    const endTime = new Date(startTime.getTime() + event.duration * 60000);

    const bookingData = {
      eventId: event.id,
      name: data.name,
      email: data.email,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      additionalInfo: data.additionalInfo,
    };

    await fnCreateBooking(bookingData);
  };

  const availableDays = availability.map((day) => new Date(day.date));

  const timeSlots = selectedDate
    ? availability.find(
        (day) => day.date === format(selectedDate, "yyyy-MM-dd")
      )?.slots || []
    : [];

  if (data) {
    return (
      <div className="text-center p-10 border border-gray-300 bg-white shadow-2xl rounded-lg">
        <h2 className="text-4xl font-extrabold text-green-600 mb-2 drop-shadow-md">
          Booking Successful!
        </h2>
        {/* Emoji placed under the heading for small screens */}
        <span className="text-6xl mb-4 inline-block sm:mb-2">🎉</span>
        {data.meetLink && (
          <p className="text-lg text-gray-700 mb-4">
            You can join the meeting using the link below:
          </p>
        )}
        <a
          href={data.meetLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-full shadow-md transition duration-300 transform"
        >
          Join Meeting
        </a>
        {/* Image added below the Join Meeting button */}
        <img
          src="/booking.png" // Replace with your image path
          alt="Meeting illustration" // Provide a meaningful alt text
          className="mt-6 w-full md:w-2/3 lg:w-1/2 mx-auto rounded-lg" // Adjust size and styling as needed
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 p-10 border bg-white rounded-lg shadow-lg">
      <div className="md:h-96 flex flex-col md:flex-row gap-5">
        <div className="w-full">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              setSelectedTime(null);
            }}
            disabled={[{ before: new Date() }]}
            modifiers={{ available: availableDays }}
            modifiersStyles={{
              available: {
                background: "lightblue",
                borderRadius: 100,
              },
            }}
          />
        </div>
        <div className="w-full h-full md:overflow-y-auto no-scrollbar">
          {selectedDate && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">
                Available Time Slots
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedTime === slot ? "default" : "outline"}
                    onClick={() => setSelectedTime(slot)}
                    className={`transition-all transform hover:scale-105 duration-200 ease-in-out p-4 rounded-lg shadow-lg ${
                      selectedTime === slot
                        ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                        : "bg-white text-purple-600 border border-purple-300 hover:bg-purple-100 hover:text-purple-700"
                    }`}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedTime && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              {...register("name")}
              placeholder="Your Name"
              className="transition-all duration-200 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300 hover:shadow-lg hover:border-purple-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="transition-all duration-200 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300 hover:shadow-lg hover:border-purple-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Textarea
              {...register("additionalInfo")}
              placeholder="Additional Information"
              className="transition-all duration-200 ease-in-out border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-300 hover:shadow-lg"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className={`w-full transition-all duration-200 ease-in-out ${
              loading
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white cursor-not-allowed" // Change this color to your desired loading color
                : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            }`}
          >
            {loading ? (
              <span className="text-white">Scheduling...</span> // Optional: Change text color while loading
            ) : (
              "Schedule Event"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
