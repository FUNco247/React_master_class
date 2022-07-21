import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistoricData {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}
interface IdataObject {
  x?: number;
  y?: string[];
}

function Chart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IHistoricData[]>(
    "historyForCandleChart",
    () => fetchCoinHistory(coinId)
  );
  let dataArray: IdataObject[] = [];
  if (!isLoading) {
    for (let i = 0; i < data!.length; i++) {
      const e = data![i];
      let dayData = {
        x: e.time_open,
        y: [e.open, e.high, e.low, e.close],
      };
      dataArray.push(dayData);
    }
  }

  return (
    <div>
      {" "}
      {isLoading ? (
        "...로딩중..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: dataArray as number[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 350,
            },
            title: {
              text: "CandleStick Chart",
              align: "left",
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              categories: data?.map(
                (e) => `${Math.abs(data.indexOf(e) - data.length)} days ago`
              ),
            },
            yaxis: {
              show: false,
              labels: {
                show: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
