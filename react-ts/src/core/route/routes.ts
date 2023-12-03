import React from "react";
import {SignInLayout} from "../layout/SignInLayout";
import {SignInContainer} from "../../page/signin/SignInContainer";
import {DefaultProduct} from "../../page/product/DefaultProduct";
import {ShoppingMallMain} from "../../page/main/ShoppingMallMain";
import {ShoppingCart} from "../../page/cart/ShoppingCart";

export type PageRouteProps = {
    title: string;
    path: string;
    component: React.ComponentType<any>;
    layout?: React.ComponentType<any>;
    exact?: boolean;
}

/**
 * 라우드 설정시 아래에 설정
 */
export const gnbRoutes: Array<PageRouteProps> = [
    {
        title: 'Sign In',
        path: '/signin',
        component: SignInContainer,
        layout: SignInLayout,
        exact: true,
    },
    {
        title: '쇼핑몰 메인',
        path: '/main',
        component: ShoppingMallMain,
        exact: false,
    },
    {
        title: '장바구니',
        path: '/cart',
        component: ShoppingCart,
        exact: false,
    },
    {
        title: '마이페이지',
        path: '/mypage',
        component: ShoppingMallMain,
        exact: false,
    },
]

/**
 * 용도에 따른 라우트 블록을 따로 설정
 */
export const  productRoutes: Array<PageRouteProps> = [
    {
        title: '??? 제품',
        path: '/product/:id',   // 'id' is path variable
        component: DefaultProduct,
        exact: false,
    },
]

/**
 * 모든 라우트 병합
 */
export const mergeRoutes = [
    ...gnbRoutes,
    ...productRoutes
]