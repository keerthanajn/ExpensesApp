import "./forms.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import FileInput from "./fileInput";
import formToTicket from "./forms";
import { revalidatePath } from "next/cache";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";
// import { revalidatePath } from "next/cache";

type ticketInputs = {
  category: string;
  amount: number;
  notes: string;
  currency: string;
  evidence: File;
};

function SubmitButton() {
  return <button type="submit">Submit</button>;
}

export default function SubmitForm() {
  const { user } = useKindeBrowserClient();
  const currentUser = user;
  const form = useForm<ticketInputs>();
  const { register, handleSubmit, formState, control } = form;

  const onSubmit: SubmitHandler<ticketInputs> = async (
    ticket: ticketInputs
  ) => {
    const ticketPost = {
      amount: ticket.amount,
      currency: ticket.currency,
      category: ticket.category,
      notes: ticket.notes,
      evidence: ticket.evidence[0],
    };
    const response = await axios.post("api/forms", ticketPost, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(ticketPost, ticket, response.data);
  };

  return (
    <>
      <div id="contentbox">
        <div className="container">
          <legend>Submit a claim</legend>
          <form className="claim-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                className="entry_box"
                placeholder="Category"
                type="text"
                id="category"
                name="category"
                required
                {...register("category")}
              />
            </div>
            <div className="form-group">
              <input
                className="entry_box"
                placeholder="Amount"
                type="number"
                id="amount"
                name="amount"
                required
                {...register("amount")}
              />
            </div>
            <div className="form-group">
              <input
                className="entry_box"
                placeholder="Currency"
                type="text"
                id="currency"
                name="currency"
                required
                {...register("currency")}
              />
            </div>
            <div className="form-group">
              <textarea
                className="entry_box"
                placeholder="Notes"
                id="notes"
                name="notes"
                {...register("notes")}
              />
            </div>

            <FileInput register={register} />

            <div className="form-actions">
              <SubmitButton />
              <button type="button">Clear</button>
            </div>
            <DevTool control={control} />
          </form>
        </div>
      </div>
    </>
  );
}
