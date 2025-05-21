import { z } from "zod";

const create_skill = z.object({
    name: z.string({ required_error: "Skill name is required !" }),
    icon: z.string({ required_error: "Skill name is required !" })
})
const update_skill = z.object({
    name: z.string().optional(),
    icon: z.string().optional()
})

export const skill_validation = {
    create_skill,
    update_skill
}