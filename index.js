module.exports = function pcall(fn) {
  var args = [].slice.call(arguments, 1);
  return new Promise(function(resolve, reject) {
    var args2 = args.concat(function(err, res) {
      if (err) return reject(err);
      return resolve(res);
    });
    if (Array.isArray(fn)) return fn[0].apply(fn[1], args2);
    return fn.apply(null, args2);
  });
}
