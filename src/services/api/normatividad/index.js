import { ApiCore } from "../utilities/core";

const url = "normatividad";
const plural = "normatividad";
const single = "normatividad";

export const apiNormatividad = new ApiCore({
  getAll: true,
  getSingle: true,
  post: false,
  put: false,
  patch: false,
  delete: false,
  url: url,
  plural: plural,
  single: single,
});
