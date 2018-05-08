import React, { Component } from 'react';
import Slide from './Slide';
import axios from 'axios';
import * as SliderAPI from './SliderAPI';

//--- css ---
import './css/sao-slider.css';

class Slider extends Component {

  constructor(...args) {
    super(...args);
    this.state = {
      slides: []
    }
  }

  componentDidMount() {
    axios.get('http://5aec5027f67ff700145106a0.mockapi.io/api/v1/slides').then(
        response=>this.setState({slides:Object.values(response.data)}),
        error => console.log(error)
    );
}

  render() {
    const slides = this.state.slides;
    return (
      <div id="rev_slider_7_1" className="rev_slider fullscreenbanner" data-version="5.4.6.3.1">
        <ul>
          {
            slides.map((slide, i) => <Slide imgUrl={slide.img_url} key={slide.id}/>)
          }
        </ul>
      </div>
    );
  }
}

export default Slider;
