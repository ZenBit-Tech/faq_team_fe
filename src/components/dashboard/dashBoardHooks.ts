import { MutableRefObject, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import {
  useGetAverageSalesQuery,
  useGetLastOrdersQuery,
  useGetNumberOfOrdersQuery,
  useGetTotalSalesPerCategoryQuery,
  useGetTotalSalesPerMonthQuery,
  useGetTotalSalesQuery,
} from 'redux/ordersApiSlice';

const useResponsiveCharts = (
  chartContainerRef: MutableRefObject<HTMLDivElement | null>,
  pieContainerRef: MutableRefObject<HTMLDivElement | null>,
) => {
  const [chartWidth, setChartWidth] = useState(0);
  const [pieWidth, setPieWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth);
      }
      if (pieContainerRef.current) {
        setPieWidth(pieContainerRef.current.offsetWidth - 20);
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);

    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }
    if (pieContainerRef.current) {
      resizeObserver.observe(pieContainerRef.current);
    }

    return () => {
      if (chartContainerRef.current) {
        resizeObserver.unobserve(chartContainerRef.current);
      }
      if (pieContainerRef.current) {
        resizeObserver.unobserve(pieContainerRef.current);
      }
    };
  }, []);

  return { chartWidth, pieWidth };
};

const useResponsiveXLabel = () => {
  const isMediumScreen = useMediaQuery('(max-width:645px)');

  const tickLabelStyle = isMediumScreen
    ? {
        angle: 80,
        textAnchor: 'start' as const,
        fontSize: 10,
      }
    : {
        fontSize: 12,
      };

  return { tickLabelStyle };
};

const useDashboardData = (userId: string) => {
  const [total, setTotal] = useState({
    title: '',
    totValue: 0,
    relValue: 0,
  });
  const [aver, setAver] = useState({
    title: '',
    totValue: 0,
    relValue: 0,
  });
  const [number, setNumber] = useState({
    title: '',
    totValue: 0,
    relValue: 0,
  });
  const [perMonth, setPerMonth] = useState<number[]>([]);
  const [perCategoryPie, setPerCategoryPie] = useState<
    { id: number; value: number }[]
  >([]);
  const [perCategoryTable, setPerCategoryTable] = useState<
    {
      source: string;
      orders: number;
      amount: number;
    }[]
  >([]);
  const [lastOrders, setLastOrders] = useState<
    {
      id: string;
      product: string;
      price: number;
      status: string;
    }[]
  >([]);

  const { data: averData } = useGetAverageSalesQuery(userId);
  const { data: lastData } = useGetLastOrdersQuery(userId);
  const { data: numberData } = useGetNumberOfOrdersQuery(userId);
  const { data: perCategoryData } = useGetTotalSalesPerCategoryQuery(userId);
  const { data: perMonthData } = useGetTotalSalesPerMonthQuery(userId);
  const { data: totalData } = useGetTotalSalesQuery(userId);

  const totals = [total, aver, number];

  useEffect(() => {
    if (totalData) {
      setTotal(prev => ({
        ...prev,
        totValue: totalData.totalSales,
        relValue: totalData.lastWeekPercentage,
      }));
    }

    if (averData) {
      setAver(prev => ({
        ...prev,
        totValue: averData.averageSales,
        relValue: averData.lastWeekAveragePercentage,
      }));
    }

    if (numberData) {
      setNumber(prev => ({
        ...prev,
        totValue: numberData.totalOrders,
        relValue: numberData.lastWeekOrderPercentage,
      }));
    }

    if (perMonthData) {
      setPerMonth(perMonthData.map(element => element.total));
    }

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
    if (lastData) {
      setLastOrders(
        lastData.map(element => ({
          id: element.order_id,
          product: element.product_product_name,
          price: element.order_price,
          status: 'Sold',
        })),
      );
    }
  }, [
    lastData,
    perCategoryData,
    perMonthData,
    numberData,
    averData,
    totalData,
  ]);

  return {
    total,
    aver,
    number,
    perMonth,
    perCategoryPie,
    perCategoryTable,
    lastOrders,
    totals,
  };
};

export { useDashboardData, useResponsiveCharts, useResponsiveXLabel };
