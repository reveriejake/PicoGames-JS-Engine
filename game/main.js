import App from "./engine/app.js";
import Entity from "./engine/entity.js";

// Test Behaviours
import CameraTestBehaviour from "./behaviours/cameraTestBehaviour.js";
import SinMoveBehaviour from "./behaviours/sinMoveBehaviour.js";
import RotateBehaviour from "./behaviours/rotateBehaviour.js";

// Test Renderers
import CircleRenderer from "./engine/renderers/circleRenderer.js";
import RectangleRenderer from "./engine/renderers/rectangleRenderer.js";
import SpriteRenderer from "./engine/renderers/spriteRenderer.js";
import SimpleMoveInputBehaviour from "./behaviours/simpleMoveInputBehaviour.js";
import FollowBehaviour from "./behaviours/followBehaviour.js";
import PlayerController from "./behaviours/playerController.js";

import Camera from './engine/camera.js';
import Gradients from "./engine/gradients.js";
import Renderer from "./engine/renderer.js";
import SceneGraph from "./engine/scenegraph.js";

class Game extends App {

    loadContent() {

        // Main Camera =============================================================
        const cameraA = new Entity('Camera A', Camera, SimpleMoveInputBehaviour).getComponent(Camera);
        cameraA.pixelWidth = 1920;
        cameraA.pixelHeight = 1080;
        cameraA.clearType = Camera.ClearType.COLOR;
        cameraA.clearFadeAlpha = 0.1;
        cameraA.setClearGradientStops(Gradients.Evening);
        cameraA.clearColor = 'black';

        // Camera B ================================================================
        // const cameraB = new Entity('Camera B', Camera, SimpleMoveInputBehaviour).getComponent(Camera);
        // cameraB.viewOriginX = 0.5;
        // cameraB.viewWidth = 0.5;

        // const camBMovement = cameraB.entity.getComponent(SimpleMoveInputBehaviour);

        // Player ==================================================================
        // const playerSprite = new Image();
        // playerSprite.src = 'game/content/adventurer_sprite_sheet.png';
        // playerSprite.onload = () => {

        //     const player = new Entity('Player', SpriteRenderer, PlayerController, FollowBehaviour);
        //     player.transform.scale.x = 4;
        //     player.transform.scale.y = 4;

        //     const playerSpriteRenderer = player.getComponent(SpriteRenderer);// new SpriteRenderer(playerSprite, playerSprite.width, playerSprite.height);
        //     playerSpriteRenderer.setSprite(playerSprite, 32, 32);
        //     playerSpriteRenderer.flipX = true;
        //     playerSpriteRenderer.sortOrder = 100;

        //     // Attach a follow script to our camera
        //     const followBehaviour = cameraA.entity.addComponent(FollowBehaviour);
        //     followBehaviour.target = player.transform;
        //     //followBehaviour.offsetY = -200;
        // };
        
        // Clouds ====================================================================
        // const cloudImg = new Image();
        // cloudImg.src = 'game/content/testcloud.png';

        // cloudImg.onload = () => {

        //     for (let i = 0; i < 50; i++) {

        //         const cloud = new Entity('Cloud', SpriteRenderer, SinMoveBehaviour);
        //         cloud.transform.position.x = -2500 + Math.random() * 5000;
        //         cloud.transform.position.y = -600 + Math.random() * 500;
                
        //         const spriteRenderer = cloud.getComponent(SpriteRenderer);
        //         spriteRenderer.setSprite(cloudImg, cloudImg.width, cloudImg.height);
        //         spriteRenderer.flipX = Math.random() > 0.5 ? true : false;

        //         const sinMovement = cloud.getComponent(SinMoveBehaviour);
        //         sinMovement.magnitudeY = 0;
        //         sinMovement.speed = Math.random() * 0.5;
        //     }
        // };
        

        // Many Circles =============================================================
        // const minCirlces = -2500;
        // const maxCircles = 2500;

        // for (let i = 0; i < 2500; i++) {
        //     const sprite = new Entity('Circle', CircleRenderer, SinMoveBehaviour);

        //     sprite.transform.position.x = minCirlces + Math.random() * (maxCircles - minCirlces);
        //     sprite.transform.position.y = minCirlces + Math.random() * (maxCircles - minCirlces);
            
        //     sprite.transform.scale.x = 1;
        //     sprite.transform.scale.y = 1;

        //     const circleRenderer = sprite.getComponent(CircleRenderer);
        //     circleRenderer.radius = 5 + Math.random() * 10;
        //     circleRenderer.color = `hsl(${ Math.random() * 360 }, 75%, 50%)`;

        //     const spriteSin = sprite.getComponent(SinMoveBehaviour);
        //     spriteSin.speed = Math.random() * 2;
        //     spriteSin.magnitudeX = 150;
        //     spriteSin.magnitudeY = 150;
        // }


        // Many Skellys =============================================================
        // const skellyImg = new Image();
        // skellyImg.src = 'game/content/BODY_skeleton.png';

        // skellyImg.onload = ()=> {
            
        //     const minSkelly = -2500;
        //     const maxSkelly = 2500;

        //     for (let i = 0; i < 1000; i++) {
        //         const sprite = new Entity('Skelly', SpriteRenderer, RotateBehaviour);

        //         sprite.transform.position.x = minSkelly + Math.random() * (maxSkelly - minSkelly);
        //         sprite.transform.position.y = minSkelly + Math.random() * (maxSkelly - minSkelly);
                
        //         const randScale = 1 + Math.random();
        //         sprite.transform.scale.x = randScale;
        //         sprite.transform.scale.y = randScale;

        //         const spriteRenderer = sprite.getComponent(SpriteRenderer);
        //         spriteRenderer.setSprite(skellyImg, 64, 64);

        //         const spriteSin = sprite.getComponent(RotateBehaviour);
        //         spriteSin.speed = -3 + Math.random() * 6;
        //     }
        // };


        // Crate ========================================================================
        // const crateImg = new Image();
        // crateImg.src = 'game/content/crate1_diffuse.png';

        // crateImg.onload = () =>{

        //     const crate = new Entity('Crate', SpriteRenderer, SinMoveBehaviour, RotateBehaviour).getComponent(SpriteRenderer);
        //     crate.setSprite(crateImg, crateImg.width, crateImg.height);
        //     crate.transform.scale.x = 0.5;
        //     crate.transform.scale.y = 0.5;
        //     crate.sortOrder = 0;

        //     const sinMover = crate.getComponent(SinMoveBehaviour);
        //     sinMover.magnitudeX = 800;
        //     sinMover.magnitudeY = 300;
        // }
        
        
        // Rectangle Spinner ============================================================
        const rect = new Entity('Rectangle', RotateBehaviour, RectangleRenderer);
        rect.transform.position.x = 0;

        const rectRenderer = rect.getComponent(RectangleRenderer);
        rectRenderer.color = 'purple';
        rectRenderer.sortOrder = 150;
        rectRenderer.width = 300;

        const rectRotator = rect.getComponent(RotateBehaviour);
        rectRotator.speed = 2;

        // const sinMovement = rect.addComponent(SinMoveBehaviour);
        // sinMovement.magnitudeX = 750;
        // sinMovement.magnitudeY = 200;
        // sinMovement.speed = 1;


        // Scene Management Test ==========================================================
        //SceneGraph.ExportScene('test.json');

        Renderer.enableGizmos();
    }
}

const game = new Game(1920, 1080);
game.run();