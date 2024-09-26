import { Boot } from './scenes/Boot';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import { CardGameScene } from "./scenes/CardGameScene";
import { CardFace } from "./objects/CardFace";
import {GameOver} from "./scenes/GameOver";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#d3d3d3',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        CardGameScene,
        GameOver,
    ],
    object: [
        CardFace,
    ]
};

export default new Phaser.Game(config);
