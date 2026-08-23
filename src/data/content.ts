export const personal = {
  name: 'Abdur Rehman',
  title: 'Data Science, Data Analytics & Business Intelligence Professional',
  email: 'abdurrehman.x22@gmail.com',
  phone: '+92 316 5006015',
  linkedin: 'https://www.linkedin.com/in/abdurrehmanx22/',
  photo: '/images/profile/profile-2.png',
  workSamplesUrl: '/docs/Abdurrehman-Work-Samples.pdf',
  summary:
    'Data Science graduate with a proven track record in data analytics, business intelligence, data engineering, and data science. Hands-on corporate experience at Systems Limited, U Microfinance Bank, and Kohinoor Textile Mills, combined with international freelance success delivering C-level Power BI reporting and end-to-end data integrations for global clients across the United States, Portugal, and France.',
};

export const skillGroups = [
  {
    title: 'Programming & Queries',
    skills: ['Python', 'SQL', 'C++', 'DAX', 'Power Query'],
  },
  {
    title: 'BI & Visualization',
    skills: ['Power BI (Expert)', 'Microsoft Excel'],
  },
  {
    title: 'Cloud & Data Engineering',
    skills: ['Azure', 'Snowflake', 'Databricks', 'Data Warehousing'],
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      'Machine Learning',
      'Time Series Analysis',
      'Spend Analytics',
      'Predictive Modeling',
      'OOP',
    ],
  },
];

export type ExperienceItem = {
  org: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
};

export const corporateExperience: ExperienceItem[] = [
  {
    org: 'Systems Limited',
    location: 'Islamabad',
    role: 'Data Analytics Intern',
    period: 'Jun 2025 – Aug 2025',
    bullets: [
      'Architected data warehousing solutions using Snowflake, ensuring high-performance data storage and retrieval.',
      'Engineered backend integrations in Azure, establishing cloud connections to ensure seamless data ingestion.',
      'Deployed analytical dashboards to visualize key project metrics, bridging the gap between raw data and business insights.',
    ],
  },
  {
    org: 'U Microfinance Bank Limited',
    location: 'Islamabad',
    role: 'Business Intelligence Intern',
    period: 'Jul 2024',
    bullets: [
      'Reviewed and analyzed various departmental reports to support informed business decision-making.',
      'Gained specialized domain knowledge in microfinance banking operations and reporting standards.',
      'Analyzed large datasets to identify trends and provide actionable insights for strategic decisions.',
    ],
  },
  {
    org: 'Kohinoor Textile Mills Limited',
    location: 'Rawalpindi',
    role: 'Data Science Intern',
    period: 'Jul 2023 – Oct 2023',
    bullets: [
      'Implemented Time Series Analysis and forecasting models for BAG PVC production, directly optimizing inventory planning.',
      'Conducted Statistical Analysis (Spend Analytics) on procurement data to identify cost-saving opportunities and outliers.',
      'Applied predictive modeling techniques to enhance strategic decision-making within a manufacturing environment.',
    ],
  },
];

export const freelanceExperience: ExperienceItem[] = [
  {
    org: 'Upwork Client',
    location: 'United States',
    role: 'Data Analyst & ETL Specialist',
    period: 'Aug 2024 – Sep 2024',
    bullets: [
      'Automated sales reporting via WooCommerce API to derive real-time customer insights and monitor purchasing behavior.',
      'Tracked marketing performance by integrating Google Analytics & Ads data for comprehensive KPI monitoring.',
      'Developed manual extraction workflows to bypass Amazon API limitations, ensuring continuous data availability.',
      'Optimized data quality using Power Query & DAX transformations to clean raw datasets and remove duplicates.',
      'Conducted Financial Variance Analysis (Budget vs. Actual) to evaluate 2024 performance trends and operational efficiency.',
    ],
  },
  {
    org: 'Upwork Client',
    location: 'Portugal',
    role: 'Educational Data Analyst & Consultant',
    period: 'Jul 2024',
    bullets: [
      'Delivered end-to-end Power BI solutions for school data analysis including dashboard design and deployment.',
      'Identified trends in student enrollment, academic performance, and resource utilization for administrative planning.',
      'Conducted one-on-one Power BI training sessions for the client, ensuring self-sufficiency post-project.',
    ],
  },
  {
    org: 'Upwork Client',
    location: 'France',
    role: 'Power BI Dashboard Developer',
    period: 'Nov 2023',
    bullets: [
      'Developed a multi-page Power BI report for crypto portfolio management and performance tracking.',
      'Delivered polished data visualization solutions meeting C-level reporting standards.',
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  /** Primary image, plus any additional screenshots from the same project. */
  images: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'E-Commerce Analytics',
    description:
      'Sales and customer insight reporting built on WooCommerce and marketing data, tracking purchasing behavior and KPI performance.',
    images: ['/images/projects/e-commers-project.webp'],
    tags: ['Power BI', 'WooCommerce API', 'DAX'],
  },
  {
    title: 'Call Center Performance',
    description:
      'Operational dashboard surfacing call volume, agent performance, and service-level metrics for day-to-day decision-making.',
    images: ['/images/projects/call-center-project.webp'],
    tags: ['Power BI', 'Operations Analytics'],
  },
  {
    title: 'Schools Data Analysis',
    description:
      'End-to-end Power BI solution for a Portugal-based education client, covering enrollment trends, academic performance, and resource utilization.',
    images: ['/images/projects/schools-project.webp'],
    tags: ['Power BI', 'Education', 'Consulting'],
  },
  {
    title: 'Crypto Portfolio Tracker',
    description:
      'Multi-page Power BI report built for a France-based client to track crypto portfolio management and performance to C-level reporting standards, from top-level equity summaries down to asset-level detail.',
    images: ['/images/projects/crypto-project-1.webp', '/images/projects/crypto-project-2.webp'],
    tags: ['Power BI', 'Finance', 'Data Visualization'],
  },
];

export const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '9+', label: 'Completed Projects' },
  { value: '3', label: 'Countries Served' },
];

export type Service = {
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    title: 'Business Intelligence & Dashboards',
    summary:
      'End-to-end Power BI reporting, from data modeling to boardroom-ready dashboards.',
    bullets: [
      'Power BI report design and deployment',
      'DAX and Power Query data modeling',
      'Executive-ready dashboards and KPI tracking',
      'Client training and dashboard handover',
    ],
  },
  {
    title: 'Data Analytics & ETL',
    summary:
      'Cleaning, integrating, and automating data pipelines from real-world business systems.',
    bullets: [
      'SQL & Python data cleaning and transformation',
      'API integrations (WooCommerce, Google Analytics & Ads)',
      'Spend and financial variance analysis',
      'Manual extraction workflows for restricted APIs',
    ],
  },
  {
    title: 'Cloud & Data Engineering',
    summary: 'Warehousing and backend data infrastructure built for reliable reporting.',
    bullets: [
      'Azure cloud integrations',
      'Snowflake data warehousing',
      'Databricks pipelines',
      'Data ingestion and storage architecture',
    ],
  },
  {
    title: 'Data Science & Forecasting',
    summary: 'Statistical and predictive modeling applied to real operational data.',
    bullets: [
      'Time series analysis and forecasting',
      'Predictive modeling',
      'Statistical analysis and outlier detection',
      'Machine learning for business decisions',
    ],
  },
];

export const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'Power BI dashboard design, data analytics and ETL, cloud data engineering (Azure, Snowflake, Databricks), and data science/forecasting work.',
  },
  {
    question: 'How does the process work?',
    answer:
      "We start with a quick call or message to understand your data and goals, then I scope the work, build the solution, and walk you through the final dashboard or report.",
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'Depends on scope — a single dashboard can take a few days, while a full data pipeline or multi-page reporting system takes longer. I\'ll give you a timeline before starting.',
  },
  {
    question: 'What do you need from me before starting?',
    answer:
      'Access to your raw data (or a sample), a description of what decisions the report/dashboard needs to support, and any brand or formatting preferences.',
  },
  {
    question: 'Do you offer revisions?',
    answer:
      'Yes — I iterate with you until the dashboard or report actually answers the questions you need it to answer.',
  },
  {
    question: 'How do I get started?',
    answer: 'Email me — happy to talk through your project.',
  },
];

export type WorkSample = {
  title: string;
  tag: string;
  description: string;
  image: string;
};

export const workSamples: WorkSample[] = [
  {
    title: 'Spend Analytics',
    tag: 'Procurement analytics',
    description:
      'Procurement spend analysis identifying cost-saving opportunities and outliers, built during the Kohinoor Textile Mills internship.',
    image: '/images/work-samples/spend-analytics.webp',
  },
  {
    title: 'Spend Dashboard',
    tag: 'Budget reporting',
    description:
      'Interactive dashboard summarizing budget vs. actual spend trends for stakeholder reporting.',
    image: '/images/work-samples/spend-dashboard.webp',
  },
  {
    title: 'Item Quality Dashboard',
    tag: 'Quality control',
    description:
      'Quality-control tracking dashboard highlighting defect rates and production quality trends.',
    image: '/images/work-samples/item-quality-dashboard.webp',
  },
  {
    title: 'Customer Behaviour Dashboard',
    tag: 'Customer analytics',
    description:
      'Behavioral analytics dashboard visualizing customer engagement and purchasing patterns.',
    image: '/images/work-samples/behaviour-dashboard.webp',
  },
  {
    title: 'Spotify Listening Insights',
    tag: 'Personal project',
    description:
      'Personal data exploration project visualizing listening habits and trends from Spotify data.',
    image: '/images/work-samples/spotify.webp',
  },
];
