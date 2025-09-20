import type { Project } from "~/types/project";

export const featuredProjects: Project[] = [
  {
    id: "setsuna",
    title: "刹那",
    description:
      "人とマッチングして素早くスマートフォンを振る反射神経ゲーム。LINEふるふるを彷彿とさせる懐かしいマッチング方式で、星のカービィーの刹那の見斬りを再現。",
    technologies: [
      "Swift",
      "Vapor",
      "GraphQL",
      "Apollo Server",
      "Go",
      "Docker",
    ],
    gradient: "from-orange-600 to-red-800",
    icon: "⚡",
    category: "Mobile Game",
    url: "https://topaz.dev/projects/575f49eb3bc26cf370b1",
    githubUrl: "https://github.com/naoido/setsuna-mobile",
  },
  {
    id: "binary-mahjong",
    title: "バイナリ麻雀",
    description:
      "麻雀に使用される数字やマークをすべてバイナリで表示する革新的な麻雀ゲーム。バイナリ表記故の難読性を活かしたダウト機能を実装し、新しい楽しさを提供。",
    technologies: [
      "Python",
      "React",
      "Docker",
      "WebSocket",
      "MySQL",
      "TypeScript",
    ],
    gradient: "from-green-600 to-emerald-800",
    icon: "🀄",
    category: "Web Game",
    url: "https://topaz.dev/projects/bdce75df1dd2bdcee0a7",
    githubUrl: "https://github.com/AnnkoATAMA/brachion",
  },
  {
    id: "aws-architecture-builder",
    title: "AWSアーキテクチャビルダー",
    description:
      "お客さんの要望に応じたAWSのアーキテクチャを作るゲーム。直感的にUIでアーキテクチャ図を作成でき、花火を上げることも可能。Terraformを使用した完全なIaC化を実現。",
    technologies: [
      "AWS",
      "Terraform",
      "Vue.js",
      "Vuetify",
      "FastAPI",
      "DynamoDB",
    ],
    gradient: "from-blue-600 to-indigo-800",
    icon: "☁️",
    category: "Cloud Architecture Game",
    url: "https://topaz.dev/projects/ff454ddba004e991b867",
    githubUrl: "https://github.com/object-t/front-progate-aws-hackathon",
  },
  {
    id: "virtual-marathon",
    title: "擬似マラソン",
    description:
      "スマートフォンと、vrゴーグルを使用して腕を振って画面が切り替わるマラソンを再現",
    technologies: ["Rust", "React", "Grpc", "AWS", "Kotlin", "Go"],
    gradient: "from-purple-600 to-pink-800",
    icon: "🏃‍♂️",
    category: "VR Game",
    url: "https://topaz.dev/projects/2dfc326b6e2a50b733d9",
    githubUrl: "https://github.com/kenta-afk/ikutio-backend",
  },
];
