import { Router } from "express";
import auth from "../../utils/checkUserTokenIsValid";
import checkSchemaValidation from "../../utils/checkSchemaValidation";
import { skill_validation } from "./skill.validation";
import { skill_controller } from "./skill.controller";

const skill_router = Router()


// create skill
skill_router.post("/", auth(), checkSchemaValidation(skill_validation.create_skill), skill_controller.create_skill)
skill_router.patch("/:id", auth(), checkSchemaValidation(skill_validation.update_skill), skill_controller.update_skill)
skill_router.delete("/:id", auth(), skill_controller.delete_skill)
skill_router.get("/", skill_controller.get_all_skill)
skill_router.get("/:id", skill_controller.get_one_skill)


export default skill_router;