import { ResponsiveBar } from "@nivo/bar";
import PropTypes from 'prop-types'

const StandardBar = ({ data, keysBar }) => (

  <ResponsiveBar
    data={data}
    keys={keysBar}
    groupMode={"grouped"}
    margin={{ top: 70, right: 40, bottom: 70, left: 50 }}
    borderRadius={5}
    enableLabel={false}
    axisBottom={{
      tickSize: 6,
      tickPadding: 9,
      tickRotation: -40,
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
    
    axisLeft={true}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}

    valueFormat=" >,"
    theme={
      {
        // "fontSize": 18,
      }
    }

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
);

StandardBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      hospitalized: PropTypes.number,
      isolation: PropTypes.number,
      "intensive care": PropTypes.number
    }).isRequired
  ).isRequired,
  keysBar: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default StandardBar;
