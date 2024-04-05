import "./profile.css";

export default function Profile() {
  return (
    <>
      <header> <p><a href="mainpage" className="header_item">FDM Expenses App</a></p>   <p className="header_item"><a href="login">Sign out</a></p> </header>
      <div id="sidebar">
        <a href="mainpage" className="sidebar_item">Dashboard</a>
        <a href="view" className="sidebar_item">View Claims</a>
        <a href="submit" className="sidebar_item">Submit a Claim</a>
        <a href="report" className="sidebar_item">Report an Issue</a>
        <a href="register" className="sidebar_item">Register an Account</a>
        <a href="review" className="sidebar_item">Review a Claim</a>
        <a href="profile" className="sidebar_item">Profile</a>
      </div>
      <div id="contentbox">
        <div className="profile-settings-box">
          <h1>Profile</h1>
          <form
            id="profile-form"
            name="profile-form"
            method="post"
            action="/update-profile"
          >
            <fieldset>
              <legend>Personal Information</legend>
              <label htmlFor="fName">First Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="lName">Last Name:</label>
              <input type="number" id="contact" name="contact" minLength={12} />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="password">New Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                minLength={8}
              />
              <br></br>

              <small>Leave blank if you don't want to change</small>

              <div className="form-actions">
                <button type="submit">Save Changes</button>
                <button type="submit" id="cancel">
                  Cancel
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
