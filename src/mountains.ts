export interface Mountain {
    name: string;
    height: number;
};
const mountains : Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
export function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallest: Mountain = mountains[0];
    mountains.forEach(e => {
        console.log(e);
        if (e.height >= tallest.height) {
            tallest = e;
    }}
)
    return tallest.name;
};
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

// export function findNameOfTallestMountain(mountains: Mountain[]) : string {
//     // for loop example
//     let tallest : Mountain = mountains[0];
//     for ( let mountain of mountains ) {
//         if (tallest.height < mountain.height) {
//             tallest = mountain;
//         };
//     };
//     return tallest.name;
// };
