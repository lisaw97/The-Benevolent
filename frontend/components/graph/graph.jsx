import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import Odometer from 'react-odometerjs';

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverPrice: this.props.close,
            hoverDollarDiff: this.props.dollarDiff
        }

        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    
    handleMouseMove(e) {
        // debugger
        if (this.props.dataKey === 'close') {
            // debugger
            this.setState({
                hoverPrice: e.activePayload[0].payload.close,
                hoverDollarDiff: e.activePayload[0].payload.close - this.props.open,
            })
        } else {
            this.setState({
                hoverPrice: e.activePayload[0].payload.balance,
                hoverDollarDiff: e.activePayload[0].payload.balance - this.props.open
            })
        }
        
    }

    render() {
        const { data, name, dataKey, open } = this.props;
        let color = '#20CE99';
        let hidden = 'green';
        if (data) {
            if (dataKey === 'close') {
                if (data[data.length - 1].close < data[0].close) {
                    color = '#F45530';
                    hidden = 'red';
                }
            } else {
                if (data[data.length - 1].balance < data[0].balance) {
                    color = '#F45530';
                    hidden = 'red';
                }
            }
        } 

        
        
        if (this.props.name != 'intraday-stock-graph') {
            hidden = 'hidden'
        }
        // debugger
        return (
            <div className={name}>
                <h1 className={hidden}>$<Odometer className='odometer' value={this.state.hoverPrice} format="(,ddd).dd" /></h1>
                <h3 className={hidden}>
                    $<Odometer className='odometer' value={this.state.hoverDollarDiff} format="(,ddd).dd" /> 
                    (<Odometer className='odometer' value={this.state.hoverDollarDiff / open} format="(,ddd).dd" />%)
                </h3>
                {/* <h3 className={hidden}>${dollarDiff} ({percentDiff}%)</h3>                  */}
                
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