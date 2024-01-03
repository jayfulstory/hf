import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import HorizontalContent from './HorizontalContant';
gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  const sectionRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    function getAmountWidth() {
      let w = sectionRef.current.scrollWidth;
      return -(w - window.innerWidth);
    }

    // const tween = gsap.to(sectionRef.current, {
    //   x: getAmountWidth,
    //   duration: 3,
    //   ease: 'none',
    // });

    // ScrollTrigger.create({
    //   trigger: triggerRef.current,
    //   start: 'top top',
    //   end: '+=3000',
    //   // end: '+=' + getAmountWidth() * -1,
    //   animation: tween,
    //   pin: true,
    //   scrub: 1,
    //   invalidateOnRefresh: true,
    //   markers: true,
    // });

    let t = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: '+=' + getAmountWidth() * -1,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        ease: 'none',
      },
    });
    t.to(sectionRef.current, {
      x: getAmountWidth,
      duration: 4,
      ease: 'none',
    });
  }, []);

  const horizontalContents = [
    {
      img: '/obj/vr.png',
      title: '無重力の中で今まで味わったこと\nのないデートをすることができます',
      text: 'VRゴーグルとスマートフォンのカメラを使い、まるで実際にデートをしているかのように二人だけの惑星（仮想空間）でデートをすることができます。',
    },

    {
      img: '/obj/rocket2.png',
      title: '理想の相手を探すために\n銀河系を旅することができます',
      text: 'マッチ度が高い相手ほど自分から近い銀河系に表示されます。魅力的に感じなかった場合は、その銀河系から離れ、違う銀河系に移動できます。',
    },
    {
      img: '/obj/rocket1.png',
      title: '100種類以上の惑星デートプラン\nからデートプラン選べます',
      text: 'あなたがデートプランを考える必要はありません。二人の出会いをもっと素敵な出会いにするデートプランを提供します。',
    },
    {
      img: '/obj/memo.png',
      title: 'デートの様子からAIシステムが\n相手との性格分析・診断をします',
      text: '性格・価値観・金銭感覚・趣味・会話のマッチ度を可視化し、客観的に相手との相性を判断することができます。惑星デートから24時間以内に分析・診断レポートを見ることができます。',
    },
    {
      img: '/obj/uni1.png',
      title: 'Jupiter（AIシステム）の\nサポートが受けられます',
      text: '困ったことがあればその都度Jupiterが相談に乗ってくれます。家族や友人に相談しにくいことも気軽に相談することができます。',
    },
  ];
  return (
    <div ref={triggerRef} className='relative h-screen '>
      <img
        className='w-[350px] absolute -top-46 right-8'
        src='./bg/stars1.svg'
        alt=''
      />
      <img
        className='w-[700px] absolute -bottom-36 left-8'
        src='./bg/stars8.svg'
        alt=''
      />
      <div
        ref={sectionRef}
        className='h-screen flex items-center  gap-x-40 px-[20vw] w-fit'
      >
        <img className='w-[320px]' src='./text/text1.svg' alt='' />
        {horizontalContents.map(content => (
          <HorizontalContent key={content.title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Horizontal;
