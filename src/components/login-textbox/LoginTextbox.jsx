import "./LoginTextbox.css";
import { FaUser, FaLock } from "react-icons/fa6";

export const LoginTextbox = ({ placeholder, iconName, type }) => {
  const UsedIcon = iconName === "user" ? FaUser : FaLock;
  return (
    <div className='flex-container-login-textbox'>
      <UsedIcon />
      <input
        type={type}
        title={placeholder}
        placeholder={placeholder}
        className='login-textbox'
      />
    </div>
  );
};
