import React from "react";
import Skill from "../components/Skill";

const Skills = () => {
  return (
    <div>
      <div className="h-screen bg-[#010e1b] text-white flex flex-col items-center pt-8">
        <div className=" flex flex-col align-middle justify-center gap-10  w-2/5">
          <h4 className=" text-2xl">Skills----------</h4>
          <div className=" bg-white flex flex-col">
            <Skill
              title={"Languages and Databases"}
              images={[
                "https://www.vectorlogo.zone/logos/python/python-horizontal.svg",
                "https://www.vectorlogo.zone/logos/java/java-horizontal.svg",
                "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
                "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                "https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg",
              ]}
            />
            <Skill
              title={"Libraries and Frameworks"}
              images={[
                "https://th.bing.com/th/id/OIP.St5crFq6GyphKeEs6ak96wHaCf?rs=1&pid=ImgDetMain",
                "https://www.4x-treme.com/wp-content/uploads/2019/10/spring-boot-logo.png",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
