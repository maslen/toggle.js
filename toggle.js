function toggle (array) {
  var index = 0;
  var length = array.length;
  return function () {
    index++;
    if (index >= length){
      index = 0;
    }
    return array[index];
  };
}