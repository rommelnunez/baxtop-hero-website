import { client } from "../../../../tina/__generated__/client";
import ProjectClientPage from "../../../components/ProjectClientPage";

export default async function ProjectPage({
    params,
}: {
    params: { slug: string };
}) {
    const result = await client.queries.project({ relativePath: `${params.slug}.md` });

    return <ProjectClientPage {...result} />;
}

