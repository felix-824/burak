import  {ObjectId } from "mongoose";
import {
    Productcollection,
    ProductSize,
    Productstatus,
} from "../enums/product.enum";


export interface Product {
    _id: ObjectId;
    ProductStatus: Productstatus;
    Productcollection: Productcollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    ProductSize: ProductSize;
    ProductVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
}


export interface ProductInput {
    ProductStatus?: Productstatus;
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
    ProductStatus?: Productstatus;
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