var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//vamos ve se isso funciona amanhã 
var gato = /** @class */ (function () {
    function gato(nome, idade) {
        this.nome = '';
        this.idade = Number;
        this.nome = nome;
        this.idade = idade;
    }
    gato.prototype.gatos_feliz = function () {
        console.log('os gatos tão feliz');
    };
    return gato;
}());
var filho = /** @class */ (function (_super) {
    __extends(filho, _super);
    function filho(nome, idade, filho) {
        var _this = _super.call(this, nome, idade) || this;
        _this.filho = '';
        _this.filho = filho;
        return _this;
    }
    return filho;
}(gato));
var gb = new filho('lucas', 5, 'miguel');
console.log(gb.nome);
console.log(gb.idade);
console.log(gb.filho);
gb.gatos_feliz();
