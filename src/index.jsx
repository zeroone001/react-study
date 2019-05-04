import React from 'react';
import ReactDom from 'react-dom';

import Header from './app/header.jsx';
import Content from './app/content.jsx';

ReactDom.render(
   <div>
       <Header />
       <Content />
   </div>, 
   document.querySelector('#app')
);