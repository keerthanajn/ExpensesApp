interface User {
  email: string;
  firstName: string;
  lastName: string;
  userStatus: "employee" | "lineManager" | "admin" | "iTSupport" | "finance";
}
interface PayTicket {
  _id: OBjectID;
  user: User;
  amount: number;
  currency: string;
  dateMade: Date;
  status: "accepted" | "rejected" | "pending";
  category: string;
  evidence?: { data: Buffer; contentType: String };
  notes?: string;
  response?: string;
}
interface Employee {
  userDetails: User;
  lineManager: User;
  employees?: User[];
  payTickets: PayTicket[];
}

interface ErrorTicket {
  title: string;
  details: string;
  resolved: boolean;
  dateMade: Date;
  user?: User;
}
interface filteredTickets {
  accepted: PayTicket[];
  rejected: PayTicket[];
  pending: PayTicket[];
}

type lmTicketList = {
  employee: HydratedDocument<Employee>;
  payTickets: PayTicket[];
}[];
