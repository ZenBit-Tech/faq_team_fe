import { useEffect, useRef, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import {
  useGetAverageSalesQuery,
  useGetLastOrdersQuery,
  useGetNumberOfOrdersQuery,
  useGetTotalSalesPerCategoryQuery,
  useGetTotalSalesPerMonthQuery,
  useGetTotalSalesQuery,
} from 'redux/authApiSlice';

import { useResponsiveCharts, useResponsiveXLabel } from './dashBoardHooks';
import {
  Chart,
  ColorBox,
  DashHeader,
  FuturePageContainer,
  getChartParams,
  getPieParams,
  GraphsContainer,
  Pie,
  PieDataContainer,
  PieDataRow,
  PieDataTitle,
  PieTableSource,
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

const userId = '9b3d5a7e-2e6d-4f8b-8a3e-7d6b5a3e4a7e';

const Dashboard = () => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const pieContainerRef = useRef<HTMLDivElement | null>(null);

  const [total, setTotal] = useState({
    title: 'Total Sales',
    totValue: 0,
    relValue: 0,
  });
  const [aver, setAver] = useState({
    title: 'Average Sales',
    totValue: 0,
    relValue: '',
  });
  const [number, setNumber] = useState({
    title: 'Number of Orders',
    totValue: 0,
    relValue: 0,
  });
  const [perMonth, setPerMonth] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [perCategoryPie, setPerCategoryPie] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);
  const [perCategoryTable, setPerCategoryTable] = useState([
    { source: '', orders: '', amount: '' },
    { source: '', orders: '', amount: '' },
    { source: '', orders: '', amount: '' },
    { source: '', orders: '', amount: '' },
  ]);
  const [lastOrders, setLastOrders] = useState([
    { id: '', product: '', price: '', status: '' },
  ]);

  const { data: averData } = useGetAverageSalesQuery(userId);
  const { data: lastData } = useGetLastOrdersQuery(userId);
  const { data: numberData } = useGetNumberOfOrdersQuery(userId);
  const { data: perCategoryData } = useGetTotalSalesPerCategoryQuery(userId);
  const { data: perMonthData } = useGetTotalSalesPerMonthQuery(userId);
  const { data: totalData } = useGetTotalSalesQuery(userId);

  console.log(lastData);

  useEffect(() => {
    if (totalData) {
      setTotal(prev => ({
        ...prev,
        totValue: totalData.totalSales,
        relValue: totalData.lastWeekPercentage,
      }));
    }
  }, [totalData]);

  useEffect(() => {
    if (averData) {
      setAver(prev => ({
        ...prev,
        totValue: averData.averageSales,
        relValue: averData.lastWeekAveragePercentage,
      }));
    }
  }, [averData]);

  useEffect(() => {
    if (numberData) {
      setNumber(prev => ({
        ...prev,
        totValue: numberData.totalOrders,
        relValue: numberData.lastWeekOrderPercentage,
      }));
    }
  }, [numberData]);

  useEffect(() => {
    if (perMonthData) {
      setPerMonth(perMonthData.map(element => element.total));
    }
  }, [perMonthData]);

  useEffect(() => {
    if (perCategoryData) {
      setPerCategoryPie(
        perCategoryData.map((element, index) => ({
          id: index,
          value: element.orderCount,
        })),
      );
      setPerCategoryTable(
        perCategoryData.map(element => ({
          source: element.category,
          orders: element.orderCount,
          amount: element.totalSales,
        })),
      );
    }
  }, [perCategoryData]);

  useEffect(() => {
    if (lastData) {
      setLastOrders(
        lastData.map(element => ({
          id: element.order_id,
          product: 'Product Name',
          price: element.order_price,
          status: 'Sold',
        })),
      );
    }
  }, [lastData]);

  const totals = [total, aver, number];

  const { chartWidth, pieWidth } = useResponsiveCharts(
    chartContainerRef,
    pieContainerRef,
  );
  const { tickLabelStyle } = useResponsiveXLabel();

  const last12Months = getLast12Months();

  const chartData = perMonth;

  const chartParams = getChartParams(
    chartData,
    chartWidth,
    last12Months,
    tickLabelStyle,
  );
  const pieData = perCategoryPie;
  const pieDataTable = perCategoryTable;
  const pieParams = getPieParams(pieData, pieWidth);

  return (
    <FuturePageContainer>
      <StatsContainer>
        <DashHeader>
          <p>Dashboard</p>
        </DashHeader>
        <TotalsContainer>
          {totals &&
            totals.map((element, index) => (
              <TotalDiv key={index}>
                <TotalTitle>{element.title}</TotalTitle>
                <TotalNumbers>
                  <TotalValue>${element.totValue}</TotalValue>
                  <RelativeValue val={element.relValue}>
                    {element.relValue}
                  </RelativeValue>
                </TotalNumbers>
              </TotalDiv>
            ))}
        </TotalsContainer>
        <GraphsContainer>
          <Chart ref={chartContainerRef}>
            <TotalTitle>Total Sales per Month</TotalTitle>
            <BarChart {...chartParams} />
          </Chart>
          <Pie ref={pieContainerRef}>
            <TotalTitle>Total Sales per Category</TotalTitle>
            <PieChart {...pieParams} />
            <PieDataContainer>
              <PieDataTitle>
                <p>Source</p>
                <p>Orders</p>
                <p>Amount</p>
              </PieDataTitle>
              {pieDataTable.map((element, index) => (
                <PieDataRow key={index}>
                  <PieTableSource>
                    {' '}
                    <ColorBox index={index}></ColorBox>
                    <p>{element.source}</p>
                  </PieTableSource>
                  <p>{element.orders}</p>
                  <p>${element.amount}</p>
                </PieDataRow>
              ))}
            </PieDataContainer>
          </Pie>
        </GraphsContainer>
        <DashHeader>
          <p>Recent Orders</p>
        </DashHeader>
        <RecentOrders>
          <RecentTitle>
            <p className="recent-transient-laptop">ID</p>
            <p>Product</p>
            <p className="recent-transient-laptop">Price</p>
            <p className="recent-transient-mobile">Status</p>
            <p>Action</p>
          </RecentTitle>
          <RecentElementsContainer>
            {lastOrders.map((element, index) => (
              <RecentElement key={index}>
                <p className="recent-transient-laptop">#{index + 1}</p>
                <p>{element.product}</p>
                <p className="recent-transient-laptop">{element.price}</p>
                <p className="recent-transient-mobile">{element.status}</p>
                <button>Open Order</button>
              </RecentElement>
            ))}
          </RecentElementsContainer>
        </RecentOrders>
      </StatsContainer>
    </FuturePageContainer>
  );
};

export default Dashboard;
