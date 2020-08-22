import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { DoubleSide } from 'three';


@Component({
  selector: 'app-earth-scene',
  templateUrl: './earth-scene.component.html',
  styleUrls: ['./earth-scene.component.css']
})
export class EarthSceneComponent implements AfterViewInit {

  @ViewChild('sceneRef') containerRef: ElementRef;

  
  camera;
  scene;
  geometry;
  material;
  mesh;
  renderer;
  light;
  clouds;
  controls;
  fogColor;
  scale;

  // onScaleChanged(event) {
  //   // this.camera.position.z = event;
  //   console.log(event);
  //   console.log(this.containerRef.nativeElement.style.transform = "scale("+event+")");
  // }

  createScene() {
    const fov = 35;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 5;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.z = 2;

    this.scene = new THREE.Scene();
    
    const nearFog = 1;
    const farFog = 1.9;
    const color = 'white';

    this.scene.fog = new THREE.Fog(color, nearFog, farFog);
    this.scene.background = new THREE.Color(color);
  }

  constructor() {
    this.createScene();
  }

  createSphere() {
    this.geometry = new THREE.SphereGeometry(0.5, 40, 40);
    this.material  = new THREE.MeshPhongMaterial({
      map         : THREE.ImageUtils.loadTexture('assets/imgs/earth-blue-marble.jpg'),
      bumpMap     : THREE.ImageUtils.loadTexture('assets/imgs/earth-topology.png'),
      bumpScale   : 0.05,
      side        : DoubleSide,
      specularMap : THREE.ImageUtils.loadTexture('assets/imgs/earthspec1k.jpg'),
      specular    : new THREE.Color('whitesmoke'),
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add( this.mesh );
  }

  createClouds() {
    this.clouds = new THREE.Mesh(
      new THREE.SphereGeometry(0.52, 32, 32),			
      new THREE.MeshPhongMaterial({
        map         : THREE.ImageUtils.loadTexture('assets/imgs/fair_clouds_8k.jpg'),
        transparent : true,
        opacity     : 0.5,
        depthWrite  : true
      })
    );
      this.scene.add(this.clouds)
  }

  configRenderer() {
    this.renderer = new THREE.WebGLRenderer( {
      antialias: true,
      logarithmicDepthBuffer: true,
      // alpha: true
    } );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setClearColor(0x2d2d2d, 1);
  }

  configLights() {
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    this.light.position.set(-1,2,1);
    this.scene.add(this.light);
  }


  ngAfterViewInit() {

    this.createSphere();    
    this.createClouds();
    this.configRenderer();
    // this.orbitControlConfig();
    this.configLights();


    this.containerRef.nativeElement.appendChild( this.renderer.domElement ); 
    this.animate();
    
}



  animate() {
    requestAnimationFrame(this.animate.bind(this))
    this.mesh.rotation.x += 0.0002;
    this.mesh.rotation.y += 0.0004;

    this.clouds.rotation.x += 0.0003;
    this.clouds.rotation.y += 0.0005;
    this.renderer.render( this.scene, this.camera );
  }

}
