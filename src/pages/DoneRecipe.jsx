import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function DoneRecipe() {
  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Done Recipes</h2>
      </header>
    </div>
  );
}

export default DoneRecipe;
