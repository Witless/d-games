const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();

class buscaminas {

    constructor(alto, largo, minas){
        this.alto = alto;
        this.largo = largo;
        this.minas = minas;
        this.mapa = [];

        this.constructorMinas();
        this.nato();
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
                lista[x*this.alto+y] = [x,y];
                this.mapa[x][y]=":one:";
            }

        }
        while(this.minas){
            var rand = Math.floor(Math.random() * lista.length);
            this.mapa[lista[rand][0]][lista[rand][1]] = ":bomb:";
            console.log(this.mapa[lista[rand][0]][lista[rand][1]]);
            this.minas--;
            lista.splice(rand, 0);
        }
    }

    nato(){
        var contador = 0;

        for(var i=0; i<this.alto; i++){
            for(var j=0; j<this.largo; j++){
                if(this.mapa[i][j] !== ":bomb:"){
                    for(var k=-1; k<2; k++){
                        for(var l=-1; l<2; l++){
                            if(i+k >= 0 && i+k < this.alto && j+l >=0 && j+l < this.largo){
                                console.log(this.mapa);
                                console.log("----------");
                                if(this.mapa[i+k][j+l] === ":bomb:"){
                                    contador++;
                                }
                            }
                        }
                    }
                    switch(contador) {
                        case 0:
                            this.mapa[i][j] = ":zero:";
                            break;
                        case 1:
                            this.mapa[i][j] = ":one:";
                            break;
                        case 2:
                            this.mapa[i][j] = ":two:";
                            break;
                        case 3:
                            this.mapa[i][j] = ":three:";
                            break;
                        case 4:
                            this.mapa[i][j] = ":four:";
                            break;
                        case 5:
                            this.mapa[i][j] = ":five:";
                            break;
                        case 6:
                            this.mapa[i][j] = ":six:";
                            break;
                        case 7:
                            this.mapa[i][j] = ":seven:";
                            break;
                        case 8:
                            this.mapa[i][j] = ":eight:";
                            break;
                    }
                    contador = 0;
                }
            }
        }
    }
    ver(fila){
        return "||" + this.mapa[fila].join("||||") + "||";
        for(var x=0; x<this.alto; x++){
            for(var y=0; y<this.largo; y++){
                console.log(this.mapa[x][y]);
            }
        }
    }
}

//module.exports = new buscaminas();
module.exports = buscaminas;