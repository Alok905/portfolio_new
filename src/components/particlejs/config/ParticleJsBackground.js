import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import particleConfig from "./particle-config";

const ParticleJsBackground = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleConfig}
    />
  );
};

export default ParticleJsBackground;
