export { }

type T1<T> = T extends string ? 'string' : 'number'
type T2 = T1<string>
type T3 = T1<number>
