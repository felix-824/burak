import mongoose, {Schema} from "mongoose";
import ProductService from "../models/Product.service";
import { Productcollection, ProductSize, Productstatus, ProductVolume } from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
  ProductStatus: {
    type: String,
    enum: Productstatus,
    default: Productstatus.PAUSE
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

   productSize: {
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