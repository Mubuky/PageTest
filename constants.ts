
import { NavItem, ResearchInterest, VisitedPlace, Publication, NewsItem, BlogPost } from './types';

// Function to load blog content from file
export const loadBlogContent = async (blogId: string): Promise<string> => {
  try {
    const response = await fetch(`/blogs/${blogId}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load blog: ${blogId}`);
    }
    const markdown = await response.text();

    // Parse frontmatter and content
    const lines = markdown.split('\n');
    let contentStart = 0;

    // Skip frontmatter (between ---)
    if (lines[0] === '---') {
      for (let i = 1; i < lines.length; i++) {
        if (lines[i] === '---') {
          contentStart = i + 1;
          break;
        }
      }
    }

    return lines.slice(contentStart).join('\n').trim();
  } catch (error) {
    console.error(`Error loading blog ${blogId}:`, error);
    return 'Error loading blog content.';
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Publications', path: '/publications' },
  { label: 'Blogs', path: '/blog' },
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    title: "Reinforcement Learning",
    description:
      "Exploring reinforcement learning algorithms and their applications in training language models. Focusing on RLHF, reward modeling, and policy optimization techniques to align AI systems with human preferences and improve model capabilities through interactive learning.",
    period: "2024 - Present",
    colorTheme: "bg-anthropic-accent/20 border-anthropic-accent/30"
  },
  {
    title: "Self-Evolving Agents",
    description:
      "Investigating methods for LLM-based agents to autonomously improve and adapt in real-world environments. This includes self-reflection mechanisms, experience accumulation, and continuous learning paradigms that enable agents to evolve beyond their initial training.",
    period: "2024 - Present",
    colorTheme: "bg-anthropic-leaf/20 border-anthropic-leaf/30"
  },
  {
    title: "Synthetic Data Generation",
    description:
      "Developing automated frameworks for high-quality instruction synthesis from unsupervised text. Focusing on enhancing diversity and difficulty of generated data through novel methodologies like multi-level foveation to improve LLM training effectiveness.",
    period: "2024 - Present",
    colorTheme: "bg-anthropic-mist/40 border-anthropic-mist/60"
  },
  {
    title: "Multimodal Reasoning",
    description:
      "Exploring the intersection of vision and language models, including video generation as a reasoning paradigm. Interested in how multimodal models can perform complex reasoning tasks by integrating visual and textual information.",
    period: "2025 - Present",
    colorTheme: "bg-anthropic-sand/40 border-anthropic-sand/60"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'self-foveate',
    title: "Self-Foveate: Enhancing Diversity and Difficulty of Synthesized Instructions from Unsupervised Text via Multi-Level Foveation",
    authors: ["Mingzhe Li†", "Xin Lu", "Yanyan Zhao"],
    venue: "ACL (Findings) 2025",
    year: 2025,
    link: "https://arxiv.org/abs/2507.23440",
    github: "https://github.com/Mubuky/self-foveate",
    tags: ["Data Synthesis", "LLM"],
    preprint: false
  },
  {
    id: 'thinking-with-video',
    title: "Thinking with Video: Video Generation as a Promising Multimodal Reasoning Paradigm",
    authors: ["Jingqi Tong*", "Yurong Mou*", "Hangcheng Li*", "Mingzhe Li*", "Yongzhuo Yang*", "Ming Zhang", "Qiguang Chen", "Tianyi Liang", "Xiaomeng Hu", "Yining Zheng", "Xinchi Chen", "Jun Zhao", "Xuanjing Huang", "Xipeng Qiu"],
    venue: "arXiv 2025",
    year: 2025,
    link: "https://arxiv.org/abs/2511.04570",
    github: "https://github.com/tongjingqi/Thinking-with-Video",
    tags: ["Multimodal", "Video Generation"],
    preprint: true
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2025/08",
    content: "Started my internship at Shanghai Innovation Institute.",
  },
  {
    date: "2025/03",
    content: "One paper \"Self-Foveate\" is accepted by Findings of ACL 2025!",
    link: "https://arxiv.org/abs/2507.23440"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  // Add your blog posts here
];

export const SOCIAL_LINKS = {
  scholar: "https://scholar.google.com/citations?user=mHZ8IwgAAAAJ&hl=en",
  github: "https://github.com/Mubuky",
  linkedin: "https://www.linkedin.com/in/mubuky",
  email: "mzli@ir.hit.edu.cn"
};

export const VISITED_PLACES: VisitedPlace[] = [
  // Add your travel places here
];

// Personal Info for About page
export const PERSONAL_INFO = {
  name: "Mingzhe Li",
  chineseName: "李明哲",
  title: "Prospective Ph.D. Student",
  affiliation: "Fudan University × Shanghai Innovation Institute",
  currentStatus: "Senior undergraduate at Harbin Institute of Technology",
  advisor: "Prof. Xipeng Qiu",
  advisorLink: "https://xpqiu.github.io/",
  bio: "I am broadly interested in Natural Language Processing and Machine Learning. My current research focuses on Reinforcement Learning, Self-Evolving Agent and Synthetic Data Generation. I am particularly interested in leveraging reinforcement learning and its derivative techniques to stimulate the self-evolving capabilities of LLM-based agents in real-world environments.",
  education: [
    {
      degree: "Ph.D. in Computer Science and Technology",
      school: "Fudan University (Jointly with Shanghai Innovation Institute)",
      location: "Shanghai",
      period: "2026.09 - 2031.07 (Expected)"
    },
    {
      degree: "B.S. in Artificial Intelligence",
      school: "Harbin Institute of Technology",
      location: "Harbin",
      period: "2022.08 - 2026.07"
    }
  ],
  honors: [
    {
      year: "2025.01",
      title: "Top Ten Outstanding Learning Stars of Harbin Institute of Technology (nominee)"
    },
    {
      year: "2023.12",
      title: "Outstanding Student of General Higher Education Institutions in Heilongjiang Province"
    }
  ],
  services: ["ACL", "CVPR"]
};
