>    # [MDN Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)

```js
var x=document.getElementById("demo");
    var now_location={
        init:function () {
            now_location.getNowLocation()
        },
        getNowLocation:function () {
            if (navigator.geolocation)
            {
                console.log(navigator.geolocation)
                navigator.geolocation.getCurrentPosition(now_location.showPosition);
            }
            else{
                x.innerHTML="不限";
            }
        },
        showPosition:function(position)
        {
            x.innerHTML="Latitude: " + position.coords.latitude +
                "<br />Longitude: " + position.coords.longitude;
        }
    }
    now_location.init()
```

chrome浏览器提示

<h3 style="color:#123456">[Deprecation] getCurrentPosition() and watchPosition() no longer work on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.</h3>

- js获得地理位置需要有https服务

> [Web 端获取地理位置](https://blog.csdn.net/tjcjava/article/details/82961956?locationNum=13&fps=1)

