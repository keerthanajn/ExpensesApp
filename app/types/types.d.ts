interface PayTicket {
  amount: number;
  currency: string;
  dateMade: date;
  status: "accepted" | "rejected" | "pending";
  category: string;
  evidence?: { data: Buffer; contentType: String };
  notes?: string;
  response?: string;
}
interface User {
  email: string;
  firstName: string;
  lastName: string;
  userStatus: "employee" | "lineManager" | "admin";
}

interface Employee {
  userDetails: User;
  lineManager: User;
  payTickets: PayTicket[];
}

interface LineManager {
  userDetails: User;
  employees: Employee[];
  payTickets: PayTicket[];
}

interface filteredTickets {
  accepted: PayTicket[];
  rejected: PayTicket[];
  pending: PayTicket[];
}
