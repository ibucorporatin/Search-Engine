import React from "react";

class Searchinput extends React.Component {
   constructor(props){
    super(props)
    this.state={
      entry:"Welcome"
    }
   }
 SubmitEvent =(e)=>{
  e.preventDefault()
  this.props.onSearchSubmit(this.state.entry)
 }

    render() { 
        return (<div className="ui segment ">
     
      <form className="ui form" action="" onSubmit={this.SubmitEvent}> 
        <div className="field">
<div className="ui massive icon input">
<input type="text" placeholder="Image Search Engine ,Search here.. " onChange={(e)=>this.setState({entry:e.target.value})}
  value={this.state.entry}
 />
<i className="search icon"></i>
</div>
        </div>

      </form>
        </div>);
    }
}
 
export default Searchinput  ;

// function MyForm() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${name}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input 
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }

// export default MyForm ;