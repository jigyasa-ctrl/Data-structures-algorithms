// Showcase a working demo of method chaining in JavaScript by implementing the following example.

// Input:
// computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

// Output:
// 143545000
let total = 0;
function computeAmount() {
   
        function lacs(val) {
            total += val * 100000
            return computeAmount()
        }
        function crore(val) {
            total += val * 10000000
            return computeAmount()
        }
        function thousand(val) {
            total += val * 1000
            return computeAmount()
        }
        function value(){
            return total
        }

        return {
            lacs:lacs,
            crore: crore,
            thousand: thousand,
            value: value
        }

}
// console.log(computeAmount().lacs(15).crore(2).thousand(20).value())
console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value())
