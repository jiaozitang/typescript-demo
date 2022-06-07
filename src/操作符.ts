export { }

const a: keyof {
    name: string
} = 'name'

const a2 = {
    name: 'tj',
}

type T1 = typeof a2 // {name: string}

function fn1(x: number): number {
    return x * 10
}

type T2 = typeof fn1 // (number) => number

const obj = {
    name: 'tj',
    age: 11
}

type T5 = {
    [P in keyof typeof obj]: any
}

interface I3 {
    name: string,
    age: number
}

type T6 = I3[keyof I3]