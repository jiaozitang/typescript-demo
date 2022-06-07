export {}

interface I1 {
    name: string
}

interface I2 {
    age: number
}

type T3 = I1 & I2

const a: T3 = {
    name: 'tj',
    age: 11
}