import {data} from '../Bar/Data'
import { ResponsivePieCanvas } from '@nivo/pie'
import { useTheme } from '@mui/material/styles'
function Pie() {
  const theme = useTheme(); 
  return (
  <div style={{height: '87vh', width:'100%'  ,  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{height: '90%', width:'100%' }}>
       <ResponsivePieCanvas
        data={data}
      margin={{ top: 40, right: 180, bottom: 40, left: 190 }} 
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={theme.palette.text.primary}
       legends={[
  {
    anchor: 'left',
    direction: 'column',
    translateX: 200,    
    translateY: 0,        
    itemWidth: 100,     
    itemHeight: 25,       
    itemsSpacing: 10,      
    symbolSize: 19,       
    itemTextColor: theme.palette.text.primary,
  }
]} theme={{
          background: theme.palette.background.default,
          tooltip: {
            container: {
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              fontSize: 13,
              borderRadius: 6,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }
          }
        }}

    />
    </div>
  </div>
  )
}

export default Pie
