"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type newErrorTicket = {
  title: String;
  details: String;
};
export default function ReportForm() {
  const form = useForm<newErrorTicket>();
  const { register, handleSubmit } = form;

  const onSubmit: SubmitHandler<newErrorTicket> = async (
    newErrorTicket: newErrorTicket
  ) => {
    try {
      const response = await axios.post("api/error", newErrorTicket, {
        headers: { "Content-Type": "application/json" },
      });

      form.reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div id="contentbox">
        <div className="register-box">
          <form id="form" name="report-form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>Report an Issue</legend>
              <br></br>
              <section>
                <label htmlFor="title">Issue Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  {...register("title")}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  {...register("title")}
                />
              </section>

              <div className="form-actions">
                <button type="submit">Confirm</button>
                <button type="reset">Clear</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
