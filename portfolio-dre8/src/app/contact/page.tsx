export default function Contact() {
  return (
    <main className="min-h-screen p-8 pt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <a href="mailto:your.email@example.com" className="text-blue-600">
              your.email@example.com
            </a>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Social Links</h2>
            <div className="space-y-2">
              <div>
                <a 
                  href="https://github.com/yourusername" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
