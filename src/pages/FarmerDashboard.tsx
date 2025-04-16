
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { farmers } from '@/data/farmers';
import { motion } from 'framer-motion';
import LandLoanChart from '@/components/Dashboard/LandLoanChart';
import CropDistributionChart from '@/components/Dashboard/CropDistributionChart';
import MentalHealthChart from '@/components/Dashboard/MentalHealthChart';
import FarmerSidebar from '@/components/Dashboard/FarmerSidebar';
import { ArrowLeft } from 'lucide-react';

const FarmerDashboard = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const farmerId = parseInt(id || '0');
  const farmer = farmers.find(f => f.id === farmerId);
  
  useEffect(() => {
    if (!farmer) {
      navigate('/');
    }
  }, [farmer, navigate]);
  
  if (!farmer) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="flex items-center text-gray-600 hover:text-green-700 mb-6 group"
          onClick={() => navigate('/')}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="mr-2 group-hover:text-green-700" size={20} />
          <span>Back to Farmers</span>
        </motion.button>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/4 space-y-6">
            <motion.h1
              className="text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {farmer.name}'s Dashboard
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LandLoanChart farmer={farmer} />
              <CropDistributionChart farmer={farmer} />
            </div>
            
            <div>
              <MentalHealthChart farmer={farmer} />
            </div>
          </div>
          
          <div className="w-full lg:w-1/4">
            <FarmerSidebar farmer={farmer} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FarmerDashboard;
