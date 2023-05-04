import { useContext, useEffect, useState } from 'react';
import * as Form from '@radix-ui/react-form';

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
    registerUser
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
    setValue,
    getValues,
    trigger,
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
  }, [watch("registerEmail"), watch("registerPassword")]);

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    registerUser();
  }

  const onLoginSubmit = (e) => {
    e.preventDefault();
    registerUser();
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          {
            currentMode === "login-mode" ?
            <>
              <Form.Root className="FormRoot" id="login-mode">

                <Form.Field className="FormField" name="email">
                  <div>
                    <Form.Label className="FormLabel">Email</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                      Insira seu email
                    </Form.Message>
                    <Form.Message className="FormMessage" match="typeMismatch">
                      Formato de email inválido
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input className="Input" type="email" required />
                  </Form.Control>
                </Form.Field>

                <Form.Field className="FormField" name="question">
                  <div>
                    <Form.Label className="FormLabel">Senha</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                      Insira sua senha
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input className="Input" type="password" required />
                  </Form.Control>
                </Form.Field>

                <Form.Submit asChild>
                  <button className="Button">
                    Login
                  </button>
                </Form.Submit>

              </Form.Root> 
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
      </Container>
    </>
  )
}
