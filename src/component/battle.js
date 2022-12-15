import React from "react";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";

import Header from "./header";


//function component uses

function Battle(){
    
    



}


//class component uses
// class Battle extends React.Component {
//     constructor(props) {
//         super()
//         this.state = ({
//             data1: "",
//             data2: "",
//             first: "",
//             second: "",
//             display: true,
//         })
//     }

//     handleclick1 = (event) => {
//         event.preventDefault()
//         fetch(`https://api.github.com/users/${this.state.first}`).then((res) => res.json()).then((data) => this.setState({ data1: data }))

//     }
//     handleclick2 = (event) => {
//         event.preventDefault()
//         fetch(`https://api.github.com/users/${this.state.second}`).then((res) => res.json()).then((data) => this.setState({ data2: data }))

//     }
//     handlechange = ({ target }) => {
//         let { name, value } = target
//         this.setState({ [name]: value })
//     }

//     handledelete1 = () => {
//         this.setState({
//             data1: "",
//             first: "",
//         })
//     }
//     handledelete2 = () => {
//         this.setState({
//             data2: "",
//             second: "",
//         })
//     }

//     handlebattle = () => {
//         this.setState({
//             display: false,
//         })
//     }

//     render() {
//         return (
//             <>
//                 <Header />
//                 {
//                     this.state.display ?
//                         <div>
//                             <h4>Instruction</h4>
//                             <div className="instruction">
//                                 <div className="insticon">
//                                     <h6>Enter Two Github Users</h6>
//                                     <i class="fas fa-user-friends"></i>
//                                 </div>
//                                 <div className="insticon">
//                                     <h6>Battle</h6>
//                                     <i class="fas fa-fighter-jet"></i>
//                                 </div>
//                                 <div className="insticon">
//                                     <h6>See the Winner</h6>
//                                     <i class="fas fa-trophy"></i>
//                                 </div>

//                             </div>
//                             <h5>Players</h5>
//                             <div className="playerentry">
//                                 {
//                                     this.state.data1 === "" ?
//                                         <form >
//                                             <p className="player">Player One</p>
//                                             <input type="text" placeholder="Github Username " name="first" id="first" onChange={this.handlechange} value={this.state.first} />
//                                             <button className="submitbtn" onClick={(event) => { this.handleclick1(event) }} type="submit">SUBMIT</button>
//                                         </form>
//                                         :
//                                         <div className="entryimage" >
//                                             <img className="playerimg" src={this.state.data1.avatar_url}></img>
//                                             <button onClick={this.handledelete1} >❌</button>
//                                         </div>

//                                 }
//                                 {
//                                     this.state.data2 === "" ?
//                                         <form>
//                                             <p className="player">Player Two</p>
//                                             <input type="text" placeholder="Github Username " name="second" id="second" onChange={this.handlechange} value={this.state.second} />
//                                             <button className="submitbtn" onClick={(event) => { this.handleclick2(event) }} type="submit">SUBMIT</button>

//                                         </form>
//                                         :
//                                         <div className="entryimage">
//                                             <img className="playerimg" src={this.state.data2.avatar_url}></img>
//                                             <button onClick={this.handledelete2}>❌</button>
//                                         </div>

//                                 }
//                             </div>
//                             <div className="battlebtnblock">
//                                 {
//                                     this.state.data1 && this.state.data2 ?
//                                         <dv >
//                                             <button className="battlebtn" onClick={this.handlebattle} type="submit">Battle</button>
//                                         </dv>
//                                         : ""
//                                 }
//                             </div>
//                         </div>
//                         :
//                         <div>
//                             <div className="userdetail">
//                                 <div className="userprofile">
//                                     <div className="userpro">
//                                         {
//                                             this.state.data1.public_repos > this.state.data2.public_repos ? <small>Winner😇</small> : <small>Looser😞</small>
//                                         }
//                                         <figure>
//                                             <img src={this.state.data1.avatar_url}></img>
//                                         </figure>
//                                         <p className="score">Score:{this.state.data1.public_repos * 2}</p>
//                                         <h3>{this.state.data1.name}</h3>
//                                     </div>

//                                     <div className="langfeature">
//                                         <p className="number"><i class="fas fa-user"></i>{this.state.data1.name}</p>

//                                         <p className="number"><i class="fas fa-users"></i>{this.state.data1.followers}<small className="numbersmall">followers</small></p>
//                                         <p className="number"><i class="fas fa-user-plus"></i>{this.state.data1.following}<small className="numbersmall">following</small></p>
//                                         <p className="number"><i class="fas fa-code"></i>{this.state.data1.public_repos}<small className="numbersmall">repositories</small></p>
//                                     </div>

//                                 </div>
//                                 <div className="userprofile">
//                                     <div className="userpro">
//                                         {
//                                             this.state.data1.public_repos > this.state.data2.public_repos ? <small>Looser😞</small> : <small>Winner😇</small>
//                                         }
//                                         <figure>
//                                             <img src={this.state.data2.avatar_url}></img>
//                                         </figure>
//                                         <p className="score">Score:{this.state.data2.public_repos * 2}</p>
//                                         <h3>{this.state.data2.name}</h3>
//                                     </div>

//                                     <div className="langfeature">
//                                         <p className="number"><i class="fas fa-user"></i>{this.state.data2.name}</p>

//                                         <p className="number"><i class="fas fa-users"></i>{this.state.data2.followers}<small className="numbersmall">followers</small></p>
//                                         <p className="number"><i class="fas fa-user-plus"></i>{this.state.data2.following}<small className="numbersmall">following</small></p>
//                                         < p className="number"><i class="fas fa-code"></i>{this.state.data2.public_repos}<small className="numbersmall">repositories</small></p>
//                                     </div>

//                                 </div>

//                             </div>
//                             <div className="resetbtnblock nav">
//                                 <NavLink to='/' exact
//                                  className="battlebtn">Reset</NavLink>
//                             </div>

//                         </div>


//                 }

//             </>
//         )
//     }
// }

export default Battle