import { UnknownAction } from "redux";
export type ActionWithPayload<T, P> = {
  type: T;
  Payload: P;
};
export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;
export function createAction<T extends string>(type: T): Action<T>;

export function createAction<T extends string, P>(type: T, payload?: P) {
  if (payload !== undefined) {
    return { type, payload };
  } else {
    return { type };
  }
}

type Matchable<AC extends (...args: any[]) => UnknownAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: UnknownAction): action is ReturnType<AC>;
};
//Matchable<AC> = AC means that Matchable will represent the type that AC refers to.
//AC satisfy certain constraints (in this case, be a function).
//(...args: any[]): This represents a function that accepts any number and type of arguments

//the result will be a type that has both the signature of AC (the function) and the properties type and match.
//ReturnType<AC>: This utility type extracts the return type of the function AC.
//an action creator function that returns an object like { type: 'ADD_TODO', payload: ... }, then ReturnType<AC>["type"] will refer to the string 'ADD_TODO' (the value of the type property).
//A match method: This method checks if a given action (of type UnknownAction) is of the same type as the action created by AC.
export function withMatcher<
  AC extends (...args: any[]) => UnknownAction & { type: string }
>(actionCreator: AC): Matchable<AC> {
  const type = actionCreator().type; // Be cautious of how you call this

  return Object.assign(actionCreator, {
    // return a function(actionCreator) + object{type:, match:}
    type,
    match(action: UnknownAction): action is ReturnType<AC> {
      return action.type === type;
    },
  });
}
