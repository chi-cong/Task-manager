import "./LoginPage.css";
import { LoginTextbox } from "src/components/login-textbox";
import { RoundBarButton } from "src/components/roundBarBtn";
import { Checkbox } from "src/components/checkbox";

export const LoginPage = () => {
  const submitLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className='login-page'>
      <div className='flex-container-login-form'>
        <h1 className='login-title'>Login</h1>
        <form action='' className='flex-container-login'>
          <LoginTextbox iconName='user' placeholder='Username' type='text' />
          <LoginTextbox
            iconName='lock'
            placeholder='Password'
            type='password'
          />
          <RoundBarButton clickFunc={submitLogin} />
          <div className='flex-container-remember-forget'>
            <Checkbox checkboxLabel='Remember me' />
            <p>Forget Password ?</p>
          </div>
        </form>
        <p>
          Don't have an account ? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
};
