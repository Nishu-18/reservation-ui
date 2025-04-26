"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, FileText } from "lucide-react";
import { Ellipsis } from "lucide-react";

export type ReservationProps = {
  name: string;
  status: "Pending" | "Cancelled" | "Confirmed";
  resNo: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  bookingDate: string;
  guests: { adults: number; children: number };
  total: number;
  due: number;
  docStatus: "Received" | "Pending";
};

export function ReservationCard({
  name,
  status,
  resNo,
  email,
  phone,
  checkIn,
  checkOut,
  bookingDate,
  guests,
  total,
  due,
  docStatus,
}: ReservationProps) {
  const statusColor = {
    Pending: "bg-yellow-400 text-black",
    Confirmed: "bg-green-500",
    Cancelled: "bg-red-500",
  };

  const docColor = {
    Received: "bg-green-600",
    Pending: "bg-yellow-500 text-black",
  };

  return (
    <div className="relative rounded-xl border border-border p-6 shadow-sm flex flex-col gap-6">
      
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        
      </div>

      {/* Name and Reservation No */}
      <div className="flex justify-between">
        <div className="flex gap-3">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        
        <Badge className={statusColor[status]}>{status}</Badge>
        

        
        

        </div>
        <div>
            <Ellipsis/>
        </div>
        
        
        
      </div>
      <p className="text-sm text-muted-foreground">Res. No. {resNo}</p>
      <hr />

      {/* Two-column Layout */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        
        {/* Left Column */}
        <div className="flex flex-col gap-2">
          <div>
            <p className=" text-muted-foreground">Check-in / Check-out:</p>
            <p>{checkIn} - {checkOut}</p>
          </div>

          <div>
            <p className=" text-muted-foreground">Booking Date:</p>
            <p>{bookingDate}</p>
          </div>

          <div>
            <p className=" text-muted-foreground">Guests:</p>
            <p>🧑 {guests.adults} 👶 {guests.children}</p>
          </div>

          <Button variant="outline" className="w-40">
        View Room
      </Button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText size={16} />
            <p className="text-muted-foreground">Doc(s)</p>
            
          </div>
          <Badge className={docColor[docStatus]}>{docStatus}</Badge>
          

          <div className="flex items-center gap-2 mt-2">
            <p className="">Total: ${total}</p>
            
          </div>
          {due > 0 && (
              <Badge className="bg-red-500 text-white">Due: ${due}</Badge>
            )}
        </div>
      </div>

      {/* View Room Button */}
      
    </div>
  );
}
