import { useContext, useEffect, useState } from 'react';

import { GlobalStyle } from '../../GlobalStyle';
import { Container, Content } from './styles';
import { X } from 'phosphor-react';
import { AuthEmailContext } from '../../contexts/AuthEmailProvider';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Login = () => {
  const [currentMode, setCurrentMode] = useState("login-mode")
  const {
    setRegisterEmail,
    setRegisterPassword,
    setLoginEmail,
    setLoginPassword,
    registerUser,
    loginUser
  } = useContext(AuthEmailContext);

  // Yup Resolver
  const registerSchema = yup.object({
    apartment: yup.string().required("Insira o número do apartamento").min(3, "Número inválido"),
    block: yup.string().required("Insira o número do bloco"),
    payment: yup.string().required("Insira o método de pagamento"),
  }).required()

  // Hook Form Controller
  const {
    watch,
    register,
    // setValue,
    // getValues,
    // trigger,
    // formState: { errors, isValid }
  } = useForm({
    mode: "all",
    resolver: yupResolver(registerSchema),
    // defaultValues: {
    //   payment: "",
    //   status: "Novo Pedido",
    //   discount: 0
    // }
  });

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
            <>
              <form className="FormRoot" id="login-mode" onSubmit={(e) => onLoginSubmit(e)}>

                <div className="FormField" name="email">
                  <label className="FormLabel">Email</label>
                  <div>
                    <input className="Input" type="email" {...register("loginEmail")} />
                  </div>
                </div>

                <div className="FormField" name="question">
                  <label className="FormLabel">Senha</label>
                  <div>
                    <input className="Input" type="password" {...register("loginPassword")} />
                  </div>
                </div>

                <button className="Button" type="submit">
                  Login
                </button>

              </form> 
              <button 
                className="register-button"
                onClick={() => setCurrentMode("register-mode")}
              >
                Ainda não tenho registro
              </button>
            </> :

            <>
              <button className="close-button" onClick={() => setCurrentMode("login-mode")}>
                <X size={24} />
              </button>
              <form className="FormRoot" id="register-mode" onSubmit={(e) => onRegisterSubmit(e)}>

                <div className="FormField" name="email">
                  <label className="FormLabel">Email</label>
                  <div>
                    <input className="Input" type="email" {...register("registerEmail")} />
                  </div>
                </div>

                <div className="FormField" name="question">
                  <label className="FormLabel">Senha</label>
                  <div>
                    <input className="Input" type="password" {...register("registerPassword")} />
                  </div>
                </div>

                <div className="FormField" name="question">
                  <label className="FormLabel">Repita a senha</label>
                  <div>
                    <input className="Input" type="password" />
                  </div>
                </div>

                
                <button className="Button" type="submit">
                  Registrar
                </button>
              </form>
            </>
          }

        </Content>
        <button style={{position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)", padding: "0.25rem 0.5rem"}}>
          Logout
        </button>
      </Container>
    </>
  )
}
