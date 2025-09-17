const before = {
    total: null,
    page: null,
    count: null,
    status: true,
    data: {
      Sales_Category: {
        sales: {
          current: {
            February_week1: 256788.0,
            February_week2: 256788.0,
            February_week3: 256788.0,
            February_week4: 256788.0,
          },
          last: {
            February_week1: 42798.0,
            February_week2: 42798.0,
            February_week3: 42798.0,
            February_week4: 42798.0,
            March_week1: 42798.0,
          },
          variance: {
            February_week1: 500.0,
            February_week2: 500.0,
            February_week3: 500.0,
            February_week4: 500.0,
          },
        },
      },
      Margin_Category: {
        margin: {
          current: {
            February_week1: 256788.0,
            February_week2: 256788.0,
            February_week3: 256788.0,
            February_week4: 256788.0,
          },
          last: {
            February_week1: 42798.0,
            February_week2: 42798.0,
            February_week3: 42798.0,
            February_week4: 42798.0,
            March_week1: 42798.0,
          },
          variance: {
            February_week1: 500.0,
            February_week2: 500.0,
            February_week3: 500.0,
            February_week4: 500.0,
          },
        },
      },
    },
  };

function transformData(obj) {
    
    let objectreceived = Object.entries(obj);
    // console.log(objectreceived)
    const final = objectreceived.map((key) => {
        let mainKey = key[0]
        var subRowObj = Object.entries(key[1])
        subRows = subRowObj.map((a) =>{

            let innerMostobj = Object.entries(a[1])
            const innermostbj = innerMostobj.map((d) =>{
                return {
                    metric: a[0],
                    reference: d[0],
                    ...d[1]
                }

            })
            return innermostbj
        })
        return {
            metric: mainKey,
            subRows: subRows
        }

    })
    return final
}
console.log(before.data)
console.log(transformData(before.data))


//   const expected = [
//     {
//       metric: "Sales",
//       subRows: [
//         {
//           metric: "sales",
//           reference: "current",
//           February_week1: 256788.0,
//           February_week2: 256788.0,
//           February_week3: 256788.0,
//           February_week4: 256788.0,
//         },
//         {
//           metric: "sales",
//           reference: "compare",
//           February_week1: 256788.0,
//           February_week2: 256788.0,
//           February_week3: 256788.0,
//           February_week4: 256788.0,
//         },
//         {
//           metric: "sales",
//           reference: "variance",
//           February_week1: 256788.0,
//           February_week2: 256788.0,
//           February_week3: 256788.0,
//           February_week4: 256788.0,
//         },
//       ],
//       uniqueId: "salesSales",
//       expandableCols: "metric",
//     },
//     {
//       metric: "Margin",
//       subRows: [
//         {
//           metric: "margin",
//           reference: "current",
//           February_week1: 256788.0,
//           February_week2: 256788.0,
//           February_week3: 256788.0,
//           February_week4: 256788.0,
//         },
//         {
//           metric: "margin",
//           reference: "compare",
//           February_week1: 256788.0,
//           February_week2: 256788.0,
//           February_week3: 256788.0,
//           February_week4: 256788.0,
//         },
//         {
//           metric: "margin",
//           reference: "variance",
//           February_week1: 256788.0,
//           February_week2: 256788.0,
//           February_week3: 256788.0,
//           February_week4: 256788.0,
//         },
//       ],
//     },
//   ];
  
  