import { ResponsiveBar } from "@nivo/bar";

const StandardBar = ({ data, keysBar }) => (
  // <ThemeProvider theme={theme}>
  <ResponsiveBar
    data={data}
    keys={keysBar}
    groupMode={"grouped"}
    // layout={layout}
    margin={{ top: 70, right: 40, bottom: 70, left: 50 }}
    borderRadius={5}
    // colors={{ scheme: 'categ }}
    enableLabel={false}
    axisBottom={{
      tickSize: 6,
      tickPadding: 9,
      tickRotation: -40,
      // legend: 'country',
      // legendPosition: 'top',
      legendOffset: 32,
    }}
    tooltip={({ id, value, data, color }) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 12,
          color,
          background: "#222222",
        }}
      ><span>{data.id}</span><span>{id}</span><span>{value.toLocaleString("it-IT")}</span></div>
    )}
    // axisBottom={null}
    axisLeft={true}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    // minValue={"100"}3

    valueFormat=" >,"
    theme={
      {
        // "fontSize": 18,
      }
    }
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

export default StandardBar;
