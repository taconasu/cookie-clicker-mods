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

### CiltivationBoost

※セーブがトリガーになっているMODです

woodchipsを選択すると約1秒ごとにTickが発生するようになります。
爆速で作物を育てたい場合にどうぞ。

以下の数値をいじることで好きな秒数に変更可能。
単位が`分`なのでそれっぽく計算して使ってね。

指定したTickになるのは現在のTick移行なのですぐに短縮させたい場合は、
`woodchips以外を選択した状態`→`MODを有効にした状態でセーブ`→`woodchipsに変更`をする。

```js
fg.soils.woodchips.tick = 0.02
```

### MutationBoost

※セーブがトリガーになっているMODです

植物の変異確率をいじれます。
:warning: 変異抽選の処理をソースコードからコピペして上書きするMODになっているため、ゲームのアップデートによって新しい植物が追加されたり、確率などに修正が起きた場合に正しく動作しなくなる危険性が高いです。

デフォルトで、女王ビーツ8個で女王ビーツ・豊潤が発生する確率が90%になっています。

```js
if (neighsM['queenbeet']>=8) muts.push(['queenbeetLump',0.9]); // デフォルトに戻したい場合は0.001に戻す
```

アイテム名や条件などをwikiで参照しつつそれっぽくカスタムしてください。

### AutomaticThumbcornCultivation

空いてるマスにThumbcorn(親指コーン)を自動で植え、次のTickで枯れてしまう植物を自動収穫してくれるMOD。
上述した`CiltivationBoost`MODと併用することで爆速で種まき→収穫を行い、収穫数関連の実績をすぐに開けることが可能になる。

## 参考情報

### ソースコード

http://orteil.dashnet.org/cookieclicker/main.js

農場に関するソースコードはこっち
https://orteil.dashnet.org/cookieclicker/minigameGarden.js

### Game.Notifyで利用するアイコン

左上の画像を`[0, 0]`として頑張ってインデックスを数えて好きなものを指定する。

https://coderpatsy.bitbucket.io/cookies/img/icons.png

