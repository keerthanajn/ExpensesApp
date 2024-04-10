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
  _id: ObjectId;
  title: string;
  details: string;
  resolved: boolean;
  dateMade: Date;
  response?: string;
  user?: User;
}
type filteredTickets = {
  accepted: PayTicket[];
  rejected: PayTicket[];
  pending: PayTicket[];
};

type lmTicketList = {
  employee: HydratedDocument<Employee>;
  payTickets: PayTicket[];
}[];

type errorTicketList = {
  resolved: ErrorTicket[];
  unresolved: ErrorTicket[];
};
