# nriter.js
Simple writing effect.

<br/>

## Usage

### CDN
Add it before the `<body>` close tag
```
<script src="https://nonehub.github.io/nriter.js/js/nriter.min.js"></script>
```

Add it before the `<head>` close tag
```
<link rel="stylesheet" href="https://nonehub.github.io/nriter.js/css/nriter.min.css" />
```

Or Download files


### Use
Any element add class 
`class="nriter-writ"` & `data-text="yourTextHere"`

Example : 
```
    <h1 class="nriter-writ" data-text="yourTextHere">Text</h1>
```

If you want to add more than one word, separate them with a mark of `,,`

Example :
```
    <h1
      class="nriter-writ"
      data-text="TextHere,,TextHere"
    >
      Text
    </h1>
```



## Customize
<br/>


**[[[[Speed]]]]**

You can control typing speed by using `data-speed`.

measured in milliseconds.

Example : 
```
    <h1
      class="nriter-writ"
      data-text="TextHere"
      data-speed="1500" 
    >
      Text
    </h1>
```
<br/>
<br/>
<br/>


**[[[[waiting]]]]**

Waiting time from the current sentence until changing the sentence to the next sentence. 
To control it use `data-waiting`.

measured in milliseconds.

Example : 
```
    <h1
      class="nriter-writ"
      data-text="TextHere"
      data-waiting="1500" 
    >
      Text
    </h1>
```

<br/>
<br/>
<br/>


**[[[[value]]]]**

To change a shape ( `|` ) to another shape, use `data-value`.

Example : 
```
    <h1
      class="nriter-writ"
      data-text="TextHere"
      data-value="+" 
    >
      Text
    </h1>
```

<br/>


## License
[MIT License](https://github.com/nonehub/nriter.js/blob/main/LICENSE)

By [none](https://github.com/nonehub)

<br/>

## Follow me
[instagram](https://www.instagram.com/dev_none/)
