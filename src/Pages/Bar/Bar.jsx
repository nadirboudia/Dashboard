import { ResponsiveBar } from "@nivo/bar";
import { Data } from "./Data";
import { useTheme } from "@mui/material/styles";

function Bar() {
  const theme = useTheme(); // هذا theme تاع MUI

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "87vh",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ height: 700, width: "93%" }}>
        <ResponsiveBar
          data={Data}
          keys={["sales", "profit", "users"]}
          indexBy="month"
          padding={0.2}
          margin={{ top: 50, right: 150, bottom: 80, left: 80 }}
          colors={{ scheme: "paired" }}
          axisBottom={{
            legend: "Month",
            legendPosition: "middle", 
            legendOffset: 60,
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 0,
          }}
          axisLeft={{
            legend: "Work",
            legendPosition: "middle",
            legendOffset: -70, 
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 0,
          }}
        
          theme={{
            axis: {
              ticks: {
                line: { stroke: theme.palette.text.primary },
                text: {
                  fill: theme.palette.text.primary,
                  fontSize: 12,
                  fontWeight: "bold",
                },
              },
              legend: {
                text: {
                  fill: theme.palette.text.primary,
                  fontSize: 16,
                  fontWeight: 600,
                },
              },
            },
            tooltip: {
              container: {
                background: theme.palette.mode === "dark" ? "#222" : "#fff",
                color: theme.palette.text.primary,
                fontSize: 14,
                fontWeight: "bold",
                borderRadius: 6,
                padding: "8px 12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              },
            },
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              translateX: 120,
              itemsSpacing: 10,
              itemWidth: 100,
              itemHeight: 20,
              symbolSize: 20,
              itemTextColor: theme.palette.text.primary,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Bar;
