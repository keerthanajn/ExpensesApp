import './profile.css'

export default function Profile() {
    return (
        <>
        <header> <p><a href="mainpage" class="header_item">FDM Expenses App</a></p>   <p href="login" class="header_item"><a href="#home">Sign out</a></p> </header>
        <div id="sidebar">
        <a href="mainpage" class="sidebar_item">Dashboard</a>
        <a href="view" class="sidebar_item">View Claims</a>
        <a href="submit" class="sidebar_item">Submit a Claim</a>
        <a href="reviews" class="sidebar_item">Review a Claim</a>
        <a href="register" class="sidebar_item">Register an account</a>
        <a href="profile" class="sidebar_item">Profile</a>
      </div>
      <div id="contentbox">
        <div className="profile-settings-box">
            <h1>Profile</h1>
            <form id="profile-form" name="profile-form" method="post" action="/update-profile">
                <fieldset>
                    <legend>Personal Information</legend>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" />

                        <label htmlFor="bio">Contact Number:</label>
                        <input type="number" id="contact" name="contact" minLength="12" />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        
                        <label htmlFor="password">New Password:</label>
                        <input type="password" id="password" name="password" minLength="8" /><br></br>

                        <small>Leave blank if you don't want to change</small>

                    <div className="form-actions">
                        <button type="submit">Save Changes</button>
                        <button type="submit" id="cancel">Cancel</button>
                    </div>
                </fieldset>
            </form>
            </div>
      </div>
        </>
    )
}
    