import logo from '../../../logo.svg'
import '../../../App.css'
import {CommonButton} from "../../componant/buttons";
import Profile from "../../componant/user-mini-profile";
import {useState} from 'react';
import React from "react";


export function SamplePage() {

    let [count = 0, setCount, loggedIn = false, setLoggedIn] = useState(0)
    let content;

    loggedIn = count % 5 ? true : false;

    function handleClick() {
        setCount(count + 1)
    }

    if (!loggedIn) {
        content = (
            <div style={{backgroundColor: 'gray'}}>
                <p>{loggedIn ? 'logged in' : 'not yet'}</p>
                <h5>{'This is button area'} {count}</h5>
                <h5>Is Logged In? {loggedIn.toString()}</h5>
                <button onClick={handleClick}>
                    {'Hey SangWonPark!! Click this button to login'}
                </button>
            </div>
        )
    } else {
        content = (
            <div style={{backgroundColor: 'white'}}>
                <h4 style={{color: 'blue'}}>this is 'user-mini-profile' area</h4>
                <p style={{color: 'blueviolet'}}>{count}</p>
                <Profile/>
                <button onClick={handleClick}>
                    {'Hey SangWonPark!! this  button was fake!!'}
                </button>
            </div>
        )
    }

    let products = [
        {title: 'Cabbage', isFruit: false, id: 1},
        {title: 'Garlic', isFruit: false, id: 2},
        {title: 'Apple', isFruit: true, id: 3},
    ];
    let itemList = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}>
            {product.title}
        </li>);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>


                <div style={{backgroundColor: 'gray'}}>
                    <CommonButton title={'This is button area'}
                                  name={'SangWonPark!!'}/>
                </div>

                <div style={{backgroundColor: 'white'}}>
                    <h4 style={{color: 'blue'}}>this is 'user-mini-profile' area</h4>
                    <Profile />
                </div>

                <div style={{backgroundColor: "red"}}>
                    {content}
                </div>

                <div style={{backgroundColor: "skyblue"}}>
                    <ul>{itemList}</ul>
                </div>
            </header>
        </div>
    );
}

export default SamplePage;
