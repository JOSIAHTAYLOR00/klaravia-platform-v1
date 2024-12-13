"use client";

import React, { useState } from "react";
import { Box, Text, Grid, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Sidebar } from "@/app/components/user-sidebar-with-header/Sidebar";

interface Event {
  date: string;
  title: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get calendar details
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Navigation functions
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Format date for comparison with events
  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    if (events) {
      return events.filter((event) => {
        const eventDate = new Date(event.date);
        return formatDate(eventDate) === formatDate(date);
      });
    }
  };

  // Calendar generation
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const days = [];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Fill in blank days at start
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<Box key={`empty-${i}`} className="p-2" />);
  }

  // Fill in actual days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayEvents = getEventsForDate(date);
    const isToday = formatDate(date) === formatDate(new Date());

    days.push(
      <Box
        key={day}
        className={`
          relative p-2 min-h-[100px] border border-black/20 dark:border-white/20
          ${isToday ? "bg-blue-500/20" : "hover:bg-white/5"}
          transition-colors duration-200
        `}
      >
        <Text
          className={`
            text-sm font-medium mb-2
            ${isToday ? "text-amber-500" : "text-blue-50/70"}
          `}
        >
          {day}
        </Text>

        {dayEvents &&
          dayEvents.map((event, index) => (
            <Box
              key={index}
              className="
              bg-gradient-to-r from-amber-500 to-amber-600
              text-white text-xs p-1 rounded-md mb-1
              truncate cursor-pointer
              hover:from-amber-600 hover:to-amber-700
              transition-all duration-200
            "
              title={event.title}
            >
              {event.title}
            </Box>
          ))}
      </Box>
    );
  }

  return (
    <Sidebar>
      <Box w="full" minH="92vh" p={{ base: "10px", lg: "40px" }} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg">
        <Box className="bg-white dark:bg-black/40 dark:border dark:border-black/10 rounded-lg p-6">
          {/* Calendar Header */}
          <HStack justify="space-between" mb={6}>
            <Text className="text-2xl font-bold text-blue-50">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </Text>
            <HStack spacing={2}>
              <button onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-main dark:text-blue-50" />
              </button>
              <button onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-main dark:text-blue-50" />
              </button>
            </HStack>
          </HStack>

          {/* Day Headers */}
          <Grid templateColumns="repeat(7, 1fr)" gap={0} mb={2}>
            {dayNames.map((day) => (
              <Box key={day} className="p-2 text-center font-medium text-blue-50/50">
                {day}
              </Box>
            ))}
          </Grid>

          {/* Calendar Grid */}
          <Grid templateColumns="repeat(7, 1fr)" gap={0}>
            {days}
          </Grid>

          {/* Event Legend */}
          {events && events.length > 0 && (
            <VStack align="start" mt={6} className="border-t border-white/10 pt-4">
              <Text className="text-sm font-medium text-blue-50 mb-2">Upcoming Events</Text>
              {events.map((event, index) => (
                <HStack key={index} spacing={3}>
                  <Box className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600" />
                  <Text className="text-sm text-blue-50/70">
                    {event.title} - {new Date(event.date).toLocaleDateString()}
                  </Text>
                </HStack>
              ))}
            </VStack>
          )}
        </Box>
      </Box>
    </Sidebar>
  );
};

export default Calendar;
