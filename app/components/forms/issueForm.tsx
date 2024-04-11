"use client";
import _ from "lodash";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

type reviewInput = {
  response: string;
};
export default function IssueForm({
  _id,
  index,
  title,
  details,
  dateMade,
  email,
  firstName,
  lastName,
}) {
  const router = useRouter();
  const form = useForm<reviewInput>();
  const { register, handleSubmit } = form;
  const onResolve: SubmitHandler<reviewInput> = async (
    reviewInput: reviewInput
  ) => {
    const reviewData = {
      userEmail: email,
      ticketId: _id,
      response: reviewInput.response,
      index: index,
      resolved: true,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/handleError",
        reviewData,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setTimeout(() => {
        router.push("/viewIssues");
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };
  const onUnresolve: SubmitHandler<reviewInput> = async (
    reviewInput: reviewInput
  ) => {
    const reviewData = {
      userEmail: email,
      ticketId: _id,
      response: reviewInput.response,
      index: index,
      resolved: false,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/handleError",
        reviewData,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setTimeout(() => {
        router.push("/viewIssues");
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
          <p>Made: {dateMade.toUTCString()}</p>
        </div>
        <div id="bottom_main_box">
          <p>Title: {_.capitalize(title)}</p>
          {details && <p>Details: {_.capitalize(details)}</p>}
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
            onClick={handleSubmit(onResolve)}
          >
            Resolved
          </button>
          <button
            id="deny_button"
            type="submit"
            onClick={handleSubmit(onUnresolve)}
          >
            Unresolve
          </button>
        </div>
      </div>
    </form>
  );
}
