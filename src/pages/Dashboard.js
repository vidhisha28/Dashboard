import React from 'react';
import Header from '../components/Header';
import SecondHeader from '../components/SecondHeader';
import Graph from '../components/Graph';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Header/>
      <SecondHeader/>
      <Graph />
      <Footer/>
    </div>
  )
}

export default Dashboard;