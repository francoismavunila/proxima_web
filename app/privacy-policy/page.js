import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Information We Collect */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
              Information We Collect
            </h2>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                use our WhatsApp Business API integration, or contact us for support.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                  <h4 className="font-semibold text-cyan-400 mb-2">Personal Information</h4>
                  <p className="text-sm">Name, email address, phone number, and business details</p>
                </div>
                <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                  <h4 className="font-semibold text-cyan-400 mb-2">Usage Data</h4>
                  <p className="text-sm">App usage patterns, preferences, and interaction data</p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
              How We Use Your Information
            </h2>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                including our WhatsApp Cloud API integration.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 mt-6 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Provide and operate our services
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Process transactions and send notifications
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Improve user experience and functionality
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Provide customer support and assistance
                </li>
              </ul>
            </div>
          </section>

          {/* WhatsApp Integration */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
              WhatsApp Cloud API Integration
            </h2>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                Our application integrates with WhatsApp Cloud API to provide messaging services. 
                When you use this feature:
              </p>
              <div className="bg-slate-700/30 p-6 rounded-lg border border-slate-600/30 mt-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Messages are processed through Meta's WhatsApp Business Platform
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Contact information may be shared with WhatsApp as required for service delivery
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                    Message delivery and read receipts are handled according to WhatsApp's policies
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
              Information Sharing and Disclosure
            </h2>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                except in the following circumstances:
              </p>
              <div className="grid gap-4 mt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-1">Service Providers</h4>
                    <p className="text-sm">Third-party vendors who assist in operating our application</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-1">Legal Requirements</h4>
                    <p className="text-sm">When required by law or to protect our rights and safety</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
              Data Security
            </h2>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-cyan-500/20 mt-4">
                <p className="text-cyan-300 text-sm font-medium">
                  🔒 All data transmissions are encrypted using industry-standard SSL/TLS protocols
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
              Your Rights and Choices
            </h2>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>You have the right to:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">Access your personal information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">Correct inaccurate information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">Request deletion of your data</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">Withdraw consent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">Data portability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">Object to processing</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-4"></div>
              Contact Us
            </h2>
            <div className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600/30 mt-4">
                <div className="space-y-2 text-sm">
                  <p><span className="text-cyan-400 font-semibold">Email:</span>fmbusiness.com@gmail.com</p>
                  <p><span className="text-cyan-400 font-semibold">Address:</span>13379 Pumula South, P. 0 Pumula, Bulawayo, Zimbabwe</p>
                  <p><span className="text-cyan-400 font-semibold">Phone:</span> +1 (574) 397-3053 / +263783857780 </p>
                </div>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-slate-700/50">
            <p className="text-slate-400 text-sm">
              Last updated: <span className="text-cyan-400">{new Date().toLocaleDateString()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;