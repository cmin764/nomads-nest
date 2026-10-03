import type { MetadataRoute } from "next";
import { allRooms } from "@/data/gallery-content";
import { SITE_URL, publicRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...publicRoutes, ...allRooms.map((r) => `/gallery/${r.slug}`)];
  return routes.map((route) => ({ url: `${SITE_URL}${route === "/" ? "" : route}` }));
}
