function wow() {
  let args = Object.values(arguments);
  if (args.length !== 1) {
    return args[0] + args[1];
  } else {
    return function(num2) {
      return args[0] + num2;
    };
  }
}
