import {Component} from 'angular2/core';
import {Dragula} from '../lib/angular2-dragula/directives/dragula.directive';
import {DragulaService} from '../lib/angular2-dragula/providers/dragula.provider';

@Component({
    selector: 'kolonlar',
    directives: [Dragula],
    viewProviders: [DragulaService],
    template: `
  <div class='parent'>
    <label for='hy'>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>
    <div class='wrapper'>
      <div class='container' [dragula]='"first-bag"'>
        <div>You can move these elements between these two containers</div>
        <div>Moving them anywhere else isn't quite possible</div>
        <div>There's also the possibility of moving elements around in the same container, changing their position</div>
      </div>
      <div class='container' [dragula]='"first-bag"'>
        <div>This is the default use case. You only need to specify the containers you want to use</div>
        <div>More interactive use cases lie ahead</div>
      </div>
    </div>
    <pre>
      <code>
&lt;div [dragula]=&#039;&quot;first-bag&quot;&#039;&gt;&lt;/div&gt;
&lt;div [dragula]=&#039;&quot;first-bag&quot;&#039;&gt;&lt;/div&gt;
      </code>
    </pre>
  </div>
  `
})
export class Kolonlar {
    constructor() {
        console.log("Kolonlar constructor");
    }
}

export const KOLONLAR: any[] = [Kolonlar];