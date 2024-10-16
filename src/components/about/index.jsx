import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          My journey in the realm of data science and machine learning is guided by an arsenal of powerful tools and languages, with Python and SQL forming the core of my enchantments. I wield frameworks like TensorFlow, PyTorch, and Scikit-Learn with precision, crafting predictive models and data pipelines that unveil hidden truths and protect realms (organizations) from the shadows of fraud.


          In the mystical lands of Wells Fargo, I conjured a predictive machine learning model on Azure Cloud, thwarting over 6000 fraudulent transactions in just three months. My spells at Daimler Truck NA involved creating interactive Tableau dashboards and automating data pipelines, reducing dashboard refresh time by 60% and saving countless hours of manual labor.


          The ancient arts of multivariate linear regression and data integration empower me to forecast with uncanny accuracy, enhancing decision-making for stakeholders. My design skills ensure every data visualization is not only functional but also a visual masterpiece, captivating and enlightening all who gaze upon it.


          Join me as I continue to explore new spells and technologies, shaping the future of data science and machine learning with every incantation and algorithm I master.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">Sucessful Projects</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+ <sub className="font-semibold text-base">Gen AI/ML projects Deployed</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Pavani_Kuncha"
            loading="lazy"
          />
        </ItemLayout> 
        
      </div>
    </section>
  );
};

export default AboutDetails;
