import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IProduct, useShoppingMallProductStore} from "../main/store/useShoppingMallProductStore";
import {useShoppingCartStore} from "../cart/store/useShoppingCartStore";

export function DefaultProduct() {
    const {id} = useParams();

    const [getProduct] = useShoppingMallProductStore((state) => [state.getProduct])
    const [addProduct] = useShoppingCartStore((state) => [state.addProduct])
    const [product, setProduct] = useState({} as IProduct);

    useEffect(() => {
        if (id) {
            const pId = Number.parseInt(id);
            setProduct(getProduct(pId));
        }
    }, [id, getProduct]);

    const addShoppingCart = useCallback(() => {
        addProduct(product);
    }, [product, addProduct])

    return (
        <main>
            <h2>Product Name: {product.name}</h2>
            <h4>Product ID: {product.id}</h4>
            <dl>
                <dt>설명</dt>
                <dd>{product.comment}</dd>
            </dl>
            <dl>
                <dt>가격</dt>
                <dd>{product.price}원</dd>
            </dl>
            <button
                type="button"
                onClick={addShoppingCart}
            >
                장바구니에 추가
            </button>
        </main>
    )
}