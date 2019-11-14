import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const Graph = ({ data, name }) => {
    // debugger
    let color = '#20CE99';
    if (data){
        if (data[data.length - 1].close < data[0].close) {
            color = '#F45530';
        }
    }
    
    return (
        <div className={name}>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis hide={true} dataKey='label' />
                    <YAxis hide={true} tickLine={false} dataKey='close' type='number' domain={['dataMin', 'dataMax']} />
                    <Tooltip cursor={{ stroke: 'lightgrey', strokeWidth: 1 }} />
                    <Line type="linear" isAnimationActive={true} connectNulls={true} dot={false} stroke={color} dataKey='close'/>
                </LineChart>
            </ ResponsiveContainer>
        </div>
    )
}

export default Graph;