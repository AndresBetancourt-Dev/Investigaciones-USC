import { ApiCore } from "../utilities/core";

const url = "redes";
const plural = "redes";
const single = "red";

export const apiRedes = new ApiCore({
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
