Game.registerMod("auto golden cookie mod",{
	init:function(){
		Game.Notify(`AutoGoldenCookie Mod`,`automation clicker.`,[29,28]);

		setInterval(function(){
			for (var i in Game.shimmers) {
				Game.shimmers[i].pop();
			}
		}, 500);

		setInterval(function() {
			Game.shimmerTypes.golden.time = Game.shimmerTypes.golden.maxTime;
			/*Game.shimmers.forEach(function(shimmer){shimmer.wrath = 0});*/
			Game.shimmers.forEach(function(shimmer){shimmer.pop()});
		}, 5000);
	},
});
