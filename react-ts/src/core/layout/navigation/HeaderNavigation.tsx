import React from "react";
import {NavLink} from 'react-router-dom';
import {gnbRoutes} from "../../route/routes";

export function HeaderNavigation() {
    const navLinkProps = {
        children: '',
        to: '/',
        activeClassName: 'active'
    }

    return (
        <header>
            {
                gnbRoutes.map(r => (
                    <ul>
                        <li>
                            <NavLink to={r.path} className='active'>
                                {r.title}
                            </NavLink>
                        </li>
                    </ul>
                ))
            }
        </header>
    )
}
