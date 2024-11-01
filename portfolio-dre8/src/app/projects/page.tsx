export default function Projects() {
  const projects = [
    {
      title: "포트폴리오 웹사이트",
      description: "Next.js와 TailwindCSS를 사용한 개인 포트폴리오 사이트",
      tech: ["Next.js", "React", "TailwindCSS"],
      github: "https://github.com/yourusername/portfolio",
    },
    // 더 많은 프로젝트 추가
  ];

  return (
    <main className="min-h-screen p-8 pt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-100 px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.github}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
