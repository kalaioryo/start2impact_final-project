import { ResponsiveLine } from "@nivo/line";
import PropTypes from 'prop-types'

const StandardLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    useMesh={true}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-,"
    margin={{ top: 50, right: 50, bottom: 80, left: 65 }}
    axisBottom={{
      tickSize: 6,
      tickPadding: 4,
      tickRotation: -47,
      legendOffset: 36,
      legendPosition: "middle",
    }}
    tooltip={({ point, color }) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 12,
          color,
          background: "#222222",
        }}
      >
        <span
          style={{
            color: `${point.color}`,
            padding: "4px",
            width: "100px",
          }}
        >
          {point.serieId}
        </span>
        <span style={{ color: `${point.color}` }}>{point.data.x}</span>
        <span style={{ color: `${point.color}` }}>
          {point.data.y.toLocaleString("it-IT")}
        </span>
      </div>
    )}
    legends={[
      {
        anchor: "top",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: -40,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

StandardLine.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.string.isRequired,
          y: PropTypes.number.isRequired
        })
      )
    })
  ) 
}

export default StandardLine;