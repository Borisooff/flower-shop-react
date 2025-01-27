import React from 'react';
import { Link } from 'react-router-dom';

import './page404.scss';

const Page404 = () => {
  return (
    <div className='page404'>
      <div className="page404__errorMessage">
        <img src="/assets/error/error-icon.svg" alt="error" />
        This page does not exist
      </div>
      <Link to='/'
        className="page404__link">
        Back to main page
      </Link>
    </div>
  )
}

export default Page404; 