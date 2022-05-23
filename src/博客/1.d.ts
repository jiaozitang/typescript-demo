export {}

// set
type Size = 'small' | 'default' | 'big' | 'large';
// map
interface IA {
    a: string
    b: number
}

type IAKeys = keyof IA;    // 'a' | 'b'

type IAValues = IA[IAKeys];    // string | number

type SizeMap = {
    [k in Size]: number
}

// 索引取值
type SubA = IA['a'];    // string    

// 属性修饰符
type Person = {
    age: number
    readonly name: string    // 只读属性，初始化时必须赋值
    nickname?: string    // 可选属性，相当于 | undefined
}

type Partial<T> = { [P in keyof T]?: T[P] }    // 将一个map所有属性变为可选的
type Required<T> = { [P in keyof T]-?: T[P] }    // 将一个map所有属性变为必选的
type Readonly<T> = { readonly [P in keyof T]: T[P] }    // 将一个map所有属性变为只读的
type Mutable<T> = { -readonly [P in keyof T]: T[P] }    // ts标准库未包含，将一个map所有属性变为可写的

interface Fruit {
    readonly name: string
    size: number
}
type PF = Partial<Fruit>;    // PF.name既只读又可选，PF.size只可选

// 由set生成map
type Record<K extends keyof any, T> = { [P in K]: T };

type Size2 = 'small' | 'default' | 'big';
/*
{
    small: number
    default: number
    big: number
}
 */
type SizeMap2 = Record<Size2, number>;


// 保留 map 的一部分
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
/*
{
    default: number
    big: number
}
 */
type BiggerSizeMap = Pick<SizeMap, 'default' | 'big'>;


interface SomeProps {
    a: string
    b: number
    c: (e: MouseEvent) => void
    d: (e: TouchEvent) => void
}


type GetKeyByValueType<T, Condition> = {
    [K in keyof T]: T[K] extends Condition ? K : never
}[keyof T];

type FunctionPropNames = GetKeyByValueType<SomeProps, Function>;