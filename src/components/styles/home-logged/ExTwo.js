
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SendIcon from '@mui/icons-material/Send';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { Sidebar } from 'flowbite-react';

export default function Home() {
    const navigate = useNavigate();

  return (
    <Main>
      <nav>
    
      <div className="MenuBar">
            <div onClick={() => navigate("/") } style={{ paddingTop: "35px" }}><MarkChatUnreadIcon  sx={{ color: "#ffffff" }} /></div>
            <div onClick={() => navigate("/ex02") }><TravelExploreIcon  sx={{ color: "#ffffff" }} /></div>
            <div onClick={() => navigate("/ex03") }><ContactPhoneIcon  sx={{ color: "#ffffff" }} /></div>
            <div onClick={() => navigate("/ex04") }><SendIcon  sx={{ color: "#ffffff" }} /></div>
            <div onClick={() => navigate("/ex05") }><MenuBookIcon  sx={{ color: "#ffffff" }} /></div>
            <div onClick={() => navigate("/ex06") }><QueryStatsIcon  sx={{ color: "#ffffff" }} /></div>
            <div onClick={() => navigate("/ex07") }><WidgetsIcon  sx={{ color: "#ffffff" }} /></div>
            <div onClick={() => navigate("/ex08") }><SettingsIcon  sx={{ color: "#ffffff" }} /></div>
            <div onClick={() => navigate("/homepage")}> <LogoutIcon fontSize="large" sx={{ color: "#ffffff" }} /> </div>
          </div>
    <div className="SecondSide"> 
        <header>

          <div className="CompanysName">
            <div>  Processo de  Engenharia CPR</div>
          </div>
        </header>

        <div className="Central">
        

          <div className="Content">
            <div className="Form">
                <div> 02 - Aqui vai rodar toda a parte de um tipo específico da aplicação.</div>
            </div>
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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content:flex-start;
  //     background-color: pink;

       .SecondSide{
        width: 100%;
        height: 100vh;

    header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 100%;
    //  border-bottom: 2px solid #194375;
        // background-color: blue;


      .CompanysName {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 10px 0;
        //  background-color: pink;

        font-family: "brandon-grotesque", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 30px;
        color: #194375;
        cursor: pointer;
      }
    }

    .Central {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
  //    background-color: red;


      .Content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
       //   background-color: blue;

        .Form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 90%;
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

          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "brandon-grotesque", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 30px;
        color: #c40b0b;
        cursor: pointer;
        }
      }
    }
  }


    .MenuBar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 70px;
        height: 100vh;
        gap: 30px;
        background-color: #1e2939;
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
