import { House } from "./house";
import { ObjectId } from "mongodb";

export interface DB {
  houses: House[];
}

export const db: DB = {
  houses: [
    {
      _id: "34",
      name: "Choque de reyes",
      description: "George R. R. Martin",
      reviews: [
        {comments: "Esto si va",
        reviewer_name : "Larbi"}
      ]

    },
    {
      _id: "35",
      name: "Harry Potter y el prisionero de Azkaban",
      description: "J. K. Rowling",
      reviews: [
        {reviewer_name :"Amira",
        comments: "Esto si va bien"}
      ]
    },

  ],
};
