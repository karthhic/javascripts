var X = [0,5010,10017,15019,20039,25051,30060,35072,40082,45089,50091,55113,60124,65134,70142,75151,80150,85177,90185,95196,100210,105213,110227,115235,120245,125258,130258,135277,140297,145301,150296,155324,160329,165348,170350,175359,180371];

var T = [0.812886406898493,0.813192433757780,0.810990933757356,0.816405390591090,0.815299256405297,0.811068397947942,0.815911816338431,0.812997753397619,0.811439980786638,0.810754741346567,0.816200555534360,0.815401049183736,0.814125010617572,0.817416897379554,0.813266805555551,0.816072867279048,0.818982083333329,0.817472532484264,0.815387137385471,0.819886491894190,0.809624385369614,0.818048025652562,0.814022582872177,0.819594271659846,0.814723902549740,0.813402769300668,0.813816923650104,0.817534897825450,0.810787004241939,0.814365364837643,0.812664467519121,0.814841814041133,0.811725663013455,0.814547908142934,0.811193639083435,0.818111551242401,0.808661311730276];

var frc =[185380,190387,195396,200404,205413,210421,215430,220438,225447,230455,235464,240472,245481,250489];



var X_ = X.reduce((previous, current) => current += previous);
var T_ = T.reduce((previous, current) => current += previous);
var XT = [];
for(i=0;i<X.length;i++){
var op = X[i]*T[i];
XT.push(op);
}
var X2 = [];
for(i=0;i<X.length;i++){
var op = (X[i])*(X[i]);
//console.log(op);
X2.push(op);
}
var T2 = [];
for(i=0;i<X.length;i++){
var op = (T[i])*(T[i]);
//console.log(op);
T2.push(op);
}
var XT_ = XT.reduce((previous, current) => current += previous);
var X2_ = X2.reduce((previous, current) => current += previous);
var T2_ = T2.reduce((previous, current) => current += previous);

var A = ((T_*X2_)-(X_*XT_))/((X.length*(X2_))-((X_)*(X_)));
var B = ((X.length*XT_)-((X_*T_)))/((X.length*(X2_))-((X_)*(X_)));


console.log("Linear forecasting by Regression");
console.log("");
console.log("Input Data [X,T]");
var bas =[];
for(i=0;i<X.length;i++){
var op = X[i]+", "+T[i];
bas.push(op);
}
console.log(bas);
console.log("");
console.log("A="+A);
console.log("B="+B);
console.log("----------------------------");

var fore =[];
for(i=0;i<frc.length;i++){
var op = A+(B*frc[i]);
fore.push(op);
}
console.log("Output Prediction [X,T]");
var foret =[];
for(i=0;i<frc.length;i++){
var op = frc[i]+", "+fore[i];
foret.push(op);
}
console.log(foret);
