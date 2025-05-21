import { model, Schema } from "mongoose";
import { ISkills } from "./skill.interface";

const skillSchema = new Schema<ISkills>({
    name: { type: String, required: true },
    icon: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
})


export const skillModel = model("skill", skillSchema)