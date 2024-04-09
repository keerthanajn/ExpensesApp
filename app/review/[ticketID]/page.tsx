"use client";
import "../review.css";
import ReviewForm from "../../components/forms/reviewForm";

export default function Reviewclaim({
  params: { ticketID },
}: {
  params: { ticketID: string };
}) {
  return <ReviewForm ticketId={ticketID} />;
}
