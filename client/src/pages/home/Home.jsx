import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PostCards from '../blogs/PostCards';

const Home = () => {
  return (
    <div className="">
      <Banner/>

      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        {/* post cards */}
        <PostCards/>

        {/* right sidebar */}
        <Category/>

      </div>
    </div>
  );
};

export default Home;
