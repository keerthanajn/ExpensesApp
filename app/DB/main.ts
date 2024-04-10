import mongoose, { Model, Schema } from "mongoose";

const uri = process.env.DATABASE_URL;
try {
  if (uri) {
    mongoose.connect(uri);
  }
} catch (error) {
  console.error("Database connect issues");
}

const userSchema: Schema<User> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  userStatus: String,
});

const payTicketSchema: Schema<PayTicket> = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: userSchema,
  amount: Number,
  currency: String,
  dateMade: Date,
  status: String,
  category: String,
  evidence: { data: Buffer, contentType: String },
  notes: String,
  response: String,
});

const employeeSchema: Schema<Employee> = new mongoose.Schema({
  userDetails: userSchema,
  lineManager: userSchema,
  employees: [userSchema],
  payTickets: [payTicketSchema],
});

const errorTicketSchema: Schema<ErrorTicket> = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  details: String,
  resolved: Boolean,
  dateMade: Date,
  response: String,
  user: userSchema,
});

function workingModel(field: string, Schema: Schema<any>): Model<any> {
  return mongoose.models[field] || mongoose.model(field, Schema);
}

const PayTicket: Model<PayTicket> = workingModel("PayTicket", payTicketSchema);
const User: Model<User> = workingModel("User", userSchema);
const Employee: Model<Employee> = workingModel("Employee", employeeSchema);
const ErrorTicket: Model<ErrorTicket> = workingModel(
  "ErrorTicket",
  errorTicketSchema
);

export { PayTicket, User, Employee, ErrorTicket };
