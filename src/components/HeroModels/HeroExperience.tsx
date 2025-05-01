import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MediaQuery from "react-responsive";
import Room from "./Room.jsx";
import HeroLights from "./HeroLights.js";
import Particles from "./Particles.js";

const HeroExperience = () => {
    const isTablet = MediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = MediaQuery({ query: "(max-width: 768px)" });
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <OrbitControls
                enableZoom={!isTablet}
                enablePan={false}
                maxDistance={20}
                minDistance={5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 5}
            />

            <HeroLights />

            <Particles count={100} />

            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, -3.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Room />
            </group>
        </Canvas>
    );
};

export default HeroExperience;
