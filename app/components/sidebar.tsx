export default function Sidebar() {
  return (
    <div id="sidebar">
      <a href="view" className="sidebar_item">
        View Claims
      </a>
      <a href="submit" className="sidebar_item">
        Submit a Claim
      </a>
      <a href="reviews" className="sidebar_item">
        Review a Claim
      </a>
      <a href="register" className="sidebar_item">
        Register an account
      </a>
      <a href="profile" className="sidebar_item">
        Profile
      </a>
    </div>
  );
}
