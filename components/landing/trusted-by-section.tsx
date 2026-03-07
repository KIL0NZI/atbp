'use client'

export function TrustedBySection() {
  const companies = [
    'TechFlow',
    'CloudSoft',
    'DataCore',
    'InnovateLabs',
    'FutureWork',
    'NextGen',
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-600 font-medium mb-8">
          Trusted by leading organizations worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center p-4 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-gray-700 text-center text-sm">
                {company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
