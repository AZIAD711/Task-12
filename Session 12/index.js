//De-structure the following Variable and extract 33 and “moha”
const array = [
    8,
    "55",
    [
        2,
        "Hello Wolrd",
        {
            a: 2,
            b: 5,
        },
        false,
    ],
    {
        arr: [true, 1, NaN, new Array(2, 33)],
        test: null,
        obj: { d: "Moha", Last: [2, false, undefined] }
    },
];
const [
    ,
    ,
    ,
    {
        arr: [, , , [, SE]],
        obj: { d: Name ,}
    }
] = array;

document.write("Name: \t"+Name+"<br>"+"Second Element Of Array = "+SE); 


