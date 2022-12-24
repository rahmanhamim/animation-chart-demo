import { motion } from "framer-motion";
import LineChartBlock from "../components/LineCharts/LineChartBlock";

export default function Home() {
    const containerVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                when: "beforeChildren",
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: -10,
        },
        visible: {
            opacity: 1,
            y: 10,
            transition: {
                type: "spring",
                stiffness: 200,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="bg-slate-900 overflow-hidden text-white min-h-screen"
        >
            <main className="container mx-auto">
                <div className="bg-slate-100 p-10 pb-14 rounded-md w-fit mx-auto mt-16">
                    <motion.h1
                        variants={childVariants}
                        className="text-6xl font-extrabold textGradient"
                    >
                        ANIMATING GRADIENT
                    </motion.h1>
                </div>
                <div className="my-6 flex justify-center ">
                    <LineChartBlock />
                </div>
            </main>
        </motion.div>
    );
}
