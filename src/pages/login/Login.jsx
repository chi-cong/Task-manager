import "./Login.css";

import { useForm } from "react-hook-form";

import { LoginTextbox } from "src/components/login-textbox";
import { RoundBarButton } from "src/components/roundBarBtn";
import { Checkbox } from "src/components/checkbox";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const inputSettings = {
    username: {
      register,
      registerName: "username",
      validation: { required: true },
    },
    password: {
      register,
      registerName: "password",
      validation: { required: true },
    },
    rememberUser: {
      register,
      registerName: "rememberUser",
      validation: {},
    },
  };

  const loginSubmit = (loginData) => {
    return loginData;
  };
  return (
    <div className='login-page'>
      <div className='flex-container-login-form'>
        <h1 className='login-title'>Login</h1>
        <form
          onSubmit={handleSubmit(loginSubmit)}
          action=''
          className='flex-container-login'
        >
          <LoginTextbox
            iconName='user'
            placeholder='Username'
            type='text'
            formRegister={inputSettings.username}
          />
          <LoginTextbox
            iconName='lock'
            placeholder='Password'
            type='password'
            formRegister={inputSettings.password}
          />
          <RoundBarButton />
          <div className='flex-container-remember-forget'>
            <Checkbox
              checkboxLabel='Remember me'
              formRegister={inputSettings.rememberUser}
            />
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
