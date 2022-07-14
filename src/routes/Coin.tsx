import { useQuery } from "react-query";
import {
  Outlet,
  useLocation,
  useParams,
  useMatch,
  Link,
} from "react-router-dom";
import styled from "styled-components";
import { fetchCoinData, fetchCoinPrice } from "../api";

const Container = styled.div`
  padding: 10px 20px 10px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 45px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
  font-size: 30px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.textColor};
  padding: 10px 20px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
`;
const OverviewItem = styled.div`
  color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.textColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.bgColor};
  a {
    display: block;
  }
`;

const Back = styled.span`
  display: flex;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  background-color: none;
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  a {
    display: block;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

interface RouteState {
  state: {
    name: string;
  };
}
interface ICoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams(); // smae as coinId = useParams().coinId
  const location = useLocation() as RouteState;
  const chartMatch = useMatch(":coinId/chart");
  const priceMatch = useMatch(":coinId/price");
  console.log(chartMatch, priceMatch);
  const { isLoading: dataLoading, data: coinData } = useQuery<ICoinData>(
    ["coinData", coinId],
    () => fetchCoinData(coinId)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<IPriceData>(
    ["priceData", coinId],
    () => fetchCoinPrice(coinId)
  );
  /* const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<ICoinData>();
  const [priceInfo, setPriceInfo] = useState<IPriceData>();

  useEffect(() => {
    (async () => {
      const dataResponse = await fetch(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      const coinData = await dataResponse.json();
      setInfo(coinData);
      const priceResponse = await fetch(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      );
      const priceData = await priceResponse.json();
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []); */
  const loading = dataLoading || priceLoading;
  return (
    <Container>
      <Header>
        <Title>
          {location?.state?.name ? location.state.name : coinData?.name}{" "}
          영차!영차!
        </Title>
      </Header>
      {loading ? (
        <Loader> ...로딩중...</Loader>
      ) : (
        <>
          <Back>
            <Link to={"/"}> &larr; Show all coins </Link>
          </Back>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{coinData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${coinData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{coinData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{coinData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
          <Outlet />
        </>
      )}
    </Container>
  );
}

export default Coin;
