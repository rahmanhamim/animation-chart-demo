import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "./ParallaxAnimSection.module.css";

const ParallaxAnimSection = () => {
    const alignCenter = { display: "flex", alignItems: "center" };
    return (
        <div className="border-black">
            <div className={styles.background} />

            <Parallax pages={5}>
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    style={{ ...alignCenter, justifyContent: "center" }}
                >
                    <p className="text-7xl text-teal-800">Scroll down</p>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 1, end: 3 }}>
                    <div className="container border mx-auto">
                        <p>I&apos;m a sticky layer</p>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default ParallaxAnimSection;

/* 
                <ParallaxLayer
                    sticky={{ start: 1, end: 3 }}
                    style={{ ...alignCenter, justifyContent: "flex-start" }}
                >
                    <div className={`${styles.card} ${styles.sticky}`}>
                        <p>I&apos;m a sticky layer</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.5}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: "flex-end" }}
                >
                    <div
                        className={`${styles.card} ${styles.parallax} ${styles.purple}`}
                    >
                        <p>I&apos;m not</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: "flex-end" }}
                >
                    <div
                        className={`${styles.card} ${styles.parallax} ${styles.blue}`}
                    >
                        <p>Neither am I</p>
                    </div>
                </ParallaxLayer>

*/
