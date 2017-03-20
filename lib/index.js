function curryMultiple({ fn, n: arity = 1 }) {
  arity = Number( arity );

  return (function nextCurried(prevArgsObj){
    return function curried(nextArgsObj = {}){
      var allArgsObj = (Object.keys( nextArgsObj ).length > 0) ?
        Object.assign( {}, prevArgsObj, nextArgsObj ) :
        prevArgsObj;

      if (Object.keys( allArgsObj ).length >= arity) {
        return fn( allArgsObj );
      }
      else {
        return nextCurried( allArgsObj );
      }
    };
  })( {} );
}

module.exports = curryMultiple;
