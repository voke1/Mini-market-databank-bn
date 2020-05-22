


import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const marketSchema = new Schema({

  name: {
    type: String,
    min: 5,
    max: 50,
  },
  description: {
    type: String,
    min: 5,
    max: 50,
  },
  locations: {
    type: String,
    min: 5,
    max: 100,
  },
  foodCategory: {
    type: String,
    min: 5,
    max: 100,
  },
  image: {
    type: String,
    min: 8,
    max: 20,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
