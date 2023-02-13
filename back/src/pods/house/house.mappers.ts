import { ObjectId } from "mongodb";
import * as model from "dals";
import * as apiModel from "./house.api-model";

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id,
  name: house.name,
  //releaseDate: house.releaseDate?.toISOString(),
  description: house.description,
  reviews: mapReviewListFromModelToApi(house.reviews)
});

export const mapReviewListFromModelToApi= (
  reviewList: model.Review[]
): apiModel.Review[] => reviewList.map(mapReviewFromModelToApi);


export const mapReviewFromModelToApi = (house: model.Review): apiModel.Review => ({
  userName: house.reviewer_name,
  //releaseDate: house.releaseDate?.toISOString(),
  comment: house.comments,
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseFromModelToApi);

export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
    _id: house.id,
    name: house.name,
    description: house.description,
    reviews: mapHouseListFromModelToApi6(house.reviews)
});

export const mapHouseListFromModelToApi6 = (
  houseList: apiModel.Review[]
): model.Review[] => houseList.map(mapHouseFromModelToApi7);


export const mapHouseFromModelToApi7 = (house: apiModel.Review ):  model.Review => ({
  reviewer_name: house.userName,
  //releaseDate: house.releaseDate?.toISOString(),
  comments: house.comment
});