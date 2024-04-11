"use client";
import _ from "lodash";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

type reviewInput = {
  response: string;
};
export default function ReviewForm({
  _id,
  amount,
  category,
  currency,
  dateMade,
  notes,
  email,
  firstName,
  lastName,
}) {
  const router = useRouter();
  const form = useForm<reviewInput>();
  const { register, handleSubmit } = form;
  const onAccept: SubmitHandler<reviewInput> = async (
    reviewInput: reviewInput
  ) => {
    const reviewData = {
      userEmail: email,
      ticketId: _id,
      response: reviewInput.response,
      status: "accepted",
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/review",
        reviewData,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setTimeout(() => {
        router.push("/review");
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };
  const onReject: SubmitHandler<reviewInput> = async (
    reviewInput: reviewInput
  ) => {
    const reviewData = {
      userEmail: email,
      ticketId: _id,
      response: reviewInput.response,
      status: "accepted",
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/review",
        reviewData,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setTimeout(() => {
        router.push("/review");
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form>
      <div id="reviewform_box">
        <div id="top_left_box">
          <p>
            Name: {firstName} {lastName}
          </p>
          <p>Email: {_.capitalize(email)}</p>
        </div>
        <div id="top_right_box">
          <p id="upload_date">Made: {dateMade.toUTCString()}</p>
        </div>
        <div id="bottom_main_box">
          <p>Category: {_.capitalize(category)}</p>
          <p>
            Amount: {amount} {currency}
          </p>
          {notes && <p id="notes_box"> Notes: {notes} </p>}
        </div>
        <textarea
          placeholder="Response"
          id="manager_response"
          {...register("response")}
        />
        <div id="button_container">
          <button
            id="accept_button"
            type="submit"
            onClick={handleSubmit(onAccept)}
          >
            Accept
          </button>
          <button
            id="deny_button"
            type="submit"
            onClick={handleSubmit(onReject)}
          >
            Deny
          </button>
        </div>
      </div>
    </form>
  );
}
