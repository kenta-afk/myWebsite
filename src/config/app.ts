export const APP_CONFIG = {
  site: {
    name: "Kenta-afk Portfolio",
    description: "フルスタック開発者のポートフォリオサイト",
    url: process.env.BASE_URL || "http://localhost:5173",
    author: "Kenta-afk",
  },
} as const;

export type AppConfig = typeof APP_CONFIG;
