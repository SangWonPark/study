import {create} from 'zustand';
import {IProduct} from "../../main/store/useShoppingMallProductStore";

export interface IProductInCart {
    id: number;
    name: string;
    comment: string;
    price: number;
    count: number;
}

export interface IDiscount {
    type: string;
    discountPrice: number;
    name?: string;
    comment?: string;
}

export interface IShoppingCartStoreState {
    productList: IProductInCart[];
    totalProductCount: number;
    discounts: IDiscount[];
    totalPrice: number;
    discountPrice: number;
    paymentPrice: number;
}

export interface IShoppingCartActions {
    plusCount: (product: IProduct) => void;
    minusCount: (product: IProduct) => void;
    addProduct: (product: IProduct) => void;
    delProduct: (productId: number) => void;
    addDiscount: (discount: IDiscount) => void;
    refreshProductCount: () => void;
    refresh: () => void;
}

export const useShoppingCartStore = create<IShoppingCartStoreState & IShoppingCartActions>(
    (set, get) => ({
        productList: [] as IProductInCart[],
        totalProductCount: 0,
        discounts: [] as IDiscount[],
        totalPrice: 0,
        discountPrice: 0,
        paymentPrice: 0,

        plusCount: (product: IProduct) => {
            const productList = get().productList;
            const newProductList = productList.map(p => {
                if (p.id == product.id) {
                    p.count += 1;
                }
                return p;
            });

            set((state) => ({productList: newProductList}))
        },
        minusCount: (product: IProduct) => {
            const productList = get().productList;
            const newProductList = productList.map(p => {
                if (p.id == product.id) {
                    p.count -= 1;
                }
                return p;
            }).filter(p => {
                if (p.count > 0) {
                    return p;
                }
            });

            set((state) => ({productList: newProductList}))
        },
        addProduct: (product: IProduct) => {
            const productList = get().productList;
            const existProducts = productList.filter(p => p.id == product.id);
            if (existProducts.length > 0) {
                existProducts[0].count += 1;
            } else {
                productList.push({
                    ...product,
                    count: 1
                });
            }

            set((state) => ({productList: productList}))
        },
        delProduct: (productId: number) => {
            const productList = get().productList;
            const newProductList = productList.filter(p => p.id != productId);

            set((state: IShoppingCartStoreState) => ({productList: newProductList}))
        },
        addDiscount: (discount: IDiscount) => {
            const addedDiscounts = get().discounts;
            addedDiscounts.push(discount);

            set((state:IShoppingCartStoreState) => ({discounts: addedDiscounts}))
        },
        refreshProductCount: () => {
            const {productList} = get();
            const productCount = productList.reduce((total, p) => total + p.count, 0)

            set((state) => ({
                totalProductCount: productCount
            }))
        },
        refresh: () => {
            const {
                productList,
                discounts,
            } = get();
            let productCount: number = 0;
            let newTotalPrice: number = 0;
            let newDiscountPrice: number = 0;
            let newPaymentPrice: number = 0;

            productList.forEach(p => {
                productCount += p.count
                newTotalPrice += p.price
            });
            discounts.forEach(d => newDiscountPrice += d.discountPrice);
            newPaymentPrice = newTotalPrice - newDiscountPrice;

            set((state) => ({
                totalProductCount: productCount,
                totalPrice: newTotalPrice,
                discountPrice: newDiscountPrice,
                paymentPrice: newPaymentPrice,
            }))
        },
    })
)