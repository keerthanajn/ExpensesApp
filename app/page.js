import Image from "next/image";
import './global.css'
import './page.css'

export default function Home() {
  return (
    <div id="main_body">
      <div>
        <h1>FDM Expenses App</h1>
        <div id="login_section">
          <a href="login"><button id="sign_button"><span>Lets get started</span></button></a>
        </div>
      </div>
    </div>
  )
}