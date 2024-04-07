import { User, Employee, PayTicket, ErrorTicket } from "./main";

export function createUser(newUser: User) {
  User.create(newUser);
}
export function createEmployee(newEmployee: Employee) {
  Employee.create(newEmployee);
}

export function createPayTicket(newPayTicket: PayTicket) {
  PayTicket.create(newPayTicket);
}

export function createErrorTicket(newErrorTicket: ErrorTicket) {
  ErrorTicket.create(newErrorTicket);
}
