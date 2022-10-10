import React from 'react';

const Navebar = () => {
    return (
       <nav className='ui raisedvery padded segment'>
        <a href="/" className='ui teal inverted segment' > image search engine </a>
        <div className='ui right floated header' >
          
            <a href="/"><button className='ui button'>Home</button></a>
            <a href="/about"><button className='ui button'>About us</button></a>
            <a href="/contact"><button className='ui button'>Contact us</button></a>
        </div>
       </nav>
    );
}

export default Navebar;
