import { House } from "./house";
import { Decimal128, Int32, ObjectId } from "mongodb";

export interface DB {
  houses: House[];
}

export const db: DB = {
  houses: [
    {
      _id: "1",
      name: "Casa Malagueta",
      description: "Casa a primera linea de playa",
      beds: new Int32(5),
      bathrooms: new Decimal128("1"),
      bedrooms: new Int32(4),
      reviews: [
        {comments: "Muy tranquila, ambiente agradable",
        reviewer_name : "Larbi",
        date: new Date("<2016-01-03>")
        }
      ]

    },
    {
      _id: "2",
      name: "Casa Alameda Principal",
      description: "Casa espaciosa en el centro de Málaga",
      beds: new Int32(5),
      bathrooms: new Decimal128("1"),
      bedrooms: new Int32(4),
      reviews: [
        {comments: "Un poco cara, pero buen sitio para un fin de semana",
        reviewer_name : "Manu",
        date: new Date("<2016-11-03>")}
      ]
    },

  ],
};
