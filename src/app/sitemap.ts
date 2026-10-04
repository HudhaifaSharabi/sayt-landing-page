import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sayt.sa", // TODO: Update with actual domain
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
