import styled from "styled-components";
import Caroussel from './Carousel.js';
import { useNavigate } from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate();

    return(
        <Main>
            <nav>
                <header>
                    <div className="Logo">L</div>

                    <div className="Menu">
                        <div onClick={() => navigate("/homepage")} >Empresa</div>
                        <div onClick={() => navigate("/")}>Serviços</div>
                        <div>Depoimentos</div>
                        
                         <div onClick={() => navigate("/login")} >  Login    </div> 
                      
                        
                           <div onClick={() => navigate("/signup")}> Cadastro  </div> 
                        
                    </div>

                </header>

                <div className="Central">
                    <div className="LeftSide"> <Caroussel /> </div>
                    <div className="RightSide">  
                        <div> 
                            <h1>Lorem ipsum dolor sit amet</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Dictum fusce ut placerat orci. At volutpat diam ut venenatis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Tortor id aliquet lectus proin. Integer eget aliquet nibh praesent tristique. Cursus metus aliquam eleifend mi in nulla. Pellentesque nec nam aliquam sem et tortor consequat id. Id faucibus nisl tincidunt eget. Lacinia quis vel eros donec ac odio tempor orci dapibus. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu non sodales neque sodales.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Dictum fusce ut placerat orci. At volutpat diam ut venenatis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Tortor id aliquet lectus proin. Integer eget aliquet nibh praesent tristique. Cursus metus aliquam eleifend mi in nulla. Pellentesque nec nam aliquam sem et tortor consequat id. Id faucibus nisl tincidunt eget. Lacinia quis vel eros donec ac odio tempor orci dapibus. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu non sodales neque sodales.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Dictum fusce ut placerat orci. At volutpat diam ut venenatis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Tortor id aliquet lectus proin. Integer eget aliquet nibh praesent tristique. Cursus metus aliquam eleifend mi in nulla. Pellentesque nec nam aliquam sem et tortor consequat id. Id faucibus nisl tincidunt eget. Lacinia quis vel eros donec ac odio tempor orci dapibus. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu non sodales neque sodales.
                        </div>

                        <div>
                          <h1>Lorem ipsum dolor sit amet</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Dictum fusce ut placerat orci. At volutpat diam ut venenatis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Tortor id aliquet lectus proin. Integer eget aliquet nibh praesent tristique. Cursus metus aliquam eleifend mi in nulla. Pellentesque nec nam aliquam sem et tortor consequat id. Id faucibus nisl tincidunt eget. Lacinia quis vel eros donec ac odio tempor orci dapibus. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu non sodales neque sodales.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Dictum fusce ut placerat orci. At volutpat diam ut venenatis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Tortor id aliquet lectus proin. Integer eget aliquet nibh praesent tristique. Cursus metus aliquam eleifend mi in nulla. Pellentesque nec nam aliquam sem et tortor consequat id. Id faucibus nisl tincidunt eget. Lacinia quis vel eros donec ac odio tempor orci dapibus. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu non sodales neque sodales.
                        </div>

                        <div> 
                            <h1>Lorem ipsum dolor sit amet</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Dictum fusce ut placerat orci. At volutpat diam ut venenatis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Tortor id aliquet lectus proin. Integer eget aliquet nibh praesent tristique. Cursus metus aliquam eleifend mi in nulla. Pellentesque nec nam aliquam sem et tortor consequat id. Id faucibus nisl tincidunt eget. Lacinia quis vel eros donec ac odio tempor orci dapibus. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu non sodales neque sodales.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Dictum fusce ut placerat orci. At volutpat diam ut venenatis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Tortor id aliquet lectus proin. Integer eget aliquet nibh praesent tristique. Cursus metus aliquam eleifend mi in nulla. Pellentesque nec nam aliquam sem et tortor consequat id. Id faucibus nisl tincidunt eget. Lacinia quis vel eros donec ac odio tempor orci dapibus. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu non sodales neque sodales.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras. Dignissim convallis aenean et tortor at. Dictum fusce ut placerat orci. At volutpat diam ut venenatis. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Tortor id aliquet lectus proin. Integer eget aliquet nibh praesent tristique. Cursus metus aliquam eleifend mi in nulla. Pellentesque nec nam aliquam sem et tortor consequat id. Id faucibus nisl tincidunt eget. Lacinia quis vel eros donec ac odio tempor orci dapibus. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Arcu non sodales neque sodales.
                        </div>
                        
                    </div>

                    <section>
                      <h2> ASSINE A NOSSA NEWSLETTER <br /> E CONSTRUA UM FUTURO COM A GENTE </h2>
                      <div className="button">Email</div>
                      <div className="button">Senha</div>
                    </section>
                </div>

            <footer>
                <div>Contato</div> 
                <div>Projeto</div>
 
                <div>Linkedin</div>
                <div>Mídias</div>
                <div>Imprensa</div>
                <div style={{width:"1px", height:"100px", backgroundColor:"#fff"}}></div>
                <div>
                  <h3>A empresa</h3>
                  <h3>Código de conduta</h3>
                  <h3>Recuperação Judicial</h3>
                  <h3 style={{paddingTop:"10px", fontWeight:"500", fontSize:"19px"}} >Todos os direitos reservados @</h3>
                </div>
               
            </footer>
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
  background-color:#FBFBFB;
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

    header{
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 100%;
      padding: 15px 0 0 0; 
      border-bottom: 1px solid #194375;
      background-color: #1E2939;

      .Logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border: 2px solid #194375;
      box-shadow: inset 0 0 0 2px #194375;
      border-radius: 50%;
      font-family: "brandon-grotesque", sans-serif;
      font-weight: 800;
      font-style: normal;
      font-size: 50px;
      color: #ffffff;
      opacity: 0.9;
      margin-bottom: 10px;
      cursor: pointer;
      margin-left: 30px;
    }

    .Logo:hover{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2px;
        color: #558EDE;
        font-size: 55px;
        //background-color: #072652
       
    }


      .Menu{
        width: 800px;
        display: flex;
        align-items: center;
        justify-content: space-around;
     //   gap: 30px;
      //  background-color: brown;

      }

      .Menu > div{
        font-family: "brandon-grotesque", sans-serif;
      font-weight: 500;
      font-style: normal;
      font-size: 25px;
      color:  #ffffff;
      opacity: 0.9;
      margin-bottom: 10px;
      cursor: pointer;
      
    }

    .Menu > div:hover{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2px;
        color: #7999d1;
    }

    }

    .Central{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100;
        height: 100%;
       // padding-top: 35px;
     //   background-color: purple;


        .LeftSide{
            display: flex;
            align-items: center;
            justify-content: center; 
            width: 100%;
          //  height: 100%;
         //   padding-right: 10px;
        }

        .RightSide{
             display: flex; 
            flex-direction: column;
            align-items:center;
            justify-content: center;
            gap: 20px; 
            width: 100%;
           // height: 100%;

           // background-color: brown;

         
        }

        .RightSide > div {
            /* display: flex; 
            align-items: center;
            justify-content: center;
            text-align: center; */
            width: 98%;
            background-color: #d2def0;
            box-shadow: inset 0 0 0 2px #cbd1daa4;
            border-radius: 6px;
            padding: 10px;

            font-family: "brandon-grotesque", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 18px;
      line-height: 1.5;
      word-wrap: break-word;
      color: #2b2b2c;
      margin-bottom: 10px;
      cursor: pointer;
        }

        h1{

            font-family: "brandon-grotesque", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 25px;
      line-height: 1.5;
      word-wrap: break-word;
      color: #2b2b2c;
      margin-bottom: 10px;
      cursor: pointer;
        }


        section{
          display: flex; 
          align-items: center;
          justify-content: center;
            width: 100%;
            height: 160px;
            background-color: yellow;
            gap: 10px;

            h2{

            font-family: "brandon-grotesque", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 25px;
      line-height: 1.5;
      word-wrap: break-word;
      color: #2b2b2c;
      margin-bottom: 10px;
      cursor: pointer;
      padding-right: 10%;
      
            }

            .button{
              display: flex;
              align-items: center;
              justify-content: center;
              width: 280px;
              height: 54px;
              box-shadow: inset 0 0 0 2px #2b2b2c;;
              border-radius: 6px;
              cursor: pointer;

            font-family: "brandon-grotesque", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 20px;
      color: #2b2b2c;
            }
           }

    }

    footer{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 150px;
        background-color: #1E2939;
        margin-top: 30px;

        div{

            font-family: "brandon-grotesque", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 25px;
      line-height: 1.5;
      word-wrap: break-word;
      color: #fff;
      margin-bottom: 10px;
      cursor: pointer;

      h3{
        font-weight: 300;
        font-size: 18px;
      }
        }

        p{
            font-family: "brandon-grotesque", sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 17px;
      line-height: 1.5;
      word-wrap: break-word;
      color: #fff;
      margin-bottom: 10px;
      cursor: pointer;
        }

    }
  }
`;