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

function Price() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IHistoricData[]>("coinHistory", () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {" "}
      {isLoading ? (
        "...로딩중..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((e) => parseInt(e.close)) as number[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              background: undefined,
              foreColor: "#1a1b1c",
              height: 500,
              width: 300,
              toolbar: { show: false },
            },
            grid: {
              show: false,
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
            dataLabels: {
              style: {
                fontSize: "14px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: "bold",
                colors: ["p#E91E63"],
              },
            },
            tooltip: {
              x: {
                show: true,
                format: "dd MMM",
              },
              y: {
                formatter: (value) => `$${value}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Price;
