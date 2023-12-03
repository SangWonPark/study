import React from "react";
import {HeaderNavigation} from "./navigation/HeaderNavigation";

type DefaultLayoutProps = {
    children: React.ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {

    return (
        <>
            <HeaderNavigation />
            <div className="layout-contents">
                {props.children}
            </div>
        </>
    )
}