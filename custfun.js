function ispresent(vari,listi){
  for(i=0;i<listi.length;i++){
    if(vari == listi[i]){
      return i;
    }
    else{
      //console.log("notmatch");
    }
    if (i == (listi.length-1)){
      return -1;
    }
  }
}
