import React, {useState, useEffect} from 'react';
import "./StatisticsInfo.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import TrafficInfo from './TrafficInfo';
import TrafficSourceChart from './TrafficSourceChart';
import InvolvementInfoChart from './InvolvementInfoChart';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function StatisticsInfo() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res);
      setUsers(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  return (
  <div>
    <div className="firstPart">
      <div className="statistics statisticsSales">
        <div className="chart"></div>
         <h3 className="chartTitle">Sales statistics</h3>
         <ResponsiveContainer width="100%" aspect= { 4 / 1}>
         <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className="statistics referrals">
          <h3 className="c">Referrals</h3>
          <div className="referalsName">
            {users.map(user => (
              <div className="alignImage">
                <img src="./images/referal.jpg" alt="" className="referalImage"></img>
                <span key={user.id}>{user.name}</span></div>
            ))}
          </div>
       </div>
    </div>
      <div className="secondPart">
          <div className="statistics traffic">
            <h3>Traffic</h3>
            <div className="alignTraffic"><span>813 Linkedin</span><span>64%</span></div><TrafficInfo done="64" color="#0088FE"/>
            <div className="alignTraffic"><span>323 Behance</span><span>74%</span></div><TrafficInfo done="74" color="#00C49F"/>
            <div className="alignTraffic"><span>927 Instagram</span><span>80%</span></div><TrafficInfo done="80" color="#FFBB28"/>
            <div className="alignTraffic"><span>717 Dribble</span><span>88%</span></div><TrafficInfo done="88" color="#FF8042"/>
          </div>
          <div className="statistics involvement">
           <h3>Involvement</h3>
           <h4>2.2628</h4>
           <div>26 April 2019</div>
           <InvolvementInfoChart/>
            </div>
          <div className="statistics trafficSources">
            <h3>Traffic sources</h3>
            <TrafficSourceChart/>
          </div>
      </div>
    </div>
    );
}

export default StatisticsInfo;
