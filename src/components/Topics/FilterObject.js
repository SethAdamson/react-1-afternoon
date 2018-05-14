import React, { Component } from 'react';

export default class Objectas extends Component {
 constructor (){
   super();

   this.state = {
     ballers: [
       {
         name: 'Gary Cooper',
         nickname: 'Cooper CO',
         age: 55,
       },
       {
         name: 'Steph Curry',
         nickname: 'Chef Curry',
         age: 30,
       },
       {
         name: 'John Fonua',
         title: 'CEO',
       }
     ],
     userInput: '',
     filterBallers: []
   }
 }
BallerList(val) {
 this.setState({ userInput: val }); 
}

filterBallers(prop) {
   var ballers = this.state.ballers;
   var arr = [];

   for (var i =0; i<ballers.length; i++ ) {
     if (ballers[i].hasOwnProperty(prop) ) {
       arr.push(ballers[i]);
     }
   }
   this.setState({filterBallers: arr })
}

 render() {
   return (
     <div className="puzzleBox filterObjectPB">
       <h4> Filter Object </h4>
       <span className="puzzleText"> Original: { JSON.stringify(this.state.ballers, null, 10) } </span>
       <input className="inputLine" onChange={ (e) => this.BallerList(e.target.value) }></input>
       <button className="confirmationButton" onClick={ () => this.filterBallers(this.state.userInput) }> Filter </button>
       <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredBallers, null, 10) } </span>
     </div>
     
   )
 }
}