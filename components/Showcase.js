import React from "react";
import Nav from '../components/Nav'

<link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" /></link>

function Showcase() {
  return (
    <div class="text-white font-bold bg-center bg-cover bg-no-repeat h-screen bg-hero-pattern">
        {/* INFO: Showcase  */}
        <div class="items-center hidden md:flex pt-4 pl-6">
          <img className="h-16 w-24" src="../img/logo.svg" alt="logo"/>
          <h1>Junkify</h1>
        </div>
        <div class="flex">
          <div class="md:w-1/2 pt-10 md:flex hidden pl-6">

          </div>
          <Nav class="shadow-xl"></Nav>
        </div>
{/* INFO: Showcase Text */}
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-6xl mt-40">The Eath is what we all have in common</h1>
          <button class="bg-black bg-opacity-60 rounded-xl shadow-xl py-4 px-12 mt-10 font-bold tracking-wide">Learn more</button>
          <img src="../img/down-arrow.svg" class="h-12 w-12 mt-72" alt="" />
        </div>>
    </div>
  );
}

export default Showcase;