"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const gradients = [
  // 각 레이어별로 다른 색상, 위치, 애니메이션 딜레이
  {
    style: {
      background:
        "radial-gradient(circle at 20% 40%, #ff6ec4 0%, transparent 70%)",
      filter: "blur(120px)",
      opacity: 0.7,
      animationDelay: "0s",
    },
    className:
      "absolute w-[80vw] h-[60vw] left-[-10vw] top-[-10vw] animate-move1",
  },
  {
    style: {
      background:
        "radial-gradient(circle at 80% 30%, #42e695 0%, transparent 70%)",
      filter: "blur(100px)",
      opacity: 0.5,
      animationDelay: "2s",
    },
    className:
      "absolute w-[70vw] h-[50vw] right-[-10vw] top-[-5vw] animate-move2",
  },
  {
    style: {
      background:
        "radial-gradient(circle at 50% 80%, #7873f5 0%, transparent 70%)",
      filter: "blur(140px)",
      opacity: 0.6,
      animationDelay: "4s",
    },
    className: "absolute w-[90vw] h-[60vw] left-0 bottom-[-20vw] animate-move3",
  },
  {
    style: {
      background:
        "radial-gradient(circle at 60% 60%, #3bb2b8 0%, transparent 70%)",
      filter: "blur(100px)",
      opacity: 0.4,
      animationDelay: "1s",
    },
    className:
      "absolute w-[60vw] h-[40vw] right-0 bottom-[-10vw] animate-move4",
  },
];

// 하단 섹션용 은은한 그라데이션
const sectionGradients = [
  {
    style: {
      background:
        "radial-gradient(circle at 10% 80%, #ff6ec4 0%, transparent 80%)",
      filter: "blur(80px)",
      opacity: 0.18,
    },
    className: "absolute w-2/3 h-2/3 left-0 bottom-0",
  },
  {
    style: {
      background:
        "radial-gradient(circle at 90% 20%, #42e695 0%, transparent 80%)",
      filter: "blur(80px)",
      opacity: 0.13,
    },
    className: "absolute w-2/3 h-2/3 right-0 top-0",
  },
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a2342] relative overflow-hidden">
      {/* 몽환적 그라데이션 배경 레이어 (Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {gradients.map((g, i) => (
          <div key={i} style={g.style} className={g.className}></div>
        ))}
      </div>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <AnimatePresence>
          {isClient && (
            <>
              <motion.h1
                key="title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
              >
                테크 PM 커넥트
              </motion.h1>
              <motion.p
                key="subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl text-white mb-8 drop-shadow"
              >
                Tech PM으로의 전환, <br /> 지금이 적기입니다
              </motion.p>
              <motion.a
                key="cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                href="https://discord.gg/EbxeHedZcY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-full text-lg font-bold text-white bg-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-yellow-400 hover:to-blue-400 hover:text-[#0a2342] transition drop-shadow"
              >
                Tech PM 되기
              </motion.a>
              <motion.p
                key="quote"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm sm:text-base text-gray-300 mt-4 max-w-md mx-auto"
              >
                AI는 역할을 줄입니다. <br /> 하지만 &lsquo;기술을 이해하는
                사람&rsquo;은 그 역할을 더 크게 만듭니다.
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </section>

      {/* Why Section */}
      <section className="relative py-20 bg-transparent z-10 overflow-hidden">
        {/* 은은한 그라데이션 배경 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {sectionGradients.map((g, i) => (
            <div key={i} style={g.style} className={g.className}></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              왜 Tech PM이 <br /> 되어야 할까요?
            </h2>
            <p className="text-xl text-gray-200">
              AI 시대, 더 이상 <br /> &ldquo;기획만 잘하는 PM&rdquo;으로는
              부족합니다.
            </p>
            <p className="text-xl text-gray-200">
              개발만 잘하는 개발자도 안전하지 않죠.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white/10 p-8 rounded-lg shadow-sm text-center backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                개발자와의 소통
              </h3>
              <p className="text-gray-200">
                기술을 이해하지 못하면 개발자들과의 효과적인 소통이 어렵습니다.
                Tech PM은 개발 흐름과 시스템 구조를 이해하여 더 나은 의사결정을
                할 수 있습니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 p-8 rounded-lg shadow-sm text-center backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                AI 시대의 생존
              </h3>
              <p className="text-gray-200">
                AI가 코딩을 대체하는 시대, 단순 코딩만 하는 개발자도 안전하지
                않습니다. Tech PM은 개발지식을 바탕으로 AI와 함께 일하는 방법을
                이해하고 활용할 수 있습니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 p-8 rounded-lg shadow-sm text-center backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                역량의 확장
              </h3>
              <p className="text-gray-200">
                기획, 개발, 데이터 분석까지 폭넓은 이해를 통해 더 나은 제품과
                서비스를 만들 수 있습니다. Tech PM은 미래의 필수 역량입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-transparent z-10 overflow-hidden">
        {/* 은은한 그라데이션 배경 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {sectionGradients.map((g, i) => (
            <div key={i} style={g.style} className={g.className}></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-100">
              우리 커뮤니티에서 <br /> 얻을 수 있는 것
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white/10 p-6 rounded-lg shadow-sm backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                최신 IT 동향 뉴스
              </h3>
              <p className="text-gray-200">
                AI, 개발 트렌드 등 최신 기술 동향을 매일 제공합니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 p-6 rounded-lg shadow-sm backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                채용 정보
              </h3>
              <p className="text-gray-200">
                Tech PM을 찾는 기업들의 채용 정보를 한 곳에서 확인하세요.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 p-6 rounded-lg shadow-sm backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                역량진단 체크리스트
              </h3>
              <p className="text-gray-200">
                Tech PM으로서의 역량을 진단하고 발전시킬 수 있습니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 p-6 rounded-lg shadow-sm backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                네트워킹
              </h3>
              <p className="text-gray-200">
                동종업계 현직자와 취준생들과 소통하며 인사이트를 공유하세요.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 p-6 rounded-lg shadow-sm backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                커리어 상담
              </h3>
              <p className="text-gray-200">
                경력자들의 조언을 통해 Tech PM으로의 전환을 준비하세요.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 p-6 rounded-lg shadow-sm backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                비정기적 뉴스레터 발행
              </h3>
              <p className="text-gray-200">
                Tech PM, IT기획, TPM 등 인사이트 정보를 비정기적으로 제공합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-transparent z-10 overflow-hidden">
        {/* 은은한 그라데이션 배경 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {sectionGradients.map((g, i) => (
            <div key={i} style={g.style} className={g.className}></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            지금 바로 Tech PM으로의 <br /> 전환을 시작하세요
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            AI 시대를 이끌어갈 Tech PM이 되고 싶은 모든 분들을 환영합니다
          </p>
          <a
            href="https://discord.gg/EbxeHedZcY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-full text-lg font-bold text-white bg-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:via-yellow-400 hover:to-blue-400 hover:text-[#0a2342] transition drop-shadow"
          >
            함께 성장할 사람들 만나기
          </a>
        </div>
      </section>
    </main>
  );
}
