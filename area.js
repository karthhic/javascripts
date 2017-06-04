var fs = require('fs');
var Vector3 = require('vector-3');
var vectors = [];
var faces = [];
var vpoints = [];
var triarea=[];
var output = [];
var location = process.argv[2];
// Reading the file
var img = fs.readFile(location, function (err, data) {
   if (err) {
      return console.error(err);
   }
   var _data = (data.toString());
   var arydata = _data.split(/\n+/);
// seperating the vertices and faces in seperate arrays
   for (i=0;i<arydata.length;i++){
     var ref = (arydata[i][0]);
     var cord = arydata[i].split(' ')
     if (ref == "v"){
       vectors.push(new Vector3(parseFloat(cord[2]),parseFloat(cord[3]),parseFloat(cord[4])));
     }
     else if (ref == "f"){
       tmpary = [parseFloat(cord[1]),parseFloat(cord[2]),parseFloat(cord[3])];
       faces.push(tmpary);
     }
   }
//declaring the corresponding vertices to its faces.
   for (i=0;i<faces.length;i++){
     var a = faces[i][0];
     var b = faces[i][1];
     var c = faces[i][2];
     faces[i][0] = vectors[a-1];
     faces[i][1] = vectors[b-1];
     faces[i][2] = vectors[c-1];
   }
// Calculating the area of the face
   surface = function (face){
     var a = new Vector3(faces[face][0]);
     var _a = new Vector3(faces[face][0]);
     var b = new Vector3(faces[face][1]);
     var c = new Vector3(faces[face][2]);
     var ab = new Vector3(b.substract(a));
     var ac = new Vector3(c.substract(_a));
     var crss = new Vector3(ab.cross(ac));
     var magni = new Vector3(crss.multiply(crss));
     var magtot = magni.x+magni.y+magni.z;
     var area = (Math.sqrt(magtot)/2);
     return area;
   }
// Collecting the area of all the faces inside an array.
   for (i=0;i<faces.length;i++){
     var tmp = surface(i);
     output.push(tmp);
   }
// adding all the values inside the array. [Total area]
   var total = (output.reduce((a, b) => a+b,0));
   console.log(total);
});
