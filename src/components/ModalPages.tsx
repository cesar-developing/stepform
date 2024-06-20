// components/ModalPage.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface ModalPageProps {
  children: ReactNode;
}

const ModalPage: React.FC<ModalPageProps> = ({ children }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/home');
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed inset-0 z-50 bg-white shadow-lg overflow-auto"
    >
      <div className="p-4 border-b border-gray-200 flex items-center">
        <button onClick={handleBack} className="text-blue-500">
          Voltar
        </button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
};

export default ModalPage;
