import projectsData from "../../../lib/projects";
import Link from "next/link";

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
          <p className="text-sm text-slate-600 mb-6">The project you requested doesn't exist.</p>
          <Link href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white/50 dark:bg-slate-900 p-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-4 inline-block">← Back</Link>
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-sm text-slate-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>

        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-lg shadow-lg">
                <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-64 object-cover" />
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed p-8 text-center text-slate-600">
            No screenshots available.
          </div>
        )}
      </div>
    </div>
  );
}
