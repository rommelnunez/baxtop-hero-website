'use client';

import { tinaField, useTina } from "tinacms/dist/react";

export default function ProjectClientPage(props: any) {
    const { data } = useTina(props);
    const { project } = data;

    // Extract YouTube ID if valid URL
    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url?.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYoutubeId(project.videoUrl);

    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 md:px-12">
            <div className="max-w-screen-xl mx-auto">
                {/* Header Section */}
                <header className="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-foreground/10 pb-8">
                    <div>
                        <h1
                            data-tina-field={tinaField(project, "title")}
                            className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-2"
                        >
                            {project.title}
                        </h1>
                        <p
                            data-tina-field={tinaField(project, "client")}
                            className="text-lg md:text-2xl font-mono uppercase tracking-widest opacity-60"
                        >
                            {project.client}
                        </p>
                    </div>

                    <div className="mt-8 md:mt-0 text-right">
                        <p data-tina-field={tinaField(project, "year")} className="font-mono text-sm">{project.year}</p>
                    </div>
                </header>

                {/* Media Section */}
                <div className="w-full aspect-video bg-neutral-100 dark:bg-neutral-900 mb-16 relative overflow-hidden group">
                    {/* Node accents corner */}
                    <span className="absolute top-0 left-0 w-2 h-2 bg-foreground/20" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-foreground/20" />
                    <span className="absolute bottom-0 left-0 w-2 h-2 bg-foreground/20" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-foreground/20" />

                    {videoId ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`}
                            className="w-full h-full object-cover"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : project.coverImage ? (
                        <img
                            data-tina-field={tinaField(project, "coverImage")}
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-foreground/20 font-mono">NO MEDIA</div>
                    )}
                </div>

                {/* Body Text */}
                <article data-tina-field={tinaField(project, "body")} className="prose dark:prose-invert max-w-2xl text-lg md:text-xl leading-relaxed">
                    {/* Placeholder for rich text content */}
                    <p>{project.subtitle || "No description available."}</p>
                </article>
            </div>
        </main>
    );
}
