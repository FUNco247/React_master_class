import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 100px;
`;

function Coin() {
  const { coinId } = useParams(); // smae as coinId = useParams().coinId
  return <Title> {coinId} 대박 가즈아! </Title>;
}

export default Coin;
