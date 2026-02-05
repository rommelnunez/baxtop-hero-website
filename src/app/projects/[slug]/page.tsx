import { client } from "../../../../tina/__generated__/client";
import ProjectClientPage from "../../../components/ProjectClientPage";

export async function generateStaticParams() {
    const projects = await client.queries.projectConnection();
    return projects.data.projectConnection.edges?.map((edge) => ({
        slug: edge?.node?._sys.filename,
    })) || [];
}

// Next.js 15/16+ requires awaiting params
export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const result = await client.queries.project({ relativePath: `${slug}.md` });

    return <ProjectClientPage {...result} />;
}
