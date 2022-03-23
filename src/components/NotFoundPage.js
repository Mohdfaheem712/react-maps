import React from 'react'
import Banner404 from './404.png';

export default function NotFoundPage(props) {
    return (
      <div className="container">
        <h1 className="text-center my-3"> This page could not be found</h1>
        <img src={Banner404} className='img-thumbnail center-404' alt="react-boilerplate - Logo" />
      </div>
      );
}