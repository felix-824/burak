import  {ObjectId } from "mongoose";
import {
    Productcollection,
    ProductSize,
    ProductStatus,
} from "../enums/product.enum";


export interface Product {
    _id: ObjectId;
    ProductStatus: ProductStatus;
    Productcollection: Productcollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    ProductSize: ProductSize;
    ProductVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
    createdAt: Date;
    updatedAt: Date;
}


export interface ProductInput {
    ProductStatus?: ProductStatus;
    Productcollection: Productcollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    ProductSize?: ProductSize;
    ProductVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}

export interface ProductInquiry {
    order: string;
    page: number;
    limit: number;
    productCollection?: Productcollection;
    search?: string;
}


export interface ProductUpdateInput {
     _id: ObjectId;
    ProductStatus?: ProductStatus;
    Productcollection?: Productcollection;
    productName?: string;
    productPrice?: number;
    productLeftCount?: number;
    ProductSize?: ProductSize;
    ProductVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}