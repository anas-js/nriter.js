# nriter.js
Simple writing effect.


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
      data-speed="1500" 
    >
      Text
    </h1>
```



### Customize


**[[[[Speed]]]]**

You can control the writing speed by adding `data-speed="numberHere"`.

Speed is measured in milliseconds.

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


**[[[[Delay]]]]**

