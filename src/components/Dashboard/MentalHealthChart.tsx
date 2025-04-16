
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { type Farmer } from '@/data/farmers';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

interface MentalHealthChartProps {
  farmer: Farmer;
}

const MentalHealthChart = ({ farmer }: MentalHealthChartProps) => {
  const { mentalHealth } = farmer;

  // Create formatted data for the chart
  const data = mentalHealth.map(record => ({
    date: record.date,
    stressLevel: record.stressLevel,
    reminders: record.reminders,
  }));

  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-lg font-medium text-gray-800 mb-4">Mental Health & Reminders</h3>
      <div className="p-2">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} />
            <Tooltip 
              formatter={(value: number) => [`${value}`, 'Stress Level']}
              labelFormatter={(label) => {
                const monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
                const [year, month] = label.split('-');
                return `${monthNames[parseInt(month) - 1]} ${year}`;
              }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="stressLevel"
              stroke="#FF5722"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4">
        <h4 className="text-md font-medium text-gray-700 mb-2">Recent Reminders</h4>
        <div className="space-y-2">
          {data.slice(-3).map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start p-3 bg-yellow-50 rounded-lg"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
            >
              <Bell className="text-yellow-500 mt-0.5 mr-2" size={16} />
              <div>
                <p className="text-sm font-medium text-gray-700">{item.date}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.reminders.map((reminder, i) => (
                    <span 
                      key={i}
                      className="bg-white text-yellow-700 px-2 py-0.5 rounded-full text-xs font-medium"
                    >
                      {reminder}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MentalHealthChart;
