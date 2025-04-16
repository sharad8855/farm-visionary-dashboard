
import { motion } from "framer-motion";
import { type Farmer } from "@/data/farmers";
import { ArrowRight } from "lucide-react";

interface FarmerCardProps {
  farmer: Farmer;
  onClick: () => void;
}

const FarmerCard = ({ farmer, onClick }: FarmerCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 cursor-pointer"
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        borderColor: "#4CAF50" 
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{farmer.name}</h3>
            <div className="flex items-center mt-2 text-gray-600">
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                {farmer.village}
              </span>
              {farmer.landSize && (
                <span className="ml-2 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                  {farmer.landSize} acres
                </span>
              )}
            </div>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="text-green-600"
          >
            <ArrowRight size={20} />
          </motion.div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Last Harvest: {new Date(farmer.lastHarvestDate).toLocaleDateString()}
          </div>
          <div className="text-sm">
            {farmer.schemeEligibility.length > 0 && (
              <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                {farmer.schemeEligibility.length} schemes
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FarmerCard;
