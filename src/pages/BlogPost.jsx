import { useState } from "react";

const BlogPost = ({ slug }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com",
      comment: "This is such an insightful post! The way you've explained the design process really resonates with my experience as a designer in Mumbai.",
      date: "2024-08-10",
      avatar: `https://ui-avatars.com/api/?name=Priya+Sharma&background=6366f1&color=fff&size=50`
    },
    {
      id: 2,
      name: "Arjun Patel",
      email: "arjun@example.com",
      comment: "Great article! I particularly liked the section about data-driven decisions. Would love to see more examples from Indian startups.",
      date: "2024-08-09",
      avatar: `https://ui-avatars.com/api/?name=Arjun+Patel&background=e11d48&color=fff&size=50`
    },
    {
      id: 3,
      name: "Kavya Reddy",
      email: "kavya@example.com",
      comment: "Amazing insights! This approach has helped me improve user engagement in my recent projects. Thank you for sharing!",
      date: "2024-08-08",
      avatar: `https://ui-avatars.com/api/?name=Kavya+Reddy&background=059669&color=fff&size=50`
    }
  ]);

  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const blogContent = {
    "power-of-insights": {
      title: "The Power of insights",
      image: "/Blog1.png",
      tags: ["UI/UX Design", "Product Design"],
      date: "August 12, 2024",
      readTime: "8 min read",
      content: `
        <p>In the rapidly evolving world of product design, the difference between good and exceptional products often lies in the insights that drive decision-making. Data-driven design isn't just a buzzword—it's a fundamental approach that can elevate your products from ordinary to extraordinary.</p>

        <h2>Understanding User Behavior</h2>
        <p>The foundation of insightful design begins with understanding your users. Through careful analysis of user behavior patterns, we can uncover hidden needs and pain points that traditional research methods might miss. Heat maps, user session recordings, and analytics data provide a window into the real user experience.</p>

        <h2>The Analytics Advantage</h2>
        <p>Modern analytics tools offer unprecedented visibility into how users interact with our designs. By tracking conversion funnels, identifying drop-off points, and measuring engagement metrics, we can make informed decisions that directly impact user satisfaction and business outcomes.</p>

        <h2>Iterative Design Process</h2>
        <p>The power of insights truly shines when integrated into an iterative design process. Each iteration should be informed by data from the previous version, creating a cycle of continuous improvement. This approach ensures that design decisions are grounded in evidence rather than assumptions.</p>

        <h2>Case Study: Redesigning the Checkout Flow</h2>
        <p>Recently, we analyzed our e-commerce platform's checkout process and discovered that 60% of users abandoned their carts at the payment step. Through user testing and analytics, we identified friction points and redesigned the flow, resulting in a 35% increase in conversion rates.</p>

        <p>The key takeaway is that insights don't just inform design—they drive innovation. When we understand the 'why' behind user behavior, we can create solutions that not only meet current needs but anticipate future ones.</p>
      `
    },
    "about-teamwork": {
      title: "/About Teamwork",
      image: "Blog2.png",
      tags: ["UI/UX Design"],
      date: "August 10, 2024",
      readTime: "6 min read",
      content: `
        <p>Great design doesn't happen in isolation. It's the result of effective collaboration between designers, developers, product managers, and stakeholders. Understanding how to work effectively in a team environment is crucial for any designer's success.</p>

        <h2>Building Trust Through Communication</h2>
        <p>The foundation of any successful design team is trust, and trust is built through clear, consistent communication. Regular check-ins, transparent feedback sessions, and shared understanding of goals create an environment where creativity can flourish.</p>

        <h2>Cross-functional Collaboration</h2>
        <p>Modern product development requires seamless collaboration between different disciplines. Designers must work closely with developers to ensure feasibility, with product managers to align on business goals, and with researchers to validate assumptions.</p>

        <h2>Managing Feedback Effectively</h2>
        <p>Learning to give and receive constructive feedback is essential. Create structured feedback sessions, focus on specific elements rather than subjective preferences, and always tie feedback back to user needs and business objectives.</p>

        <p>Remember, the best teams are those where individual strengths complement each other, creating solutions that are greater than the sum of their parts.</p>
      `
    },
    "mobile-app-designing": {
      title: "Mobile App Designing",
      image: "/Blog3.png",
      tags: ["UI/UX Design", "Product Design"],
      date: "August 8, 2024",
      readTime: "10 min read",
      content: `
        <p>Mobile app design presents unique challenges and opportunities. With screen real estate at a premium and user attention spans shorter than ever, creating engaging mobile experiences requires a deep understanding of mobile-specific design principles.</p>

        <h2>Mobile-First Thinking</h2>
        <p>Designing for mobile isn't just about making things smaller. It requires rethinking information hierarchy, interaction patterns, and user flows to optimize for touch interfaces and smaller screens. Start with mobile constraints and expand upward.</p>

        <h2>Touch-Friendly Interactions</h2>
        <p>Mobile interfaces rely heavily on touch interactions. Button sizes, gesture recognition, and thumb-friendly navigation are crucial considerations. The minimum touch target size should be 44px to ensure comfortable interaction for users of all ages.</p>

        <h2>Performance and Loading States</h2>
        <p>Mobile users expect instant gratification. Design meaningful loading states, optimize image sizes, and consider offline functionality. Every second of delay can significantly impact user engagement and conversion rates.</p>

        <h2>Platform-Specific Guidelines</h2>
        <p>While maintaining brand consistency is important, respecting platform conventions (iOS Human Interface Guidelines and Material Design) helps users feel comfortable and confident using your app.</p>

        <p>The future of mobile design lies in creating intuitive, accessible experiences that feel natural and effortless to use, regardless of the user's technical expertise.</p>
      `
    }
  };

  const currentPost = blogContent[slug] || blogContent["power-of-insights"];

  const handleSubmitComment = () => {
    if (newComment.name && newComment.email && newComment.comment) {
      const colors = ['6366f1', 'e11d48', '059669', 'ea580c', '7c3aed', '0891b2'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const comment = {
        id: comments.length + 1,
        ...newComment,
        date: new Date().toISOString().split('T')[0],
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newComment.name)}&background=${randomColor}&color=fff&size=50`
      };
      setComments([comment, ...comments]);
      setNewComment({ name: '', email: '', comment: '' });

      // Show success message
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // Hide after 5 seconds
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="mt-20">
      {/* Add gradient animation styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={goBack}
            className="text-white/80 hover:text-white mb-6 flex items-center gap-2 transition-colors cursor-pointer"
          >
            ← Back to Blog
          </button>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
            {currentPost.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-sm rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 ${
                  index === 0 ? "bg-pink-500 text-white" : "bg-blue-600 text-white"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center sm:text-left mb-4">
            <span
              className="bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-clip-text text-transparent inline-block"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease-in-out infinite"
              }}
            >
              {currentPost.title}
            </span>
          </h1>

          <div className="text-white/80 flex items-center justify-center sm:justify-start gap-6 text-sm">
            <span>{currentPost.date}</span>
            <span>{currentPost.readTime}</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none text-center sm:text-left">
          <div
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
            className="text-white/90 leading-relaxed space-y-6"
          />
        </article>

        {/* Comments Section */}
        <div className="mt-16 border-t border-gray-700 pt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center sm:text-left">
            Leave a{' '}
            <span
              className="bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 bg-clip-text text-transparent inline-block"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease-in-out infinite"
              }}
            >
              Comment
            </span>
            {' '}({comments.length})
          </h2>

          {/* Comment Form */}
          <div className="mb-12">
            {/* Success Message */}
            {showSuccessMessage && (
              <div className="mb-6 px-6 py-4 rounded-xl border border-green-400/30 bg-green-500/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold">Comment Posted Successfully!</h4>
                    <p className="text-green-300/80 text-sm mt-1">
                      Thank you for sharing your thoughts! Your comment adds value to our community discussion.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                value={newComment.name}
                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-center sm:text-left"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={newComment.email}
                onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-center sm:text-left"
                required
              />
            </div>
            <textarea
              placeholder="Write your comment here..."
              value={newComment.comment}
              onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none mb-4 text-center sm:text-left"
              required
            />
            <div className="text-center sm:text-left">
              <button
                type="button"
                onClick={handleSubmitComment}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Post Comment
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="flex items-start gap-4 text-center sm:text-left">
                  <img
                    src={comment.avatar}
                    alt={comment.name}
                    className="w-12 h-12 rounded-full mx-auto sm:mx-0"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                      <h4 className="text-white font-semibold">{comment.name}</h4>
                      <span className="text-gray-400 text-sm">{comment.date}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{comment.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
