import "./forms.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";
import { useState } from "react";

export default function SubmitForm() {
  const { user } = useKindeBrowserClient();
  const currentUser = user;
  const [file, setFile] = useState<File>(null);
  const form = useForm<ticketInputs>();
  const { register, handleSubmit, getValues } = form;

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
      console.log(error.message);
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
                <FileInput
                  register={register}
                  file={file}
                  setFile={setFile}
                  getValues={getValues}
                />
              </div>

              <div className="form-actions">
                <SubmitButton />
                <ClearButton form={form} setFile={setFile} />
              </div>
            </fieldset>
          </form>
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
function ClearButton({ form, setFile }) {
  return (
    <button
      type="button"
      onClick={(event) => {
        setFile(null);
        form.reset();
      }}
    >
      Clear
    </button>
  );
}

function FileInput({ register, file, setFile, getValues }) {
  return (
    <div>
      <div className="dropzone-container">
        {!file ? (
          <label htmlFor="dropzone-file" className="dropzone-label">
            <div className="dropzone-content">
              <svg
                className="dropzone-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="dropzone-text">
                <span>Supporting evidence</span>
              </p>
              <p className="dropzone-text">Click to upload or drag and drop</p>
              <p className="dropzone-hint">(Image or pdf)</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="dropzone-input hidden"
              name="evidence"
              accept="image/*,.pdf"
              required
              {...register("evidence", {
                onChange: (e) => {
                  setFile(getValues("evidence")[0]);
                },
              })}
            />
          </label>
        ) : (
          <label htmlFor="dropzone-file" className="dropzone-label2">
            <p className="dropzone-text">
              <span>{file.name} added Succesfuly</span>
            </p>
          </label>
        )}
      </div>
    </div>
  );
}
