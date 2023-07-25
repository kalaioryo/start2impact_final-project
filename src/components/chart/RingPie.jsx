import { ResponsivePie } from "@nivo/pie";
import PropTypes from "prop-types";

const RingPie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    startAngle={0}
    endAngle={360}
    innerRadius={0.9}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    colors={{ scheme: "dark2" }}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    layers={["arcs"]}
    isInteractive={false}
    legends={[
      {
        anchor: "right",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 90,
        itemsSpacing: 180,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

RingPie.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }).isRequired
  ),
};

export default RingPie;
