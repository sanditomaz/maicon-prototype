import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

  return (
    <Main>
      <nav>
        <header>
          <div onClick={() => navigate("/homepage")} className="Logo">L</div>

          <div className="CompanysName">
            <div> L. Empresa Especialista em Engenharia </div>
          </div>
        </header>

        <div className="Central">
          <div className="MenuBar">
            <div style={{ paddingTop: "35px" }}>MPS</div>
            <div>MRI</div>
            <div>CPR</div>
            <div>A&G</div>
            <div>Segurança</div>
            <div> <LogoutIcon fontSize="large" /> </div>
          </div>

          <div className="Content">
            <div className="Form">
            
            </div>
          </div>
        </div>
      </nav>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  // height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fbfbfb;
  // overflow-y: scroll;
  //   background-color: yellow;

  nav {
    width: 100%;
    //height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //   background-color: pink;

    header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 90%;
      padding: 15px 0 0 0;
      border-bottom: 2px solid #194375;
      //   background-color: blue;

      .Logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border: 2px solid #194375;
        box-shadow: inset 0 0 0 2px #cbd1daa4;
        border-radius: 50%;
        font-family: "brandon-grotesque", sans-serif;
        font-weight: 800;
        font-style: normal;
        font-size: 50px;
        color: #194375;
        margin-bottom: 10px;
        cursor: pointer;
        margin-left: 10px;
      }

      .Logo:hover {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        background-color: #eff1f5;
        border-radius: 50px;
      }

      .CompanysName {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-bottom: 10px;
        //  background-color: pink;

        font-family: "brandon-grotesque", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 50px;
        color: #194375;
        cursor: pointer;
      }

      .CompanysName:hover {
        padding: 0 0 15px 0;
       // background-color: #eff1f5;
      }
    }

    .Central {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 90%;
      //background-color: red;

      .MenuBar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        max-width: 300px;
        width: 100%;
       // height: 100vh;
        border-radius: 12px;
        gap: 30px;
        margin-top: 35px;
        background-color: #eff1f5;
      }

      .MenuBar > div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 54px;
        border-radius: 6px;
        background-color: #dbe0e9;
      }

      .Content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        margin-top: 35px;
       //   background-color: blue;

        .Form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 80%;
          min-height: 500px;
          height: 100%;
          border-radius: 12px;
          box-shadow: inset 0 0 0 2px #cbd1daa4;
          padding-top: 35px;
          padding-bottom: 35px;
          gap: 20px;

          input {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-width: 480px;
            width: 100%;
            height: 45px;
            box-shadow: inset 0 0 0 2px #194375;

            border-radius: 18px;
            outline: none;
            border: none;
            font-family: "brandon-grotesque", sans-serif;
            font-weight: 500;
            font-style: normal;
            font-size: 21px;
            cursor: pointer;
            color: #194375;
          }

          input::placeholder{
            color: #194375;
          }

          div{
            position: relative;

            span{
                position: absolute;
                top: 12px;
                right: 0;
                cursor: pointer;
            }
          }
        }
      }
    }

    .MenuBar > div {
      font-family: "brandon-grotesque", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 35px;
      color: #194375;
      cursor: pointer;
    }
  }
`;
