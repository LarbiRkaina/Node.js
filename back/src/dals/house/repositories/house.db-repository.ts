import { db } from 'core/servers';
import { HouseRepository } from "./house.repository";
import { House } from "../house.model";

export const dbRepository: HouseRepository = {
    getHouseList: async (page?: number, pageSize?: number) => {
        return await db.collection<House>("listingsAndReviews").find().toArray();

    },

    getHouse: async (id:string) =>{
       
        return await db.collection<House>("listingsAndReviews").findOne({"_id" : id});

    },

    saveHouse: async(house: House) => {
        const { insertedId } = await db.collection<House>("listingsAndReviews").insertOne(house);
        return {
            ...house,
            _id: insertedId,
        };
    },

    deleteHouse: async (id: string) =>{
        throw new Error("Not implemented");
    },
}