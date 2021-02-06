import styled from "styled-components";
import Widget from "../Widget";
import { useRouter } from "next/router";

const ListPlayers = styled.div`
  padding: 0.5rem;
  margin-top: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  li {
    list-style: none;
    padding: 10px 15px;
    margin-bottom: 8px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => `${theme.colors.primary}60`};
  }
`;
function ResultWidget({ results }) {
  const router = useRouter();
  const name = router.query.name;
  const resultadoFinal = results.reduce((somatoriaAtual, resultAtual) => {
    const isAcerto = resultAtual === true;
    if (isAcerto) {
      return somatoriaAtual + 100;
    }
    return somatoriaAtual;
  }, 0);
  // Função que retorna uma mensagem (String) dependendo da pontuação que a pessoa fez.
  const resultMessage = () => {
    let mensagemResultado = "";
    if (resultadoFinal <= 300) {
      mensagemResultado = ", acho que esta na hora de resgatar essa nostalgia.";
    } else if (resultadoFinal >= 400 && resultadoFinal <= 700) {
      mensagemResultado = ", até que sua memória esta boa.";
    } else {
      mensagemResultado =
        ", é pelo visto você está bem velho hein kkk, Parabéns!!!";
    }
    return mensagemResultado;
  };
  var msg = resultMessage();
  // Função que retorna um gif dependendo da pontuação que a pessoa fez.
  const resultGif = () => {
    let resultadoGif;
    if (resultadoFinal <= 400) {
      resultadoGif = "https://media.giphy.com/media/xgeyRJzCYowoM/giphy.gif";
    } else if (resultadoFinal >= 500 && resultadoFinal <= 800) {
      resultadoGif =
        "https://thumbs.gfycat.com/BadExhaustedKittiwake-small.gif";
    } else {
      resultadoGif = "http://www.nextweb.com.br/castelo/pedroanimado.gif";
    }
    return resultadoGif;
  };
  var gif = resultGif();
  return (
    <Widget>
      <Widget.Header>Resultado</Widget.Header>
      <img src={gif} alt="Gif do resultado" />
      <Widget.Content>
        <span>
          {name} {msg}
        </span>
        <h3>Você fez {resultadoFinal} pontos, parabéns!</h3>
        <ListPlayers>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {index + 1}ª Pergunta - {result === true ? "Acertou!" : "Errou!"}
            </li>
          ))}
        </ListPlayers>
        <a href="/">Voltar para a home</a>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;
