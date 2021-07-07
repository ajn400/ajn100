```html
<html manifest="demo.cache">
```

```cache
CACHE MANIFEST
# 2012-02-21 v1.0.0
/theme.css
/logo.gif
/main.js

NETWORK:
login.php

FALLBACK:
/html/ /offline.html
```

app cache适合单页的应用程序。但是坑很多，service worker则规避了很多痛点

**Service Worker 的缓存机制是依赖 Cache API 实现的 Service worker 广泛使用了 promise**