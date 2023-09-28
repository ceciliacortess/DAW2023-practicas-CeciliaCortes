function esErroneo(){
    probabilidad = Math.random();
    return probabilidad < 0.3;
}

cErroneos = 0;
cCorrectos = 0;
cTotales = 0;

for ( i = 0; i < 10; i++) {
    try{
       if(esErroneo()){
            throw new Error('Commit erroneo');
        }else{
            cCorrectos++;
        }
    }catch(error){
        console.error('Error en el commit ' + (i+1));
        cErroneos++;
    }
    console.log('Enviando commit '+ (i+1));
    cTotales++;
}
console.log('Commits totales enviados: ' + cTotales);
console.log('Commits correctos: ' + cCorrectos);
console.log('Commits erróneos: ' + cErroneos);

