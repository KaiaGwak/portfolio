export default function About() {
  return (
    <main className="min-h-screen p-8 pt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="space-y-6">
        {/* 프로필 섹션 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <p>
            웹 개발에 열정을 가진 주니어 개발자입니다.
            [자기소개]
          </p>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Frontend</h3>
              <ul className="list-disc pl-5">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Other Skills</h3>
              <ul className="list-disc pl-5">
                <li>Git</li>
                <li>日本語 (JLPT N2)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
