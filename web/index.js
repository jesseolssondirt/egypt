document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.querySelector('canvas')
  var engine = new BABYLON.Engine(canvas, true)

  BABYLON.SceneLoader.Load('', '../scene/scene.babylon', engine, function(scene) {
    var skybox = BABYLON.Mesh.CreateBox('skybox', 100, scene)
    skybox.material = new BABYLON.StandardMaterial('skybox', scene)
    skybox.material.backFaceCulling = false
    skybox.infiniteDistance = true
    skybox.material.diffuseColor = new BABYLON.Color3(0, 0, 0)
    skybox.material.specularColor = new BABYLON.Color3(0, 0, 0)
    skybox.material.reflectionTexture = new BABYLON.CubeTexture('../skybox/skybox', scene)
    skybox.material.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
    skybox.rotation = new BABYLON.Vector3(3.14159265, 0, 0)
    scene.activeCamera.attachControl(canvas)

    window.addEventListener('resize', function() {
      engine.resize()
    })

    engine.runRenderLoop(function() {
      scene.render()
    })
  })
})
