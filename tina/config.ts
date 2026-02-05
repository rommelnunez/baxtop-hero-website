import { defineConfig } from "tinacms";

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
    branch,
    // For local development or CI where we just want the build to pass without real auth
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? undefined,
    token: process.env.TINA_TOKEN ?? undefined,
    contentApiUrlOverride: process.env.TINA_PUBLIC_IS_LOCAL === 'true' ? "/api/tina/gql" : undefined,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "uploads",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "project",
                label: "Projects",
                path: "content/projects",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
                    { type: "string", name: "client", label: "Client" },
                    { type: "string", name: "subtitle", label: "Subtitle/Description" },
                    { type: "string", name: "year", label: "Year" },
                    { type: "image", name: "coverImage", label: "Cover Image" },
                    { type: "string", name: "videoUrl", label: "Video URL" },
                    { type: "rich-text", name: "body", label: "Body" },
                ],
            },
            {
                name: "page",
                label: "Pages",
                path: "content/pages",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
                    { type: "rich-text", name: "body", label: "Body" },
                ],
            },
        ],
    },
});
