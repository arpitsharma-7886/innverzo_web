import { Users, Target, Eye, Heart, Award, Zap, Shield, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and methodologies.',
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'We deliver high-quality software that meets the highest standards of performance and reliability.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring transparent communication throughout.',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We create solutions that make a meaningful difference in businesses and communities.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '10+ years in software development and business strategy.',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in cloud architecture and scalable systems.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about creating beautiful, user-centered designs.',
    },
    {
      name: 'Emily Davis',
      role: 'Senior Developer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer with expertise in modern frameworks.',
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specializes in CI/CD, containerization, and cloud deployment.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ensures projects are delivered on time and exceed expectations.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About InnoTech
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We are a passionate team of software developers, designers, and innovators dedicated to 
              creating exceptional digital experiences that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower businesses with innovative software solutions that drive growth, 
                efficiency, and digital transformation in an ever-evolving technological landscape.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading software development partner that businesses trust to bring 
                their most ambitious ideas to life through cutting-edge technology and exceptional service.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe in transparency, innovation, and putting our clients first. 
                Every project is an opportunity to exceed expectations and build lasting partnerships.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <value.icon className="h-12 w-12 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2019, InnoTech started as a small team of passionate developers 
                  who believed that great software could transform businesses. What began as 
                  a vision to bridge the gap between complex technology and business needs 
                  has grown into a trusted partner for companies worldwide.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups, 
                  established enterprises, and everything in between. Each project has 
                  taught us something new and helped us refine our approach to delivering 
                  exceptional software solutions.
                </p>
                <p>
                  Today, we're proud to have completed over 150 projects, helped 50+ 
                  businesses achieve their digital goals, and built a team of talented 
                  professionals who share our commitment to excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-primary-100">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in software development, 
              design, and project management to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-primary-600 dark:bg-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-primary-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Best Software Development Company 2024
              </h3>
              <p className="text-primary-100">Tech Excellence Awards</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-primary-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Innovation in Technology 2023
              </h3>
              <p className="text-primary-100">Digital Innovation Summit</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-primary-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Client Satisfaction Excellence
              </h3>
              <p className="text-primary-100">Industry Recognition Program</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;