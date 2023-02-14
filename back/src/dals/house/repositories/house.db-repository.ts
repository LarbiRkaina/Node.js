import { db } from 'core/servers';
import { HouseRepository } from "./house.repository";
import { House, Review } from "../house.model";

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

    saveReview: async (review:Review, id:string) => {
          await db.collection<House>("listingsAndReviews").updateOne(
            {_id :id},
            {
                $push : {
                    reviews: {
                        $each: [
                            {
                                reviewer_name: review.reviewer_name,
                                comments: review.comments,
                                date: new Date(),
                            }
                        ],
                    }
                }
            });
        
        return {
            ...review
        }
       
    }
}