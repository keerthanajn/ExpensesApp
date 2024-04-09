import "./profile.css";

export default function Profile() {
  return (
    <>
      <div id="contentbox">
        <div className="profile-settings-box">
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
