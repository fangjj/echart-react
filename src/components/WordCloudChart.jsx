import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import'echarts/lib/component/tooltip';
import'echarts/lib/component/title';

export class WordCloudChart extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //let myChart = echarts.init(document.getElementById('demo'));
        let myChart = echarts.init(ReactDOM.findDOMNode(this.refs.chart));
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [20, 20, 36, 10, 10, 20]
            }]
        });
    }
    render(){
        return(
            <div id="demo" ref="chart" style={{width: '80%', height: '600px'}}>
            </div>
        )
    }
}