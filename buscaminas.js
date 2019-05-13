const Discord = require("discord.js");
const client = new Discord.Client();
class buscaminas {

    constructor(alto, largo, minas){
        this.alto = alto;
        this.largo = largo;
        this.minas = minas;
        this.mapa = [];
    }

    constructorMinas(){
        //To be simplified 
        for(var j = 0; j<this.alto; j++){
            this.mapa[j] = new Array(this.largo);
        }
        var lista = [];
        var i=0;
        for (var x=0; x<this.alto; x++) {
            for (var y = 0; y < this.largo; y++) {
                lista[i] = [x,y];
                i++;
                this.mapa[x][y]=0;
            }

        }
        while(this.minas){
            var rand = Math.floor(Math.random() * lista.length);
         /*   this.mapa[4][2] = 10;
            console.log(this.mapa[4][2]); */
            this.mapa[lista[rand][0]][lista[rand][1]] = 9;
            console.log(this.mapa[lista[rand][0]][lista[rand][1]]);
            this.minas--;
            lista.splice(rand, 0);
        }
    }
    ver(){
        for(var x=0; x<this.alto; x++){
            for(var y=0; y<this.largo; y++){
                console.log(this.mapa[x][y]);
            }
        }
    }
}

//module.exports = new buscaminas();
module.exports = buscaminas;