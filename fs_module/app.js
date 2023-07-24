const fs = require('fs')

//Ler arquivos
fs.readFile('calc.js','utf8', function(err, data){
    console.log(data)
})

//Atualizar arquivos
fs.writeFile('calc1.js','console.log("done")',function(err){
    console.log("Data Saved")
})
fs.appendFile('calculo.js', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

//Deletar arquivos
fs.unlink('calc1.js',function(err){
    console.log('Deleted')
})

//Renomear arquivos
fs.rename('calc.js','calculos.js', function(err){
    if(err) throw err
    console.log("File rename!")
})