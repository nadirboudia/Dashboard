import { ResponsiveBar } from "@nivo/bar"
import { Data } from "./Data"

function Bar() {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={Data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        padding={0.15}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16,
          },
        ]}
        axisBottom={{ legend: "country (indexBy)", legendOffset: 32 }}
        axisLeft={{ legend: "food", legendOffset: -40 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      />
    </div>
  )
}

export default Bar
