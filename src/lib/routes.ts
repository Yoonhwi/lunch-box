import { compile } from "path-to-regexp";

export enum Pages {
  Home = "/",
  Users = "/users",
  UsersID = "/users/id",
}

export enum Endpoints {
  Users = "/api/users{/:id}",
}

export const toUrl = (path: Pages | Endpoints, params?: object) => {
  return compile(path, { encode: encodeURIComponent })(
    Object.fromEntries(
      Object.entries(params || {}).map(([key, value]) => [
        key,
        value.toString(),
      ])
    )
  );
};

type Search = string | Record<string, string> | URLSearchParams;

export const toQueryString = (search: Search) => {
  if (typeof search === "string") {
    return search;
  }
  if (search instanceof URLSearchParams) {
    return search.toString();
  }
  return new URLSearchParams(search).toString();
};

export const buildUrl = (pathname: string, search?: Search) => {
  const queryString = search ? toQueryString(search) : "";
  return `${pathname}${queryString ? `?${queryString}` : ""}`;
};
