import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import Odometer from 'react-odometerjs';

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverPrice: this.props.close
        }

        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    
    handleMouseMove(e) {
        this.setState({
            hoverPrice: e.activePayload[0].payload.close
        })
    }

    render() {
        const { data, name, dataKey, close, dollarDiff, percentDiff } = this.props;

        let color = '#20CE99';
        if (data) {
            if (dataKey === 'close') {
                if (data[data.length - 1].close < data[0].close) {
                    color = '#F45530';
                }
            } else {
                if (data[data.length - 1].balance < data[0].balance) {
                    color = '#F45530';
                }
            }
        } 

        return (
            <div className={name}>
                
                {/* <h1>${close}</h1> */}
                <h1>$<Odometer className='odometer' value={this.state.hoverPrice} format="(,ddd).dd" /></h1>
                <h3>${dollarDiff} ({percentDiff}%)</h3> 
                
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        onMouseMove={this.handleMouseMove}
                        onTouchStart={this.handleMouseMove}
                    >
                        <XAxis hide={true} dataKey='label' />
                        <YAxis hide={true} tickLine={false} dataKey={dataKey} type='number' domain={['dataMin', 'dataMax']} />
                        <Tooltip cursor={{ stroke: 'lightgrey', strokeWidth: 1 }} />
                        <Line type="linear" isAnimationActive={true} connectNulls={true} dot={false} stroke={color} dataKey={dataKey}/>
                    </LineChart>
                </ ResponsiveContainer>
            </div>
        )
    }
    
}

export default Graph;