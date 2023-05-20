import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./header";


//function component uses

// function Battle(){


// Using Function component and Hooks
// function Battle() {
//     let [name, setName] = useState("");
//     let [name2, setName2] = useState("");
//     let [userdata, setUserdata] = useState("");
//     let [userdata2, setUserdata2] = useState("");
//     let [isBattle, setIsbattle] = useState(false);
//     function handleChange(e) {
//       setName(e.target.value);
//     }
//     function handleChange2(e) {
//       setName2(e.target.value);
//     }
//     function handleremove() {
//       setUserdata("");
//       setName("");
//     }
//     function handleremove2() {
//       setUserdata2("");
//       setName2("");
//     }
//     function handleClick(event) {
//       event.preventDefault();
//       fetch(`https://api.github.com/users/${name}`)
//         .then((res) => res.json())
//         .then((data) => setUserdata(data));
//     }
//     function handleClick2(event) {
//       event.preventDefault();
//       fetch(`https://api.github.com/users/${name2}`)
//         .then((res) => res.json())
//         .then((data) => setUserdata2(data));
//     }
//     function handlebattle() {
//       setIsbattle(true);
//       console.log("click me");
//     }
//     function handleReset() {
//       setIsbattle(false);
//       console.log("click me");
//       setUserdata("");
//       setName("");
//       setUserdata2("");
//       setName2("");
//     }
//     return (
//       <>
//         <Header />
//         {isBattle === false ? (
//           <div>
//             <div className="battle">
//               <small className="instruction">Instructions</small>
//               <div className="battle-info">
//                 <div className="title">
//                   <p className="titles">Enter two Github users</p>
//                   <i class="fas fa-user-friends"></i>
//                 </div>
//                 <div className="title">
//                   <p className="titles">Battle</p>
//                   <i class="fas fa-fighter-jet"></i>
//                 </div>
//                 <div className="title">
//                   <p className="titles">See the winner</p>
//                   <i class="fas fa-trophy"></i>
//                 </div>
//               </div>
//             </div>
//             <div className="form">
//               <p className="title-2">Players</p>
//               <form>
//                 <p>First Player</p>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Github user name"
//                   onChange={handleChange}
//                   value={name}
//                 />
//                 <button className="btn-2" type="submit" onClick={handleClick}>
//                   Submit
//                 </button>
//               </form>
//               {userdata === "" ? (
//                 ""
//               ) : (
//                 <div className="user">
//                   <img src={userdata.avatar_url} alt="img" className="user-img" />
//                   <button className="btn-5" onClick={handleremove}>
//                     X
//                   </button>
//                 </div>
//               )}
//               <form>
//                 <p>Second Player</p>
//                 <input
//                   type="text"
//                   name="name2"
//                   placeholder="Github user name"
//                   onChange={handleChange2}
//                   value={name2}
//                 />
//                 <button className="btn-2" onClick={handleClick2} type="submit">
//                   Submit
//                 </button>
//               </form>
//               {userdata2 === "" ? (
//                 ""
//               ) : (
//                 <div className="user-1">
//                   <img
//                     src={userdata2.avatar_url}
//                     alt="img"
//                     className="user-img"
//                   />
//                   <button className="btn-5" onClick={handleremove2}>
//                     X
//                   </button>
//                 </div>
//               )}
//               {userdata && userdata2 ? (
//                 <button className="bttle-btn" onClick={handlebattle}>
//                   {" "}
//                   Battle
//                 </button>
//               ) : (
//                 ""
//               )}
//             </div>
//           </div>
//         ) : (
//           <div className="profiles">
//             <div className="user-profile">
//               <div className="info">
//                 <p className="tag">
//                   {userdata.public_repos > userdata2.public_repos
//                     ? "Winner"
//                     : "Looser"}
//                 </p>
//                 <img src={userdata.avatar_url} alt="img" />
//                 <p className="score"> Score :{userdata.public_repos * 2} </p>
//                 <p className="name">{userdata.name} </p>
//               </div>
//               <div className="icons">
//                 <p className="repo-names">
//                   {" "}
//                   <i class="fas fa-user"></i> {userdata.name}{" "}
//                 </p>
//                 <p className="names">
//                   <i class="fas fa-users"></i> {userdata.followers} followers
//                 </p>
//                 <p className="names">
//                   <i class="fas fa-user-alt"></i> {userdata.following} following
//                 </p>
//                 <p className="names">
//                   {" "}
//                   <i class="fas fa-code"></i> {userdata.public_repos} repositories
//                 </p>
//               </div>
//             </div>
//             <div className="user-profile">
//               <div className="info">
//                 <p className="tag">
//                   {userdata2.public_repos > userdata.public_repos
//                     ? "Winner"
//                     : "Looser"}
//                 </p>
//                 <img src={userdata2.avatar_url} alt="img" />
//                 <p className="score"> Score :{userdata2.public_repos * 2} </p>
//                 <p className="name">{userdata2.name} </p>
//               </div>
//               <div className="icons">
//                 <p className="repo-names">
//                   <i class="fas fa-user"></i> {userdata2.name}{" "}
//                 </p>
//                 <p className="names">
//                   {" "}
//                   <i class="fas fa-users"></i> {userdata2.followers} followers
//                 </p>
//                 <p className="names">
//                   {" "}
//                   <i class="fas fa-user-alt"></i> {userdata2.following} following
//                 </p>
//                 <p className="names">
//                   {" "}
//                   <i class="fas fa-code"></i> {userdata2.public_repos}{" "}
//                   repositories
//                 </p>
//               </div>
//             </div>
//             <button onClick={handleReset} className="reset">
//               Reset
//             </button>
//           </div>
//         )}
//       </>
//     );
//   }






// }


//class component uses
class Battle extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            data1: "",
            data2: "",
            first: "",
            second: "",
            display: true,
        })
    }

    handleclick1 = (event) => {
        event.preventDefault()
        fetch(`https://api.github.com/users/${this.state.first}`).then((res) => res.json()).then((data) => this.setState({ data1: data }))

    }
    handleclick2 = (event) => {
        event.preventDefault()
        fetch(`https://api.github.com/users/${this.state.second}`).then((res) => res.json()).then((data) => this.setState({ data2: data }))

    }
    handlechange = ({ target }) => {
        let { name, value } = target
        this.setState({ [name]: value })
    }

    handledelete1 = () => {
        this.setState({
            data1: "",
            first: "",
        })
    }
    handledelete2 = () => {
        this.setState({
            data2: "",
            second: "",
        })
    }

    handlebattle = () => {
        this.setState({
            display: false,
        })
    }

    render() {
        return (
            <>
                <Header />
                {
                    this.state.display ?
                        <div>
                            <h4>Instruction</h4>
                            <div className="instruction">
                                <div className="insticon">
                                    <h6>Enter Two Github Users</h6>
                                    <i class="fas fa-user-friends"></i>
                                </div>
                                <div className="insticon">
                                    <h6>Battle</h6>
                                    <i class="fas fa-fighter-jet"></i>
                                </div>
                                <div className="insticon">
                                    <h6>See the Winner</h6>
                                    <i class="fas fa-trophy"></i>
                                </div>

                            </div>
                            <h5>Players</h5>
                            <div className="playerentry">
                                {
                                    this.state.data1 === "" ?
                                        <form >
                                            <p className="player">Player One</p>
                                            <input type="text" placeholder="Github Username " name="first" id="first" onChange={this.handlechange} value={this.state.first} />
                                            <button className="submitbtn" onClick={(event) => { this.handleclick1(event) }} type="submit">SUBMIT</button>
                                        </form>
                                        :
                                        <div className="entryimage" >
                                            <img className="playerimg" src={this.state.data1.avatar_url}></img>
                                            <button onClick={this.handledelete1} >❌</button>
                                        </div>

                                }
                                {
                                    this.state.data2 === "" ?
                                        <form>
                                            <p className="player">Player Two</p>
                                            <input type="text" placeholder="Github Username " name="second" id="second" onChange={this.handlechange} value={this.state.second} />
                                            <button className="submitbtn" onClick={(event) => { this.handleclick2(event) }} type="submit">SUBMIT</button>

                                        </form>
                                        :
                                        <div className="entryimage">
                                            <img className="playerimg" src={this.state.data2.avatar_url}></img>
                                            <button onClick={this.handledelete2}>❌</button>
                                        </div>

                                }
                            </div>
                            <div className="battlebtnblock">
                                {
                                    this.state.data1 && this.state.data2 ?
                                        <dv >
                                            <button className="battlebtn" onClick={this.handlebattle} type="submit">Battle</button>
                                        </dv>
                                        : ""
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <div className="userdetail">
                                <div className="userprofile">
                                    <div className="userpro">
                                        {
                                            this.state.data1.public_repos > this.state.data2.public_repos ? <small>Winner😇</small> : <small>Looser😞</small>
                                        }
                                        <figure>
                                            <img src={this.state.data1.avatar_url}></img>
                                        </figure>
                                        <p className="score">Score:{this.state.data1.public_repos * 2}</p>
                                        <h3>{this.state.data1.name}</h3>
                                    </div>

                                    <div className="langfeature">
                                        <p className="number"><i class="fas fa-user"></i>{this.state.data1.name}</p>

                                        <p className="number"><i class="fas fa-users"></i>{this.state.data1.followers}<small className="numbersmall">followers</small></p>
                                        <p className="number"><i class="fas fa-user-plus"></i>{this.state.data1.following}<small className="numbersmall">following</small></p>
                                        <p className="number"><i class="fas fa-code"></i>{this.state.data1.public_repos}<small className="numbersmall">repositories</small></p>
                                    </div>

                                </div>
                                <div className="userprofile">
                                    <div className="userpro">
                                        {
                                            this.state.data1.public_repos > this.state.data2.public_repos ? <small>Looser😞</small> : <small>Winner😇</small>
                                        }
                                        <figure>
                                            <img src={this.state.data2.avatar_url}></img>
                                        </figure>
                                        <p className="score">Score:{this.state.data2.public_repos * 2}</p>
                                        <h3>{this.state.data2.name}</h3>
                                    </div>

                                    <div className="langfeature">
                                        <p className="number"><i class="fas fa-user"></i>{this.state.data2.name}</p>

                                        <p className="number"><i class="fas fa-users"></i>{this.state.data2.followers}<small className="numbersmall">followers</small></p>
                                        <p className="number"><i class="fas fa-user-plus"></i>{this.state.data2.following}<small className="numbersmall">following</small></p>
                                        < p className="number"><i class="fas fa-code"></i>{this.state.data2.public_repos}<small className="numbersmall">repositories</small></p>
                                    </div>

                                </div>

                            </div>
                            <div className="resetbtnblock nav">
                                <NavLink to='/' exact
                                    className="battlebtn">Reset</NavLink>
                            </div>

                        </div>


                }

            </>
        )
    }
}

export default Battle