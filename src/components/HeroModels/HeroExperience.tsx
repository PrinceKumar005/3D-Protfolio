import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MediaQuery from "react-responsive";
import Room from "./Room.jsx";

const HeroExperience = () => {
    const isTablet = MediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = MediaQuery({ query: "(max-width: 768px)" });
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <OrbitControls
                enableZoom={!isTablet}
                enablePan={false}
                maxDistance={20}
                minDistance={5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 5}
            />

            <Room />
        </Canvas>
    );
};

export default HeroExperience;
