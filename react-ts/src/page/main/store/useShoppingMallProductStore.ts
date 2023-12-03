import { create } from 'zustand'

export interface IProduct {
    id: number;
    name: string;
    comment: string;
    price: number;
}

export interface IShoppingMallState {
    products: IProduct[]
}

export interface IShoppingMallActions {
    getProduct: (id: number) => IProduct;
    initProducts: () => void;
}

export const useShoppingMallProductStore = create<IShoppingMallState & IShoppingMallActions>(
    (set, get) => ({
        products: [] as IProduct[],

        getProduct(id: number) {
            const products = get().products;
            const product = products.find((p) => p.id == id);
            return product ? product : {} as IProduct;
        },
        initProducts() {
            const initProducts: IProduct[] = [
                {
                    id: 1,
                    name: '제품 No.1',
                    comment: '쇼핑몰 1번째 제품',
                    price: 10000,
                },
                {
                    id: 2,
                    name: '제품 No.2',
                    comment: '쇼핑몰 2번째 제품',
                    price: 20000,
                },
                {
                    id: 3,
                    name: '제품 No.3',
                    comment: '쇼핑몰 3번째 제품',
                    price: 30000,
                },
                {
                    id: 4,
                    name: '제품 No.4',
                    comment: '쇼핑몰 4번째 제품',
                    price: 40000,
                }
            ]
            set(state => ({
                products: initProducts
            }))
        }
    })
);