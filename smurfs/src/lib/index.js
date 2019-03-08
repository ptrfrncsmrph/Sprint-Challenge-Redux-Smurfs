export { Left, Right, either } from "./Either"
export { Just, Nothing, maybe } from "./Maybe"

export const id = x => x
export const map = fn => Functor => Functor.map(fn)
