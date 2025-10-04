import React from 'react';
import { Leaf, Satellite, Mountain, Droplets, Activity, Mail, Phone, MapPin } from 'lucide-react';
import logo from './AlmanaxLogoHorizontalWhite.png'


export default function AlmanaxWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <img 
            src={logo} 
            alt="Almanax1" 
            className="h-20 md:h-32 w-auto mx-auto mb-8"
          />
          <div className="mb-10">
            <p className="text-3xl md:text-4xl text-emerald-100 font-light mb-4">
              Agriculture Insights Rooted in Nature
            </p>
            <div className="w-24 h-1 bg-emerald-300 mx-auto"></div>
          </div>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed mb-8">
            Connecticut-based precision agriculture technology company providing advanced 
            drone services and developing domestic agricultural drone platforms
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center">
              <Satellite className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
              <p className="text-emerald-100 text-sm">Precision Mapping</p>
            </div>
            <div className="text-center">
              <Activity className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
              <p className="text-emerald-100 text-sm">Crop Health Analysis</p>
            </div>
            <div className="text-center">
              <Leaf className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
              <p className="text-emerald-100 text-sm">Climate Resiliency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Recognizing the importance of working alongside farmers rather than changing their methods, 
            we focus on integrating advanced technology seamlessly into existing agricultural practices. 
            We believe in empowering rural communities through equitable access to precision agriculture 
            while ensuring data sovereignty and supply chain security.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-emerald-900 mb-16">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-emerald-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-semibold text-emerald-900">
                  Crop and Property Scouting
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Optimize crop health and yield with detailed analysis and early issue detection using 
                advanced multispectral imaging that identifies crop stress days before visible symptoms appear.
              </p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Satellite className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-semibold text-emerald-900">
                  Precision Field Mapping
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Gain actionable insights from high-resolution drone and satellite imagery with elevation 
                mapping data for precise agricultural decision-making.
              </p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Mountain className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-semibold text-emerald-900">
                  3D Reconstruction & Terrain Modeling
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Advanced photogrammetry for detailed surface models, helping identify drainage issues, 
                plan infrastructure, and optimize field management.
              </p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Droplets className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-semibold text-emerald-900">
                  Historical Analysis & Climate Resiliency
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Uncover trends and optimize long-term management with multi-year data analysis. LIDAR and 
                hydrological mapping for climate disaster response and preparedness.
              </p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Activity className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-semibold text-emerald-900">
                  Crop Health Analysis
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                From field-wide patterns to individual plant analysis, our multispectral imaging provides 
                insights at macro and micro scales. Detect nutrient deficiencies, pest damage, and water 
                stress before they become visible to the naked eye.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">
            Secure Domestic Technology
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">
                Cloud Mapping Platform
              </h3>
              <p className="text-gray-700 mb-4">
                US-based cloud platform for processing drone and satellite data with historical analysis 
                and predictive modeling. Integrates with publicly and freely available data sources from 
                NASA, DOE, and USDA for comprehensive agricultural intelligence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">
                Domestic Drone Manufacturing
              </h3>
              <p className="text-gray-700 mb-4">
                Developing American-made agricultural drones using US and allied components. Ensuring data 
                sovereignty, supply chain security, and compliance with federal standards while addressing 
                the agricultural drone supply crisis.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-emerald-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Data Sovereignty & Security</h3>
            <p className="text-emerald-50">
              US-owned operations protect sensitive agricultural data and prevent foreign surveillance of 
              critical infrastructure. Our platforms meet federal security standards with auditable supply 
              chains and open-source architecture for seamless integration.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">Our Team</h2>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">Michael Quick</h3>
              <p className="text-gray-700">
                Information technology professional in the field for more than 15 years with a decade of 
                experience in drone platforms and secure sovereign data platforms. Some of his work includes 
                orbital agriculture remote sensing and atmospheric remote sensing missions, bringing deep 
                expertise in aerospace systems and autonomous technologies.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">Jim Smith</h3>
              <p className="text-gray-700">
                Owner and operator of Cushman Farms, a cornerstone of Connecticut's dairy industry. Managing 
                several thousand acres of corn and livestock, Jim provides invaluable insights into the practical 
                needs of local farmers.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">Dr. Christopher Hohman</h3>
              <p className="text-gray-700">
                Applied meteorologist with a Ph.D. in Atmospheric Science from the University of Wyoming. 
                His expertise in aerial instrumentation and cloud physics contributes to the high fidelity 
                of our remote sensing capabilities.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">Extended Team</h3>
              <p className="text-gray-700">
                Our extended team is made up of professionals with experience in agronomy, botany, broader farming,
                software architecture, electrical engineering, materials engineering, PR, IR, legal affairs, and design. 
                The work we do would not be possible without them.  
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">
            Environmental Impact & Benefits
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Precision Reduces Waste</h3>
              <p className="text-lg text-gray-700 mb-4">
                Precision agriculture enables targeted treatment versus blanket application, reducing chemical 
                use by 20-40% through variable-rate application based on actual crop needs. This approach is 
                critical for Long Island Sound watershed compliance and environmental stewardship.
              </p>
              <p className="text-lg text-gray-700">
                Our multispectral imaging identifies crop stress 3-7 days before visible symptoms appear, 
                enabling proactive intervention that minimizes inputs while maximizing crop health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Measurable Farm Benefits</h3>
              <p className="text-lg text-gray-700 mb-4">
                Connecticut farms using precision agriculture can see 15-30% input cost reductions and 5-12% 
                yield improvements. For Connecticut's average 74-acre farm, this translates to annual 
                savings of $3,000-8,000 while reducing environmental impact.
              </p>
              <p className="text-lg text-gray-700">
                These efficiency gains help small and mid-sized farms remain competitive while supporting 
                both agricultural sustainability and climate resilience across the state.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-emerald-900 mb-4">Climate Resilience</h3>
              <p className="text-lg text-gray-700">
                Our LIDAR and hydrological mapping equip farmers, emergency management directors, and land 
                conservators to respond swiftly to climate disasters. Multi-year data analysis helps identify 
                trends and optimize long-term management strategies for increasingly unpredictable weather 
                patterns and environmental challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-4 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-center text-lg">
              <MapPin className="w-6 h-6 text-emerald-300 mr-3" />
              <span>Based in Connecticut</span>
            </div>
            
            <div className="flex items-center justify-center text-lg">
              <Mail className="w-6 h-6 text-emerald-300 mr-3" />
              <a href="mailto:info@almanax.us" className="text-emerald-300 hover:text-emerald-100">
                info@almanax.us
              </a>
            </div>
            
            <div className="flex items-center justify-center text-lg">
              <Phone className="w-6 h-6 text-emerald-300 mr-3" />
              <a href="tel:8605763055" className="text-emerald-300 hover:text-emerald-100">
                (860) 576-3055
              </a>
            </div>

            <div className="flex items-center justify-center text-lg">
              <a href="http://www.almanax.us" className="text-emerald-300 hover:text-emerald-100">
                www.almanax.us
              </a>
            </div>
          </div>

          <div className="border-t border-emerald-700 pt-8">
            <p className="text-sm text-emerald-400">
              © 2025 Almanax. Agriculture Insights Rooted in Nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}