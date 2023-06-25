import { ResponsiveBar } from "@nivo/bar";

const BaseBar = ({data, keysBar, groupMode, layout }) => (
  <ResponsiveBar
    data={data}
    keys={keysBar}
    groupMode={groupMode}
    layout={layout}
    margin={{ top: 70, right: 40, bottom: 70, left: 60 }}
    axisBottom={null}
    valueFormat=" >,"
    // theme={{"fontSize:": 24}}

    legends={[
      {
          dataFrom: 'keys',
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -40,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
              {
                  on: 'hover',
                  style: {
                      itemOpacity: 1
                  }
              }
          ]
      }
  ]}
  />
)

export default BaseBar