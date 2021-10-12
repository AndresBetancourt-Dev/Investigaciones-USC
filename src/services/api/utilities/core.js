import { ApiProvider } from "./provider";

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = () => {
        return ApiProvider.getAll(options.url);
      };
    }

    if (options.getSingle) {
      this.getSingle = (id) => {
        return ApiProvider.getSingle(options.url, id);
      };
    }

    if (options.post) {
      this.post = (model) => {
        return ApiProvider.post(options.url, model);
      };
    }

    if (options.put) {
      this.put = (model) => {
        return ApiProvider.put(options.url, model);
      };
    }

    if (options.patch) {
      this.patch = (model) => {
        return ApiProvider.patch(options.url, model);
      };
    }

    if (options.remove) {
      this.remove = (id) => {
        return ApiProvider.remove(options.url, id);
      };
    }
  }
}
