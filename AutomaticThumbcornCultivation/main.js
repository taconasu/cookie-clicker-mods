Game.registerMod("automatic thumbcorn cultivatio mod",{
	init: () => {
		Game.Notify(`AutomaticThumbcornCultivation`,`親指コーン育てるマン`,[2,32]);

		setInterval(() => {
			const fg = Game.Objects['Farm'].minigame; 
			fg.seedSelected = fg.plants['thumbcorn'].id

			for(let i = 0; i < 6; ++i){
				for(let j = 0; j < 6; ++j){
					const activeTile = fg.getTile(i,j);

					// 空いているマスに親指コーンを植える
					if(fg.isTileUnlocked(i,j)){
						if(activeTile[0] == 0){ 
							fg.useTool(fg.seedSelected,i,j);
						}
					}

					// 寿命が短い植物を自動収穫(次のTickで枯れる場合)
					if(activeTile[0] == 0){
						continue;
					}
					const dy=((activeTile[1]+Math.ceil(fg.plantsById[activeTile[0] - 1].ageTick+fg.plantsById[activeTile[0] - 1].ageTickR))>=100?1:0); 
					if(dy == 1){
						fg.clickTile(i,j);
					}
				}
			}
			fg.seedSelected = -1;
		} ,500);
	}
});