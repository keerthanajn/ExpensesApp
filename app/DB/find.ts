import { Employee, LineManager, User } from "./main";
import _ from "lodash";

export async function findEmployee({ email }: User): Promise<Employee | null> {
  if (!email) {
    console.log("no email");
    return null;
  } else {
    return await Employee.findOne({ "userDetails.email": email });
  }
}
export async function findLineManager({
  email,
}: User): Promise<LineManager | null> {
  if (!email) {
    console.log("no email");
    return null;
  } else {
    return await LineManager.findOne({ "userDetails.email": email });
  }
}
export async function findUser(
  email: string
): Promise<Employee | LineManager | null> {
  const foundUser: User | null = await User.findOne({
    email: _.toLower(email),
  });

  if (!email || !foundUser) {
    console.log("no email or no user");
    return null;
  }

  if (foundUser.userStatus == "lineManager") {
    return await findLineManager(foundUser);
  } else {
    return await findEmployee(foundUser);
  }
}
