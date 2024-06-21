import { MutableRefObject, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

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

export { useResponsiveCharts, useResponsiveXLabel };
