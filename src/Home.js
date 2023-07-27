import React from 'react'
import HomeCards from './components/HomeCards';
import HomeData from './Hdata/HomeData';
import './home.css';
import FeaturedMoviesPage from './components/Featuredshow';

const Home = () => {
  return(
   <>
   <FeaturedMoviesPage/>
   <hr  />
    {
        HomeData.map((val)=>{
            return(
                <HomeCards
                    key={val.id}
                    title={val.title}
                    para={val.para}
                    imgsrc={val.imgsrc} 
                />
            );
           
        })
    }
   
   </>
  )

   
}

export default Home