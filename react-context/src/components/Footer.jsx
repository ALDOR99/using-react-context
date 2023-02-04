import ThemeSwitcher from "./ThemeSwitcher";
import { MainContext, useContext } from "../context";

//--------------------------------------------------------------------

function Footer() {
  const { setLogoText } = useContext(MainContext);

  const switchLogoText = () => {
    setLogoText("aliweb.com");
  };
  return (
    <div>
      footer component
      <br />
      <ThemeSwitcher />
      <button onClick={switchLogoText}>Switch logo text</button>
    </div>
  );
}

//--------------------------------------------------------------------

export default Footer;
