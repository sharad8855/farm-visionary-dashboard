
import { useState } from 'react';
import { motion } from 'framer-motion';
import { farmers } from '@/data/farmers';
import FarmerCard from '@/components/FarmerCard';
import { useNavigate } from 'react-router-dom';
import { Tractor } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  const handleFarmerClick = (farmerId: number) => {
    navigate(`/farmer/${farmerId}`);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              className="bg-green-100 p-4 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Tractor size={48} className="text-green-700" />
            </motion.div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Calling Agent for Farmers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dashboard to track and monitor farmer data across different villages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmers.map((farmer, index) => (
            <motion.div
              key={farmer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <FarmerCard 
                farmer={farmer} 
                onClick={() => handleFarmerClick(farmer.id)} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
