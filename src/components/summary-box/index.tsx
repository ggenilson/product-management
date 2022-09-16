import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { colors } from "../../constants";
import Box from "../box";
import "./style.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChartDataProps = {
  labels: string[];
  data: number[];
};

type ItemBoxSpecialProps = {
  title: string;
  value: string;
  chartData: ChartDataProps;
};

type ItemType = Omit<ItemBoxSpecialProps, "chartData"> & {
  subtitle: string;
  percent: number;
};

type SummaryProps = {
  item: ItemType;
};

type SummaryBoxSpecialProps = {
  item: ItemBoxSpecialProps;
};

const SummaryBox: React.FC<SummaryProps> = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info">
          <div className="summary-box__info__title">
            <div>{item.title}</div>
            <span>{item.subtitle}</span>
          </div>
          <div className="summary-box__info__value">{item.value}</div>
        </div>
        <div className="summary-box__chart">
          <CircularProgressbarWithChildren
            value={item.percent}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: item.percent < 50 ? colors.red : colors.purple,
              trailColor: "transparent",
              strokeLinecap: "round",
            })}
          >
            <div className="summary-box__chart__value">{item.percent}%</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </Box>
  );
};

export default SummaryBox;

export const SummaryBoxSpecial: React.FC<SummaryBoxSpecialProps> = ({
  item,
}) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: "Revenue",
        data: item.chartData.data,
        borderColor: "#fff",
        tension: 0.5,
      },
    ],
  };
  return (
    <Box purple fullHeight>
      <div className="summary-box-special">
        <div className="summary-box-special__title">{item.title}</div>
        <div className="summary-box-special__value">{item.value}</div>
        <div className="summary-box-special__chart">
          <Line options={chartOptions} data={chartData} width={`250px`} />
        </div>
      </div>
    </Box>
  );
};
