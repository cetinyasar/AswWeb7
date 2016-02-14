var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var dragula_directive_1 = require('../lib/angular2-dragula/directives/dragula.directive');
var dragula_provider_1 = require('../lib/angular2-dragula/providers/dragula.provider');
var Kolonlar = (function () {
    function Kolonlar() {
        this.firstBag = [];
        console.log("Kolonlar constructor");
    }
    Kolonlar = __decorate([
        core_1.Component({
            selector: 'kolonlar',
            directives: [dragula_directive_1.Dragula],
            viewProviders: [dragula_provider_1.DragulaService],
            template: "\n  <div class='parent'>\n    <label for='hy'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>\n    <div class='wrapper'>\n      <div class='container' [dragula]='\"first-bag\"'>\n        <div>You can move these elements between these two containers</div>\n        <div>Moving them anywhere else isn't quite possible</div>\n        <div>There's also the possibility of moving elements around in the same container, changing their position</div>\n      </div>\n      <div class='container' [dragula]='\"first-bag\"'>\n        <div>This is the default use case. You only need to specify the containers you want to use</div>\n        <div>More interactive use cases lie ahead</div>\n        <div>Make sure to check out the <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!</a></div>\n      </div>\n    </div>\n    <pre>\n      <code>\n&lt;div [dragula]=&#039;&quot;first-bag&quot;&#039;&gt;&lt;/div&gt;\n&lt;div [dragula]=&#039;&quot;first-bag&quot;&#039;&gt;&lt;/div&gt;\n      </code>\n    </pre>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Kolonlar);
    return Kolonlar;
})();
exports.Kolonlar = Kolonlar;
//# sourceMappingURL=Kolonlar.js.map