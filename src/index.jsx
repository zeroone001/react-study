// import React from 'react';
import ReactDom from 'react-dom';

import Header from './app/header.jsx';
import Content from './app/content.jsx';
require('./base.scss');

ReactDom.render(
   <div>
       <Header />
       <Content />
   </div>, 
   document.querySelector('#app')
);