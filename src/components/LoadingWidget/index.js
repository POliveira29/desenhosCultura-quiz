import styled from "styled-components";
import QuizBackground from "../QuizBackground";
import Widget from "../Widget";

const Loading = styled.div`
  width: 260px;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://media.giphy.com/media/XZL090E18RxixkON2U/giphy.gif");
`;

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Só um momento</Widget.Header>
      <Widget.Content>
        <Loading></Loading>
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
