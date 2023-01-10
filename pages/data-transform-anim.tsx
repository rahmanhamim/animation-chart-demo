import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const DataTransformAnim = () => {
  const animateStartBlock = {
    offscreen: { x: 100 },
    onscreen: {
      x: 0,
      transition: {
        duration: 1.5,
        type: "spring",
        bounce: 0.8,
      },
    },
  };

  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };

  return (
    <>
      <div className="bg-slate-900 min-h-screen">
        <div className="grid grid-cols-2 gap-14 py-8">
          {/* ------------------------------------------------ 
         block start here 
         --------------------------------------------------- */}
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="relative"
          >
            <motion.div variants={animateStartBlock} className="">
              <div className="h-[180px] w-[250px] ml-auto z-[999] relative">
                <Image
                  fill
                  alt="svg"
                  src="/assets/data-solutions-anim/application-block.svg"
                  style={{ display: "block" }}
                />
              </div>
            </motion.div>

            {/* line from transform starts here   */}
            <motion.div
              variants={textAnimate}
              className="absolute top-[100px] right-[130px]"
            >
              <div className="h-[130px] w-[150px] relative">
                <Image
                  fill
                  alt="svg"
                  src="/assets/data-solutions-anim/line-from-application.svg"
                  style={{ display: "block" }}
                />
              </div>
            </motion.div>

            {/* data source block start     */}
            <motion.div
              variants={textAnimate}
              className="absolute top-[180px] right-[130px]"
            >
              <div className="h-[140px] w-[270px] relative">
                <Image
                  fill
                  alt="svg"
                  src="/assets/data-solutions-anim/data-source.svg"
                  style={{ display: "block" }}
                />
              </div>
            </motion.div>
            {/*incremental load svg  */}
            <motion.div
              variants={textAnimate}
              className="absolute top-[280px] right-[-70px]"
            >
              <div className="h-[180px] w-[270px] relative">
                <Image
                  fill
                  alt="svg"
                  src="/assets/data-solutions-anim/incremental-load.svg"
                  style={{ display: "block" }}
                />
              </div>
            </motion.div>
          </motion.div>
          {/* block end */}

          <div></div>
        </div>
      </div>
    </>
  );
};

export default DataTransformAnim;

/*



line from transform starts here  
            <motion.div
              variants={animateOpacity}
              transition={{ staggerChildren: 4 }}
              initial={"offscreen"}
              animate={"onscreen"}
              className="h-[130px] w-[150px] absolute mx-auto top-[35%] left-[-0%] z-[-1]"
            >
              <Image
                fill
                alt="svg"
                src="/assets/data-solutions-anim/line-from-application.svg"
                style={{ display: "block" }}
              />
            </motion.div>





  data source block start  
              <motion.div
                variants={animateOpacity}
                transition={{ staggerChildren: 4 }}
                initial={"offscreen"}
                animate={"onscreen"}
                className="h-[140px] w-[270px] absolute mx-auto top-[74%] left-[-80%] z-[-1]"
              >
                <Image
                  fill
                  alt="svg"
                  src="/assets/data-solutions-anim/data-source.svg"
                  style={{ display: "block" }}
                />
              </motion.div>




 incremental load svg 
                <motion.div
                  variants={animateOpacity}
                  transition={{ staggerChildren: 4 }}
                  initial={"offscreen"}
                  animate={"onscreen"}
                  className="h-[180px] w-[270px] absolute mx-auto top-[70%] left-[74%] z-[-1]"
                >
                  <Image
                    fill
                    alt="svg"
                    src="/assets/data-solutions-anim/incremental-load.svg"
                    style={{ display: "block" }}
                  /> 
                </motion.div>









  data process engine 
                  <motion.div
                    variants={animateStartBlock}
                    transition={{ staggerChildren: 4 }}
                    initial={"offscreen"}
                    animate={"onscreen"}
                    className="h-[180px] w-[270px] absolute mx-auto top-[70%] right-[50%] z-[-1]"
                  >
                    <Image
                      fill
                      alt="svg"
                      src="/assets/data-solutions-anim/data-process-engine.svg"
                      style={{ display: "block" }}
                    /> 
                  </motion.div>




    * transformed data *
          <motion.div className="h-[140px] w-[250px] absolute mx-auto top-[70%] right-[50%] z-[-1]">
            <Image
              fill
              alt="svg"
              src="/assets/data-solutions-anim/transformed-data.svg"
              style={{ display: "block" }}
            />
          </motion.div>
                    


        
 
    <motion.div className="h-[400px] w-[750px] absolute mx-auto top-[-90%] right-[-100%] z-[-1]">
      <Image
        fill
        alt="svg"
        src="/assets/data-solutions-anim/data-lake-warehouse.svg"
        style={{ display: "block" }}
      />
    </motion.div>



*/
