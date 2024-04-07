import { NextResponse } from "next/server";
import { createEmployee, createUser } from "../../../DB/create";
import { findUser } from "../../../DB/find";

export async function POST(req: Request) {
  const userData = await req.json();

  try {
    await formToUser(userData);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }

  return NextResponse.json(userData);
}

async function formToUser(userData: {
  email: string;
  firstName: string;
  lastName: string;
  lMEmail: string;
  status: any;
}) {
  const myLineManager: Employee = await findUser(userData.lMEmail);
  if (!myLineManager) {
    throw new Error("Line Manager does not exist");
  }
  const newUser: User = {
    email: userData.email,
    firstName: userData.firstName,
    lastName: userData.lastName,
    userStatus: userData.status,
  };

  createUser(newUser);

  const newEmployee: Employee = {
    userDetails: newUser,
    lineManager: myLineManager.userDetails,
    payTickets: [],
  };

  createEmployee(newEmployee);
}
