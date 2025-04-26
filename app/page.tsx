import { ReservationCard } from "./ReservationCard";
import type { ReservationProps } from "./ReservationCard";


const reservations:ReservationProps[] = [
  {
    name: "John Doe",
    status: "Pending",
    resNo: "#12345",
    email: "john.doe@example.com",
    phone: "+1 234-567-890",
    checkIn: "01/01/2024",
    checkOut: "01/05/2024",
    bookingDate: "12/25/2023",
    guests: { adults: 2, children: 1 },
    total: 500,
    due: 200,
    docStatus: "Received",
  },
  {
    name: "Jane Smith",
    status: "Cancelled",
    resNo: "#12346",
    email: "jane.smith@example.com",
    phone: "+1 987-654-321",
    checkIn: "02/01/2024",
    checkOut: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: { adults: 1, children: 0 },
    total: 300,
    due: 100,
    docStatus: "Pending",
  },
  {name: "Manoj",
    status: "Confirmed",
    resNo: "#Testqww",
    email: "niks@live.in",
    phone: "+1 989-654-321",
    checkIn: "02/01/2024",
    checkOut: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: { adults: 1, children: 0 },
    total: 1300,
    due: 100,
    docStatus: "Pending",
    },
    {name: "Robert Chen",
        status: "Confirmed",
        resNo: "#123467",
        email: "reobert@example.com",
        phone: "+1 987-654-456",
        checkIn: "02/01/2024",
        checkOut: "02/03/2024",
        bookingDate: "01/15/2024",
        guests: { adults: 1, children: 0 },
        total: 750,
        due: 0,
        docStatus: "Received"},
        {
            name: "Sarah Johnson",
        status: "Pending",
        resNo: "#123468",
        email: "sarah@example.com",
        phone: "+1 987-654-643",
        checkIn: "02/01/2024",
        checkOut: "02/03/2024",
        bookingDate: "01/15/2024",
        guests: { adults: 1, children: 0 },
        total: 400,
        due: 400,
        docStatus: "Pending"
        },{
            name: "Michael Brown",
        status: "Confirmed",
        resNo: "#12349",
        email: "mbrown@example.com",
        phone: "+1 987-654-012",
        checkIn: "02/01/2024",
        checkOut: "02/03/2024",
        bookingDate: "01/15/2024",
        guests: { adults: 1, children: 0 },
        total: 300,
        due: 150,
        docStatus: "Received"
        }

];

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reservations.map((res, idx) => (
          <ReservationCard key={idx} {...res} />
        ))}
      </div>
    </div>
  );
}
