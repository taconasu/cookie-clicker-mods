# cookie-clicker-mods
Cookie Clickerのmod。wikiにあるやつをそれとなくsteam版で使えるようにした。v2.04 対応。それ以降のバージョンでの動作は保証しません。

## AutoGoldenCookie

ゴールデンクッキー出現時に自動でクリックします。
加えて、ゴールデンクッキーが5秒ごとに出現するようになります。

もし自動クリックのみ有効にしたい場合は、`AutoGoldenCookie/main.js`の以下のインターバルをコメントアウトまたは削除して利用してください。

```js:main.js
setInterval(function() {
  Game.shimmerTypes.golden.time = Game.shimmerTypes.golden.maxTime;
  /*Game.shimmers.forEach(function(shimmer){shimmer.wrath = 0});*/
  Game.shimmers.forEach(function(shimmer){shimmer.pop()});
}, 5000);
```
