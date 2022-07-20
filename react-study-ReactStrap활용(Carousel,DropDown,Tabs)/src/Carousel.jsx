import React, { Component } from "react";
import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.css';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1658239828542-daa29a4cd472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    altText: '이미지1의 대체글',
    caption: '슬라이드1 설명',
    header: '슬라이드1 제목'
  },
  {
    src: 'https://images.unsplash.com/photo-1657664042482-a6e53c1b03a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    altText: '이미지2의 대체글',
    caption: '슬라이드2 설명',
    header: '슬라이드2 제목'
  },
  {
    src: 'https://images.unsplash.com/photo-1658237783204-1107c10b7145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    altText: '이미지3의 대체글',
    caption: '슬라이드3 설명',
    header: '슬라이드3 제목'
  },
]


class ReactCarousel extends Component {
  render() {
    return (
      <div>
        < UncontrolledCarousel items={items} />
      </div>
    )
  }
}

export default ReactCarousel;