import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* 히어로 섹션 */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            안녕하세요 👋
          </h1>
          <h2 className="text-3xl text-gray-700 mb-6">
            웹 개발자 곽희정입입니다
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            풀스택  개발에 열정을 가진 주니어 개발자입니다
          </p>
          <div className="space-x-4">
            <a 
              href="/projects" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              프로젝트 보기
            </a>
            <a 
              href="/contact" 
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              연락하기
            </a>
          </div>
        </section>

        {/* 간단한 소개 섹션 */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">🎯 현재 목표</h3>
          <p className="text-gray-700 mb-6">
            일본 IT기업에서 풀스택 개발자로 일하는 것을 목표로 하고 있습니다.
            React와 Next.js를 중심으로 학습하고 있으며, 
            실제 프로젝트를 통해 경험을 쌓고 있습니다.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">💪 주요 기술</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <span className="font-medium">HTML/CSS</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <span className="font-medium">JavaScript</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <span className="font-medium">React</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <span className="font-medium">Next.js</span>
            </div>
          </div>
        </section>

        {/* 최근 프로젝트 섹션 */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">🚀 최근 프로젝트</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-2">포트폴리오 웹사이트</h4>
              <p className="text-gray-600 mb-4">
                Next.js와 TailwindCSS를 활용한 반응형 포트폴리오 사이트
              </p>
              <a href="/projects" className="text-blue-600 hover:underline">자세히 보기 →</a>
            </div>
            {/* 추가 프로젝트가 있다면 여기에 추가 */}
          </div>
        </section>
      </div>
    </main>
  );
}
