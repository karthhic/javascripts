var time = [0,5010,10017,15019,20039,25051,30060,35072,40082,45089,50091,55113,60124,65134,70142,75151,80150,85177,90185,95196,100210,105213,110227,115235,120245,125258,130258,135277,140297,145301,150296,155324,160329,165348,170350,175359,180371];
var energy = [0.812886406898493,0.813192433757780,0.810990933757356,0.816405390591090,0.815299256405297,0.811068397947942,0.815911816338431,0.812997753397619,0.811439980786638,0.810754741346567,0.816200555534360,0.815401049183736,0.814125010617572,0.817416897379554,0.813266805555551,0.816072867279048,0.818982083333329,0.817472532484264,0.815387137385471,0.819886491894190,0.809624385369614,0.818048025652562,0.814022582872177,0.819594271659846,0.814723902549740,0.813402769300668,0.813816923650104,0.817534897825450,0.810787004241939,0.814365364837643,0.812664467519121,0.814841814041133,0.811725663013455,0.814547908142934,0.811193639083435,0.818111551242401,0.808661311730276];
var forecast =[185380,190387,195396,200404,205413,210421,215430,220438,225447,230455,235464,240472,245481,250489];
var sec = time.reduce((previous, current) => current += previous);
var watt = energy.reduce((previous, current) => current += previous);
var WS = [];
for(i=0;i<time.length;i++){
    var op = time[i]*energy[i];
    WS.push(op);
}
var timesqr = [];
for(i=0;i<time.length;i++){
    var op = (time[i])*(time[i]);
//console.log(op);
    timesqr.push(op);
}
var energysqr = [];
for(i=0;i<time.length;i++){
    var op = (energy[i])*(energy[i]);
//console.log(op);
    energysqr.push(op);
}
var sumWS = WS.reduce((previous, current) => current += previous);
var sumtimesqr = timesqr.reduce((previous, current) => current += previous);
var sumenergysqr = energysqr.reduce((previous, current) => current += previous);
var A = ((watt*sumtimesqr)-(sec*sumWS))/((time.length*(sumtimesqr))-((sec)*(sec)));
var B = ((time.length*sumWS)-((sec*watt)))/((time.length*(sumtimesqr))-((sec)*(sec)));
console.log("Linear forecasting by Regression");
console.log("");
console.log("Input Data [seconds,energy]");
var data =[];
for(i=0;i<time.length;i++){
var op = time[i]+", "+energy[i];
data.push(op);
}
console.log(data);
console.log("");
console.log("A="+A);
console.log("B="+B);
console.log("----------------------------");
var forecastop =[];
for(i=0;i<forecast.length;i++){
var op = A+(B*forecast[i]);
forecastop.push(op);
}
console.log("Output Prediction [seconds,energy]");
var output =[];
for(i=0;i<forecast.length;i++){
var op = forecast[i]+", "+forecastop[i];
output.push(op);
}
console.log(output);
