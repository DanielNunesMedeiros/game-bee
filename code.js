

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["28051a24-c39d-4ffa-83c0-c0a547a85bad","f3b88f25-7895-4368-a32e-d99a56942ddb","0bd22aaf-597e-4ee7-bc5c-531b88e02b46","025b0c2c-7f45-432e-ba3d-d52ef23d4159","47256be3-00db-44d1-bbdc-0979f083b074","c2b22713-e37a-4ffd-8018-c9cbf9da6cbe","9f894b7e-93b6-4b26-907d-9fac7fef92d5","e2949db8-2bcb-4289-83d5-73a5b8efde47","b6f2bdb1-eae8-42db-8ab5-aae5e677d229","78b4efc5-9c47-438f-95da-73789ad281f1","04eb6d5c-3cd3-45c8-aee7-95b612480f6a","a8b594a2-845e-48dd-b9fa-9713194f0e3a"],"propsByKey":{"28051a24-c39d-4ffa-83c0-c0a547a85bad":{"name":"bee_left","sourceUrl":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png","frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":2,"version":"N602_cNy0LoPLXkwaUfCp2XJWPo86SUw","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":50},"rootRelativePath":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png"},"f3b88f25-7895-4368-a32e-d99a56942ddb":{"name":"bee_right","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":10,"version":"5LqErDwlgWGRWnnebRQ2Dox.vX9o7pTE","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":100},"rootRelativePath":"assets/f3b88f25-7895-4368-a32e-d99a56942ddb.png"},"0bd22aaf-597e-4ee7-bc5c-531b88e02b46":{"name":"bee_up","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"Fndyd4QAHkfBVh0vudD5VSqIN097dE6l","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":100},"rootRelativePath":"assets/0bd22aaf-597e-4ee7-bc5c-531b88e02b46.png"},"025b0c2c-7f45-432e-ba3d-d52ef23d4159":{"name":"bee_down","sourceUrl":null,"frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"Nx8z7dAb_mBa1XecYzJClPgy9o87fCAf","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":100},"rootRelativePath":"assets/025b0c2c-7f45-432e-ba3d-d52ef23d4159.png"},"47256be3-00db-44d1-bbdc-0979f083b074":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png"},"c2b22713-e37a-4ffd-8018-c9cbf9da6cbe":{"name":"mosca_d","sourceUrl":"assets/api/v1/animation-library/gamelab/oSoT3OtUjenPzKavo0ff9HsiHKUPAGol/category_animals/fly_1.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"oSoT3OtUjenPzKavo0ff9HsiHKUPAGol","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oSoT3OtUjenPzKavo0ff9HsiHKUPAGol/category_animals/fly_1.png"},"9f894b7e-93b6-4b26-907d-9fac7fef92d5":{"name":"mosca_a","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"l2_bSzzfjFi1CkPunVQLl1fNvOoGZLcJ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/9f894b7e-93b6-4b26-907d-9fac7fef92d5.png"},"e2949db8-2bcb-4289-83d5-73a5b8efde47":{"name":"mosca_w","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"3lMITjxrJn0YfhJMBsC.1KqiTaJWHS8H","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/e2949db8-2bcb-4289-83d5-73a5b8efde47.png"},"b6f2bdb1-eae8-42db-8ab5-aae5e677d229":{"name":"mosca_s","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"xGA_FoV2ndeYVqSEGvrnsmu_BGKbAM9y","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/b6f2bdb1-eae8-42db-8ab5-aae5e677d229.png"},"78b4efc5-9c47-438f-95da-73789ad281f1":{"name":"download.jpeg_1","sourceUrl":null,"frameSize":{"x":265,"y":190},"frameCount":1,"looping":true,"frameDelay":12,"version":"ok_GYMWFVTeMhpkRMYvDlZvSLrprfejl","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":265,"y":190},"rootRelativePath":"assets/78b4efc5-9c47-438f-95da-73789ad281f1.png"},"04eb6d5c-3cd3-45c8-aee7-95b612480f6a":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":".rtc4a2P2HckdoPxjIetw1rnsGX10oIp","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/04eb6d5c-3cd3-45c8-aee7-95b612480f6a.png"},"a8b594a2-845e-48dd-b9fa-9713194f0e3a":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"oiDy6hUlVcrcp.kv_qIihJ2RBt.XfYfY","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a8b594a2-845e-48dd-b9fa-9713194f0e3a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fundo = createSprite(200,200);
fundo.setAnimation("farm_land_1");
var bee = createSprite(200,200);
bee.setAnimation("bee_left");
bee.scale = 1.5;
var mosca = createSprite(100,100);
mosca.setAnimation("mosca_d");
mosca.scale = 0.075;
console.log("PEGUE A MOSCA!");
console.log("ABELHA: up, down, right, left");
console.log("MOSCA: w, a, s, d");

function draw(){
  
  beeMovement();
  
  moscaMovement();
  
  gameWin();
  
  limite();
 
drawSprites();  
}

function beeMovement(){
  if (keyDown("up")){
    bee.y = bee.y - 3;
    bee.setAnimation("bee_up");
  }
  if (keyDown("down")){
    bee.y = bee.y + 3;
    bee.setAnimation("bee_down");
  }
  if (keyDown("left")){
    bee.x = bee.x - 3;
    bee.setAnimation("bee_left");
  }
  if (keyDown("right")){
    bee.x = bee.x + 3;
    bee.setAnimation("bee_right");
  }
}

function moscaMovement(){
  if (keyDown("w")){
    mosca.y = mosca.y - 6;
    mosca.setAnimation("mosca_w");
  }
  if (keyDown("s")){
    mosca.y = mosca.y + 6;
    mosca.setAnimation("mosca_s");
  }
  if (keyDown("a")){
    mosca.x = mosca.x - 6;
    mosca.setAnimation("mosca_a");
  }
  if (keyDown("d")){
    mosca.x = mosca.x + 6;
    mosca.setAnimation("mosca_d");
  }
}

function gameWin(){
  if (bee.isTouching(mosca)){
    var fundob = createSprite(200,200);
    fundob.setAnimation("animation_1");
    fundob.scale = 6;
    
    var win = createSprite(200,200);
    win.setAnimation("download.jpeg_1");
    win.scale = 1.5;
  }
}

function limite(){
  if (bee.x > 400){
    bee.x = 400;
  }
  if (bee.x < 0){
    bee.x = 0;
  }
  if (bee.y > 400){
    bee.y = 400;
  }
  if (bee.y < 0){
    bee.y = 0;
  }
  if (mosca.x > 400){
    mosca.x = 400;
  }
  if (mosca.x < 0){
    mosca.x = 0;
  }
  if (mosca.y > 400){
    mosca.y = 400;
  }
  if (mosca.y < 0){
    mosca.y = 0;
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
