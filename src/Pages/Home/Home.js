import React from 'react'
import Feature from '../Homepages/Feature/Feature'
import { Data } from '../../DummyData';
import Chart from '../Homepages/Chart/Chart';
import SmallBox from '../Homepages/SmallBox/SmallBox';
import LargeBox from '../Homepages/LargeBox/LargeBox';
import "./Home.css";
const Home = () => {
    return (
      <div className="home">
      <Feature />
      <Chart
        data={Data}
        title="User Analytics"
        grid
        datakey="User"
      />
      <div className="homeWidgets ">
        <SmallBox />
        <LargeBox />
      </div>
    </div>
    )
}

export default Home
