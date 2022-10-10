import React, { Component } from 'react'

 class Images extends Component {
  render() {
    return (
      <div style={{width:"100%",textAlign:"center"}} ><img style={{width:"50%"}} src={this.props.src} alt="" /></div>
    )
  }
}

export default Images