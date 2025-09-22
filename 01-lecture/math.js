// function add(str, a, b) {
//     return str + " " + (a + b);
// }
// function sub(str,a,b) {
//     return str + " " + (a - b);
// }
// module.exports = {add, sub}; // Object export

exports.add = (str, a, b) => {
    return str + " " + (a + b);
}
exports.sub = (str,a,b) => {
    return str + " " + (a - b);
} // export individual functions which is anonymous function