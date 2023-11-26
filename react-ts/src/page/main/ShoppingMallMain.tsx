import React, {useCallback} from "react";
import {Product} from "../product/model/ProductModel";
import {useNavigate} from "react-router-dom";

export function ShoppingMallMain() {
    const navigator = useNavigate();
    const products: Array<Product> = [
        {
            id: '1',
            name: '제품 No.1'
        },
        {
            id: '2',
            name: '제품 No.2'
        },
        {
            id: '3',
            name: '제품 No.3'
        },
        {
            id: '4',
            name: '제품 No.4'
        }
    ]

    const goProductPage = useCallback((product: Product) => {
        navigator(`/product/${product.id}`, {
            replace: true,
            state: {
                ...product
            }
        })
    }, [navigator])

    const renderTableContent = products.map(p => (
        <tr>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>
                <button type='button' onClick={() => goProductPage(p)}>이동</button>
            </td>
        </tr>
    ));

    return (
        <main>
            <h1>메인 페이지</h1>
            <table>
                <thead>
                <tr>
                    <th>제품 아이디</th>
                    <th>제품 이름</th>
                    <th>링크</th>
                </tr>
                </thead>
                <tbody>
                {renderTableContent}
                </tbody>
            </table>
        </main>
    );
}