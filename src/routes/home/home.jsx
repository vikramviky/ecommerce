import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory';
import shirts from '../../images/shirts.jpeg';
import jackets from '../../images/jackets.jpeg';
import Sneakers from '../../images/Sneakers.jpeg';
import womens from '../../images/womens.jpeg';
import mens from '../../images/mens.jpeg';
import kids from '../../images/kids.jpeg';

const Home = () => {
    const categories = [
        {
          id: 1,
          title: 'Mens',
          img_url:mens
        },
        {
          id: 2,
          title: 'Womens',
          img_url:womens
        },
        {
          id: 3,
          title: 'Kids',
          img_url:kids
        },
        {
          id: 4,
          title: 'Sneakers',
          img_url:Sneakers
        },
        {
          id: 5,
          title: 'Jackets',
          img_url:jackets
        },
        {
          id: 6,
          title: 'Shirts',
          img_url:shirts
        },
      ];
  return (
        <div>
            <Outlet/>
            <Directory categories={categories} />
        </div>
        );
};

export default Home;