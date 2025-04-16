
import { type Farmer } from '@/data/farmers';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Calendar, Award, Crop } from 'lucide-react';

interface FarmerSidebarProps {
  farmer: Farmer;
}

const FarmerSidebar = ({ farmer }: FarmerSidebarProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <motion.div
          className="inline-block p-4 rounded-full bg-green-100 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        >
          <User size={40} className="text-green-700" />
        </motion.div>
        <h2 className="text-xl font-bold text-gray-800">{farmer.name}</h2>
        <div className="flex items-center justify-center mt-2">
          <MapPin size={16} className="text-gray-500 mr-1" />
          <p className="text-gray-600">{farmer.village}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <Crop className="text-green-600 mr-3" size={20} />
          <div>
            <p className="text-sm text-gray-500">Land Size</p>
            <p className="font-medium">{farmer.landSize} acres</p>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <Phone className="text-blue-600 mr-3" size={20} />
          <div>
            <p className="text-sm text-gray-500">Contact</p>
            <p className="font-medium">{farmer.contact}</p>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <Calendar className="text-orange-600 mr-3" size={20} />
          <div>
            <p className="text-sm text-gray-500">Last Harvest</p>
            <p className="font-medium">{new Date(farmer.lastHarvestDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Award className="text-purple-600 mr-3" size={20} />
            <p className="text-sm text-gray-500">Scheme Eligibility</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {farmer.schemeEligibility.map((scheme, index) => (
              <motion.span
                key={index}
                className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                {scheme}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">Loan Status</span>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
            Active
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <motion.div
            className="bg-green-600 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ 
              width: `${100 - (farmer.loanDetails.balance / farmer.loanDetails.loanAmount * 100)}%` 
            }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">₹{farmer.loanDetails.balance.toLocaleString()} remaining</span>
          <span className="text-xs text-gray-500">
            {Math.round((1 - farmer.loanDetails.balance / farmer.loanDetails.loanAmount) * 100)}% paid
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default FarmerSidebar;
