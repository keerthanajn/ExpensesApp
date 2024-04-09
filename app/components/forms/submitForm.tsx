import "./forms.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import FileInput from "./fileInput";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";

export default function SubmitForm() {
  const { user } = useKindeBrowserClient();
  const currentUser = user;
  const form = useForm<ticketInputs>();
  const { register, handleSubmit, control } = form;

  const onSubmit: SubmitHandler<ticketInputs> = async (
    ticket: ticketInputs
  ) => {
    const ticketPost = {
      userEmail: currentUser.email,
      amount: ticket.amount,
      currency: ticket.currency,
      category: ticket.category,
      notes: ticket.notes,
      evidence: ticket.evidence[0],
    };

    try {
      const response = await axios.post("api/submit", ticketPost, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="contentbox">
        <div className="container">
          <form className="claim-form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>Submit a claim</legend>
              <div className="form-group">
                <label htmlFor="Category">Category:</label>
                <input
                  className="entry_box"
                  type="text"
                  id="category"
                  name="category"
                  required
                  {...register("category")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Amount">Amount:</label>
                <input
                  className="entry_box"
                  type="number"
                  id="amount"
                  name="amount"
                  required
                  {...register("amount")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Currency">Currency:</label>
                <input
                  className="entry_box"
                  type="text"
                  id="currency"
                  name="currency"
                  required
                  {...register("currency")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Notes">Notes:</label>
                <textarea
                  className="entry_box"
                  id="notes"
                  name="notes"
                  {...register("notes")}
                />
              </div>
              <div>
                <FileInput register={register} />
              </div>

              <div className="form-actions">
                <SubmitButton />
                <ClearButton form={form} />
              </div>
            </fieldset>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
}

type ticketInputs = {
  category: string;
  amount: number;
  notes: string;
  currency: string;
  evidence: FileList;
};

function SubmitButton() {
  return (
    <button type="submit" className="blueButton">
      Submit
    </button>
  );
}
function ClearButton({ form }) {
  return (
    <button
      type="button"
      onClick={(event) => {
        form.reset();
      }}
    >
      Clear
    </button>
  );
}
