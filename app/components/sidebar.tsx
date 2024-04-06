import Link from "next/link";

export default function Sidebar({ status }) {
  return (
    <div id="sidebar">
      <Link href="/mainpage" className="sidebar_item">
        Dashboard
      </Link>
      <Link href="/profile" className="sidebar_item">
        Profile
      </Link>
      <Link href="/view" className="sidebar_item">
        View Claims
      </Link>
      <Link href="/submit" className="sidebar_item">
        Submit Claim
      </Link>
      {status == "lineManager" ? (
        //  Line Manager Function Only
        <Link href="/review" className="sidebar_item">
          Claim Management
        </Link>
      ) : (
        status == "admin" && (
          // Admin Function Only
          <Link href="/register" className="sidebar_item">
            Register Account
          </Link>
        )
      )}

      <Link href="/report" className="sidebar_item">
        Help
      </Link>
    </div>
  );
}
