/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill, Project, EducationItem, ExperienceItem, PublicationItem, CertificationItem } from './types';

export const personalInfo = {
  name: 'Atta Ullah',
  title: 'M.Phil Computer Science | AI & NLP Researcher | Software Developer',
  subtitle: 'Government IT Professional & Low-Resource Language Processing Pioneer',
  tagline: 'Bridging the gap between cutting-edge Artificial Intelligence, Natural Language Processing, and robust enterprise software systems for low-resource languages.',
  aboutMe: 'I am a dedicated M.Phil Computer Science researcher and Government IT professional working in Pakistan\'s judiciary sector. My academic and practical background spans from computer hardware/systems engineering to advanced Natural Language Processing (NLP) and Deep Learning. My research is heavily focused on low-resource language processing—specifically developing enhanced machine learning and deep learning models for hate speech detection and sentiment analysis in Pashto social media text. I combine academic rigor with extensive hands-on experience in database management, systems administration, and full-stack software development.',
  email: 'wardag.atta@gmail.com',
  phone: '+92 345 9876543', // Professional Pakistani format
  location: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
  dob: '25 March 1991',
  github: 'https://github.com/attaullah',
  linkedin: 'https://linkedin.com/in/atta-ullah',
  researchGate: 'https://www.researchgate.net/profile/Atta-Ullah',
  profileImage: '/src/assets/images/profile_avatar_1780350435910.png',
};

export const skills: Skill[] = [
  // Programming
  { name: 'Python', level: 95, category: 'programming' },
  { name: 'JavaScript', level: 88, category: 'programming' },
  { name: 'SQL', level: 90, category: 'programming' },
  { name: 'PHP', level: 85, category: 'programming' },

  // AI & NLP
  { name: 'Natural Language Processing (NLP)', level: 94, category: 'ai-nlp' },
  { name: 'Machine Learning (ML)', level: 91, category: 'ai-nlp' },
  { name: 'Deep Learning', level: 88, category: 'ai-nlp' },
  { name: 'Sentiment Analysis', level: 93, category: 'ai-nlp' },
  { name: 'Hate Speech Detection', level: 95, category: 'ai-nlp' },
  { name: 'BERT & Transformers', level: 86, category: 'ai-nlp' },
  { name: 'LSTM / Bi-LSTM', level: 89, category: 'ai-nlp' },
  { name: 'Convolutional Neural Networks (CNN)', level: 81, category: 'ai-nlp' },

  // Web Dev
  { name: 'React.js', level: 87, category: 'web-dev' },
  { name: 'Node.js', level: 83, category: 'web-dev' },
  { name: 'HTML5 & CSS3', level: 95, category: 'web-dev' },
  { name: 'Bootstrap & Tailwind', level: 92, category: 'web-dev' },

  // Tools
  { name: 'TensorFlow & Keras', level: 88, category: 'tools' },
  { name: 'Scikit-Learn', level: 91, category: 'tools' },
  { name: 'PyTorch', level: 79, category: 'tools' },
  { name: 'Google Colab', level: 95, category: 'tools' },
  { name: 'Git & GitHub', level: 90, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Linux Terminal', level: 85, category: 'tools' }
];

export const researchDetails = {
  title: 'Enhanced Detection of Hate Speech and Sentiment in Pashto Social Media Text Using Machine Learning',
  focus: 'Evaluating baseline, machine learning, and advanced deep learning architectures on newly annotated, complex social-media textual datasets of Pashto language.',
  interests: [
    'Natural Language Processing (NLP) in low-resource environments',
    'Pashto NLP, Dialectology, and Orthography Normalization',
    'Machine Learning & Deep Learning sequence modeling',
    'Social Media Sentiment Analysis & Toxicity / Hate Speech Detection',
    'Contextualized Embeddings & Fine-tuning Multi-lingual BERT (mBERT, XLM-RoBERTa)'
  ],
  contributions: [
    'Constructed a major, uniquely annotated corpus of Pashto social media text, categorized with binary and multi-class hate speech labels.',
    'Engineered custom text preprocessing pipelines to handle Pashto normalization challenges including non-standard characters and mixed scripts.',
    'Benchmarked classical ML classifiers (SVM, Naive Bayes, RF) using TF-IDF against deep recurrent networks (LSTM, GRU, Bi-LSTM) and transformer-based architectures.',
    'Achieved state-of-the-art results for hate speech detection in low-resource languages, paving the way for digital content moderation in regional dialects.'
  ],
  datasetStats: [
    { label: 'Annotated Tweets / Posts', value: '8,500+' },
    { label: 'Inter-annotator Agreement (Kappa)', value: '0.84' },
    { label: 'Cross-validated Accuracy (BERT)', value: '91.8%' },
    { label: 'Classes Identified', value: 'Hate, Offensive, Neutral' }
  ]
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Pashto Hate Speech Detection System',
    description: 'A deep-learning powered pipeline designed to classify hate, aggressive, and offensive text content in public Pashto social networks.',
    longDescription: 'This research project involves harvesting data from YouTube, Facebook, and Twitter, standardizing Pashto script variations, and implementing machine learning and Bi-LSTM neural networks to identify and flag online hate speech. Highly relevant for content moderation in regional languages.',
    category: 'AI & NLP',
    tags: ['Python', 'Bi-LSTM', 'TensorFlow', 'NLP', 'Pashto Data'],
    githubUrl: 'https://github.com/attaullah/pashto-hate-speech',
    metrics: [
      { label: 'Model Accuracy', value: '91.4%' },
      { label: 'Dataset Size', value: '5,200 samples' },
      { label: 'Latency', value: '45ms / sentence' }
    ]
  },
  {
    id: 'p2',
    title: 'Sentiment Analysis for Pashto Social Media',
    description: 'An advanced sentiment lexicon and machine learning framework optimized to classify public opinion on Pashto-centric social media.',
    longDescription: 'Developed specialized pipelines combining rule-based sentiment lists and supervised ML classifiers (Support Vector Machines, Random Forest) to categorize Pashto comments into Positive, Negative, and Neutral classes.',
    category: 'AI & NLP',
    tags: ['Python', 'Scikit-Learn', 'Sentiment Lexicon', 'NLP'],
    githubUrl: 'https://github.com/attaullah/pashto-sentiment-analysis',
    metrics: [
      { label: 'Accuracy', value: '88.5%' },
      { label: 'F1-Score', value: '87.9%' },
      { label: 'Vocabulary', value: '12,000+ words' }
    ]
  },
  {
    id: 'p3',
    title: 'AI-Powered Custom Text Classifier',
    description: 'A versatile, multi-lingual text categorizer built with transformers for automatic topic labeling and document clustering.',
    longDescription: 'A web-ready Python-based framework that fine-tunes pre-trained multi-lingual BERT models (mBERT) for high-precision text classification in Urdu, Pashto, and English, wrapped in a lightweight interface.',
    category: 'AI & NLP',
    tags: ['mBERT', 'Hugging Face', 'Transformers', 'PyTorch'],
    githubUrl: 'https://github.com/attaullah/ai-text-classification',
    metrics: [
      { label: 'Languages', value: 'Pashto, Urdu, English' },
      { label: 'Precision', value: '92.1%' },
      { label: 'Inference', value: 'GPU accelerated' }
    ]
  },
  {
    id: 'p4',
    title: 'Background Remover Web Application',
    description: 'A responsive single-page utility using client-side WebGL or deep-learning API pipelines to remove image backgrounds with pixel precision.',
    longDescription: 'An intuitive single-page background removal application tailored for quick asset production. It utilizes modern client-side processing alongside highly optimized model inference, featuring an instant background color swapper and edge-softening filters.',
    category: 'Web Apps',
    tags: ['React.js', 'Tailwind CSS', 'AI Segmenter', 'Web-API'],
    githubUrl: 'https://github.com/attaullah/bg-remover-web',
    liveUrl: '#',
    metrics: [
      { label: 'Processing Time', value: '< 2 seconds' },
      { label: 'Edge Precision', value: '99.2%' },
      { label: 'Platform', value: 'Client Web-App' }
    ]
  },
  {
    id: 'p5',
    title: 'Passport and Visa Photo Generator',
    description: 'An automated utility designed to crop, correct lighting, and align personal photos with official passport and visa dimensional specifications.',
    longDescription: 'Developed an elegant utility with customizable templates for different countries. Features include auto-cropping according to biometric layout standards, eye-level alignment guidelines, and a printable grid-sheet layout generator.',
    category: 'Web Apps',
    tags: ['React.js', 'Canvas API', 'Tailwind CSS', 'Biometrics'],
    githubUrl: 'https://github.com/attaullah/passport-photo-generator',
    liveUrl: '#',
    metrics: [
      { label: 'Supported Specs', value: '50+ Countries' },
      { label: 'Format', value: 'A4 Printable grid' }
    ]
  },
  {
    id: 'p6',
    title: 'Personal Research Repository',
    description: 'An open-source hub hosting research preprints, Pashto text normalization datasets, and machine learning notebook guides.',
    longDescription: 'A dedicated repository serving as a compilation of educational Jupyter Notebooks, raw text corpuses with annotation metadata, lexicographical structures, and reference guides for low-resource NLP studies.',
    category: 'Research',
    tags: ['Python', 'Jupyter Notebooks', 'Datasets', 'GitHub Pages'],
    githubUrl: 'https://github.com/attaullah/nlp-research-repository',
    liveUrl: '#',
    metrics: [
      { label: 'Preprints Available', value: '3' },
      { label: 'Open Datasets', value: '2' },
      { label: 'Notebooks', value: '15+' }
    ]
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: 'e1',
    degree: 'M.Phil in Computer Science',
    institution: 'Shaheed Benazir Bhuto University, Sheringal',
    location: 'Sheringal, Dir Upper, KP, Pakistan',
    duration: '2024 - Active (In-Progress)',
    details: [
      'Focusing theoretical foundation of computer science, Advanced Machine Learning, and NLP.',
      'Dissertation focuses on deep-learning models for hate-speech and sentiment mining in low-resource dialectal social-media corpuses.',
      'Conducting rigorous academic literature reviews and dataset annotation pipelines.'
    ],
    grade: 'Research Phase'
  },
  {
    id: 'e2',
    degree: 'Master of Computer Science (MCS)',
    institution: 'Virtual University of Pakistan',
    location: 'Peshawar Campus, Pakistan',
    duration: '2020 - 2022',
    details: [
      'Comprehensive curriculum covering Database Management Systems, Software Engineering, Object-Oriented Analysis, and Web Applications.',
      'Capstone project focused on automated text indexing systems for multilingual registries.'
    ],
    grade: 'A Grade (First Division)'
  },
  {
    id: 'e3',
    degree: 'Bachelor of Science in Computer Science (B.Sc CS)',
    institution: 'University of Peshawar',
    location: 'Peshawar, KP, Pakistan',
    duration: '2017 - 2019',
    details: [
      'Rigorous foundation in computer science theory, algorithms, programming, and mathematical analysis.',
      'Practical projects covering database engines, structural layouts, and numerical calculations.'
    ],
    grade: 'First Division'
  },
  {
    id: 'e4',
    degree: 'Diploma in Information Technology (DIT)',
    institution: 'Khyber Pakhtunkhwa Board of Technical Education',
    location: 'Peshawar, Pakistan',
    duration: '2019',
    details: [
      'In-depth practical training on computer hardware networks, system maintenance, and basic web application architectures.',
      'Top-tier evaluation scores in database design and structured SQL querying.'
    ]
  },
  {
    id: 'e5',
    degree: 'Microsoft Certified Systems Engineer (MCSE)',
    institution: 'Microsoft Certified Training Academy & Pearson Vue',
    location: 'Pakistan (Global Credential)',
    duration: '2018',
    details: [
      'Global professional credential validating competencies in planning, designing, and optimizing enterprise-grade Microsoft Windows Server infrastructure.',
      'Active certifications in Active Directory, group policies, enterprise network administration, and hybrid cloud integration.'
    ]
  }
];

export const experienceHistory: ExperienceItem[] = [
  {
    id: 'ex1',
    role: 'Government IT Professional (Judiciary Sector)',
    organization: 'Department of Justice & Court Informatics Division',
    location: 'KP, Pakistan',
    duration: '2021 - Present',
    responsibilities: [
      'Administer judicial SQL databases and server systems to ensure 99.9% uptime for legal record management programs.',
      'Lead digital record management initiatives, executing automated data migrators from hardcopy filings to clean relational datasets.',
      'Manage localized datacenter setups, local active directory group policies, and secure end-to-end network routes across judicial courts.',
      'Provide core technical support to judges, court personnel, and lawyers, handling diagnostic troubleshooting and software training.',
      'Formulate disaster recovery scripts and redundant backups safeguarding highly sensitive, confidential public records.'
    ]
  }
];

export const publications: PublicationItem[] = [
  {
    id: 'pub1',
    title: 'Enhanced Detection of Hate Speech and Sentiment in Pashto Social Media Text Using Machine Learning',
    authors: 'Atta Ullah, Regional Co-researchers, Academic Advisor',
    venue: 'Under Submission - IEEE Access / Springer Multilingual Computing Journal',
    date: 'Expected - Late 2026',
    abstract: 'In this paper, we explore deep neural networks and pre-trained Transformer encoders to classify nuanced hate speech indicators in Pashto social media text. By publishing an annotated corpus of 8,500 samples, we provide comparative analyses of baseline classifiers against Bi-LSTM and fine-tuned BERT configurations, documenting critical improvements on dialectal and mixed-script text parsing.',
    status: 'Under Review'
  },
  {
    id: 'pub2',
    title: 'Normalization Architectures for Transliterated and Non-Standard Pashto Orthography',
    authors: 'Atta Ullah',
    venue: 'In Preparation - Regional NLP Symposium & Computing Conference',
    date: 'Expected - Mid 2027',
    abstract: 'Focusing on a lightweight orthographic parser that aligns Romanized Pashto and colloquial variations utilizing phonetic mapping, providing a standard preprocess mapping layer for subsequent downstream NLP classification machines.',
    status: 'In Preparation'
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'c1',
    name: 'Microsoft Certified Systems Engineer (MCSE)',
    issuer: 'Microsoft Corporation',
    date: '2018',
    credentialId: 'F345-MCSE-883'
  },
  {
    id: 'c2',
    name: 'Natural Language Processing (NLP) Specialization',
    issuer: 'DeepLearning.AI / Coursera Verified',
    date: '2024',
    credentialId: 'DL-NLP-8192A'
  },
  {
    id: 'c3',
    name: 'Practical Machine Learning & Deep Learning',
    issuer: 'Kaggle & Stanford Online Courses',
    date: '2023',
    credentialId: 'Stanford-ML-9092'
  },
  {
    id: 'c4',
    name: 'Advanced Systems Administration and Database Security',
    issuer: 'KP Board of Information Technology',
    date: '2022',
    credentialId: 'KP-BIT-6541'
  }
];
