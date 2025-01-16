import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, company_name, icon, iconBg, date, certificateLink, points }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-300 p-8 rounded-2xl shadow-lg border border-gray-700 xs:w-[340px] w-full"
  >
    {/* Certificate Image Clickable */}
    <div
      className="w-16 h-16 rounded-full bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${icon})`, backgroundColor: iconBg }}
      onClick={() => window.open(certificateLink, "_blank")}
      title="Click to View Certificate"
    ></div>

    <div className="mt-4">
      <h3 className="text-white font-bold text-[18px]">{title}</h3>
      <p className="text-secondary text-[14px]">{company_name}</p>
      <p className="text-gray-400 text-[12px] mt-1">{date}</p>

      <ul className="mt-4 list-disc list-inside text-gray-300 text-[14px]">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className="mt-16 bg-black-200 rounded-[20px] shadow-lg border border-gray-700">
      <div className={`bg-tertiary rounded-t-2xl ${styles.padding} min-h-[280px] flex flex-col justify-center`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Certifications I have earned</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Certifications</h2>
        </motion.div>
      </div>

      <div className="-mt-16 pb-12 px-6 flex flex-wrap justify-center gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");
