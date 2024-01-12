const regex = /^(?!.*_)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
let pass = "SALMANs1_"
console.log(regex.test(pass));
