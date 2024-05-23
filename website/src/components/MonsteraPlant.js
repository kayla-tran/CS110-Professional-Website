import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const MonsteraPlant = () => {
  const mounting = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.5, 500);
    //const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.2, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderer.setSize(window.innerWidth - 200 , window.innerHeight - 200);

    renderer.setClearColor(0xf0f0f0);
    mounting.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    /*
    const ambientLight = new THREE.AmbientLight(, 0.5);

    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight( 1);

    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
    */

    const loader = new GLTFLoader();

    loader.load('/scene.gltf', function (gltf) {
      const model = gltf.scene;
      model.scale.set(2, 2, 2); 
      scene.add(model);
    }, undefined, function (error) {
      console.error(error);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth-1000, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mounting.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mounting} />;
};

export default MonsteraPlant;
