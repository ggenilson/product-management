import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import DashboardWrapper from "../components/dashboard-wrapper";
import OverallList from "../components/overall-list";
import SummaryBox, { SummaryBoxSpecial } from "../components/summary-box";
import { data } from "../constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapper type="main">
        <div className="row">
          <div className="col-8 col-md-12">
            <div className="row">
              {data.summary.map((item, index) => (
                <div
                  key={`summary-${index}`}
                  className="col-6 col-md-6 col-sm-12 mb"
                >
                  <SummaryBox item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-4 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
      </DashboardWrapper>
      <DashboardWrapper type="right">
        <div className="title mb">Overall</div>
        <div className="mb">
          <OverallList />
        </div>
      </DashboardWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
