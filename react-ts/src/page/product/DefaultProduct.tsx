import React, {useState} from "react";
import {useLocation, useParams} from "react-router-dom";

export function DefaultProduct() {
    const {id} = useParams();
    const location = useLocation();
    const productName = location.state.name

    return (
        <main>
            <h2>Product Name: {productName}</h2>
            <h4>Product ID: {id}</h4>
            <table>
                <thead>
                <tr>
                    <th>th1</th>
                    <th>th2</th>
                    <th>th3</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>td1</td>
                    <td>td2</td>
                    <td>td3</td>
                </tr>
                </tbody>
            </table>
        </main>
    )
}