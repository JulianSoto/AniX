![logo](https://github.com/a-jie/AniX/blob/master/logo/logo.png?raw=true)


### AniX - A super easy and lightweight css animation library.

## Overview
AniX is a lightweight and easy-to-use animation library with excellent performance and good compatibility for modern browsers.  

It uses the native **css transition** attribute, better than js simulation animation performance. And you can also enable hardware acceleration with it.  

AniX only less than **3k(gzip)** in size. It achieves almost the same effect as any other huge library of animations.

View demo, please click [here](https://a-jie.github.io/AniX/).

![code](https://github.com/a-jie/AniX/blob/master/logo/code.png?raw=true)

## Install and Include

#### Install and Import anix.

```bash 
$ npm install anix --save-dev
...

import { AniX } from 'anix';
```

[![anix](https://nodei.co/npm/anix.png)](https://npmjs.org/package/anix)

#### Use the umd version [anix.umd.js](https://github.com/a-jie/AniX/blob/master/dist/umd/anix.umd.js). Check out the [UMD](https://github.com/umdjs/umd) repository for more details.

```html
<script src="./js/anix.umd.ts" type="text/javascript"></script>
```

#### Use jQuery plugin [anix.jq.js](https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js), that supports chain syntax.

```html
<script src="./js/jquery.min.js" type="text/javascript"></script>
<script src="./js/anix.jq.js" type="text/javascript"></script>
```

## Usage

#### Basic usage.

```js
AniX.to(dom, 1, {
    x: 300,
    y: 10,
    scale: 2,
    delay: 0.5,
    onComplete: function(){
      	alert("over");
    }
});

// or 
AniX.to(dom, 1, {
    "width": "200px",
    "background-color": "#ffcc00",
    "ease": AniX.ease.easeOutBack,
    "onComplete": () => {
        //STATE : COMPLETED!
        console.log("STATE : COMPLETED!");
    }
});
```

#### jQuery plug-in usage [anix.jq.js](https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js)

```js
$('.demo').css({'left':'0px'}).to(.5, {
    'left': '500px',
    'background-color': '#ffcc00'
});
```

## Documentation

#### General documents please visit [https://a-jie.github.io/AniX/](https://a-jie.github.io/AniX/)

#### jQuery plug-in documents are as follows 

```js
//like AniX.to
$(..).to(time: number, args: {ease?:string; delay?:number; [propName:string]:any;})

//like AniX.fromTo
$(..).fromTo(time: number, fromArgs: Object, toArgs: Object)

//like AniX.kill
$(..).kill(complete?: boolean)

//like AniX.get
$(..).getTransform(param: any)

//like AniX.ease
$.ease.easeOut
```


## Test and Build

#### install and build all task
```bash
git clone git@github.com:a-jie/AniX.git
npm install
npm run all
```

#### build jquery or umd version
```bash
npm run jq
npm run umd
```

#### demo example (the document page) is used [create-react-app](https://github.com/facebookincubator/create-react-app)

```bash
cd ./example
npm install
npm start
npm run build
```
Then open [http://localhost:3000/](http://localhost:3000/)

#### Use test cases
view the `./test/test.html`

## Other
There are other versions here, of course, they are not necessary. [Angular version](https://github.com/a-jie/NgxAni), [React version](https://github.com/a-jie/react-anix) and [Vue version](https://github.com/GeoffZhu/vue-anix)...

## License

[The MIT License](https://opensource.org/licenses/MIT).
