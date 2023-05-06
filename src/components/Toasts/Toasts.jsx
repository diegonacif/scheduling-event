import { useContext, useEffect, useRef, useState } from 'react';
import * as Toast from '@radix-ui/react-toast';
import { Container } from './styles';
import { AuthEmailContext } from '../../contexts/AuthEmailProvider';

export const Toasts = () => {
  const [open, setOpen] = useState(false);

  const { lastError, toastRefresh } = useContext(AuthEmailContext)
  console.log(lastError)
  
  const isMounted = useRef(false);
  useEffect(() => {
    if(!isMounted.current) {
      setTimeout(() => {
        isMounted.current = true;
      }, 250);
    } else {
      setOpen(true)
    }
  }, [lastError, toastRefresh])

  return (
    <Container>
      <Toast.Provider swipeDirection="right">
        <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
          <Toast.Title className="ToastTitle">{lastError.section}</Toast.Title>
          <Toast.Description asChild>
            <p>{lastError.code}</p>
          </Toast.Description>
          <Toast.Action className="ToastAction" asChild altText="Goto schedule to undo">
            <button className="Button small green">Undo</button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </Container>
  );

}
