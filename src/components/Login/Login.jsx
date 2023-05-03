import { useState } from 'react';
import * as Form from '@radix-ui/react-form';

import { GlobalStyle } from '../../GlobalStyle';
import { Container, Content } from './styles';
import { X } from 'phosphor-react';

export const Login = () => {
  const [currentMode, setCurrentMode] = useState("login-mode")
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
              <Form.Root className="FormRoot" id="register-mode">

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

                <Form.Field className="FormField" name="question">
                  <div>
                    <Form.Label className="FormLabel">Repita a senha</Form.Label>
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
                    Registrar
                  </button>
                </Form.Submit>

              </Form.Root>
            </>
          }

        </Content>
      </Container>
    </>
  )
}
