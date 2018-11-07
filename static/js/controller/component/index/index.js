import React from 'react';

import Dispatch from '../../dispatch'
import Common from '../common/common';
import Swiper from 'react-id-swiper';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.swiper = null
  }
  goNext() {
    if (this.swiper) this.swiper.slideNext()
  }
 
  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
  }
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };
    return (
      <Common {...this.props}>
        <Swiper {...params }>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Swiper>
        <button onClick={this.goNext}>Next</button>
        <button onClick={this.goPrev}>Prev</button>
        <a href="#/demo" className="btn btn-primary">查看demo</a>
      </Common>
    )
  }
}

export default Dispatch(Index);