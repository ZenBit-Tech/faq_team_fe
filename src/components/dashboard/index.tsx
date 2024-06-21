import { useRef } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

import { useResponsiveCharts, useResponsiveXLabel } from './dashBoardHooks';
import {
  Chart,
  DashHeader,
  FuturePageContainer,
  getChartParams,
  getPieParams,
  GraphsContainer,
  Pie,
  PieDataContainer,
  PieDataRow,
  PieDataTitle,
  RecentElement,
  RecentElementsContainer,
  RecentOrders,
  RecentTitle,
  RelativeValue,
  StatsContainer,
  TotalDiv,
  TotalNumbers,
  TotalsContainer,
  TotalTitle,
  TotalValue,
} from './styles';
import { getLast12Months } from './utils';

const Dashboard = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const pieContainerRef = useRef<HTMLDivElement | null>(null);

  const { chartWidth, pieWidth } = useResponsiveCharts(
    chartContainerRef,
    pieContainerRef,
  );
  const { tickLabelStyle } = useResponsiveXLabel();

  const last12Months = getLast12Months();

  const chartData = [
    350, 840, 1900, 1340, 510, 60, 290, 1000, 1500, 1700, 1300, 1500,
  ];

  const chartParams = getChartParams(
    chartData,
    chartWidth,
    last12Months,
    tickLabelStyle,
  );
  const pieData = [
    { id: 0, value: 10 },
    { id: 1, value: 15 },
    { id: 2, value: 20 },
  ];
  const pieParams = getPieParams(pieData, pieWidth);

  const totals = [
    { title: 'TotalTitle', totValue: 'Total', relValue: 'Relative' },
    { title: 'TotalTitle', totValue: 'Total', relValue: 'Relative' },
    { title: 'TotalTitle', totValue: 'Total', relValue: 'Relative' },
  ];
  const pieElements = [
    { source: 'Some Source', orders: 'Some Order', amount: 'Some Amount' },
    { source: 'Some Source', orders: 'Some Order', amount: 'Some Amount' },
    { source: 'Some Source', orders: 'Some Order', amount: 'Some Amount' },
    { source: 'Some Source', orders: 'Some Order', amount: 'Some Amount' },
  ];

  const recentElements = [
    {
      id: 'Some ID',
      product: 'Some Product',
      price: 'Some Price',
      status: 'Some Status',
      action: 'Some Action',
    },
    {
      id: 'Some ID',
      product: 'Some Product',
      price: 'Some Price',
      status: 'Some Status',
      action: 'Some Action',
    },
    {
      id: 'Some ID',
      product: 'Some Product',
      price: 'Some Price',
      status: 'Some Status',
      action: 'Some Action',
    },
    {
      id: 'Some ID',
      product: 'Some Product',
      price: 'Some Price',
      status: 'Some Status',
      action: 'Some Action',
    },
    {
      id: 'Some ID',
      product: 'Some Product',
      price: 'Some Price',
      status: 'Some Status',
      action: 'Some Action',
    },
  ];

  return (
    <FuturePageContainer>
      <StatsContainer>
        <DashHeader>
          <p>StyledDashHeader</p>
        </DashHeader>
        <TotalsContainer>
          {totals.map((element, index) => (
            <TotalDiv key={index}>
              <TotalTitle>{element.title}</TotalTitle>
              <TotalNumbers>
                <TotalValue>{element.totValue}</TotalValue>
                <RelativeValue>{element.relValue}</RelativeValue>
              </TotalNumbers>
            </TotalDiv>
          ))}
        </TotalsContainer>
        <GraphsContainer>
          <Chart ref={chartContainerRef}>
            <TotalTitle>TotalTitle</TotalTitle>

            <BarChart {...chartParams} />
          </Chart>
          <Pie ref={pieContainerRef}>
            <TotalTitle>TotalTitle</TotalTitle>
            <PieChart {...pieParams} />
            <PieDataContainer>
              <PieDataTitle>
                <p>sssss</p>
                <p>sssss</p>
                <p>sssss</p>
              </PieDataTitle>
              {pieElements.map((element, index) => (
                <PieDataRow key={index}>
                  <p>{element.source}</p>
                  <p>{element.orders}</p>
                  <p>{element.amount}</p>
                </PieDataRow>
              ))}
            </PieDataContainer>
          </Pie>
        </GraphsContainer>
        <DashHeader>
          <p>StyledDashHeader</p>
        </DashHeader>{' '}
        <RecentOrders>
          <RecentTitle>
            <p className="recent-transient-laptop">dsdfsdfs</p>
            <p>dsdfsdfs</p>
            <p className="recent-transient-laptop">dsdfsdfs</p>
            <p className="recent-transient-mobile">dsdfsdfs</p>
            <p>dsdfsdfs</p>
          </RecentTitle>
          <RecentElementsContainer>
            {recentElements.map((element, index) => (
              <RecentElement key={index}>
                <p className="recent-transient-laptop">{element.id}</p>
                <p>{element.product}</p>
                <p className="recent-transient-laptop">{element.price}</p>
                <p className="recent-transient-mobile">{element.status}</p>
                <p>{element.action}</p>
              </RecentElement>
            ))}
          </RecentElementsContainer>
        </RecentOrders>
      </StatsContainer>
    </FuturePageContainer>
  );
};

export default Dashboard;
