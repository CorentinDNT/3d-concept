import { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  const cube = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectById("2b6d5173-7e86-4ebb-999c-c8c4913c6a37");

    // Sauvegarde l'objet dans une ref pour une utilisation ultérieure
    cube.current = obj;
  }

  useEffect(() => {
    // Si l'objet est chargé, démarrer l'animation
    const animateRotation = () => {
      if (cube.current) {
        cube.current.rotation.x += 0.001; // Incrémente la rotation sur l'axe X
        cube.current.rotation.y += 0.001; // Incrémente la rotation sur l'axe Y
      }
      // Appelle animateRotation sur chaque frame (60 fps environ)
      requestAnimationFrame(animateRotation);
    };

    animateRotation(); // Démarre l'animation dès que le composant est monté
  }, []);

  function moveObj() {
    console.log(cube.current); // Affiche l'objet dans la console
    if (cube.current) {
      // Déplace l'objet dans l'espace 3D
      cube.current.position.x += 10;
    }
  }

  return (
    <div className="sphere-conainer">
      <Spline
        scene="https://prod.spline.design/a4X8L5dfeOi3CRrw/scene.splinecode"
        onLoad={onLoad}
      />
      <button type="button" onClick={moveObj}>
        Move Cube
      </button>
    </div>
  );
}
