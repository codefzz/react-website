import React from 'react'
import cleaning from '../../assets/cleaning.png'
import repair from '../../assets/repair.png'
import paint from '../../assets/paint.png'
import moving from '../../assets/moving.png'
import plumbing from '../../assets/plumbing.png'
import electric from '../../assets/electric.png'
import Categorylist from '../Layout/CategoryList'
import { Route, Link, useParams } from 'react-router-dom'


function Categories() { 
  
  const { serviceId } = useParams()
  const catg = [
    {
      icon: cleaning,
      title: "Cleaning"
    },
    {
      icon: repair,
      title: "Repair"
    },{
      icon: paint,
      title: "Paint"
    },{
      icon: moving,
      title: "Moving"
    },{
      icon: plumbing,
      title: "Plumbing"
    },{
      icon: electric,
      title: "Electric"
    },
];


  
  
  return (
    <>
      <div className="">
        <h1> SERVICE: {serviceId.title} </h1>
        <img src={serviceId.icon} alt="" />
      </div>
    </>
  )

};


export default Categories




/*

const cat = [
    {
      icon: cleaning,
      title: "Cleaning"
    },
    {
      icon: repair,
      title: "Repair"
    },{
      icon: paint,
      title: "Paint"
    },{
      icon: moving,
      title: "Moving"
    },{
      icon: plumbing,
      title: "Plumbing"
    },{
      icon: electric,
      title: "Electric"
    },
  ];
  */
