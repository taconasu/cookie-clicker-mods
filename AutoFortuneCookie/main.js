Game.registerMod("auto fortune cookie mod",{
	init: () => {
		Game.Notify(`AutoFortuneCookie`,`恋するフォーチュンクッキー`,[29,8]);

		setInterval(() => {
			if (Game.Ticker.match(/フォーチュン/)) {
			  Game.tickerL.click();
			}
		} ,500);
	}
});