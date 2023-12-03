import React, {useEffect, useMemo} from "react";
import {IShoppingCartActions, IShoppingCartStoreState, useShoppingCartStore} from "./store/useShoppingCartStore";

export function ShoppingCart() {
    const [
        productList,
        totalPrice,
        discountPrice,
        paymentPrice
    ] = useShoppingCartStore((state: IShoppingCartStoreState) => [
        state.productList,
        state.totalPrice,
        state.discountPrice,
        state.paymentPrice
    ]);
    const [
        plusCount,
        minusCount,
        delProduct,
        refreshPrices
    ] = useShoppingCartStore((state: IShoppingCartActions) => [
        state.plusCount,
        state.minusCount,
        state.delProduct,
        state.refresh
    ]);

    useEffect(() => {
        refreshPrices();
    }, [JSON.stringify(productList)])

    const renderProductContents = useMemo(() => {
        if (productList == null || productList.length == 0) {
            return (
                <tr>
                    <td colSpan={5}>장바구니에 상품이 없습니다.</td>
                </tr>
            )
        }
        return productList.map((p) => {
            return (
                <tr>
                    <td>{p.name}</td>
                    <td>{p.comment}</td>
                    <td>{p.price}</td>
                    <td>
                        <button
                            type="button"
                            onClick={() => minusCount(p)}
                        >-</button>
                        {p.count}
                        <button
                            type="button"
                            onClick={() => plusCount(p)}
                        >+</button>
                    </td>
                    <td>{p.count * p.price}</td>
                    <td>
                        <button
                            type="button"
                            onClick={() => delProduct(p.id)}
                        >
                            제거
                        </button>
                    </td>
                </tr>
            )
        })
    }, [productList])

    return (
        <main>
            <h2>Shopping Cart</h2>
            <h4>장바구니</h4>
            <div className="table-contents">
                <table>
                    <thead>
                    <tr>
                        <th>제품명</th>
                        <th>설명</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>금액</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderProductContents}
                    </tbody>
                </table>
            </div>
            <div className="payment-detail-contents">
                <dl>
                    <dt>전체 가격</dt>
                    <dd>{totalPrice}</dd>
                    <dt>할인 가격</dt>
                    <dd>{discountPrice}</dd>
                    <dt>결제 금액</dt>
                    <dd>{paymentPrice}</dd>
                </dl>
            </div>
        </main>
    )
}