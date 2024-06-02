"use client"

import React from 'react';
import { useState } from 'react';
import Dropdown from './Dropdown';

export default function ShoutoutForm({ handleClickShoutout }) {
  return (
    <>
        {/* Form Modal */}
            <form action="" className="bg-white rounded-xl h-80 w-96 place-self-center flex flex-col justify-evenly px-8">
                <div className="flex place-self-center">
                  <label htmlFor="" className="place-self-center mr-2">Shoutout to:</label>
                  <Dropdown/>
                </div>
                <div className="flex-col flex">
                  <label htmlFor="">I want to say...</label>
                  <textarea className="border h-24" />
                </div>
                <div className="flex place-self-center">
                  <label htmlFor="" className="place-self-center mr-2">From:</label>
                  <Dropdown/>
                </div>
                <div className="flex justify-center">
                  <button type="reset" className="mx-4 px-4 py-1 rounded-md border border-[--secondary-orange] text-[--secondary-orange] hover:bg-[--secondary-orange] hover:text-white" onClick={handleClickShoutout}>Cancel</button>
                  <button type="submit" className="mx-4 px-4 py-1 rounded-md border border-transparent bg-[--olive] text-white hover:border-[--olive] hover:bg-[--primary-red]">Post</button>
                </div>
            </form>
    </>
  );
}
