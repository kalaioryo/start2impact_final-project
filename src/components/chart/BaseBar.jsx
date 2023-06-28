import { ResponsiveBar } from "@nivo/bar";
// import { ThemeProvider } from "@nivo/core";

// const theme = {
//   tooltip: {
//     background: "pink",
//     tableCell: {
//       background: "red",
//     },
//   },
// };

const BaseBar = ({ data, keysBar, groupMode, layout }) => (
  // <ThemeProvider theme={theme}>
    <ResponsiveBar
    data={data}
    keys={keysBar}
    groupMode={groupMode}
    layout={layout}
    margin={{ top: 70, right: 0, bottom: 70, left: 0 }}
    padding={0.5}
    borderRadius={5}
    axisBottom={null}
    valueFormat=" >,"
    theme={{ 
      "fontSize": 18,
      }
    }

    tooltip={({ id, value, color }) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 12,
          color,
          background: "#222222",
        }}
      ><span>{id}</span><span>{value.toLocaleString("it-IT")}</span></div>
    )}

    // legends={undefined} //la proprietà accetta undefined

    legends={[
      {
        dataFrom: "keys",
        anchor: "top",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: -40,
        itemsSpacing: 30,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />

  // </ThemeProvider>
  
);

export default BaseBar;
