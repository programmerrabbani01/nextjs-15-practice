import mongoose, { Document, Model, Schema } from "mongoose";

// Define an interface for Developer document
interface IDeveloper extends Document {
  name: string;
  email: string;
  location: string;
  cell?: string | null;
  photo?: {
    url?: string;
    public_id?: string;
  };
  status?: boolean;
  trash?: boolean;
}

// Create Developer schema
const developersSchema: Schema<IDeveloper> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    cell: {
      type: String,
      trim: true,
      default: null,
    },
    photo: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Export Developer model
const DeveloperModel: Model<IDeveloper> =
  mongoose.models.DeVs || mongoose.model<IDeveloper>("DeVs", developersSchema);

export default DeveloperModel;
