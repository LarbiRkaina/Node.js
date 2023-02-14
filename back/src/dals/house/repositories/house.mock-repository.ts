import { HouseRepository } from "./house.repository";
import { House, OneHouse, Review } from "../house.model";
import { db } from "../../mock-data";

const insertHouse = (house: House) => {
  
    const newHouse: House ={
        ...house,    
    };

    db.houses = [...db.houses, newHouse];
    return newHouse;
;}

const updateHouse = (house:House) => {
    db.houses = db.houses.map((b) => (b._id === house._id ? { ...b, ...house } : b));
    return house;
};

const AddReview = (house:Review) => {
    db.houses = db.houses.map((b) => ({ ...b, ...house }));
    return house;
};

const paginateHouseList = (
    houseList: OneHouse[],
       page: number,
       pageSize: number
    ): OneHouse[] => {
       let paginatedHouseList = [...houseList];
       if (page && pageSize) {
         const startIndex = (page - 1) * pageSize;
         const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
         paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
     }

       return paginatedHouseList;
};

export const mockRepository:HouseRepository = {
    getHouseList: async (page?: number, pageSize?: number) =>
    paginateHouseList(db.houses, page, pageSize),
    getHouse: async (id: string) => db.houses.find((b) => b._id === id),
    saveHouse: async (book: House) => Boolean(book._id) ? updateHouse(book) : insertHouse(book),
    saveReview: async (review: Review) => AddReview(review),
};
