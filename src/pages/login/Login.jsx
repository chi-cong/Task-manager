import "./Login.css";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { LoginTextbox } from "src/components/login-textbox";
import { RoundBarButton } from "src/components/roundBarBtn";
import { Checkbox } from "src/components/checkbox";

import { loginService } from "src/services";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
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
    toast.dismiss();
    toast.loading("Checking account");
    const loginResult = loginService(loginData);
    if (loginResult) {
      toast.dismiss();
      toast.success("Success login");
      navigate("/task-manager");
    } else {
      toast.dismiss();
      toast.error("Username or password is incorrect");
    }
  };

  return (
    <>
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
      <Toaster />
    </>
  );
};
