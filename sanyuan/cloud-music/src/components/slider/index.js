import React,{useEffect,useState} from 'react';
import {SliderContainer} from '/style'
import "swiper/css/swiper.css"
import Swiper from 'swiper'

function Slider(props){
    const [sliderSwiper,setSliderSwiper]=useState(null);
    const {bannerList} = props;

    useEffect(()=>{
        if(bannerList.length && !sliderSwiper){
            let newSliderSwiper=new Swiper(".slider-container",{
                loop:true,
                autoplay:{
                    delay:3000,
                    disableOnInteraction:false,
                },
                pagination:{el:'.swiper-pagination'}
            }
            )
        
    })
}