import { createPayTicket } from "../../DB/create";

export async function createTodo(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const newTicket = {
    amount: formData.get("amount"),
    currency: formData.get("currency"),
    dateMade: new Date(),
    status: "pending",
    category: formData.get("category"),
    evidence: formData.get("evidence"),
  };

  try {
    createPayTicket(newTicket);
    console.log("Works");
  } catch (error) {
    return { message: "Failed to create todo" };
  }
  //   try {
  //     await sql`
  //       INSERT INTO todos (text)
  //       VALUES (${data.todo})
  //     `;

  //     revalidatePath("/");
  //     return { message: `Added todo ${data.todo}` };
  //   } catch (e) {
  //     return { message: "Failed to create todo" };
  //   }
}
