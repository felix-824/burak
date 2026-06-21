import mongoose, {Schema} from "mongoose";
import ProductService from "../models/Product.service";
import { Productcollection, ProductSize, ProductStatus, ProductVolume } from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
  ProductStatus: {
    type: String,
    enum: ProductStatus,
    default: ProductStatus.PAUSE
  },

   Productcollection: {
    type: String,
    enum: Productcollection,
    required: true,
  },

  productName: {
    type: String,
    required: true,
  },

   productPrice: {
    type: Number,
    required: true,
  },

   productLeftCount: {
    type: Number,
    required: true,
  },

   ProductSize: {
    type: String,
    enum: ProductSize,
    default: ProductSize.NORMAL
  },

   productVolume: {
    type: Number,
    enum: ProductVolume,
    default: ProductVolume.ONE
  },

  productDesc: {
    type: String,
  },

  productImages: {
    type: [String],
    default: []
  },

  productViews: {
    type: Number,
    default: 0,
  },

  },
{ timestamps: true } //updateAt, createdAt
);

productSchema.index(
    {productName: 1, productSize: 1, productVolume: 1},
     {unique:true})

export default mongoose.model('Product', productSchema);