module.exports = function check(str, bracketsConfig) {
  let arr = str.split( '' );
  for (let count = 0; count < arr.length; count += 1) {
  for (let counter = 0; counter < bracketsConfig.length; counter += 1) {
    if (arr[count] === bracketsConfig[counter][0] && arr[count + 1] === bracketsConfig[counter][1]) {
              arr.splice(count, 2);
              count = -1;
          }
  }
  }
  let res = arr.length ? false : true;

return res;
}
