import React, {useEffect, useMemo} from "react";
import {NavLink} from 'react-router-dom';
import {gnbRoutes} from "../../route/routes";
import {
    IShoppingCartActions,
    IShoppingCartStoreState,
    useShoppingCartStore
} from "../../../page/cart/store/useShoppingCartStore";

export function HeaderNavigation() {
    const navLinkProps = {
        children: '',
        to: '/',
        activeClassName: 'active'
    }
    const [products, totalProductCount] =
        useShoppingCartStore((state: IShoppingCartStoreState) => [state.productList, state.totalProductCount]
        );
    const [refreshProductCount] = useShoppingCartStore((state: IShoppingCartActions) => [state.refreshProductCount]);

    useMemo(() => {
        refreshProductCount();
    }, [JSON.stringify(products), refreshProductCount]);

    const renderGnb = useMemo(() => {
        return (
            <header>
                {
                    gnbRoutes.map(r => (
                        <ul>
                            <li>
                                <NavLink to={r.path} className='active'>
                                    {r.path === '/cart' ? `${r.title}(${totalProductCount})` :  r.title}
                                </NavLink>
                            </li>
                        </ul>
                    ))
                }
            </header>
        )
    }, [totalProductCount])

    return (
        <>{renderGnb}</>
    )
}
