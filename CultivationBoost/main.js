Game.registerMod("cultivation boost mod",{
	init: () => {
		Game.Notify(`cutationBoost`,`save実行後、woodchipが1秒Tickになります`,[2,32]);
	},
	save: () => {
		const fg = Game.Objects['Farm'].minigame;
		fg.soils.woodchips.tick = 0.2
	}
});
