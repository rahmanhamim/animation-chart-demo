import Image from "next/image";
import React from "react";

const DataTransformAnim = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="grid grid-cols-2 gap-14 py-8">
        {/* block start */}
        <div className="">
          <div className="h-[180px] w-[250px] relative ml-auto z-[999]">
            <Image
              fill
              alt="svg"
              src="/assets/data-solutions-anim/application-block.svg"
              style={{ display: "block" }}
            />
            {/* line from transform starts here */}
            <div className="h-[130px] w-[150px] absolute mx-auto top-[35%] left-[-0%] z-[-1]">
              <Image
                fill
                alt="svg"
                src="/assets/data-solutions-anim/line-from-application.svg"
                style={{ display: "block" }}
              />
              {/* data source block start */}
              <div className="h-[140px] w-[270px] absolute mx-auto top-[74%] left-[-80%] z-[-1]">
                <Image
                  fill
                  alt="svg"
                  src="/assets/data-solutions-anim/data-source.svg"
                  style={{ display: "block" }}
                />
                {/* incremental load svg*/}
                <div className="h-[180px] w-[270px] absolute mx-auto top-[70%] left-[74%] z-[-1]">
                  <Image
                    fill
                    alt="svg"
                    src="/assets/data-solutions-anim/incremental-load.svg"
                    style={{ display: "block" }}
                  />
                  {/* data process engine */}
                  <div className="h-[180px] w-[270px] absolute mx-auto top-[70%] right-[50%] z-[-1]">
                    <Image
                      fill
                      alt="svg"
                      src="/assets/data-solutions-anim/data-process-engine.svg"
                      style={{ display: "block" }}
                    />
                    {/* transformed data */}
                    <div className="h-[140px] w-[250px] absolute mx-auto top-[70%] right-[50%] z-[-1]">
                      <Image
                        fill
                        alt="svg"
                        src="/assets/data-solutions-anim/transformed-data.svg"
                        style={{ display: "block" }}
                      />
                      {/* last data  1 */}
                      <div className="h-[400px] w-[750px] absolute mx-auto top-[-90%] right-[-100%] z-[-1]">
                        <Image
                          fill
                          alt="svg"
                          src="/assets/data-solutions-anim/data-lake-warehouse.svg"
                          style={{ display: "block" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* block end */}

        <div></div>
      </div>
    </div>
  );
};

export default DataTransformAnim;
