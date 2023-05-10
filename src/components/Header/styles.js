import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  height: 8rem;
  background: linear-gradient(135deg, var(--gray-700) 0%, var(--red) 60%, var(--orange) 100%);
  padding: 0 0.75rem;
`;

export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .logo-img-wrapper {
    position: relative;
    height: 3.5rem;

    #logoImg {
      position: relative;
      height: 100%;
      z-index: 10;
    }
    #logoImgBg {
      position: absolute;
      top: 2px;
      left: 2px;
      height: 100%;
      mix-blend-mode: color-burn;
      filter: brightness(0.5) blur(3px);
      z-index: 5;
    }
  }

  #logo-title {
    color: white;
    font-size: var(--text-xl);
    margin-top: 0.5rem;
    text-shadow: 2px 2px 2px #00000060;
    /* font-family: 'Cherry Cream Soda', cursive; */
  }

  .logout-wraper {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    
    width: 3em;
    height: 3rem;
    border-radius: 9999px;
    transition: background-color 0.1s;

    /* &:hover {
      background-color: #00000040;
      transition: background-color 0.3s;
    } */
  }


  strong {
    font-size: large;
  }

  svg {
    color: var(--gray-100);
    cursor: pointer;
  }
`;
