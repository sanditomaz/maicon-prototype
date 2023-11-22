import styled from "styled-components";
import { useState } from "react";

export default function SignUp() {
  const [emailLogin, setEmailLogin] = useState(false);
  return (
    <Main>
      <nav>
        <div className="Logo">L</div>
        {!emailLogin ? (
          <>
            <div className="Login">Google</div>
            <div className="Login" onClick={() => setEmailLogin(true)}>
              Email
            </div>
            <p>Login</p>
          </>
        ) : (
          <>
            <input type="email" className="Login" placeholder="Email" />
            <input type="password" className="Login" placeholder="Senha" />
            <input
              type="password"
              className="Login"
              placeholder="Confirmar Senha"
            />
            <p>Login</p>
          </>
        )}
      </nav>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #FBFBFB;
  overflow-y: scroll;
  //  background-color: yellow;

  nav {
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 10px 0;
    margin-top: 75px;
    //   background-color: pink;

    .Logo {
        display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;
      border: 2px solid #194375;
      box-shadow: inset 0 0 0 2px #cbd1daa4;
      border-radius: 50%;
      font-family: "brandon-grotesque", sans-serif;
      font-weight: 800;
      font-style: normal;
      font-size: 80px;
      color: #194375;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .Logo:hover{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        background-color: #eff1f5;
        //border-radius: 50px;
    }


    .Login {
        display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      max-width: 280px;
      width: 100%;
      height: 45px;
      box-shadow: inset 0 0 0 2px #194375;

      border-radius: 18px;
      outline: none;
      font-family: "brandon-grotesque", sans-serif;
      font-weight: 500;
      font-style: normal;
      font-size: 21px;
      cursor: pointer;
      color: #194375;
    }

    .Login:hover{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        background-color: #eff1f5;
    }

    p {
        font-family: "brandon-grotesque", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 15px;
      color: #194375;
      opacity: 0.6;
      cursor: pointer;
    }

    p:hover{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        background-color: #eff1f5;
    }

    .Login::placeholder {
      color: #194375;
    }
  }
`;
