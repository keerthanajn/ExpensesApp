import { redirect } from "next/navigation";
import "./global.css";
import "./page.css";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function App() {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) {
    redirect("/view");
  }
  return (
    <div id="main_body">
      <div>
        <h1>FDM Expenses App</h1>
        <div id="login_section">
          <LoginLink>
            <button id="sign_button">
              <span>Lets get started</span>
            </button>
          </LoginLink>
        </div>
      </div>
    </div>
  );
}
