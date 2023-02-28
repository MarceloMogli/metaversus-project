'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

import { TypingText, TitleText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-20
            right-20 w-[70px] h-[70px]
            p-[6px] rounded-full
            bg-[#5d6680]"
        >
          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-10
            left-20 w-[70px] h-[70px]
            p-[6px] rounded-full
            bg-[#5d6680]"
        >
          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div
          className="absolute top-1/2
            left-[45%] w-[70px] h-[70px]
            p-[6px] rounded-full
            bg-[#5d6680]"
        >
          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div
          className="hidden sm:block absolute top-[15%]
            left-[65%] w-[220px] h-[160px]
            p-[6px] rounded-[25px]
            bg-[#5d6680]"
        >
          <img
            src="/world-card1.png"
            alt="world-card"
            className="w-full h-full object-cover rounded-[25px]"
          />
          <img
            src="/people-04.png"
            alt="people"
            className="w-full h-full absolute w-[20px] h-[20px] bottom-[30%] left-[10%]"
          />
          <img
            src="/people-05.png"
            alt="people"
            className="w-full h-full absolute w-[20px] h-[20px] bottom-[30%] left-[15%]"
          />
          <img
            src="/people-06.png"
            alt="people"
            className="w-full h-full absolute w-[20px] h-[20px] bottom-[30%] left-[20%]"
          />
          <p className="absolute text-[12px] text-white bottom-[30%] left-[30%]">+264 have joined</p>
          <h3 className="font-semibold text-[20px] text-white
           absolute bottom-[10%] left-[10%]"
          >
            Hawkins Lab
          </h3>
        </div>
        <div
          className="hidden sm:block absolute bottom-[25%]
            right-[65%] w-[220px] h-[160px]
            p-[6px] rounded-[25px]
            bg-[#5d6680]"
        >
          <img
            src="/world-card2.png"
            alt="world-card"
            className="w-full h-full object-cover rounded-[25px]"
          />
          <img
            src="/people-04.png"
            alt="people"
            className="w-full h-full absolute w-[20px] h-[20px] bottom-[30%] left-[10%]"
          />
          <img
            src="/people-05.png"
            alt="people"
            className="w-full h-full absolute w-[20px] h-[20px] bottom-[30%] left-[15%]"
          />
          <img
            src="/people-06.png"
            alt="people"
            className="w-full h-full absolute w-[20px] h-[20px] bottom-[30%] left-[20%]"
          />
          <p className="absolute text-[12px] text-white bottom-[30%] left-[30%]">+225 have joined</p>
          <h3 className="font-semibold text-[20px] text-white
           absolute bottom-[10%] left-[10%]"
          >
            The Upside Down
          </h3>
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
