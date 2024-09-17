'use client'
import React from 'react';
import { format } from "date-fns";
import { Calendar as CalendarIcon, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BookNowProps {
  bookingPrice: number;
}

function BookNow({ bookingPrice }: BookNowProps) {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className='relative h-[40px] w-full flex items-center justify-between   font-bold text-blue-900 cursor-pointer'>
      <Popover>
        <PopoverTrigger asChild >
          <Button
            variant={"outline"}
            className={cn(
              " justify-start text-left font-normal border-0 absolute left-2",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className=" h-5 w-5 text-blue-900" />
            {date ? format(date, "PPP") : <span className='font-bold text-blue-900'>Book Now</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 border-none">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <span className='absolute flex items-center border border-blue-900 rounded-full px-3 py-2 right-1'>
        ₹{bookingPrice} 
        <ArrowRight className='' />
      </span>
    </div>
  );
}

export default BookNow;
