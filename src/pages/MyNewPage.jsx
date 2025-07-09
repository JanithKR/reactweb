"use client"

export default function MyNewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Welcome to My New Page</h1>

          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">About This Page</h2>
            <p className="text-lg text-gray-600 mb-8">
              This is your brand new custom page! You can add any content you want here.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Fast</h3>
                <p className="text-blue-600">Lightning fast performance and loading times.</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Smart</h3>
                <p className="text-green-600">Intelligent solutions for modern problems.</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Beautiful</h3>
                <p className="text-purple-600">Stunning design that catches the eye.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-gray-600">
                    <strong>Email:</strong> your-email@example.com
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Website:</strong> www.yoursite.com
                  </p>
                  <p className="text-gray-600">
                    <strong>Location:</strong> Your City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.history.back()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
