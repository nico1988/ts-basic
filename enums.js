var value = 'UP';
if (value === "UP" /* Up */) {
    console.log('go up!');
}
var D;
(function (D) {
    D[D["UP"] = 0] = "UP";
    D[D["DOWN"] = 1] = "DOWN";
    D[D["LEFT"] = 2] = "LEFT";
    D[D["RIGHT"] = 3] = "RIGHT";
})(D || (D = {}));
console.log('D.UP:::', D.UP);
console.log('D.UP:::', D[0]);
var S;
(function (S) {
    S["UP"] = "SSS";
    S[S["DOWN"] = void 0] = "DOWN";
    S[S["LEFT"] = void 0] = "LEFT";
    S[S["RIGHT"] = void 0] = "RIGHT";
})(S || (S = {}));
