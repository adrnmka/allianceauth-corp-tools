// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import { abbreviateNumber, getCSSVariable } from "./GraphHelpers";
import { ResponsiveBarCanvas } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const MiningTotalsGraph = ({ data, ores, dataType }: any) => {
  console.log(ores, data);
  const bg = getCSSVariable("--bs-body-bg");
  const txt = getCSSVariable("--bs-body-color");
  const bdr = getCSSVariable("--bs-light-border-subtle");

  return (
    <ResponsiveBarCanvas
      data={data}
      keys={ores}
      indexBy={"name"}
      padding={0.2}
      margin={{ top: 10, right: 0, bottom: 50, left: 80 }}
      pixelRatio={2}
      innerPadding={0}
      minValue="auto"
      maxValue="auto"
      groupMode="stacked"
      layout="vertical"
      reverse={false}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "spectral" }}
      colorBy="id"
      borderWidth={0}
      borderRadius={0}
      borderColor={{
        from: "color",
        modifiers: [["brighter", 2]],
      }}
      axisRight={null}
      axisBottom={{
        // background: "#222",
        tickSize: 5,
        tickPadding: 3,
        legend: "Ore",
        legendPosition: "middle",
        legendOffset: 35,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: (tick) => `${abbreviateNumber(tick)}`,
        legend: `Total ${dataType}`,
        legendPosition: "middle",
        legendOffset: -70,
      }}
      enableGridX={false}
      enableGridY={true}
      enableLabel={false}
      labelSkipWidth={24}
      labelSkipHeight={24}
      labelTextColor={"#fff"}
      valueFormat=" ^-,.0f"
      isInteractive={true}
      legends={[]}
      theme={{
        background: bg,
        text: {
          fontSize: 11,
          fill: txt,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              stroke: bdr,
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 14,
              fill: txt,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          ticks: {
            line: {
              stroke: bdr,
              strokeWidth: 1,
            },
            text: {
              fontSize: 14,
              fill: txt,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        grid: {
          line: {
            stroke: bdr,
            strokeWidth: 1,
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 14,
              fill: txt,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          text: {
            fontSize: 14,
            fill: txt,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          ticks: {
            line: {},
            text: {
              fontSize: 12,
              fill: bdr,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        annotations: {
          text: {
            fontSize: 12,
            fill: bg,
            outlineWidth: 2,
            outlineColor: txt,
            outlineOpacity: 1,
          },
          link: {
            stroke: bg,
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: txt,
            outlineOpacity: 1,
          },
          outline: {
            stroke: bg,
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: txt,
            outlineOpacity: 1,
          },
          symbol: {
            fill: bg,
            outlineWidth: 2,
            outlineColor: txt,
            outlineOpacity: 1,
          },
        },
        tooltip: {
          container: {
            background: bg,
            fontSize: 14,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
    />
  );
};
