# :cookie: cookie-clicker-mods
Cookie Clickerのmod。wikiにあるやつをそれとなくsteam版で使えるようにした。v2.04 対応。それ以降のバージョンでの動作は保証しません。

## Usage

1. 当リポジトリから使いたいMODファイルをダウンロード
2. ゲーム内の`オプション`→`MOD`→`MODの管理`から`/modsのフォルダーを開く`を選択
3. modsフォルダの`local`フォルダ内にダウンロードしたmodのフォルダをぶち込む
4. ゲーム再起動後、再びMODの管理を開き、使いたいときにMODを有効化する

## MODs

### AutoGoldenCookie

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

### SummonCookieStorm

クッキーストームが30秒ごとに発生します。
`AutoGoldenCookie`MODと併用することでとんでもない速度でクッキーが生成されます。
ゲームバランスはぶっ壊れますが、手っ取り早く進めたい場合に使えます。
