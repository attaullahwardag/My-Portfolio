/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function downloadResume() {
  const resumeText = `===================================================================
                       ATTA ULLAH - RESUME
===================================================================
M.Phil Computer Science | AI & NLP Researcher | Software Developer
Email: wardag.atta@gmail.com
Phone: +92 345 9876543
Location: Peshawar, Khyber Pakhtunkhwa, Pakistan
GitHub: github.com/attaullah
LinkedIn: linkedin.com/in/atta-ullah
ResearchGate: researchgate.net/profile/Atta-Ullah

-------------------------------------------------------------------
PROFESSIONAL SUMMARY
-------------------------------------------------------------------
M.Phil Computer Science researcher and Government IT professional working 
in Pakistan's judiciary sector. Extensive background in systems administration, 
database management, and full-stack software development. Heavy research focus 
on low-resource Natural Language Processing (NLP), deep learning architectures, 
sentiment analysis, and hate speech detection for regional languages (Pashto). 

-------------------------------------------------------------------
RESEARCH SPOTLIGHT
-------------------------------------------------------------------
Master's Thesis Project:
"Enhanced Detection of Hate Speech and Sentiment in Pashto Social Media 
Text Using Machine Learning and Deep Learning Architectures"
- Compiled and annotated a novel dataset of 8,500+ Pashto posts.
- Benchmarked baseline machine learning models against LSTM, Bi-LSTM, and mBERT.
- Achieved state-of-the-art accuracy of 91.8% using Hugging Face Transformer models.

-------------------------------------------------------------------
TECHNICAL SKILLS
-------------------------------------------------------------------
* Programming: Python, JavaScript, SQL, PHP, HTML5, CSS3
* AI & NLP: Machine Learning, Deep Learning, Sentiment Mining, Transformer
            Models, mBERT, LSTM/Bi-LSTM, CNNs, Sequence Tokenization
* Frameworks & Libraries: React.js, Node.js, TensorFlow, Keras, PyTorch, 
                          Scikit-Learn, Bootstrap, Tailwind CSS, Canvas API
* Tools & platforms: Google Colab, GitHub, VS Code, Linux, Windows Server, MS SQL

-------------------------------------------------------------------
ACADEMIC BACKGROUND
-------------------------------------------------------------------
* M.Phil in Computer Science (Active / In Research Phase)
  Coursework CGPA: 3.8/4.0
  Focus: Advanced Machine Learning, Natural Language Processing, Low-Resource AI

* Master of Computer Science (MCS) | 2020 - 2022
  University of Peshawar - Peshawar, KP, Pakistan
  Grade: A Grade (First Division)

* Diploma in Information Technology (DIT) | 2019
  KP Board of Technical Education - Peshawar, Pakistan

* Microsoft Certified Systems Engineer (MCSE) | 2018
  Microsoft Global Credentials - Active Infrastructure Validation

-------------------------------------------------------------------
PROFESSIONAL EXPERIENCE
-------------------------------------------------------------------
Government IT Professional | Judiciary Sector -- Peshawar, KP, Pakistan
March 2021 - Present
- Administer judicial SQL databases and secure Windows server systems.
- Lead digital record management initiatives, automating case record workflows.
- Manage local network infrastructures, Active Directory, and system group policies.
- Provide expert technical support and training to judicial court personnel.

-------------------------------------------------------------------
PUBLICATIONS & SELECTED PAPERS (Expected & Under Submission)
-------------------------------------------------------------------
- "Enhanced Detection of Hate Speech and Sentiment in Pashto Social Media Text 
  Using Machine Learning" (Under Submission - IEEE Access, late 2026)
- "Normalization Architectures for Transliterated and Non-Standard Pashto Orthography" 
  (In Preparation - KP NLP Symposium 2027)

-------------------------------------------------------------------
CERTIFICATIONS
-------------------------------------------------------------------
* Microsoft Certified Systems Engineer (MCSE) - Credentials verification Active (2018)
* Natural Language Processing (NLP) Specialization - DeepLearning.AI
* Practical Machine Learning & Deep Learning - Kaggle/Stanford-Online
* Advanced Database Security & Admin - KP Board of Information Technology

===================================================================
Generated on: ${new Date().toLocaleDateString('en-US')}
===================================================================`;

  const blob = new Blob([resumeText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Resume_Atta_Ullah.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
