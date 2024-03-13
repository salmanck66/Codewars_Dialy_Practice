function SmallestIntegerFinder(args) {
    args.sort((a, b) => a - b);
    return args[0];
}


console.log(SmallestIntegerFinder([34, -345, -1, 100]));