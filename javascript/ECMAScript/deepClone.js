function deepClone(target) {
    debugger
    let result;
    if (typeof target === 'object') {
      if (Array.isArray(target)) {
        result = [];
        for (let i in target) {
          result.push(deepClone(target[i]))
        }
      } else if(target===null) {
        result = null;
      } else if(target.constructor===RegExp){
        result = target;
      }else {
        result = {};
        for (let i in target) {
          result[i] = deepClone(target[i]);
        }
      }
    } else {
      result = target;
    }
    return result;
  }

  deepClone({
      v1:'nb',
      v2:'lj',
      c3:'i love it'
  })