import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/main.css';
import dog from './common/img/img.jpg';
import img2 from './common/img/img2.gif';

console.log(dog);
ReactDOM.render(<div>
    <img src={dog} alt=""/>
    <img src={img2} alt=""/>
    <img src={require('./common/img/img3.JPG')} alt=""/>
    React</div>,document.getElementById('root'));