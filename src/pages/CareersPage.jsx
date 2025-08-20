import { Helmet } from 'react-helmet-async';

const CareersPage = () => {
  const jobPostings = [
    {
      id: 1,
      title: "Senior SEO Executive",
      department: "Digital Marketing",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead SEO strategies for client projects, conduct keyword research, optimize websites for search engines.",
      datePosted: "2024-08-15",
      validThrough: "2024-09-15"
    },
    {
      id: 2,
      title: "React.js Developer",
      department: "Web Development",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop modern web applications using React.js, collaborate with design team, ensure responsive design.",
      datePosted: "2024-08-10",
      validThrough: "2024-09-10"
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      department: "Digital Marketing",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Manage digital marketing campaigns, lead generation, social media marketing, and client relationships.",
      datePosted: "2024-08-12",
      validThrough: "2024-09-12"
    },
    {
      id: 4,
      title: "UI/UX Designer",
      department: "Design",
      location: "Greater Noida, Uttar Pradesh, India",
      type: "Full-time",
      experience: "2-5 years",
      description: "Create user-friendly interfaces, conduct user research, design wireframes and prototypes.",
      datePosted: "2024-08-08",
      validThrough: "2024-09-08"
    },
    {
      id: 5,
      title: "Content Writer",
      department: "Content Marketing",
      location: "Remote/Greater Noida, India",
      type: "Full-time",
      experience: "1-3 years",
      description: "Create engaging content for websites, blogs, social media, and marketing materials.",
      datePosted: "2024-08-05",
      validThrough: "2024-09-05"
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
        "maxValue": 1200000,
        "unitText": "YEAR"
      }
    }
  }));

  const handleApplyClick = (jobTitle) => {
    // Send email with job title in subject
    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(`Dear SUH TECH Hiring Team,\n\nI am interested in applying for the ${jobTitle} position. Please find my resume attached.\n\nBest regards,`);
    window.location.href = `mailto:careers@suhtech.top?subject=${subject}&body=${body}`;
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
    <div>
      <Helmet>
        <title>Careers at SUH TECH - Join India's Leading Digital Solutions Company</title>
        <meta name="description" content="Join SUH TECH's growing team in Greater Noida. Explore career opportunities in web development, digital marketing, UI/UX design, and content writing." />
        <meta name="keywords" content="SUH TECH careers, jobs Greater Noida, digital marketing jobs, React developer jobs, UI UX designer jobs" />
        <link rel="canonical" href="https://suhtech.top/careers" />

        {jobPostingSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join SUH TECH - Shape the Future of Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Build your career with India's leading digital solutions company.
            Work with cutting-edge technologies and make an impact across industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-semibold">500+ Projects</span>
            <span className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-semibold">50+ Team Members</span>
            <span className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-semibold">5+ Years Experience</span>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Work at SUH TECH?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4" role="img" aria-label="Innovation">🚀</div>
              <h3 className="text-xl font-bold mb-3">Innovation-Driven</h3>
              <p>Work with latest technologies and innovative solutions that transform businesses across India.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4" role="img" aria-label="Money">💰</div>
              <h3 className="text-xl font-bold mb-3">Competitive Salary</h3>
              <p>Industry-leading compensation packages with performance bonuses and annual increments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4" role="img" aria-label="Growth">📈</div>
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p>Clear career progression paths with skill development programs and leadership opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4" role="img" aria-label="Home">🏠</div>
              <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
              <p>Flexible working hours, remote work options, and comprehensive health benefits.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4" role="img" aria-label="Target">🎯</div>
              <h3 className="text-xl font-bold mb-3">Impactful Projects</h3>
              <p>Work on diverse projects across healthcare, fintech, e-commerce, and education sectors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4" role="img" aria-label="Team">👥</div>
              <h3 className="text-xl font-bold mb-3">Collaborative Team</h3>
              <p>Join a supportive team environment that values creativity, innovation, and collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Current Openings at SUH TECH
          </h2>
          <div className="space-y-6">
            {jobPostings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>📍 {job.location}</span>
                      <span>🏢 {job.department}</span>
                      <span>⏰ {job.type}</span>
                      <span>🎯 {job.experience}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApplyClick(job.title)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`Apply for ${job.title} position`}
                  >
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Posted: {formatDate(job.datePosted)}</span>
                  <span>Apply by: {formatDate(job.validThrough)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Hiring Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-bold mb-2">Apply Online</h3>
              <p className="text-sm text-gray-600">Submit your resume and cover letter through our careers portal</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-bold mb-2">Initial Screening</h3>
              <p className="text-sm text-gray-600">HR team reviews applications and conducts initial phone screening</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-bold mb-2">Technical Interview</h3>
              <p className="text-sm text-gray-600">Technical assessment and interview with department heads</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-bold mb-2">Final Round</h3>
              <p className="text-sm text-gray-600">Culture fit interview and offer discussion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Careers */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Us for Careers
          </h2>
          <p className="text-lg mb-6">
            Interested in working with SUH TECH? Reach out to us at
            <a
              href="mailto:careers@suhtech.top"
              className="text-yellow-400 underline ml-1 hover:text-yellow-300 transition-colors"
            >
              careers@suhtech.top
            </a>
          </p>
          <p className="text-lg">
            Or call us at
            <a
              href="tel:+919693329842"
              className="font-semibold ml-1 hover:text-yellow-400 transition-colors"
            >
              +91-9693329842
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
