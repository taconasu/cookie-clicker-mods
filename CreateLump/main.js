Game.registerMod("create lump mod",{
	init: function() {
		Game.Notify(`CreateLump Mod`,`任意の砂糖玉を生成`,[29,16]);
	},
	save:function(){
		/* 砂糖の種類 0:通常 / 1:分岐 / 2:金色 / 3:肉塊 / 4:キャラメル */
		Game.lumpCurrentType=2;
	},
});