import React from 'react';
import PropTypes from 'prop-types';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

const Stats = ({ stats }) => {
  const data = [
    {
      data: {
        battery: 90 / 100,
        design: 0.8,
        useful: 0.9,
        speed: 0.67,
        weight: 0.8
      },
      meta: { color: 'blue' }
    }
  ];

  const captions = {
    // columns
    battery: 'Battery Capacity',
    design: 'Design',
    useful: 'Usefulness',
    speed: 'Speed',
    weight: 'Weight'
  };

  return (
    <div>
      {stats.map(stat => stat.base_stat)}
      <RadarChart captions={captions} data={data} size={400} />
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.array.isRequired
};

export default Stats;
