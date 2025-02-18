import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    orderId: "ORD001",
    date: "2024-09-01",
    plan: "Basic",
    card: "Visa **** 1234",
    status: "Paid",
  },
  {
    orderId: "ORD002",
    date: "2024-09-03",
    plan: "Premium",
    card: "MasterCard **** 5678",
    status: "Paid",
  },
  {
    orderId: "ORD003",
    date: "2024-09-05",
    plan: "Pro",
    card: "Visa **** 8765",
    status: "Pending",
  },
  {
    orderId: "ORD004",
    date: "2024-09-07",
    plan: "Enterprise",
    card: "Amex **** 4321",
    status: "Paid",
  },
  {
    orderId: "ORD005",
    date: "2024-09-10",
    plan: "Basic",
    card: "Visa **** 2345",
    status: "Failed",
  },
  {
    orderId: "ORD006",
    date: "2024-09-12",
    plan: "Premium",
    card: "MasterCard **** 6789",
    status: "Paid",
  },
  {
    orderId: "ORD007",
    date: "2024-09-15",
    plan: "Pro",
    card: "Visa **** 9876",
    status: "Pending",
  },
  {
    orderId: "ORD008",
    date: "2024-09-18",
    plan: "Enterprise",
    card: "Amex **** 5432",
    status: "Failed",
  },
  {
    orderId: "ORD009",
    date: "2024-09-20",
    plan: "Basic",
    card: "Visa **** 3456",
    status: "Paid",
  },
  {
    orderId: "ORD010",
    date: "2024-09-22",
    plan: "Premium",
    card: "MasterCard **** 7890",
    status: "Pending",
  },
];

const PaymentHistoryTable = () => {
  return (
    <section className="col-span-full flex flex-col space-y-10 py-8">
      <div className="inline-flex min-h-[46px] flex-col items-start justify-start gap-3 space-y-3">
        <div className="inline-flex items-start justify-start">
          <div className="font-inter text-base font-normal text-primary">
            Purchase History
          </div>
        </div>
        <div className="flex h-[15px] flex-col items-start justify-center gap-2 self-stretch">
          <div className="self-stretch font-inter text-sm font-medium text-primary">
            Below has your purchase historyaccount will loose all your data,
            progress, files and team projects.
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary" > 
            <TableHead className="w-[100px]">Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Card</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{order.orderId}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.plan}</TableCell>
              <TableCell>{order.card}</TableCell>
              <TableCell className="text-right">{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default PaymentHistoryTable;
