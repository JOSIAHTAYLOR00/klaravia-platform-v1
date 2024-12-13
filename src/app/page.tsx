"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  GraduationCap,
  Home,
  MousePointerClick,
  Settings,
  Users,
  ArrowRight,
  Check,
  Building,
  ClipboardCheck,
  LayoutDashboard,
  Shield,
  Battery,
  LineChart,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { AddressFormClient } from "./components/AddressFormClient";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const heroRef = useRef(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const router = useRouter();

  const stats = [
    { value: "100%", label: "Online Process" },
    { value: "5min", label: "Design Time" },
    { value: "0", label: "Salespeople" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-[#121212] dark:to-[#181818]">
        {/* Background decoration */}

        <div className="container mx-auto px-6 py-12 z-10">
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-20 items-center pt-12 xl:pt-0">
            {/* Left Column - Content */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
              {/* Badge */}
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                The Future of Solar Shopping
              </span>

              {/* Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  Solar Made
                  <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">Simple & Online</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                  Design, customize, and purchase your perfect solar system entirely online. No salespeople, no pressure - just transparent information and control.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4">
                {!showAddressForm ? (
                  <>
                    <button
                      onClick={() => router.push("/new-course")}
                      className="px-8 py-4 text-blue-600 border-2 border-blue-500 rounded-xl font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      Explore Solar Course
                    </button>
                    <button
                      onClick={() => setShowAddressForm(true)}
                      className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 dark:from-amber-600 dark:to-amber-500 dark:hover:from-amber-700 dark:hover:to-amber-600 text-white rounded-xl font-medium inline-flex items-center group transition-all"
                    >
                      Start Your Solar Design
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
                    <AddressFormClient />
                  </motion.div>
                )}
              </motion.div>

              {/* Stats */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-3 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center sm:text-left">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex justify-center items-center xl:h-[500px]">
              <div className="relative w-full xl:w-5/6 flex justify-center">
                {/* Decorative Elements */}
                <div className="absolute w-full xl:w-5/6 -inset-px bg-gradient-to-tr from-blue-500 to-sky-500 rounded-2xl opacity-10 blur-2xl" />

                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
                  <img src="/klaravia-platform-2.png" alt="Solar design platform interface" className="w-full h-auto" />
                </div>

                {/* Stats Cards */}
                {/* <div className="absolute -left-8 bottom-8 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5 minutes</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Average design time</div>
                </div>

                <div className="absolute -right-8 top-8 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">$12,400</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Average yearly savings</div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Your Solar Journey, Simplified</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Experience the easiest way to go solar - completely online, on your terms</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  icon: <MousePointerClick className="w-8 h-8 text-blue-500" />,
                  title: "1. Enter Basic Info",
                  description: "Provide your address and recent electric bill. Our system analyzes your property and energy needs instantly.",
                  features: ["Drone roof analysis", "Shade assessment", "Energy usage evaluation"],
                },
                {
                  icon: <Settings className="w-8 h-8 text-blue-500" />,
                  title: "2. Customize Your System",
                  description: "Review our AI-powered recommendation and customize your system design to match your preferences.",
                  features: ["Panel placement options", "Battery storage sizing", "Production estimates"],
                },
                {
                  icon: <Building className="w-8 h-8 text-blue-500" />,
                  title: "3. Choose Your Installer",
                  description: "Compare verified local installers side-by-side and select the best match for your project.",
                  features: ["Price comparison", "Customer reviews", "Installation timeline"],
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="flex gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">{step.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3 pl-16">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#181818]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-blue-500 font-medium mb-4 block">LEARN BEFORE YOU BUY</span>
                <h2 className="text-4xl font-bold mb-6">Comprehensive Solar Education</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Make an informed decision with our extensive educational resources. Access our free online solar course and in-depth articles written by industry experts.
                </p>
                <div className="space-y-6">
                  {[
                    "Complete online solar course",
                    "Expert-written articles and guides",
                    "Interactive learning modules",
                    "Real-world case studies",
                    "ROI calculators and tools",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-6">
                {[
                  {
                    icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
                    title: "Solar Basics Course",
                    description: "Learn the fundamentals of solar power and how it can benefit your home.",
                  },
                  {
                    icon: <ClipboardCheck className="w-6 h-6 text-blue-500" />,
                    title: "Installation Process",
                    description: "Understand each step of the solar installation journey from start to finish.",
                  },
                  {
                    icon: <LayoutDashboard className="w-6 h-6 text-blue-500" />,
                    title: "Financial Benefits",
                    description: "Explore tax incentives, rebates, and long-term savings potential.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Klaravia</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Experience the first true online solar platform that puts you in control</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Laptop className="w-8 h-8 text-blue-500" />,
                  title: "100% Online Experience",
                  description: "Complete your entire solar journey from the comfort of your home, on your schedule.",
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-500" />,
                  title: "Pre-Vetted Installers",
                  description: "Choose from our network of thoroughly vetted, high-quality installation partners.",
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-500" />,
                  title: "No Sales Pressure",
                  description: "Browse, learn, and purchase at your own pace without any pushy salespeople.",
                },
                {
                  icon: <Settings className="w-8 h-8 text-blue-500" />,
                  title: "Custom Design Control",
                  description: "Customize your solar system design to match your specific needs and preferences.",
                },
                {
                  icon: <LayoutDashboard className="w-8 h-8 text-blue-500" />,
                  title: "Project Tracking",
                  description: "Monitor your installation progress in real-time through your personal dashboard.",
                },
                {
                  icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
                  title: "Educational Resources",
                  description: "Access comprehensive learning materials to make informed decisions.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Visualization Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#181818] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-4xl font-bold mb-6">Your Solar Journey Starts Here</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Get started in minutes with our streamlined process. No phone calls required - just enter your information and let our platform do the work.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Enter Your Address",
                      description: "Our AI analyzes your roof and property characteristics.",
                    },
                    {
                      step: "2",
                      title: "Share Your Energy Usage",
                      description: "Upload your electric bill for precise system sizing.",
                    },
                    {
                      step: "3",
                      title: "Review Custom Design",
                      description: "See your personalized solar solution and estimated savings.",
                    },
                    {
                      step: "4",
                      title: "Choose Your Installer",
                      description: "Compare verified installers and select your preferred partner.",
                    },
                    {
                      step: "5",
                      title: "Track Installation",
                      description: "Monitor progress through your personal dashboard.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 relative"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">{item.step}</div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-emerald-200 dark:from-[#212121] dark:to-[#212121] rounded-2xl -rotate-3" />
                <div className="relative bg-white dark:bg-[#121212] p-8 rounded-xl shadow-xl">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">System Overview</h3>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full">Savings: $45,000</span>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 dark:bg-[#121212]/50 rounded-lg">
                          <div className="text-sm text-gray-600 dark:text-gray-400">System Size</div>
                          <div className="text-xl font-semibold">8.4 kW</div>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-[#121212]/50 rounded-lg">
                          <div className="text-sm text-gray-600 dark:text-gray-400">Annual Production</div>
                          <div className="text-xl font-semibold">12,400 kWh</div>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-[#121212]/50 rounded-lg">
                        <div className="text-sm text-gray-600 dark:text-gray-400">Offset</div>
                        <div className="relative pt-2">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-full w-[92%] bg-green-500 rounded-full" />
                          </div>
                          <div className="mt-1 text-right text-sm">92% of usage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-blue-800 opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold">Start Your Solar Journey Today</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join thousands of homeowners who have discovered the simplest way to go solar. No sales calls, no pressure - just a straightforward path to energy independence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {!showAddressForm && (
                  <>
                    <button
                      onClick={() => router.push("/new-course")}
                      className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-500 rounded-lg font-medium inline-flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      <GraduationCap className="mr-2" />
                      Start Learning
                    </button>
                    <button
                      className="px-8 py-4 bg-amber-500 text-white rounded-lg font-medium inline-flex items-center group hover:bg-amber-600 transition-colors"
                      onClick={() => {
                        setShowAddressForm(true);
                      }}
                    >
                      Get Your Custom Design
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </>
                )}
                {showAddressForm && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ width: "100%" }}>
                    <AddressFormClient />
                  </motion.div>
                )}
              </div>
              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                {[{ text: "No Sales Pressure" }, { text: "5-Minute Design Process" }, { text: "Verified Installers" }].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
