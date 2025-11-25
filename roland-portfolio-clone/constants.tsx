import { Experience, Project, SocialLink, Skill, Service } from './types';
import { Github, Linkedin, Mail, Cloud, Terminal, Settings, BarChart, Shield, Layers, Container, GitBranch, Workflow, Activity, Box, Server } from './components/Icons';

export const SOCIALS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin
  },
  // {
  //   name: 'Email',
  //   url: 'mailto:contact@rolind.me',
  //   icon: Mail
  // }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    start: 'Jan 2022',
    end: 'Present',
    role: 'DevOps Manager',
    company: 'Almosafer',
    companyUrl: '#',
    location: 'Dubai, UAE',
    description: 'Currently leading the DevOps function for a large-scale travel platform, with responsibilities spanning infrastructure architecture, cloud operations, automation, and team leadership. Focused on optimizing cloud environments, improving deployment reliability, and streamlining release processes.',
    technologies: ['AWS', 'Kubernetes', 'EKS', 'Fluent Bit', 'Kafka', 'Vector', 'Elasticsearch', 'Slack', 'Jira']
  },
  {
    id: 'exp2',
    start: 'Nov 2020',
    end: 'Dec 2021',
    role: 'DevOps Developer III',
    company: 'Oracle India',
    companyUrl: '#',
    location: 'Bangalore, India',
    description: 'Contributed to enterprise-level DevOps initiatives by automating cloud infrastructure, enhancing deployment workflows, and supporting internal platform tools. Collaborated with engineering teams to strengthen security compliance.',
    technologies: ['Oracle Cloud', 'Terraform', 'Kubernetes', 'NVD']
  },
  {
    id: 'exp3',
    start: 'Jan 2017',
    end: 'Nov 2020',
    role: 'Sr. Technical Associate',
    company: 'Tata Communications',
    companyUrl: '#',
    location: 'Chennai, India',
    description: 'Played a key role in managing global infrastructure environments with a focus on container orchestration, configuration management, and infrastructure automation. Provided DevOps solutions to improve operational efficiency.',
    technologies: ['Kubernetes', 'OpenStack', 'Ansible']
  },
  {
    id: 'exp4',
    start: 'Feb 2016',
    end: 'Jan 2017',
    role: 'Associate Consultant',
    company: 'Virtusa Polaris',
    companyUrl: '#',
    location: 'Chennai, India',
    description: 'Implemented DevOps pipelines and supported release automation for enterprise applications. Involved in version control management, build automation, and lifecycle maintenance of deployment systems.',
    technologies: ['Git', 'SVN', 'Jenkins', 'Ansible', 'AWS']
  },
  {
    id: 'exp5',
    start: 'Sep 2013',
    end: 'Feb 2016',
    role: 'DevOps Engineer',
    company: 'Ruby Seven Studios',
    companyUrl: '#',
    location: 'Cochin, India',
    description: 'Responsible for managing cloud-based infrastructure to support online applications. Automated recurring operational tasks, monitored application performance, and contributed to improving deployment efficiency.',
    technologies: ['AWS', 'Jenkins', 'Ansible', 'RDS', 'Aurora', 'Redshift', 'DynamoDB']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Cloud Infrastructure', icon: Cloud },
  { name: 'Linux', icon: Terminal },
  { name: 'Platform Engineering', icon: Server },
  { name: 'Cloud Governance', icon: Settings },
  { name: 'Cost Optimization', icon: BarChart },
  { name: 'Platform Reliability', icon: Activity },
  { name: 'Kubernetes', icon: Container },
  { name: 'Containerization', icon: Box },
  { name: 'Infrastructure as Code (IaC)', icon: Layers },
  { name: 'Configuration Management', icon: Settings },
  { name: 'CI/CD', icon: GitBranch },
  { name: 'DevOps Automation', icon: Workflow },
  { name: 'Workflow Optimization', icon: Workflow },
  { name: 'Release Management', icon: Box },
  { name: 'Logging and Monitoring', icon: Activity },
  { name: 'Observability', icon: Activity },
  { name: 'Access Management', icon: Shield },
];

export const WHAT_I_DO: Service[] = [
  {
    id: 's1',
    title: 'Cloud Architecture & Infrastructure',
    description: 'Specializing in designing and implementing enterprise-grade cloud solutions with a focus on scalability, security, and operational excellence. Expert in architecting resilient infrastructure that enables business growth while maintaining optimal performance and cost efficiency.',
    icon: Cloud
  },
  {
    id: 's2',
    title: 'Development & Technical Delivery',
    description: 'Delivering high-quality technical solutions through comprehensive development practices. From infrastructure automation to platform engineering, ensuring robust, maintainable, and scalable systems that meet business objectives and technical requirements.',
    icon: Terminal
  }
];