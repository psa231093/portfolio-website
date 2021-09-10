import { Mail, PersonPin } from "@material-ui/icons";
import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Pablo Sáenz
          </a>
          <div className="itemContainer">
            <PersonPin className="icon"></PersonPin>
            <span>331.305.9846</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"></Mail>
            <span>design@pablosaenz.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
