"use client";
import "./register.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";

type newUserData = {
  fName: string;
  lName: string;
  email: string;
  lMEmail: string;
  status: "employee" | "lineManager" | "iTStaff" | "finance" | "admin";
};

export default function Register() {
  const form = useForm<newUserData>();
  const { register, handleSubmit } = form;

  const onSubmit: SubmitHandler<newUserData> = async (newuser: newUserData) => {
    const UserPost = {
      fName: newuser.fName,
      lName: newuser.lName,
      email: newuser.email,
      lMEmail: newuser.lMEmail,
      status: newuser.status,
    };

    try {
      const response = await axios.post("api/admin/register", UserPost, {
        headers: { "Content-Type": "application/json" },
      });

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="contentbox">
        <h1>Register</h1>
        <div className="register-box">
          <form
            id="form"
            name="register-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset>
              <legend>Register a new staff</legend>
              <br></br>

              <section>
                <>
                  <label htmlFor="fName">First Name:</label>
                  <input
                    type="text"
                    id="fName"
                    name="fName"
                    required
                    {...register("fName")}
                  />

                  <label htmlFor="lName">Last Name:</label>
                  <input
                    type="text"
                    id="lName"
                    name="lName"
                    required
                    {...register("lName")}
                  />

                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    {...register("email")}
                  />

                  <label htmlFor="lMEmail">Line Manager Email:</label>
                  <input
                    type="email"
                    id="lMEmail"
                    name="lMEmail"
                    required
                    {...register("lMEmail")}
                  />

                  <label htmlFor="status">Status:</label>

                  <select {...register("status", { required: true })}>
                    <option value="">Select a Title</option>
                    <option value="employee">Employee</option>
                    <option value="lineManager">Line Managers</option>
                    <option value="iTStaff">IT Support Staff</option>
                    <option value="finance">Finance Team</option>
                    <option value="admin">Administrator</option>
                  </select>
                </>
              </section>

              <div className="form-actions">
                <SubmitButton />
                <ClearButton form={form} />
              </div>
            </fieldset>
          </form>
          {/* <DevTool control={control} /> */}
        </div>
      </div>
    </>
  );
}

function SubmitButton() {
  return <button type="submit">Submit</button>;
}
function ClearButton({ form }) {
  return (
    <button
      onClick={(event) => {
        form.reset();
      }}
    >
      Clear
    </button>
  );
}
