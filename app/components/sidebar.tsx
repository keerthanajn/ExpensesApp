import Link from "next/link";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <Link href="/view" className="sidebar_item">
        View Claims
      </Link>
      <Link href="/submit" className="sidebar_item">
        Submit Claim
      </Link>
      <Link href="/reviews" className="sidebar_item">
        Review Claim
      </Link>
      <Link href="/register" className="sidebar_item">
        Register account
      </Link>
      <Link href="/profile" className="sidebar_item">
        Profile
      </Link>
    </div>
  );
}
