// @flow

export const isObject = (o: any): boolean =>
  o instanceof Object && o.constructor === Object;

export const isArray = (arg: any) => Array.isArray(arg);
