import { ApiCore } from "../utilities/core";

const url = "formatos";
const plural = "formatos";
const single = "formato";

export const apiFormatos = new ApiCore({
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
