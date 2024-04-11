import { HydratedDocument } from "mongoose";
import { Employee, User, PayTicket, ErrorTicket } from "./main";
import _ from "lodash";

export async function findEmployee({
  email,
}: User): Promise<HydratedDocument<Employee | null>> {
  if (!email) {
    return null;
  } else {
    return await Employee.findOne({ "userDetails.email": email });
  }
}

export async function findUser(
  email: string
): Promise<HydratedDocument<Employee | null>> {
  const foundUser: User | null = await User.findOne({
    email: _.toLower(email),
  });

  if (!email || !foundUser) {
    return null;
  }
  return await findEmployee(foundUser);
}
export async function findErrorTicket() {
  return await ErrorTicket.find();
}
export async function findPayTicket(dateMade) {
  return PayTicket.findOne({ dateMade: dateMade });
}

export async function findResolvedError() {
  return await ErrorTicket.find({ resolved: true });
}
export async function findUnresolvedError() {
  return await ErrorTicket.find({ resolved: false });
}
