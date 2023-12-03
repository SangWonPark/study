import React, {useMemo} from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {mergeRoutes, PageRouteProps} from "./core/route/routes";
import DefaultRoute from "./core/route/DefaultRoute";
import {DefaultLayout} from "./core/layout/DefaultLayout";
import {
    IShoppingCartActions,
    IShoppingCartStoreState,
    useShoppingCartStore
} from "./page/cart/store/useShoppingCartStore";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {
                    mergeRoutes.map((_item: PageRouteProps, _index: number) => {
                        const {layout, component, ...others} = _item;
                        return (
                            <Route
                                key={_index}
                                path={_item.path}
                                element={
                                    <DefaultRoute
                                        layout={layout || DefaultLayout}
                                        component={component}
                                        {...others}
                                    />
                                }
                            />
                        )
                    })
                }
                <Route path="*" element={<Navigate to="/notfound" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
