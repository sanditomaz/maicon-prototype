import styled from "styled-components";
import Caroussel from "./Carousel.js";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled as muiStyled } from "@mui/material/styles";
import { useRef } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Homepage() {
  const companyRef = useRef(null);
  const depoimentsRef = useRef(null);
  const jobsRef = useRef(null);

  const navigate = useNavigate();



  return (
    <Main>
      <nav>
        <header>
          <div className="Logo">L</div>

          <div className="Menu">
            <div onClick={() =>   companyRef.current.scrollIntoView({ behavior: "smooth" })}>Empresa</div>
            <div onClick={() =>   jobsRef.current.scrollIntoView({ behavior: "smooth" })}>Serviços</div>
            <div onClick={() =>  depoimentsRef.current.scrollIntoView({ behavior: "smooth" })}>Depoimentos</div>

            <div onClick={() => navigate("/login")}> Login </div>

            <div onClick={() => navigate("/signup")}> Cadastro </div>
          </div>
        </header>

        <div className="Central">
          <div className="LeftSide">
            {" "}
            <Caroussel />{" "}
          </div>
          <div className="RightSide">
            <h1  ref={companyRef}>SOBRE A EMPRESA</h1>
            <div className="Embrace">
              <div> </div>
              Bem-vindo ao reino da Inovação Estrutural, onde cada projeto é uma
              jornada emocionante em direção ao futuro. Nossa empresa de
              engenharia, conhecida como "Engenharia Visionária", não é apenas
              uma corporação, mas sim um laboratório de sonhos transformados em
              realidade. No coração da cidade, ergue-se a sede da Engenharia
              Visionária, uma construção majestosa que reflete não apenas a
              grandiosidade de nosso trabalho, mas também a fusão harmoniosa
              entre forma e função. As torres que se elevam aos céus são mais do
              que estruturas de aço e concreto; são testemunhas silenciosas do
              nosso compromisso com a excelência e inovação. Ao adentrar nossas
              portas, é como se estivéssemos cruzando o limiar entre o ordinário
              e o extraordinário. Nossos corredores ecoam com a sinfonia de
              mentes criativas, onde engenheiros visionários se tornam artesãos
              de soluções engenhosas. Cada sala é um laboratório de ideias, cada
              projeto é um desafio que aceitamos com entusiasmo. A Engenharia
              Visionária não se contenta em seguir padrões, mas sim em
              estabelecê-los. Nossa equipe de profissionais, apaixonados pela
              busca incessante do novo, transforma obstáculos em oportunidades e
              desafia os limites do que é possível. Somos os arquitetos de
              pontes que unem nações, os mestres das estruturas que desafiam a
              gravidade. Nosso lema é simples: "Construindo o Amanhã, Hoje".
              Cada projeto é uma narrativa única, uma história que contamos
              através de edifícios que se tornam marcos, pontes que transcendem
              rios e estruturas que desafiam a imaginação. Na Engenharia
              Visionária, não apenas construímos estruturas; forjamos legados.
              Somos os pioneiros do impossível, os catalisadores da inovação.
              Junte-se a nós nesta jornada, onde os sonhos se tornam alicerces
              para um futuro que está sempre um passo à frente.

                <div style={{ paddingTop:"35px", width: "100%", display:"flex", alignItems:"center", justifyContent:"center"}}> <img src="image/video02.jpg" style={{borderRadius: "6px"}} /> </div>
            </div>
            <h1  ref={depoimentsRef}>DEPOIMENTOS</h1>
            <div>
              <div className="Paper">
                <Stack direction="row" spacing={3}>
                  <DemoPaper square={false}>
                    "A empresa atende ao Bradesco há mais de 15 anos, elaborando
                    projetos e gerenciando obras em âmbito nacional, nas
                    aberturas, reformas de Agências e Prédios Administrativos.
                    Sempre contamos com a capacidade de mobilização, dedicação e
                    respeito das equipes da Método, em uma parceria que se
                    consolidou ao longo desse período." <h6>William Borges</h6>
                    <h4>Diretor executivo do Bradesco</h4>
                  </DemoPaper>
                  <DemoPaper square={false}>
                    "O relacionamento com a Método se estreitou ao alinharmos
                    nossa estratégia de empregar soluções de engenharia de
                    ponta, viabilizando prazos e custos competitivos. Esta
                    metodologia de trabalho, culminou na realização de três
                    empreendimento na ordem de R$ 800 milhões."
                    <h6>Diego Bustamante</h6> <h4>Diretor -Hemisfério Sul</h4>
                  </DemoPaper>
                  <DemoPaper square={false}>
                    "O relacionamento com a Método se estreitou ao alinharmos
                    nossa estratégia de empregar soluções de engenharia de
                    ponta, viabilizando prazos e custos competitivos. Esta
                    metodologia de trabalho, culminou na realização de três
                    empreendimento na ordem de R$ 800 milhões."
                    <h6>Roberto Albuquerque</h6> <h4>CEO da Condense</h4>
                  </DemoPaper>
                </Stack>
               <div style={{paddingLeft: "50px"}} ><ArrowForwardIosIcon color="disabled" sx={{ fontSize: 80 }}  />  </div> 
              </div>
            </div>
            <h1  ref={jobsRef}>SERVIÇOS</h1>
            <div>
             <p style={{color: "#2b2b2c", fontWeight:"600"}}> Reabilitação de Infraestrutura Urbana:</p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              porta nibh venenatis cras. Dignissim convallis aenean et tortor
              at. Dictum fusce ut placerat orci. 
              
              
              
             
            </div>
            <div> 
            <p style={{color: "#2b2b2c", fontWeight:"600"}}> Desenvolvimento de um Complexo Habitacional Sustentável:</p> 
              At volutpat diam ut venenatis.
              Elementum eu facilisis sed odio morbi quis commodo odio aenean.
              Tortor id aliquet lectus proin. Integer eget aliquet nibh praesent
              tristique. Cursus metus aliquam eleifend mi in nulla.Pellentesquenec nam aliquam sem et tortor consequat id. Id faucibus nisl
              tincidunt eget. Lacinia quis vel eros donec ac odio tempor orci
              dapibus.  </div>

              <div>
              <p style={{color: "#2b2b2c", fontWeight:"600"}}> Construção de um Túnel Subaquático:</p> 
                A erat nam at lectus urna duis convallis convallis
              tellus. Sit amet mattis vulputate enim nulla aliquet porttitor
              lacus. Arcu non sodales neque sodales. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Id porta nibh venenatis cras.
              Dignissim convallis aenean et tortor at.</div>
          </div>

          <section>
            <h2>
              {" "}
              ASSINE A NOSSA NEWSLETTER <br /> E CONSTRUA UM FUTURO COM A GENTE{" "}
            </h2>
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
          <div
            style={{ width: "1px", height: "100px", backgroundColor: "#fff" }}
          ></div>
          <div>
            <h3>A empresa</h3>
            <h3>Código de conduta</h3>
            <h3>Recuperação Judicial</h3>
            <h3
              style={{
                paddingTop: "10px",
                fontWeight: "500",
                fontSize: "19px",
              }}
            >
              Todos os direitos reservados @
            </h3>
          </div>
        </footer>
      </nav>
    </Main>
  );
}

const DemoPaper = muiStyled(Paper)(({ theme }) => ({
  width: 300,
  height: 280,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

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
      width: 100%;
      padding: 15px 0 0 0;
      border-bottom: 1px solid #194375;
      background-color: #1e2939;

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

      .Logo:hover {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2px;
        color: #558ede;
        font-size: 55px;
        //background-color: #072652
      }

      .Menu {
        width: 800px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        //   gap: 30px;
        //  background-color: brown;
      }

      .Menu > div {
        font-family: "brandon-grotesque", sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 25px;
        color: #ffffff;
        opacity: 0.9;
        margin-bottom: 10px;
        cursor: pointer;
      }

      .Menu > div:hover {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2px;
        color: #7999d1;
      }
    }

    .Central {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100;
      height: 100%;
      // padding-top: 35px;
      //   background-color: purple;

      .LeftSide {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        //  height: 100%;
        //   padding-right: 10px;
      }

      .RightSide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
        // height: 100%;

        // background-color: brown;

        h1 {
          font-family: "brandon-grotesque", sans-serif;
          font-weight: 600;
          font-style: normal;
          font-size: 25px;
          line-height: 1.5;
          word-wrap: break-word;
          color: #2b2b2c;
          margin-bottom: 10px;
          cursor: pointer;
          background-color: #d2def05e;
          border-radius: 6px;
          padding-left: 10px;
          width: 97%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
      }

      .RightSide > div {
        /* display: flex; 
            align-items: center;
            justify-content: center;
            text-align: center; */
        width: 95%;
        // background-color: #d2def0;
        // box-shadow: inset 0 0 0 2px #cbd1daa4;
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

      .Paper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 10px;

        h6 {
          padding-top: 30px;
          font-family: "brandon-grotesque", sans-serif;
          font-weight: 400;
          font-style: normal;
          font-size: 21px;
          line-height: 1.5;
          word-wrap: break-word;
          color: #b89706;
          //margin-bottom: 10px;
          cursor: pointer;
        }

        h4 {
          font-family: "brandon-grotesque", sans-serif;
          font-weight: 600;
          font-style: normal;
          font-size: px;
          line-height: 1.5;
          word-wrap: break-word;
          color: #022241;
          margin-bottom: 10px;
          cursor: pointer;
        }
      }

      section {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 160px;
        background-color: yellow;
        gap: 10px;
        margin-top: 40px;

        h2 {
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

        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 280px;
          height: 54px;
          box-shadow: inset 0 0 0 2px #2b2b2c;
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

    footer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 150px;
      background-color: #1e2939;
      margin-top: 30px;

      div {
        font-family: "brandon-grotesque", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 25px;
        line-height: 1.5;
        word-wrap: break-word;
        color: #fff;
        margin-bottom: 10px;
        cursor: pointer;

        h3 {
          font-weight: 300;
          font-size: 18px;
        }
      }

      p {
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
