import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/cjs';
import './Demo8.css';

export default class Demo8 extends Component {

    code = `
//////////////////// NgxAni ////////////////////
//use css transtionend event
AniX.useTranstionEvent = true;
//Compatible with old browsers, old browsers do not have animation
AniX.compatible = true;
//debug mode
AniX.debug = true;
//(readonly) has css Transition?
console.log(AniX.support);

//////////////////// NgxCss ////////////////////
//is support css translate3d?
CssX.has3d();
//get css prefix
CssX.getPrefix();
//set transformOrigin to  center center;
CssX.setOriginCenter(ele);
`;

    render() {
        return (
            <div>
                <h4 id="demo8">others</h4>
                <pre><code class="javascript">{this.code}</code></pre>
            </div>
        );
    }
}