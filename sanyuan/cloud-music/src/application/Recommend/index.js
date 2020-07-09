
import React from 'react';
import Slider from '../../components/slider'


function Recommend(props){
  //mock数据
  const bannerList=[1,2,3,4].map(item =>{
    return {
      imageUrl:"http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
    }
  })
  // / =>  HOME
  // console.log(props)  react props如果在router 之中，
  // 那么他会包含history, location route(当前route.routes)
  // const { route } = props;
  return (
    <div>
        <Slider bannerList={bannerList}></Slider>
    </div>
  );
}
 
export default React.memo(Recommend);