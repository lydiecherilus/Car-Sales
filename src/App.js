
import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { buyItem, removeFeature, newTotal } from './reducers/reducerElement';


const App = (props) => {

  // dispatch an action here to remove an item
  const removeFeature = item => {
    props.removeFeature(item)
    props.newTotal(-item.price)
  };

  // dipsatch an action here to add an item
  const buyItem = item => {
    props.buyItem(item)
    props.newTotal(+item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additonalPrice} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} additionalFeatures={props.additionalFeatures} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={props.buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};
export default connect(mapStateToProps, { buyItem, removeFeature, newTotal })(App);