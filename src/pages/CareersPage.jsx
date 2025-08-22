import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentRole: '',
    resume: null,
    coverLetter: '',
    jobTitle: '',
    portfolio: '',
    expectedSalary: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jobPostings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Lead full-stack development using React, Node.js, and cloud technologies. Drive architecture decisions and mentor junior developers.",
      datePosted: "2024-08-20",
      validThrough: "2024-09-20",
      skills: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
      salary: "8-15 LPA"
    },
    {
      id: 2,
      title: "Business Intelligence Analyst",
      department: "Analytics",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Transform data into actionable insights, create dashboards, and support strategic decision-making across the organization.",
      datePosted: "2024-08-18",
      validThrough: "2024-09-18",
      skills: ["SQL", "Power BI", "Tableau", "Python", "Excel"],
      salary: "6-12 LPA"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability and scalability.",
      datePosted: "2024-08-17",
      validThrough: "2024-09-17",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
      salary: "7-14 LPA"
    },
    {
      id: 4,
      title: "Mobile App Developer (React Native)",
      department: "Mobile Development",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop cross-platform mobile applications using React Native, integrate APIs, and ensure optimal performance.",
      datePosted: "2024-08-16",
      validThrough: "2024-09-16",
      skills: ["React Native", "JavaScript", "Firebase", "Redux", "REST APIs"],
      salary: "5-10 LPA"
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data Science",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Build machine learning models, analyze complex datasets, and develop predictive analytics solutions for clients.",
      datePosted: "2024-08-15",
      validThrough: "2024-09-15",
      skills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "SQL"],
      salary: "6-12 LPA"
    },
    {
      id: 6,
      title: "UI/UX Designer",
      department: "Design",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-5 years",
      description: "Create intuitive user interfaces, conduct user research, design wireframes and interactive prototypes for web and mobile apps.",
      datePosted: "2024-08-14",
      validThrough: "2024-09-14",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      salary: "4-8 LPA"
    },
    {
      id: 7,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Manage digital marketing campaigns, SEO optimization, social media marketing, and lead generation strategies.",
      datePosted: "2024-08-13",
      validThrough: "2024-09-13",
      skills: ["Google Ads", "SEO", "Social Media", "Analytics", "Content Marketing"],
      salary: "4-8 LPA"
    },
    {
      id: 8,
      title: "Product Manager",
      department: "Product",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "4-7 years",
      description: "Drive product strategy, work with cross-functional teams, and deliver innovative solutions that meet customer needs.",
      datePosted: "2024-08-12",
      validThrough: "2024-09-12",
      skills: ["Product Strategy", "Agile", "User Stories", "Market Research", "Analytics"],
      salary: "10-18 LPA"
    },
    {
      id: 9,
      title: "Junior Software Developer",
      department: "Engineering",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "0-2 years",
      description: "Join our development team to build web applications, learn modern technologies, and grow your programming skills.",
      datePosted: "2024-08-11",
      validThrough: "2024-09-11",
      skills: ["JavaScript", "HTML/CSS", "React", "Git", "Problem Solving"],
      salary: "3-6 LPA"
    },
    {
      id: 10,
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Design and implement automated testing frameworks, ensure software quality, and optimize testing processes.",
      datePosted: "2024-08-10",
      validThrough: "2024-09-10",
      skills: ["Selenium", "Java", "TestNG", "API Testing", "Automation Frameworks"],
      salary: "5-9 LPA"
    }
  ];

  // Job Posting Schema for each job
  const jobPostingSchemas = jobPostings.map(job => ({
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.datePosted,
    "validThrough": job.validThrough,
    "employmentType": job.type.toUpperCase().replace('-', '_'),
    "hiringOrganization": {
      "@type": "Organization",
      "name": "SUH TECH",
      "sameAs": "https://suhtech.top/",
      "logo": "https://suhtech.top/logo_Suh.jpg"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Habitech Crystal Mall, Knowledge Park III, 4th Floor, D-8",
        "addressLocality": "Greater Noida",
        "addressRegion": "UP",
        "postalCode": "201310",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 300000,
        "maxValue": 1800000,
        "unitText": "YEAR"
      }
    }
  }));

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData(prev => ({ ...prev, jobTitle: job.title }));
    setShowForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedJob(null);
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.experience || !formData.coverLetter) {
      alert('Please fill in all required fields (marked with *)');
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Job Application: ${formData.jobTitle}`);
    const body = encodeURIComponent(`
Dear SUH TECH Hiring Team,

I am applying for the ${formData.jobTitle} position. Here are my details:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Experience: ${formData.experience}
Current Role: ${formData.currentRole || 'Not specified'}
Portfolio/LinkedIn: ${formData.portfolio || 'Not provided'}
Expected Salary: ${formData.expectedSalary || 'Negotiable'}
Resume File: ${formData.resume ? formData.resume.name : 'Will be attached'}

Cover Letter:
${formData.coverLetter}

Note: I will attach my resume file to this email.

Best regards,
${formData.fullName}
    `);

    window.location.href = `mailto:careers@suhtech.top?subject=${subject}&body=${body}`;
    closeForm();
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>Careers at SUH TECH - Join India's Leading Digital Solutions Company</title>
        <meta name="description" content="Join SUH TECH's growing team in Greater Noida. Explore career opportunities in software development, data science, business analytics, and more." />
        <meta name="keywords" content="SUH TECH careers, software developer jobs, data scientist jobs, business analyst jobs, Greater Noida tech jobs" />
        <link rel="canonical" href="https://suhtech.top/careers" />

        {jobPostingSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {/* Background Elements */}
      <div className="absolute inset-0"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-t from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className={`container mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Join Our{" "}
            <span
              className="bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-clip-text text-transparent inline-block animate-pulse"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease-in-out infinite",
              }}
            >
              Innovation
            </span>{" "}
            Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Shape the future of digital transformation with cutting-edge technologies
            <br className="hidden sm:block" />
            and make an impact across industries worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm border border-white/20">500+ Projects</span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm border border-white/20">50+ Team Members</span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm border border-white/20">5+ Years Experience</span>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Why Choose SUH TECH?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "🚀", title: "Innovation-Driven", desc: "Work with latest technologies and innovative solutions that transform businesses globally." },
              { emoji: "💰", title: "Competitive Package", desc: "Industry-leading compensation with performance bonuses and comprehensive benefits." },
              { emoji: "📈", title: "Career Growth", desc: "Clear progression paths with skill development programs and leadership opportunities." },
              { emoji: "🏠", title: "Work-Life Balance", desc: "Flexible hours, hybrid work options, and comprehensive health benefits." },
              { emoji: "🎯", title: "Impactful Projects", desc: "Work on diverse projects across healthcare, fintech, e-commerce, and education." },
              { emoji: "👥", title: "Collaborative Culture", desc: "Join a supportive environment that values creativity, innovation, and teamwork." }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Current Opportunities
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobPostings.map((job) => (
              <div key={job.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                      <span className="flex items-center gap-1">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        🏢 {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        ⏰ {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        🎯 {job.experience}
                      </span>
                      <span className="flex items-center gap-1 text-green-400 font-semibold">
                        💰 {job.salary}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 px-3 py-1 rounded-full text-xs text-white border border-white/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105 relative overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #4B72E1 0%, #8E51C5 50%, #D230A9 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-white">Apply Now</span>
                  </button>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Posted: {formatDate(job.datePosted)}</span>
                  <span>Apply by: {formatDate(job.validThrough)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Hiring Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Apply Online", desc: "Submit your application through our comprehensive form" },
              { step: "2", title: "Initial Screening", desc: "HR team reviews applications and conducts phone screening" },
              { step: "3", title: "Technical Interview", desc: "Technical assessment and interview with team leads" },
              { step: "4", title: "Final Round", desc: "Culture fit interview and offer discussion" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="relative z-10 text-white text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg mb-6 text-gray-300">
            Contact us at{" "}
            <a
              href="mailto:careers@suhtech.top"
              className="text-pink-400 underline hover:text-pink-300 transition-colors"
            >
              careers@suhtech.top
            </a>
          </p>
          <p className="text-lg text-gray-300">
            Or call us at{" "}
            <a
              href="tel:+919693329842"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              +91-9693329842
            </a>
          </p>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Apply for {selectedJob?.title}
              </h3>
              <button
                onClick={closeForm}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience *</label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2-3 years">2-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Role</label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary (LPA)</label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    placeholder="e.g., 8-12 LPA"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio/LinkedIn URL</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume *</label>
                <input
                  type="file"
                  name="resume"
                  required
                  onChange={handleInputChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Accept PDF, DOC, DOCX files only</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter *</label>
                <textarea
                  name="coverLetter"
                  required
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us why you're perfect for this role..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #4B72E1 0%, #8E51C5 50%, #D230A9 100%)",
                  }}
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default CareersPage;
