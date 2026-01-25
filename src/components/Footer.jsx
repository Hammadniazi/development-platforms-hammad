export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white mt-auto border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">News Platform</h3>
            <p className="text-gray-300 text-sm">
              A modern platform for sharing and discovering news articles across
              various categories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/submit"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Submit Article
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Technology</li>
              <li>Business</li>
              <li>Sports</li>
              <li>Entertainment</li>
              <li>Science</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} News Platform. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
