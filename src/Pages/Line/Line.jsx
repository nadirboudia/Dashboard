import { data2 } from '../Bar/Data'
import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material/styles'

function LineChart() {
  const theme = useTheme()

  return (
    <div
      style={{
        height: '87vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.background.default,
        borderRadius: 12,
        padding: 16,
        boxShadow: theme.shadows[3],
      }}
    >
      <div style={{ height: '100%', width: '90%' }}>
        <ResponsiveLine
          data={data2}
          margin={{ top: 30, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false,
            
          }}
          curve="monotoneX"
          axisBottom={{
            legend: 'Years',
            legendOffset: 40,
            legendPosition: 'middle',
            tickSize: 5 ,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            legend: 'Values',
            legendOffset: -55,
            legendPosition: 'middle',
            tickSize: 5,
            tickPadding: 5,
          }}
          colors={{ scheme: 'set2' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          enableArea={true}
          areaOpacity={0.1}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: 'circle',
              itemTextColor: theme.palette.text.primary,
            },
          ]}
          theme={{
            // @ts-ignore
            textColor: theme.palette.text.primary,
            axis: {
              ticks: {
                text: { fill: theme.palette.text.primary },
                
              },
              legend: {
                text: { fill: theme.palette.text.secondary , fontSize: 16  },
            
              },
            },
            grid: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            tooltip: {
              container: {
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                fontSize: 13,
                borderRadius: 6,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default LineChart
