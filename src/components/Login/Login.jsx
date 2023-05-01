import * as Form from '@radix-ui/react-form';
import { Container, Content } from './styles';

export const Login = () => {
  return (
    <Container>
      <Content>
        <Form.Root className="FormRoot">

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
      </Content>
    </Container>
  )
}
