function snapCrackle(maxValue){
    let meuRetorno = [];
    for (let i = 1; i <= maxValue; i++){
        if (i%2!=0 && i%5==0){
            meuRetorno.push ("SnapCrackle");
         }
         else if (i%2!=0){
              meuRetorno.push  ("Snap");
         }
         else if (i%5==0){
              meuRetorno.push ("Crackle");
         }

         else if (!(i%2!=0 && i%5==0)) {
             meuRetorno.push (i);
         }
    }
    return meuRetorno.join(", ");
}
console.log (snapCrackle());