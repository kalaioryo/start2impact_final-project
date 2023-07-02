import { ResponsiveLine } from '@nivo/line'



const StandardLine = ({data}) => (

  <ResponsiveLine

  data={data}
  // valueFormat=" >,"
  useMesh={true}
  xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-,"

        

  // data={[
  //   {
  //     "id": "japan",
  //     "color": "hsl(316, 70%, 50%)",
  //     "data": [
  //       {
  //         "x": "plane",
  //         "y": 107
  //       },
  //       {
  //         "x": "helicopter",
  //         "y": 62
  //       },
  //       {
  //         "x": "boat",
  //         "y": 38
  //       },
  //     ]
  //   } 
  // ]}

  margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
  axisBottom={{
    tickSize: 6,
    tickPadding: 4,
    tickRotation: -47,
    // legend: 'transportation',
    legendOffset: 36,
    legendPosition: 'middle'}}

    // enableSlices="x"

    // sliceTooltip={function noRefCheck(){}}

    tooltip={({ point, color }) => (

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 12,
          color,
          background: "white"
          // background: "#222222",
        }}
      >
        <span style={{backgroundColor: `${point.color}`, padding: "4px"}}>{point.serieId}</span>
        <span>{point.data.x}</span>
        <span>{point.data.y.toLocaleString("it-IT")}</span>
      {/* <span>{value.toLocaleString("it-IT")}</span> */}
      </div>
    )}

  legends={[
    {
        anchor: 'top',
        direction: 'column',
        justify: false,
        translateX: 0,
        translateY: -40,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
            {
                on: 'hover',
                style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                }
            }
        ]
    }
  ]}

  />
)

export default StandardLine