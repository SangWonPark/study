import React from "react";
import logo from "../../logo.svg";

type DefaultLayoutProps = {
    children: React.ReactNode;
}

export function SignInLayout(props: DefaultLayoutProps) {

    return (
        <>
            <header className="App-header">
                <img width='200' height='200' src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div className="layout-contents">
                {props.children}
            </div>
        </>
    )
}