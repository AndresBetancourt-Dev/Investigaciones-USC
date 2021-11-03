import { ApiCore } from "../utilities/core";

const url = "quienes-somos";
const plural = "quienes-somos";
const single = "quienes-somos";

export const apiQuienesSomos = new ApiCore({
  getAll: true,
  url: url,
  plural: plural,
  single: single,
});
