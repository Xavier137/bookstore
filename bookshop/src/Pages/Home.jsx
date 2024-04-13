import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='row1'>
        <h1>Welcome to EAC Books Library</h1>
        <p>Engage yourself by exploring the EAC local languages.</p>
        <p>The East African Community (EAC) was established in 1967 as a result of a treaty between Kenya, Tanzania, and Uganda.</p>
        <p>The EAC aims at widening and deepening cooperation among the partner states and other regional economic communities in political, economic, and social fields for their mutual benefit. The EAC is a potential precursor to the establishment of the East African Federation, a proposed federation of its members into a single sovereign state. In 2010, the EAC launched its own common market for goods, labour, and capital within the region, with the goal of creating a common currency and eventually a full political federation.</p>
      </div>
      <div className='row2'>
        <img src='https://images.pexels.com/photos/415078/pexels-photo-415078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Petals of Blood'/>
      </div>
      <div className='container'>
        {/* Footer */}
        <footer>
          <h2>Related Searches</h2>
          <ul>
            <li>EAC literature</li>
            <li>East African fiction</li>
            <li>African literature</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Home;
