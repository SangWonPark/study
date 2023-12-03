import React, {useCallback, useEffect, useMemo} from "react";
import {Product} from "../product/model/ProductModel";
import {useNavigate} from "react-router-dom";
import {useShoppingMallProductStore} from "./store/useShoppingMallProductStore";

export function ShoppingMallMain() {
    const navigator = useNavigate();

    const [products, initProducts] = useShoppingMallProductStore(
        (state) => [state.products, state.initProducts]
    );

    useMemo(() => {
        if (products === null || products.length === 0) {
            initProducts();
        }
    }, [products, initProducts]);

    const goProductPage = useCallback((product: Product) => {
        navigator(`/product/${product.id}`, {
            replace: true,
            state: {
                ...product
            }
        })
    }, [navigator])

    const renderProductContents = useMemo(() => {
        if (products === null || products.length === 0) {
            return (
                <tr>
                    <td colSpan={3}>
                        제품이 없습니다.
                    </td>
                </tr>
            )
        }
        return products.map(p => {
            return (
                <tr>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>
                        <button type='button' onClick={() => goProductPage(p)}>이동</button>
                    </td>
                </tr>
            )
        })
    }, [products, goProductPage]);

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
                {renderProductContents}
                </tbody>
            </table>
        </main>
    );
}