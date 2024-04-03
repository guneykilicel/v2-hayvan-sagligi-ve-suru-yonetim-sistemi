import React from 'react';
import PropTypes from 'prop-types';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

interface CardInfo {
  title: string;
  value: string;
  text: string;
}

interface ChartData {
  colors: string[];
  percentFillValue: number;
  chartInfo: {
    targetName: string;
    outName: string;
  }
}

interface AreaCardProps {
  chartData: ChartData;
  cardInfo: CardInfo;
}

const AreaCard: React.FC<AreaCardProps> = ({ chartData, cardInfo }) => {
  const filledValue = (chartData.percentFillValue / 100) * 360; // 360 degress for a full circle
  const remainedValue = 360 - filledValue;

  const data = [
    { name: chartData.chartInfo.outName, value: remainedValue },
    { name: chartData.chartInfo.targetName, value: filledValue },
  ];

  const renderTooltipContent = (value: number) => {
    return `${(value / 360) * 100} %`;
  };

  return (
    <div className="area-card">
      <div className="area-card-info">
        <h2 className="info-title">{cardInfo.title}</h2>
        {/* <div className="info-value">{cardInfo.title}</div> */}
        <p className="info-text">{cardInfo.text}</p>
      </div>
      <div className="area-card-chart">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={50}
            cy={45}
            innerRadius={20}
            fill="#e4e8ef"
            paddingAngle={0}
            dataKey="value"
            startAngle={-270}
            endAngle={150}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartData.colors[index % chartData.colors.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={renderTooltipContent} />
        </PieChart>
      </div>

      {/* <div className="area-card-img">
        <img src={cardInfo.value} alt="" />

      </div> */}
    </div>
  );
};

export default AreaCard;

AreaCard.propTypes = {
  chartData: PropTypes.exact({
    colors: PropTypes.array.isRequired,
    percentFillValue: PropTypes.number.isRequired,
    chartInfo: PropTypes.exact({
      targetName: PropTypes.string.isRequired,
      outName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  cardInfo: PropTypes.exact({
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
