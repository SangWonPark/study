import React from "react";

export type DefaultRouteProps = {
    title?: string;
    path?: string;
    component: React.ComponentType<any>;
    layout: React.ComponentType<any>;
}

function DefaultRoute(props: DefaultRouteProps) {
    const { component: Component, layout: Layout, ...others} = props;
    return (
        <Layout>
            <Component {...others} />
        </Layout>
    );
}

export default DefaultRoute;