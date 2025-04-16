
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { type Farmer } from '@/data/farmers';
import { motion } from 'framer-motion';

interface CropDistributionChartProps {
  farmer: Farmer;
}

const CropDistributionChart = ({ farmer }: CropDistributionChartProps) => {
  const { crops, landSize } = farmer;
  
  const data = crops.map(crop => ({
    name: crop.name,
    value: (crop.landAllocation / 100) * landSize,
    percentage: crop.landAllocation,
    color: crop.color
  }));

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-lg font-medium text-gray-800 mb-4">Crop Distribution</h3>
      <div className="p-2">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [`${value.toFixed(2)} acres`, 'Land Area']}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((crop, index) => (
          <div key={index} className="flex items-center p-2 rounded-md bg-gray-50">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: crop.color }}
            ></div>
            <span className="text-sm">{crop.name}: {crop.value.toFixed(2)} acres</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CropDistributionChart;
