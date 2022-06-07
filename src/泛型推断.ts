export { }

type Foo<T> = T extends { t: infer Test } ? Test : string
type One = Foo<number> // string
type Two = Foo<{ t: boolean }> // boolean
type Three = Foo<{ a: number, t: () => void }> // () => void

type Four = {
    name: string
} extends {
    name: infer Type,
} ? Type : number