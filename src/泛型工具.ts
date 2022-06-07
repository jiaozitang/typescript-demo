export { }

type T1 = Partial<{
    name: string
}>

const a: T1 = {}

type T2 = Required<{
    name?: string,
}>

const b: T2 = {} // 必须有name属性

type T3 = Readonly<{
    name: string,
}>

const c: T3 = {
    name: 'tj'
}

c.name = 'tj1'

type T4 = Pick<{
    name: string,
    age: number
}, 'name'>

const d: T4 = {
    name: 'tj'
}

const e: Record<string, string> = {
    name: 'tj'
}

const f: Record<string, number> = {
    age: 11
}