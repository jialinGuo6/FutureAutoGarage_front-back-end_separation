/**
 *  FutureAutoGarage - TirePatterns Component
 * Author: Jialin Guo
 * Created: 2025-12-01
 * Description:
 */

import { useState } from 'react';
import { Box, Typography,Button } from '@mui/material';
import CarShowPics from '../components/CarShowPics';

export default function WinterTires() {
  
  const TirePattern = '/images/tirePatterns/'
  //const TirePatterns = Array.from({ length: 14 }, (_, i) => `${TirePattern}${i + 1}.png`)
 
    // 按品牌分组的图片路径
  const tireGroups = {
    LEAO: [`${TirePattern}1.png`, `${TirePattern}2.png`, `${TirePattern}3.png`],
    ATLAS: [`${TirePattern}4.png`, `${TirePattern}5.png`, `${TirePattern}6.png`, `${TirePattern}7.png`],
    CROSSWIND: [`${TirePattern}8.png`, `${TirePattern}10.png`,`${TirePattern}11.png`,],
    GreenMax: [`${TirePattern}12.png`, `${TirePattern}13.png`],
    Evoluxx: [`${TirePattern}9.png`, `${TirePattern}14.png`]
  };
  const brands = Object.keys(tireGroups);
  const [currentBrand, setCurrentBrand] = useState(brands[0]);
  return (
    <Box sx={{ mt: -8, px: 2 }}>
      <Typography
        sx={{ mb: 2, fontSize: '1.8rem', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}
      >
        Ling Long Tires Tread Pattern
      </Typography>

      <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary', mb: 1, mt: 3 }}>
        Passager Tire
      </Typography>

      {/* 品牌选择按钮 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        {brands.map((brand) => (
          <Button
            key={brand}
            variant={brand === currentBrand ? 'contained' : 'outlined'}
            onClick={() => setCurrentBrand(brand)}
          >
            {brand}
          </Button>
        ))}
      </Box>

      <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', mb: 0, mt: 0 }}>
        By clicking the brand button, you can view the tire patterns of different brands
      </Typography>

      {/* 当前品牌轮胎图片轮播 */}
      <CarShowPics key={currentBrand}  tireId={null} defaultImages={tireGroups[currentBrand]} />
    </Box>
  );
}