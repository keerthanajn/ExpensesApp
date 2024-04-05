import mongoose, { Model, Schema } from "mongoose";

const uri = process.env.DATABASE_URL;
try {
  if (uri) {
    mongoose.connect(uri);
  }
} catch (error) {
  console.error();
}

const payTicketSchema = new mongoose.Schema({
  amount: Number,
  currency: String,
  dateMade: Date,
  status: String,
  category: String,
  evidence: { data: Buffer, contentType: String },
  notes: String,
  response: String,
});

const userSchema: Schema = new mongoose.Schema({
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

const employeeSchema: Schema = new mongoose.Schema({
  userDetails: userSchema,
  lineManager: userSchema,
  payTickets: [payTicketSchema],
});

const lineManagerSchema: Schema = new mongoose.Schema({
  userDetails: userSchema,
  employees: [employeeSchema],
  payTickets: [payTicketSchema],
});

function workingModel(field: string, Schema: Schema): Model<any> {
  return mongoose.models[field] || mongoose.model(field, Schema);
}

const PayTicket: Model<PayTicket> = workingModel("PayTicket", payTicketSchema);
const User: Model<User> = workingModel("User", userSchema);
const Employee: Model<Employee> = workingModel("Employee", employeeSchema);
const LineManager: Model<LineManager> = workingModel(
  "Line Manager",
  lineManagerSchema
);

export { PayTicket, User, Employee, LineManager };
