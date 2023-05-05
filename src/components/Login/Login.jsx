import { useContext, useEffect, useState } from 'react';

import { GlobalStyle } from '../../GlobalStyle';
import { Container, Content } from './styles';
import { X } from 'phosphor-react';
import { AuthEmailContext } from '../../contexts/AuthEmailProvider';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [currentMode, setCurrentMode] = useState("login-mode")
  const {
    setRegisterEmail,
    setRegisterPassword,
    setLoginEmail,
    setLoginPassword,
    registerUser,
    loginUser,
    isSignedIn
  } = useContext(AuthEmailContext);

  const navigate = useNavigate();

    // Back to main page when logged in
  useEffect(() => {
    isSignedIn ?
    navigate("/home") :
    null
  }, [isSignedIn])

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] = useState(true);

  // Yup Resolver
  const registerSchema = yup.object({
    registerEmail: yup.string().email("Formato inválido de email").required("Insira um email"),
    registerPassword: yup.string().min(6, "Mínimo de 6 caracteres").required("Insira uma senha"),
    registerPasswordConfirmation: yup.string()
    .oneOf([yup.ref('registerPassword'), null], 'As senhas não coincidem'),

    loginEmail: yup.string().email("Formato inválido de email").required("Insira seu email"),
    loginPassword: yup.string().required("Insira sua senha").min(6, "Mínimo de 6 caracteres"),
  }).required();

  // Hook Form Controller
  const {
    watch,
    register,
    trigger,
    reset,
    formState: { errors }
  } = useForm({
    mode: "all",
    resolver: yupResolver(registerSchema),
    // defaultValues: {
    //   payment: "",
    //   status: "Novo Pedido",
    //   discount: 0
    // }
  });

  // ResetForm when mode changes
  useEffect(() => {
    reset();
  }, [currentMode])

  // Login Button Validation
  useEffect(() => {
      if([watch("loginEmail"), watch("loginPassword")].includes("")) {
        setIsLoginButtonDisabled(true);
      } else if(errors.loginEmail || errors.loginPassword ) {
        setIsLoginButtonDisabled(true);
      } else {
        setIsLoginButtonDisabled(false);
      }
  }, [watch("loginEmail"), watch("loginPassword"), errors.loginEmail, errors.loginPassword])

  // Register Button Validation
  useEffect(() => {
    if([watch("registerEmail"), watch("registerPassword"), watch("registerPasswordConfirmation")].includes("")) {
      setIsRegisterButtonDisabled(true);
    } else if(errors.registerEmail || errors.registerPassword || errors.registerPasswordConfirmation ) {
      setIsRegisterButtonDisabled(true);
    } else {
      setIsRegisterButtonDisabled(false);
    }
}, [watch("registerEmail"), watch("registerPassword"), watch("registerPasswordConfirmation"), errors.registerEmail, errors.registerPassword, errors.registerPasswordConfirmation])
  
// Forcing password confirmation validation
  useEffect(() => {
    trigger("registerPasswordConfirmation")
  }, [watch("registerPassword")])
  

  // Sending form data to context
  useEffect(() => {
    setRegisterEmail(watch("registerEmail"));
    setRegisterPassword(watch("registerPassword"));
    setLoginEmail(watch("loginEmail"));
    setLoginPassword(watch("loginPassword"))

  }, [
    watch("registerEmail"), 
    watch("registerPassword"),
    watch("loginEmail"),
    watch("loginPassword")
  ]);

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    registerUser();
  }

  const onLoginSubmit = (e) => {
    e.preventDefault();
    loginUser();
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          {
            currentMode === "login-mode" ?

            // LOGIN MODE
            <>
              <form className="FormRoot" id="login-mode" onSubmit={(e) => onLoginSubmit(e)}>

                <div className="FormField" name="email">
                  <label className="FormLabel">Email</label>
                  <div className="FormInput">
                    <input className="Input" type="email" {...register("loginEmail")} />
                    {
                      errors.loginEmail &&
                      <span className="error-message">{errors.loginEmail.message}</span>
                    }
                  </div>
                </div>

                <div className="FormField" name="question">
                  <label className="FormLabel">Senha</label>
                  <div className="FormInput">
                    <input className="Input" type="password" {...register("loginPassword")} />
                    {
                      errors.loginPassword &&
                      <span className="error-message">{errors.loginPassword.message}</span>
                    }
                  </div>
                </div>

                <button 
                  className="Button" 
                  type="submit"
                  disabled={isLoginButtonDisabled}
                >
                  Login
                </button>

              </form> 
              <button 
                className="not-registered-button"
                onClick={() => setCurrentMode("register-mode")}
              >
                Ainda não tenho registro
              </button>
            </> :

            // REGISTER MODE
            <>
              <button className="close-button" onClick={() => setCurrentMode("login-mode")}>
                <X size={24} />
              </button>
              <form className="FormRoot" id="register-mode" onSubmit={(e) => onRegisterSubmit(e)}>

                <div className="FormField" name="email">
                  <label className="FormLabel">Email</label>
                  <div className="FormInput">
                    <input className="Input" type="email" {...register("registerEmail")} />
                    {
                      errors.registerEmail &&
                      <span className="error-message">{errors.registerEmail.message}</span>
                    }
                  </div>
                </div>

                <div className="FormField" name="question">
                  <label className="FormLabel">Senha</label>
                  <div className="FormInput">
                    <input className="Input" type="password" {...register("registerPassword")} />
                    {
                      errors.registerPassword &&
                      <span className="error-message">{errors.registerPassword.message}</span>
                    }
                  </div>
                </div>

                <div className="FormField" name="question">
                  <label className="FormLabel">Repita a senha</label>
                  <div className="FormInput">
                    <input className="Input" type="password" {...register("registerPasswordConfirmation")}/>
                    {
                      errors.registerPasswordConfirmation &&
                      <span className="error-message">{errors.registerPasswordConfirmation.message}</span>
                    }
                  </div>
                </div>

                
                <button className="Button" type="submit" disabled={isRegisterButtonDisabled}>
                  Registrar
                </button>
              </form>
            </>
          }

        </Content>
      </Container>
    </>
  )
}
