import React, { Component, } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "./Movies.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MoviesList from "./MoviesList.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  useSelector } from 'react-redux'
 class Responsive extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
   // let navigate=useNavigate();
    let goNext=(id)=>{
      console.log(id)
      this.props.navigate(`/MoviesPage?id=${id}`);
    }
   let searchVal=this.props.ee;
   let res;
   let searchedList=MoviesList.filter((e)=>{
    
    if(res =e.name.toLowerCase().startsWith(searchVal))
    {
     
      return e
    }
    else{
      console.log("absent");
     return null
    }
   })
   console.log(searchedList);
  
    return (
      <div className="recom-movies">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          <h2 className="title" > Recommended Movies </h2>
          <Slider {...settings}></Slider>
          <div className="movies-box-row">
            {searchedList.map((ml,index) => {
              return ( 
               
                <div className="box" key={index}>
                  <div className="img-box" onClick={()=>{goNext(ml.id)}} >
                    <img src={ml.src} alt="movies" />
                  </div>
                 
                  <div className="name-genre">
                    <h3 className="name">{ml.name}</h3>
                    <p className="genre">{ml.genre}</p>
                  </div>
                </div>
                
              );
            })}
            </div>
          
          {/* -----------slider-end---------------- */}
          <div className="stream-movie">
            <img
              src={
                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
              }
            />
          </div>
        </Container>
      </div>
    );
  }
}



const Movies = (props) => {
  const navigate=useNavigate();
 let ee=props.dataFromNav;
 console.log(ee);
  let search=(data)=>{
    return data;
  }

  return (
    <div><Responsive navigate={navigate} ee={ee}/></div>
  )
}

export default Movies