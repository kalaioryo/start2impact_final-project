import { ResponsivePie } from "@nivo/pie";


const StandardPie = ({ data, keysPie, perceptual}) => (
  

  <ResponsivePie
    data={data}
    margin={{ top: 90, right: 10, bottom: 20, left: 10 }}
    valueFormat={">-,"}    
    startAngle={0}
    endAngle={360}
    innerRadius={0.1}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    enableArcLinkLabels={false}
    // colors={{ scheme: 'dark2' }}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    // layers={['arcs']}
    // isInteractive={false}
    theme={
      {
        "fontSize": 16
      }
    }

    tooltip={ (point) => {

      return <div style={ {
      fontSize: '18px',
      background: '#222222',
      color: `${point.datum.color}`,
      padding: '10px'
      }}>
        <span style={{padding: '2px'}}>{point.datum.label}</span>
        <span style={{padding: '2px'}}>({point.datum.value})</span>
        </div>;
  }}



    // tooltip={({ id, value, label, color }) => (
    //   <div
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       padding: 12,
    //       color,
    //       background: "#222222",
    //     }}
    //   ><span>{id}</span><span>{label}</span><span>{value}</span></div>
    // )}
    // enableArcLinkLabels={false}
    // arcLinkLabelsSkipAngle={10}
    // arcLinkLabelsTextColor="#333333"
    // arcLinkLabelsThickness={2}
    // arcLinkLabelsColor={{ from: 'color' }}
    // arcLabelsSkipAngle={10}
    // arcLabelsTextColor={{
    //     from: 'color',
    //     modifiers: [
    //         [
    //             'darker',
    //             2
    //         ]
    //     ]
    // }}

    legends={[
      {
        anchor: "top",
        direction: "column",
        justify: false,
        translateX: 0,
        translateY: -70,
        itemsSpacing: 10,
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

export default StandardPie;
