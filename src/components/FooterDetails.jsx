import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import myContext from '../context/RecipeContext';
import style from '../Details.module.css';

function FooterDetails() {
  const location = useLocation();
  const myId = location.pathname.split('/')[2];
  const { recipe } = useContext(myContext);

  console.log(recipe);
  return (
    <Link
      to={ recipe[0].strMeal ? `/foods/${myId}/in-progress`
        : `/drinks/${myId}/in-progress` }
    >
      <button
        data-testid="start-recipe-btn"
        type="button"
        className={ style.footer }
      >
        Start Recipe
      </button>
    </Link>
  );
}

export default FooterDetails;
