import React from 'react';

export default function Certifications({ certifications }) {
  return (
    <main className="max-w-6xl _-mt-12 mx-auto px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c) => (
          c.hidden ? null : (
          <article key={c.id}
            className="bg-white dark:bg-[#071122] rounded-lg shadow p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{c.title}</h3>
                <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{c.issueDate}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {c.issuer}
              </p>
            </div>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              {c.description}
            </p>

            <div className="mt-4 flex items-center gap-2 flex-wrap">
              {c.tags.map((tag) => (
                <span key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-[#0D1B2A] rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <hr className="mt-6 mb-2" />

            <footer className="mt-auto flex items-center justify-end gap-4">
              <a href={c.url} target="_blank"
                rel="noreferrer"
                className="text-sm rounded-lg border px-4">
                View Certificate ↗
              </a>
            </footer>
          </article>
          )
        ))}
      </div>
    </main>
  );
}
