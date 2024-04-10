import { HydratedDocument } from "mongoose";
import { Employee, User, PayTicket, ErrorTicket } from "./main";
import _ from "lodash";

export async function findEmployee({
  email,
}: User): Promise<HydratedDocument<Employee | null>> {
  if (!email) {
    console.log("no email");
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
    console.log("no email or no user");
    return null;
  }
  return await findEmployee(foundUser);
}

export async function findPayTicket(dateMade) {
  return PayTicket.findOne({ dateMade: dateMade });
}

export async function findResolvedError() {
  return ErrorTicket.find({ resolved: true });
}
export async function findUnresolvedError() {
  return ErrorTicket.find({ resolved: false });
}
