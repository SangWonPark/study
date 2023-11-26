import React from "react";
import HomeHeader from "./homeHeader";
import HomeNavigation from "./homeNavigation";

const HomeLayout = ({children}) => {
    return (
        <React.Fragment>
            <HomeHeader/>
            <div className="navigationWrapper">
                <HomeNavigation/>
                <main>{ children }</main>
            </div>
        </React.Fragment>
    );
};

export default HomeLayout;