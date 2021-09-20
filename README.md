# :cookie: cookie-clicker-mods

Cookie Clickerのmod。wikiにあるやつをそれとなくsteam版で使えるようにした。
`v2.04` 対応。それ以降のバージョンでの動作は保証しません。

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

### AutoFortuneCookie

フォーチュンクッキー関連のニュースを自動でクリックします。

※Steam版日本語での動作しか想定していません。
別の環境で使いたい場合、`AutoFortuneCookie/main.js`の正規表現部分を任意に書き換えて利用してください。

```js
if (Game.Ticker.match(/フォーチュン/))
```

### CreateLump

好きな砂糖玉を成長させる。
セーブがトリガーになっているので収穫前に任意の種類のパラメータを指定したうえでセーブしてください。

種類については`CreateLump/main.js`のパラメータを変更して対応してください。

```js
/* 砂糖の種類 0:通常 / 1:分岐 / 2:金色 / 3:肉塊 / 4:キャラメル */
Game.lumpCurrentType=2;
```

## 参考情報

### ソースコード

http://orteil.dashnet.org/cookieclicker/main.js

### Game.Notifyで利用するアイコン

左上の画像を`[0, 0]`として頑張ってインデックスを数えて好きなものを指定する。

https://coderpatsy.bitbucket.io/cookies/img/icons.png

