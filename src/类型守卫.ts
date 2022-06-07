export { }

interface A {
    name: string;
    age: number;
}
interface B {
    sex: string;
    home: string;
}

function A(a: string | number): string | number {
    if (a instanceof String) { // OK
        return a + ''
    } if (a instanceof Number) { // OK
        return a + 2
    }
    return ''
}