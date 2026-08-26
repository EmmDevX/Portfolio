"use client";
import { motion, useScroll, useSpring, useTransform,} from "motion/react";

export default function ScrollEffects(){
    const {scrollYProgress} = useScroll();

    {/* Smooth Scroll Effects */}
     const smoothProgress = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
        restDelta: 0.001,
     });
     
     {/* Page progress indicator */}
     const scaleX = smoothProgress
    return(
       <motion.div className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left" style={{scaleX,}}/>
    );
}