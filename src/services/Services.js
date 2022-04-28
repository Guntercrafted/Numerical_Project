import { compile, derivative } from 'mathjs';
var Algebrite = require('algebrite');

const getXL_XR_from_API = async () => {
    const response = await fetch("http://localhost:5004/api/function_LR").then(res => {
       // console.log(res.json());
        return res.json();
    })
    return response;

}

const func = (fx, X) => {
    var expr = compile(fx); // f(x)
    let scope = { x: parseFloat(X) }; //f(x) ; x=input
    return expr.evaluate(scope);
}
const funcDiff = (fx, X) => {
    var expr = derivative(fx, 'x');
    let scope = {x:parseFloat(X)};
    return expr.evaluate(scope); 
}

const funcDiffDegreeN = (fx, X, degree) => {
    var temp = fx, expr;
    for (var i=1 ; i<=degree ; i++) {
        temp = derivative(temp, 'x')
        expr = temp
    }
    
    let scope = {x:parseFloat(X)}
    return expr.evaluate(scope)
}
const error = (xnew, xold) => {
    return Math.abs((xnew - xold) / xnew);
}
const exactIntegrate = (fx, a, b) => {
    var expr = compile(Algebrite.integral(Algebrite.eval(fx)).toString())
    return expr.evaluate({x:b}) - expr.evaluate({x:a})

}
export { getXL_XR_from_API, func, funcDiff, funcDiffDegreeN, error, exactIntegrate };