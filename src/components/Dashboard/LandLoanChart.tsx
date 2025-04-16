
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { type Farmer } from '@/data/farmers';
import { motion } from 'framer-motion';

interface LandLoanChartProps {
  farmer: Farmer;
}

const LandLoanChart = ({ farmer }: LandLoanChartProps) => {
  const { loanDetails } = farmer;
  
  const data = [
    {
      name: 'Land',
      'Total Land': loanDetails.totalLandOwned,
      'Land Under Loan': loanDetails.landUnderLoan,
    },
    {
      name: 'Loan',
      'Loan Amount (₹10k)': loanDetails.loanAmount / 10000,
      'Balance (₹10k)': loanDetails.balance / 10000,
    },
  ];

  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="text-lg font-medium text-gray-800 mb-4">Land & Loan Insights</h3>
      <div className="p-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total Land" fill="#4CAF50" />
            <Bar dataKey="Land Under Loan" fill="#F44336" />
            <Bar dataKey="Loan Amount (₹10k)" fill="#2196F3" />
            <Bar dataKey="Balance (₹10k)" fill="#FF9800" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-gray-600">Loan Amount</p>
          <p className="text-blue-600 font-medium">₹{loanDetails.loanAmount.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-gray-600">Interest Rate</p>
          <p className="text-green-600 font-medium">{loanDetails.interestRate}%</p>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg">
          <p className="text-gray-600">Balance</p>
          <p className="text-orange-600 font-medium">₹{loanDetails.balance.toLocaleString()}</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg">
          <p className="text-gray-600">Land Ratio</p>
          <p className="text-purple-600 font-medium">
            {Math.round((loanDetails.landUnderLoan / loanDetails.totalLandOwned) * 100)}% under loan
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LandLoanChart;
