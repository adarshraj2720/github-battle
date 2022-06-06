import React from "react"
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div>
                <NavLink className="nav" activeClassName="red" to='/' exact>
                    Popular
                </NavLink>
                <NavLink className="nav"  activeClassName="red" to='/battle'>
                    Battle
                </NavLink>
            </div>

            <i class="fas fa-lightbulb"></i>

        </div>
    )
}