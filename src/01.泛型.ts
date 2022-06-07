export {}

type T1<T> = T[]

type T2 = T1<string>


type T4<A> = A[]

type T5 = T4<string> // string[]

type T6 = T4<number> // number[]

interface I1<T, U> {
    name: T,
    age: U
}

type I2 = I1<string, number>

interface Length {
    length: number
}

function fn1<T extends Length>(arg: T): number{
    return arg.length
}

enum Difficulty {
    Easy,
    Intermediate,
    Hard
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let tsInfo = {
    name: "Typescript",
    supersetOf: "Javascript",
    difficulty: Difficulty.Intermediate
}

let difficulty: Difficulty =
    getProperty(tsInfo, 'difficulty'); // OK

let supersetOf: string =
    getProperty(tsInfo, 'superset_of'); // Error

interface I3 {
    name: string,
    age: number
}

type T7 = keyof I3
const S7: T7 = 'age'
console.log(S7)

interface I4<T=string> {
    name: T
}

interface I4<T = string> {
    name: T
}

const S1: I4 = { name: '123' }
const S2: I4<number> = { name: 123 }
