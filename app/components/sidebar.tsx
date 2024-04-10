import Link from "next/link";

export default function Sidebar({ status, lineman }) {
  return (
    <div id="sidebar">
      <Link href="/profile" className="sidebar_item">
        Profile
      </Link>
      <Link href="/view" className="sidebar_item">
        View Your Claims
      </Link>
      <Link href="/submit" className="sidebar_item">
        Submit Claim
      </Link>
      {lineman && (
        //  Line Manager Function Only
        <Link href="/review" className="sidebar_item">
          Claim Management
        </Link>
      )}
      {status == "iTSupport" ? (
        // It Support Function Only
        <Link href="/viewIssues" className="sidebar_item">
          View Issues
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
