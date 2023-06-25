import { ResponsiveBar } from '@nivo/bar'


const MyResponsiveBar = ({data}) => (
  <ResponsiveBar
    data={data}
    keys={[
      'molecolari',
      'antigenici',
    ]}
    groupMode="grouped"
    layout="horizontal"
    // id="tamponi"
    // value="participation"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}

    // indexBy="tamponi"

    margin={{ top: 70, right: 40, bottom: 70, left: 60 }}
    axisBottom={null}


    legends={[
            {
                dataFrom: 'keys',
                anchor: 'top',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -20,
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

export  {MyResponsiveBar}