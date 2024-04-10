"use client";
import "./register.css";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type newUserData = {
  firstName: string;
  lastName: string;
  email: string;
  lMEmail: string;
  status: "employee" | "lineManager" | "iTSupport" | "finance" | "admin";
};

export default function Register() {
  const form = useForm<newUserData>();
  const { register, handleSubmit } = form;

  const onSubmit: SubmitHandler<newUserData> = async (newuser: newUserData) => {
    const UserPost = {
      firstName: newuser.firstName,
      lastName: newuser.lastName,
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
      console.log(error.message);
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
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    {...register("firstName")}
                  />

                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    {...register("lastName")}
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

                  <select className="status" required {...register("status")}>
                    <option disabled>Select Employee Status</option>
                    <option value="employee">Employee</option>
                    <option value="lineManager">Line Managers</option>
                    <option value="iTSupport">IT Support Staff</option>
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
