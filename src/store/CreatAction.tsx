export type ActionWithPayload<T, P> = {
  type: T;
  Payload: P;
};
export type Action<T> = {
  type: T;
};

export function createAction<T extends string, p>(type: T, payload: p) {
  //(T) will always be a string
  return { type, payload };
}
