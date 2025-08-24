import Joi from "joi";
import { COS_FOLDER_NAME } from "../../utils/cos";
import { ADDRESS_RELATION_TARGET_TYPE } from "../../constant";

export const signUpSchema = Joi.object({
  phone: Joi.string()
    .pattern(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/)
    .required(),
  password: Joi.string().required(),
  jsCode: Joi.string().required(),
});

export const signInSchema = Joi.object({
  password: Joi.string().required(),
  jsCode: Joi.string().required(),
});

export const resetPassSchema = Joi.object({
  password: Joi.string().required(),
  jsCode: Joi.string().required(),
});

export const stsForUploadSchema = Joi.object({
  folder: Joi.string()
    .valid(...Object.values(COS_FOLDER_NAME))
    .required(),
  exts: Joi.array().items(Joi.string()).max(10),
});

export const tokenAddressSchema = Joi.object({
  relationId: Joi.string()
    .pattern(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/)
    .required(),
});
