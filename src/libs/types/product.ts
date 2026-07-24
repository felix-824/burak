import  {ObjectId } from "mongoose";
import {
    ProductCollection,
    ProductSize,
    ProductStatus,
} from "../enums/product.enum";


export interface Product {
    _id: ObjectId;
    ProductStatus: ProductStatus;
    productCollection: ProductCollection;
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
    productCollection: ProductCollection;
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
    productCollection?: ProductCollection;
    search?: string;
}


export interface ProductUpdateInput {
     _id: ObjectId;
    ProductStatus?: ProductStatus;
    productCollection?: ProductCollection;
    productName?: string;
    productPrice?: number;
    productLeftCount?: number;
    ProductSize?: ProductSize;
    ProductVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}