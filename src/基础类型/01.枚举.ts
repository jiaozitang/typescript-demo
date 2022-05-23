export {}

enum Color { Red }

let c: Color = Color.Red

let colorName: string = Color[0];

console.log(c, colorName)

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// enum E {
//     Foo,
//     Bar,
// }

// function f(x: E) {
//     // if (x !== E.Foo || x !== E.Bar) {
//     //     //             ~~~~~~~~~~~
//     //     // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//     // }
// }

enum E {
    X, Y, Z
}

function f(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);