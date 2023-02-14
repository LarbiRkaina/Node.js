import { Decimal128, Int32 } from "mongodb";
import { Date } from "mongoose";

export interface House {
    id: string;
    name: string;
    description: string;
    bedrooms: Int32,
    beds: Int32,
    bathrooms: Decimal128,
    reviews : Review[];
    
}

export interface Review {
    userName: string;
    comment: string;
    date: string;
}

export interface OneHouse {
    name: string;
}