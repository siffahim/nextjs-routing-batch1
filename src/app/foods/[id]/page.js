"use client"
import React from 'react'

export default function FoodDetailPage({params: {id}}) {
    //const {id} =  params;
    console.log(id);
 
  return (
    <div>
      <h2>Food details {id}</h2>
    </div>
  )
}
