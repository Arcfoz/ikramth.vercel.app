import "server-only";
import { createClient, type ClientConfig, type QueryParams } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
};

const client = createClient(config);

export default client;

export async function sanityFetch<QueryResponse>({ query, qParams, tags }: { query: string; qParams?: QueryParams; tags: string[] }): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams || {}, {
    next: { tags },
  });
}