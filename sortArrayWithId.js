// Input -> let arr = [{
//     name: "abc",
//     data: {
//         primary: {
//             id: "123"
//         }
//     }
// },
// {
//     name: "okay",
//     data: {
//         primary: {
//             id: "45"
//         }
//     }
// },
// {
//     name: "new",
//     data: {
//         primary: {
//             id: "99"
//         }
//     }
// }]



// out put -> Arr should be sorted in ascending order based on id number

function sortArr(input){
    let output = []

    output = input.sort((a, b) => a.data.primary.id - b.data.primary.id)
    return output


// sort function takes a compareFunction that returns the sorted arra
// (a, b)=> a-b -- return ascending order

}

console.log(sortArr(arr))
