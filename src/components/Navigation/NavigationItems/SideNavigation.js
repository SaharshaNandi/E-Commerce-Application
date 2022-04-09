import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterProducts } from '../../../store/actions';
import '../Navigation.scss';

import NavigationItem from './NavigationItem';

const femaleCategories = [
  {
    category: 'female',
    content: "Women's Apparel",
    linkType: 'main'
  },
  {
    category: 'women-coats',
    content: 'Coats',
    linkType: 'sub'
  },
  {
    category: 'women-jackets',
    content: 'Jackets',
    linkType: 'sub'
  },
  {
    category: 'women-suits',
    content: 'Suits',
    linkType: 'sub'
  },
  {
    category: 'women-shirts',
    content: 'Shirts',
    linkType: 'sub'
  },
  {
    category: 'women-t-shirts',
    content: 'T-shirts',
    linkType: 'sub'
  },
  {
    category: 'women-shoes',
    content: 'Shoes',
    linkType: 'sub'
  },
  {
    category: 'women-hats',
    content: 'Hats',
    linkType: 'sub'
  },
  {
    category: 'male',
    content: "Men's Apparel",
    linkType: 'main'
  },
  {
    category: 'men-coats',
    content: 'Coats',
    linkType: 'sub'
  },
  {
    category: 'men-jackets',
    content: 'Jackets',
    linkType: 'sub'
  },
  {
    category: 'men-suits',
    content: 'Suits',
    linkType: 'sub'
  },
  {
    category: 'men-shirts',
    content: 'Shirts',
    linkType: 'sub'
  },
  {
    category: 'men-t-shirts',
    content: 'T-shirts',
    linkType: 'sub'
  },
  {
    category: 'men-shoes',
    content: 'Shoes',
    linkType: 'sub'
  },
  {
    category: 'men-hats',
    content: 'Hats',
    linkType: 'sub'
  },
];

const sideNavigation = ({ filterProducts, children }) => (
  <nav className="side-navigation">
    <ul className="side-navigation-list">
      {femaleCategories.map(femaleCategory => {
        const { category, linkType, content } = femaleCategory;

        return (
          <NavigationItem
            key={category}
            clicked={() => filterProducts(category)}
            linkType={linkType}
            link={`/productlist/${category}`}>
            {content}
          </NavigationItem>
        )
      })}
      {children}
    </ul>
  </nav>
);

sideNavigation.propTypes = {
  filterProducts: PropTypes.func.isRequired
};

export default connect(null, { filterProducts })(sideNavigation);