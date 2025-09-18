import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material/styles";
import World from './World.json'
import { data3 } from "../Bar/Data"

function ChoroplethChart() {
  const theme = useTheme();

  return (
    <div
      style={{
        height: "87vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        padding: 16,
        boxShadow: theme.shadows[3],
      }}
    >
      <div
        style={{
    
          height: "100%",
          width: "100%",
        }}
      >
        <ResponsiveChoropleth
          data={data3}
          features={World.features}
          colors="nivo"
          domain={[0, 1000000]}
          unknownColor="#666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={300}
          projectionTranslation={[0.5, 0.7]}
          enableGraticule={true}
          graticuleLineColor={theme.palette.divider}
          borderWidth={0.6}
          borderColor={theme.palette.divider}
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              translateX: 20,
              translateY: -60,
              itemWidth: 94,
              itemHeight: 18,
              itemTextColor: theme.palette.text.primary,
              symbolSize: 18,
            },
          ]}
          theme={{
            tooltip: {
              container: {
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                fontSize: 13,
                borderRadius: 6,
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default ChoroplethChart;
