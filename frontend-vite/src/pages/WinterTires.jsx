/**
 *  FutureAutoGarage - WinterTires Component - 冬季轮胎页面
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Description:
 * - Maintain the currently selected tire ID
 * - Render the CarShowPics image component
 * - Render the TireCategoryPage table component
 * - Pass the selected ID to the child component via the onSelectTire callback
 *  * 描述：
 * - 维护当前选中轮胎 ID
 * - 渲染 CarShowPics 图片组件
 * - 渲染通用 TireCategoryPage 表格组件
 * - 通过回调 onSelectTire 传递选中 ID 给子组件
 */

import { useState } from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import CarShowPics from '../components/CarShowPics';
import TireCategoryPage from '../components/TireCategoryPage';

export default function WinterTires() {
  // Currently selected tire ID(used for image display and table highlighting)
  const [selectedTireId, setSelectedTireId] = useState(null);

  return (
    <Box sx={{  mt: -8 }}>
      <Typography  sx={{ mb: 2, fontSize: '1.80rem', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>
        Ling Long Winter Tires
      </Typography>

      {/* Image Show Component */}
      <CarShowPics 
        tireId={selectedTireId}   
        defaultImages={['/media/winter_tire0.png', '/media/winter_tire1.png']}
      />
      <Typography variant="body2"sx={{textAlign: 'center',color: 'text.secondary',mb: 0,mt: 0,}}>
        Browse our winter tires below. Click a tire to view its details and images.
      </Typography>

      {/* The Tire Table Component */}
      <TireCategoryPage
        api_interface="/api/tires/winter/"           // backend interface  后端接口地址
        selectedTireId={selectedTireId}              // send the currently selected item(for table highlighting) 传入当前选中项（用于表格高亮）
        onSelectTire={(id) => setSelectedTireId(id)} // update selected ID when a row is clicked 点击行更新选中 ID 
      />
    </Box>
  );
}
