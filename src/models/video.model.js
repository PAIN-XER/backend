import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    VideoFile: {
      type: String, // cloudinary url
      required: true,
    },
    thumnail: {
      type: String, // cloudnary url
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: Number, // cloudnary url
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    Owner: {
      type: Schema.type.objectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

Video.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
