function isObjectEqual(object1, object2) {
  const keys1Array = Object.keys(object1)
  const keys2Array = Object.keys(object2)

  if (keys1Array.length != keys2Array.length) {
    return false
  }
  for (let i = 0; i < keys2Array.length; i++) {
    const value1 = object1[keys1Array[i]] //获取对象的键对应的值
    const value2 = object2[keys1Array[i]]
    const areObject = isObejct(value1) && isObejct(value2) //判断获取到的值是不是对象

    if (areObject && !isObjectEqual(value1, value2) || !areObject && value1 !== value2) { //如果获取到的值是对象,则递归的调用判断对象是否相等,如果不是对象,则判断值是否相等
      return false
    }
  }
  return true
}

function isObejct(object) {
  return object != null && typeof object === "object"
}

console.log(isObjectEqual(obj1, obj2));