import React from "react";

//import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./header";


//function method 

function Language() {

    let [data, setdata] = useState([])
    let [value, setvalue] = useState("All")

    useEffect(() => {
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${value}&sort=stars&order=desc&type=Repositories`)
            .then((res) => res.json())
            .then((lang) => setdata(lang.items))
    }, [value])

    function handleclick(ele){
        setvalue(ele)
    }

    return (
        <>
            <Header />
            <div className="btns">
                {
                    ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"].map((btn, i) => {
                        return (
                            <div  >
                                {/* <button className="langbtn" onClick={(event) => { this.handleclick(event) }}>{btn}</button> */}
                                <button key={i} className="langbtn nav" onClick={() => { handleclick(btn) }}  > {btn}</button>
                            </div>
                        )
                    })
                }
            </div>
            {
                data.length === 0 ?(
                <h2>Fetching....</h2>
                )
                    : (
                        <div className="alllang">
                            {

                                data.map((lang, i) => {

                                    return (

                                        <div className="lang">
                                            <div className="headerlang">
                                                <small>#{1 + i}</small>
                                                <figure>
                                                    <img src={lang.owner.avatar_url}></img>
                                                </figure>
                                                <h3>{lang.name}</h3>
                                            </div>
                                            <div className="langfeature">
                                                <p className="name"><i class="fas fa-user"></i>{lang.name}</p>
                                                <p className="number"> <i class="fas fa-star"></i>{lang.stargazers_count}<small className="numbersmall"> stars</small></p>
                                                <p className="number"><i class="fas fa-code-branch"></i>{lang.forks} <small className="numbersmall">forks</small></p>
                                                <p className="number"><i class="fas fa-exclamation-triangle"></i>{lang.open_issues}<small className="numbersmall" >open issues</small></p>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    )
            }




        </>
    )

}



//class method

// class Language extends React.Component {
//     constructor(props) {
//         super()
//         this.state = ({
//             data: null,
//         })
//         // console.log(data)
//     }

//     componentDidMount() {
//         fetch('https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories')
//             .then((res) => res.json())
//             .then((data) => this.setState({ data }))

//         // .then((res)=>res.json())
//         // .then((data)=>{console.log(data) })
//     }

//     handleclick = (event) => {
//         let value = event.target.innerText
//         console.log(value)

//         fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${value}&sort=stars&order=desc&type=Repositories`)
//             .then((res) => res.json())
//             .then((data) => this.setState({ data }))

//         //         .then((res)=>res.json())
//         // .then((data)=>{console.log(data) })

//     }

//     render() {
//         if (!this.state.data) {
//             return (
//                 <>
//                     <h2> Repo Fetching...</h2>
//                 </>
//             )
//         }
//         return (
//             <>
//                 <Header />
//                 <div className="btns">
//                     {
//                         ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"].map((btn) => {
//                             return (
//                                 <div  >
//                                     {/* <button className="langbtn" onClick={(event) => { this.handleclick(event) }}>{btn}</button> */}
//                                     <NavLink className="langbtn nav" activeClassName="nav"  onClick={(event) => { this.handleclick(event) }} to="/" > {btn}</NavLink>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//                 <div className="alllang">
//                     {

//                         this.state.data.items.map((lang, i) => {

//                             return (

//                                 <div className="lang">
//                                     <div className="headerlang">
//                                         <small>#{1 + i}</small>
//                                         <figure>
//                                             <img src={lang.owner.avatar_url}></img>
//                                         </figure>
//                                         <h3>{lang.name}</h3>
//                                     </div>
//                                     <div className="langfeature">
//                                         <p className="name"><i class="fas fa-user"></i>{lang.name}</p>
//                                         <p className="number"> <i class="fas fa-star"></i>{lang.stargazers_count}<small className="numbersmall"> stars</small></p>
//                                         <p className="number"><i class="fas fa-code-branch"></i>{lang.forks} <small className="numbersmall">forks</small></p>
//                                         <p className="number"><i class="fas fa-exclamation-triangle"></i>{lang.open_issues}<small className="numbersmall" >open issues</small></p>
//                                     </div>
//                                 </div>

//                             )
//                         })
//                     }
//                 </div>


//             </>
//         )
//     }

// }


export default Language