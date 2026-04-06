// Input:
const arr = [[1, [2, [3, 'foo', {'a': 1, 'b': 2}]], 'bar']];
const multiFilter = function(filter) {
    let context = this;
    return context.map((item) => {
        if(Array.isArray(item)){
            return item.multiFilter(filter);
        } else {
            if(filter(item)){
                return item
            }
            
        }
    }).filter((item) => item)
}

Array.prototype.multiFilter = multiFilter

const filtered = arr.multiFilter((e) => typeof e === 'string');
console.log(filtered);


// Output:
// [[[["foo"]],"bar"]]

// [[[['foo']], 'bar']]