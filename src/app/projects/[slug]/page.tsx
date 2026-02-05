import { client } from "../../../../tina/__generated__/client";
import ProjectClientPage from "../../../components/ProjectClientPage";

export async function generateStaticParams() {
    const projects = await client.queries.projectConnection();
    return projects.data.projectConnection.edges?.map((edge) => ({
        slug: edge?.node?._sys.filename,
    })) || [];
}

export default async function ProjectPage({
    params,
}: {
    params: { slug: string };
}) {
    const result = await client.queries.project({ relativePath: `${params.slug}.md` });

    return <ProjectClientPage {...result} />;
}
