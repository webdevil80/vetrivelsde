import React from 'react';

export default function Skills({ skills }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-4 border-gray-300 dark:border-gray-700 border-b">
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      <div className="flex mt-2 flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm border rounded-sm border-[#ebeb5e] bg-gradient-to-r"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
