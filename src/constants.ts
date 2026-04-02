import { Project, Certification, CourseGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'nexus-core',
    title: 'Nexus Core: Distributed Mesh',
    description: 'A high-performance service mesh designed for microservices orchestration. Implemented a custom Raft consensus algorithm for state management and gRPC for low-latency communication.',
    tags: ['Go', 'Protobuf', 'Kubernetes', 'Docker'],
    category: 'Distributed Systems',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    id: 'ciphershield',
    title: 'CipherShield Vault',
    description: 'End-to-end encrypted secret management system using AES-256 and RSA. Includes a CLI tool for secure deployment environment variables.',
    tags: ['Python', 'AWS KMS'],
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'neuralpath',
    title: 'NeuralPath AI',
    description: 'Computer vision model optimized for low-power edge devices. Achieved 94% accuracy in real-time object classification using TensorFlow Lite.',
    tags: ['TensorFlow', 'C++'],
    category: 'ML / AI',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'dataflux',
    title: 'DataFlux: ETL Engine',
    description: 'An automated ETL pipeline capable of processing multi-terabyte datasets. Built with Apache Spark and optimized for Snowflake data warehousing.',
    tags: ['Spark', 'Snowflake'],
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    stats: [
      { label: 'Performance', value: '2.4 TB/hr' },
      { label: 'Latency', value: '< 200ms' }
    ]
  },
  {
    id: 'cloudscale',
    title: 'CloudScale Observability',
    description: 'Custom Grafana dashboards and Prometheus alerting system for monitoring multi-cloud infrastructure health and resource utilization.',
    tags: ['AWS', 'Prometheus', 'Grafana'],
    category: 'DevOps Infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws-cp',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description: 'Validation of overall understanding of the AWS Cloud platform, covering basic cloud concepts, security, technology, and billing.',
    date: 'Aug 2023',
    category: 'Cloud Architecture',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200&auto=format&fit=crop',
    verifyUrl: '#'
  },
  {
    id: 'google-da',
    title: 'Google Data Analytics',
    issuer: 'Google',
    description: 'Professional certificate covering the data analysis process from collection to visualization with R and SQL.',
    date: '2023',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop',
    idNumber: 'GDA-8829-QX'
  },
  {
    id: 'comptia-sec',
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    description: 'Global certification that validates the baseline skills necessary to perform core security functions.',
    date: '2023',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=200&auto=format&fit=crop',
    expiry: 'Dec 2026'
  }
];

export const COURSE_GROUPS: CourseGroup[] = [
  {
    title: 'Systems & Infrastructure',
    icon: 'terminal',
    courses: [
      { name: 'Operating Systems', code: 'CS140' },
      { name: 'Distributed Systems', code: 'CS244B' },
      { name: 'Computer Architecture', code: 'EE108' }
    ]
  },
  {
    title: 'Algorithms & Theory',
    icon: 'functions',
    courses: [
      { name: 'Data Structures', code: 'CS106B' },
      { name: 'Analysis of Algorithms', code: 'CS161' },
      { name: 'Theory of Computation', code: 'CS154' }
    ]
  },
  {
    title: 'Machine Intelligence',
    icon: 'psychology',
    courses: [
      { name: 'Artificial Intelligence', code: 'CS221' },
      { name: 'Machine Learning', code: 'CS229' },
      { name: 'Natural Language Processing', code: 'CS224N' }
    ]
  }
];
