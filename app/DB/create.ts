import { User, Employee, LineManager, PayTicket } from "./main";

export function createUser(newUser: User) {
  User.create(newUser);
}
export function createEmployee(newEmployee: Employee) {
  Employee.create(newEmployee);
}
export function createLineManager(newLineManager: LineManager) {
  LineManager.create(newLineManager);
}

export function createPayTicket(newPayTicket: PayTicket) {
  PayTicket.create(newPayTicket);
}
