Game.registerMod("cultivation boost mod",{
	save: () => {
		Game.Notify(`cutationBoost`,`woodchipが1秒Tickになります`,[2,32]);

		const fg = Game.Objects['Farm'].minigame;
		fg.soils.woodchips.tick = 0.02
	}
});
