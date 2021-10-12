import { ApiCore } from "../utilities/core";

const url = "solicitudes";
const plural = "solicitudes";
const single = "solicitud";

export const apiSolicitudes = new ApiCore({
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
