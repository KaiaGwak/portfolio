export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고/이름 */}
          <a href="/" className="font-bold text-xl text-gray-800">
            곽희정
          </a>
          
          {/* 네비게이션 링크 */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition">
              About
            </a>
            <a href="/projects" className="text-gray-600 hover:text-blue-600 transition">
              Projects
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
