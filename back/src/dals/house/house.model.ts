import { ObjectId } from "mongodb";

export interface House {
    _id: string,
    name: string,
    description: string,
    reviews : Review[] 
}

export interface Review {
    reviewer_name: string;
    comments: string;
    
}

export interface OneHouse {
    name: string;
}
 

