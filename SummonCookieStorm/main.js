Game.registerMod("summon cookie storm mod",{
	init:function(){
		Game.Notify(`SummonCookieStorm Mod`,`summon!!!.`,[22,16]);

		var newShimmer=new Game.shimmer("golden");

		setInterval(function(){
			newShimmer.force="cookie storm";
			newShimmer.pop();
		}, 30000);
	},
});