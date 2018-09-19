function compareJSON(a, b) {
  let obj1 = JSON.parse(a);
  let obj2 = JSON.parse(b);
  let obj3 = {};
  let arr = [];

  for (var key in obj1,obj2) {
    if (obj1[key] != obj2[key]) {
      obj3[key] = obj1[key];
      arr.push(JSON.stringify(obj3));
      obj3 = {};
      obj3[key] = obj2[key]
      arr.push(JSON.stringify(obj3));
    }
  }
  if (arr.length === 0) {
    return 'There is no difference in objects';
  } else {
    return (JSON.stringify(arr));
  }
}
var a = '{"a": "hello", "b": {"c": 3}}';
var b = '{"a": "hello", "b": {"c": 11}}';
console.log(compareJSON(a,b));
