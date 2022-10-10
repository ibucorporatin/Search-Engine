import React from 'react';
import Searchinput from './SearchInput';
import axios from 'axios';
import Images from './Images';
let a;
class Home extends React.Component {
   constructor(props){
    super(props)
    this.state={
        Images:[],
        new:true
    }
    this.onSearchSubmit=this.onSearchSubmit.bind(this)
   }

    async onSearchSubmit(e){
       
   const response= await axios.get(`https://pixabay.com/api/?key=30485819-44357b34bdd1f15e9422cdc7d&q=${e}&image_type=photo`);
    this.setState({
        Images:response.data.hits,new:false
    })
   
   
    
 }
    render() {
  if(!this.state.new){
    const images=this.state.Images; 
    a= images.map((img)=>{
return <Images key={img.id} src={img.largeImageURL} />
        })
        console.log(a)
        console.log(this.state.Images)
  }

        return (
          <>     
            <div className='ui container' style={{marginTop:"30px"}} ><Searchinput  onSearchSubmit={this.onSearchSubmit}/> </div>
        <div>{a}</div>
        </>
      
         );

    }
}
 
export default Home;