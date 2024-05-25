'use client';

import { CanvasRevealEffect } from '../ui/CanvasRevealEffect';
import ApproachCard from './components/CardApproach';

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4 mx-auto">
        <ApproachCard
          icon={<AceternityIcon order="Phase 1" />}
          title="Planning"
          description="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </ApproachCard>
        <ApproachCard
          icon={<AceternityIcon order="Phase 2" />}
          title="Development"
          description="Once we agree on the plan, i dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-800"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </ApproachCard>
        <ApproachCard
          icon={<AceternityIcon order="Phase 3" />}
          title="Launch"
          description="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </ApproachCard>
      </div>
    </section>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000319,45%,#1e2631,55%,#000319)] bg-[length:200%_100%] px-6 font-medium text-[#CBACF9] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span>{order}</span>
    </button>
  );
};

export default Approach;
