"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <>
    <div className=" p-4 flex flex-col md:flex-row  md:items-center  justify-between shadow-sm">
      <h1 className="text-2xl font-bold">Reservations</h1>

      <div className="flex flex-wrap gap-2 ">
       

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Actions
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Phone</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      <Button variant={"secondary"} className="bg-blue-500 color:white">+ Create</Button>

      </div>
      
    </div>
    <div className=" p-4 flex flex-col md:flex-row  md:items-center shadow-sm gap-2">
    <Input placeholder="Search" className="w-48" />

    <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Communication
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Phone</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Status
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Confirmed</DropdownMenuItem>
            <DropdownMenuItem>Cancelled</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Source
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Website</DropdownMenuItem>
            <DropdownMenuItem>App</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              Payment
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Paid</DropdownMenuItem>
            <DropdownMenuItem>Unpaid</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
    </>
    
  );
}
