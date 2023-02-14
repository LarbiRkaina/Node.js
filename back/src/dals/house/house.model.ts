import { Decimal128, Int32, ObjectId } from "mongodb";

export interface House {
    _id: string,
    name: string,
    description: string,
    bedrooms: Int32,
    beds: Int32,
    bathrooms: Decimal128,
    reviews : Review[] 
}

export interface Review {
    reviewer_name: string;
    comments: string;
    date: Date;
    
}

export interface OneHouse {
    name: string;
}
 

