import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../../context/ThemeContext';
import { FaArrowUpLong } from 'react-icons/fa6';
import { LIGHT_THEME } from '../../../constants/themeConstants';
import './AreaCharts.scss';

interface DataItem {
  month: string;
  loss: number;
  profit: number;
}

const data: DataItem[] = [
  {
    month: 'Ock',
    loss: 70,
    profit: 100,
  },
  {
    month: 'Şbt',
    loss: 55,
    profit: 85,
  },
  {
    month: 'Mrt',
    loss: 35,
    profit: 90,
  },
  {
    month: 'Nsn',
    loss: 90,
    profit: 70,
  },
  {
    month: 'Mys',
    loss: 55,
    profit: 80,
  },
  {
    month: 'Hzn',
    loss: 30,
    profit: 50,
  },
  {
    month: 'Tmz',
    loss: 32,
    profit: 75,
  },
  {
    month: 'Ağs',
    loss: 62,
    profit: 86,
  },
  {
    month: 'Eyl',
    loss: 55,
    profit: 78,
  },
];

const AreaBarChart: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value: number) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value: number) => {
    return `${value}k`;
  };

  const formatLegendValue = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Toplam Hasılat</h5>
        <div className="chart-info-data">
          <div className="info-data-value">₺5.4K</div>
          <div className="info-data-text">
            <FaArrowUpLong />
            <p>%5 geçen aya göre</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? '#676767' : '#f3f3f3'}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? '#676767' : '#f3f3f3'}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: 'transparent' }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="profit"
              name={'Gelir'}
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="loss"
              name={'Gider'}
              fill="#e3e7fc"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
