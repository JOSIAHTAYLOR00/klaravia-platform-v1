// data/courseStructure.ts
import { Module, Lesson } from '../_types/course';

export const courseStructure: Module[] = [
  {
    slug: "solar-basics",
    title: "Solar Basics",
    description: "Learn the fundamentals of solar power and how it works in residential applications.",
    keywords: ["solar power", "photovoltaic", "renewable energy", "solar panels", "clean energy"],
    lessons: [
      {
        slug: "understanding-solar-power",
        title: "Understanding Solar Power",
        description: "Master the basic principles of solar power generation and learn why it's becoming increasingly important for homeowners.",
        keywords: ["photovoltaic effect", "solar energy", "renewable power", "sustainability"],
        content: [
          {
            type: "heading",
            body: "What is Solar Power?"
          },
          {
            type: "text",
            body: "Solar power represents one of the most significant advances in home energy technology, allowing homeowners to generate their own clean electricity directly from sunlight. At its core, solar power is the conversion of light energy from the sun into usable electrical energy for your home."
          },
          {
            type: "callout",
            title: "The Solar Revolution",
            body: "Solar energy is transforming from a luxury to a mainstream home improvement. With rising electricity costs and growing environmental awareness, more homeowners than ever are considering solar as a practical energy solution."
          },
          {
            type: "heading",
            body: "The Science Behind Solar"
          },
          {
            type: "text",
            body: "Solar panels work through what's called the photovoltaic effect - a process where certain materials generate electricity when exposed to sunlight. This process occurs silently and automatically, with no moving parts, making solar panels one of the most reliable and low-maintenance ways to generate electricity."
          },
          {
            type: "image",
            url: "/images/photovoltaic-effect.jpg",
            description: "Diagram showing how the photovoltaic effect converts sunlight into electricity"
          },
          {
            type: "subheading",
            body: "Key Benefits of Solar Power"
          },
          {
            type: "list",
            title: "Why Homeowners Choose Solar",
            body: "Lower electricity bills, Energy independence, Increased home value, Environmental benefits, Protection against rising energy costs"
          },
          {
            type: "callout",
            title: "The Klaravia Difference",
            body: "While solar technology can seem complex, understanding your solar options shouldn't be. That's why Klaravia provides a transparent, online platform where you can explore solar solutions at your own pace, without the pressure of traditional sales tactics."
          },
          {
            type: "heading",
            body: "Types of Solar Applications"
          },
          {
            type: "text",
            body: "Residential solar systems come in various configurations to meet different needs. The most common is grid-tied solar, where your home remains connected to the utility grid, providing you with reliable power even when the sun isn't shining."
          },
          {
            type: "quote",
            body: "Every hour, enough sunlight reaches Earth to meet global energy needs for an entire year. Modern solar technology allows homeowners to harness this abundant resource effectively."
          },
          {
            type: "subheading",
            body: "Understanding Solar Terms"
          },
          {
            type: "list",
            title: "Essential Solar Terminology",
            body: "Photovoltaic (PV) panels, Inverters, Kilowatt (kW), Kilowatt-hour (kWh), Net metering"
          },
          {
            type: "text",
            body: "As you begin your solar journey, you'll encounter these terms frequently. Understanding them will help you make informed decisions about your solar investment and better communicate with solar professionals."
          },
          {
            type: "divider"
          },
          {
            type: "callout",
            title: "Next Steps",
            body: "In the following lessons, we'll dive deeper into solar technologies and components, helping you understand exactly what goes into a solar power system and how each part works together to power your home."
          }
        ]
      },
      {
        slug: "solar-technologies-and-components",
        title: "Solar Technologies and Components",
        description: "Learn about the essential components that make up a residential solar system and how they work together.",
        keywords: ["solar panels", "inverters", "racking", "monitoring systems", "solar components"],
        content: [
          {
            type: "heading",
            body: "Core Components of a Solar Power System"
          },
          {
            type: "text",
            body: "A residential solar system is more than just panels on a roof. It's a carefully engineered system of components working together to convert sunlight into usable electricity for your home. Understanding these components helps you make informed decisions about your solar investment."
          },
          {
            type: "heading",
            body: "Solar Panels (PV Modules)"
          },
          {
            type: "text",
            body: "Solar panels are the most visible component of your system. Modern panels come in two main types: monocrystalline and polycrystalline. Monocrystalline panels are known for their higher efficiency and sleeker appearance, while polycrystalline panels often offer a more budget-friendly option."
          },
          {
            type: "callout",
            title: "Panel Efficiency Matters",
            body: "Higher efficiency panels can generate more power in a smaller space, which is particularly important if your roof has limited usable area. Through Klaravia's platform, you can explore different panel options and see how they affect your system's performance."
          },
          {
            type: "heading",
            body: "Inverters: The System's Brain"
          },
          {
            type: "text",
            body: "Inverters convert the DC power generated by your solar panels into AC power that your home can use. There are three main types: string inverters, microinverters, and power optimizers with string inverters (also known as a hybrid approach)."
          },
          {
            type: "list",
            title: "Types of Inverters",
            body: "String Inverters (central conversion), Microinverters (panel-level conversion), Power Optimizers (panel-level optimization with central conversion)"
          },
          {
            type: "callout",
            title: "The Right Choice for Your Home",
            body: "Each inverter type has its advantages. Klaravia's design tools analyze your specific situation to recommend the most suitable inverter technology for your needs and budget."
          },
          {
            type: "heading",
            body: "Racking and Mounting Systems"
          },
          {
            type: "text",
            body: "Racking systems secure your solar panels to your roof while maintaining proper ventilation and optimal angle for maximum production. The right racking system depends on your roof type, local weather conditions, and aesthetic preferences."
          },
          {
            type: "image",
            url: "/images/racking-systems.jpg",
            description: "Different types of solar panel mounting systems for various roof types"
          },
          {
            type: "heading",
            body: "Monitoring Systems"
          },
          {
            type: "text",
            body: "Modern solar systems come with monitoring capabilities that let you track your system's performance in real-time. You can view production data, identify any issues quickly, and see your energy savings through user-friendly apps or web interfaces."
          },
          {
            type: "quote",
            body: "A well-designed solar system is greater than the sum of its parts - each component must be carefully selected to work in harmony with the others."
          },
          {
            type: "heading",
            body: "Optional Components"
          },
          {
            type: "list",
            title: "Additional System Elements",
            body: "Battery storage systems, Emergency power supply (EPS), Consumption monitoring, Smart home integration systems"
          },
          {
            type: "callout",
            title: "Future-Proofing Your Investment",
            body: "While not everyone needs additional components at installation, choosing a system that can accommodate future upgrades like battery storage can be wise. Klaravia's platform helps you understand which additions might benefit you now or in the future."
          },
          {
            type: "heading",
            body: "Quality and Warranties"
          },
          {
            type: "text",
            body: "Component quality and warranty coverage are crucial considerations. Most quality solar panels come with 25-year performance warranties, while inverters typically carry 10-25 year warranties depending on the type. Understanding these warranties helps you assess the long-term value of your investment."
          },
          {
            type: "callout",
            title: "Klaravia's Quality Standards",
            body: "All components available through Klaravia's platform meet strict quality and reliability standards. We carefully vet manufacturers and only offer products with proven track records and solid warranty coverage."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "Understanding these components helps you make informed decisions when customizing your solar system. In the next lesson, we'll dive deeper into how these components work together to convert sunlight into usable electricity for your home."
          }
        ]
      },
      {
        slug: "how-solar-panels-work",
        title: "How Solar Panels Work",
        description: "Understand the fascinating process of how solar panels convert sunlight into electricity for your home.",
        keywords: ["photovoltaic effect", "solar cells", "energy conversion", "silicon cells", "solar production"],
        content: [
          {
            type: "heading",
            body: "The Journey from Sunlight to Power"
          },
          {
            type: "text",
            body: "Ever wondered how a panel sitting on your roof can power your home? The process is a remarkable combination of physics, chemistry, and engineering that happens silently and reliably every day."
          },
          {
            type: "heading",
            body: "The Building Blocks: Solar Cells"
          },
          {
            type: "text",
            body: "Each solar panel contains numerous individual solar cells, typically made from silicon. These cells are like sandwiches made of two layers of silicon that have been specially treated or 'doped' to create an electric field between them."
          },
          {
            type: "image",
            url: "/images/solar-cell-structure.jpg",
            description: "Cross-section diagram of a solar cell showing its various layers"
          },
          {
            type: "heading",
            body: "The Photovoltaic Effect in Action"
          },
          {
            type: "text",
            body: "When sunlight hits a solar cell, it excites electrons in the silicon. The cell's structure creates an electric field that forces these electrons to flow in a specific direction, creating an electric current. This process, known as the photovoltaic effect, is the fundamental principle behind solar power generation."
          },
          {
            type: "callout",
            title: "Did You Know?",
            body: "A typical solar cell only converts about 15-20% of the sunlight it receives into electricity. However, through Klaravia's advanced system design, we optimize panel placement and selection to maximize this conversion efficiency for your specific location."
          },
          {
            type: "heading",
            body: "From DC to AC: The Conversion Process"
          },
          {
            type: "text",
            body: "Solar panels produce direct current (DC) electricity, but your home uses alternating current (AC). This is where inverters come in, converting the DC power into usable AC power. This conversion happens instantaneously, ensuring your home has power whenever the sun is shining."
          },
          {
            type: "list",
            title: "The Power Conversion Chain",
            body: "Sunlight hits panel, Electrons are excited, DC current is generated, Inverter converts to AC, Power flows to home electrical system"
          },
          {
            type: "heading",
            body: "Factors Affecting Solar Production"
          },
          {
            type: "text",
            body: "Several factors influence how much electricity your solar panels can produce. Understanding these helps you maximize your system's performance."
          },
          {
            type: "list",
            title: "Key Production Factors",
            body: "Sun intensity and hours of exposure, Panel orientation and tilt, Shade from trees or structures, Temperature, Weather conditions, Panel cleanliness"
          },
          {
            type: "callout",
            title: "Klaravia's Smart Design",
            body: "Our platform analyzes all these factors using advanced satellite imagery and local weather data to design a system that maximizes production for your specific roof and location."
          },
          {
            type: "heading",
            body: "Peak Production Times"
          },
          {
            type: "text",
            body: "Solar panels typically produce the most electricity during midday when the sun is highest in the sky. Production varies throughout the day and across seasons, but modern systems are designed to meet your annual energy needs despite these natural variations."
          },
          {
            type: "image",
            url: "/images/daily-production-curve.jpg",
            description: "Graph showing typical daily solar production curve"
          },
          {
            type: "heading",
            body: "Temperature and Performance"
          },
          {
            type: "text",
            body: "Contrary to what many think, solar panels actually perform better in cooler temperatures. While they need sunlight to generate power, excessive heat can slightly reduce their efficiency. This is why ventilation behind the panels is important for optimal performance."
          },
          {
            type: "callout",
            title: "Real-Time Monitoring",
            body: "Through Klaravia's user portal, you can monitor your system's production in real-time, understanding how different conditions affect your power generation and ensuring your system is performing as designed."
          },
          {
            type: "heading",
            body: "Seasonal Variations"
          },
          {
            type: "text",
            body: "Your solar production will vary throughout the year based on seasonal changes in sun angle and daylight hours. A well-designed system takes these variations into account to meet your annual energy needs."
          },
          {
            type: "quote",
            body: "Solar panels are like silent sentinels on your roof, steadily converting sunlight into electricity through a process that will reliably power your home for decades."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "In our next lesson, we'll explore different types of solar system configurations and help you understand which might be best for your home."
          }
        ]
      },
      {
        slug: "solar-system-types-and-configurations",
        title: "Solar System Types and Configurations",
        description: "Explore different solar system configurations and understand which type best suits your needs.",
        keywords: ["grid-tied solar", "off-grid solar", "hybrid systems", "battery backup", "system configuration"],
        content: [
          {
            type: "heading",
            body: "Understanding Solar System Configurations"
          },
          {
            type: "text",
            body: "Solar power systems come in several different configurations, each designed to meet specific energy needs and goals. Understanding these options helps you choose the system that best matches your objectives."
          },
          {
            type: "heading",
            body: "Grid-Tied Solar Systems"
          },
          {
            type: "text",
            body: "Grid-tied systems are the most common and typically most cost-effective option for homeowners. These systems connect to the utility grid, allowing you to draw power when needed and send excess power back to the grid when you're producing more than you're using."
          },
          {
            type: "list",
            title: "Benefits of Grid-Tied Systems",
            body: "Lower initial cost, Simple and reliable operation, Net metering benefits, No battery maintenance, Seamless power availability"
          },
          {
            type: "callout",
            title: "Grid-Tied Simplicity",
            body: "Most Klaravia customers opt for grid-tied systems due to their excellent balance of cost and benefits. Our platform helps you understand your net metering options and potential savings with this configuration."
          },
          {
            type: "heading",
            body: "Hybrid Solar Systems"
          },
          {
            type: "text",
            body: "Hybrid systems combine grid connection with battery storage, offering the best of both worlds. These systems can provide backup power during outages while still taking advantage of net metering benefits."
          },
          {
            type: "image",
            url: "/images/hybrid-system-diagram.jpg",
            description: "Diagram showing components and flow of a hybrid solar system"
          },
          {
            type: "list",
            title: "Hybrid System Advantages",
            body: "Emergency backup power, Time-of-use rate optimization, Greater energy independence, Future-proof design, Smart energy management"
          },
          {
            type: "heading",
            body: "Off-Grid Solar Systems"
          },
          {
            type: "text",
            body: "Off-grid systems are completely independent of the utility grid. These systems require careful sizing and typically larger battery banks to ensure reliable power supply. They're most common in remote locations where grid connection isn't available."
          },
          {
            type: "callout",
            title: "Is Off-Grid Right for You?",
            body: "While Klaravia primarily focuses on grid-tied and hybrid solutions for most homeowners, our platform can help assess if your situation might benefit from an off-grid approach."
          },
          {
            type: "heading",
            body: "System Sizing and Configuration"
          },
          {
            type: "text",
            body: "The size and configuration of your solar system depends on several factors, including your energy usage patterns, roof space, budget, and energy goals. A properly sized system balances these factors to provide optimal value."
          },
          {
            type: "list",
            title: "Key Sizing Factors",
            body: "Annual energy consumption, Available roof space, Budget considerations, Future energy needs, Local utility policies"
          },
          {
            type: "heading",
            body: "Smart Technology Integration"
          },
          {
            type: "text",
            body: "Modern solar systems can integrate with smart home technology to optimize energy usage. This includes features like consumption monitoring, automated load management, and smart inverter functions."
          },
          {
            type: "callout",
            title: "Klaravia's Smart Design Process",
            body: "Our platform automatically analyzes your energy usage patterns and home characteristics to recommend the optimal system size and configuration. You can then customize this recommendation based on your specific preferences."
          },
          {
            type: "heading",
            body: "Future-Proofing Your System"
          },
          {
            type: "text",
            body: "When choosing a system configuration, it's important to consider future needs. This might include preparing for an electric vehicle, home additions, or the potential addition of battery storage."
          },
          {
            type: "quote",
            body: "The best solar system is one that meets both your current needs and can adapt to your future energy requirements."
          },
          {
            type: "heading",
            body: "Making Your Choice"
          },
          {
            type: "list",
            title: "Configuration Decision Factors",
            body: "Current and future energy needs, Local weather patterns and outage frequency, Budget and financing options, Net metering policies, Home resale considerations"
          },
          {
            type: "callout",
            title: "Guided Decision Making",
            body: "Klaravia's platform walks you through each of these considerations, helping you make an informed decision about which system configuration best matches your needs and goals."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "This completes our Solar Basics module. In the next module, we'll dive into Solar Economics, helping you understand the costs, incentives, and financial benefits of going solar."
          }
        ]
      }
    ]
  },
  {
    slug: "solar-economics",
    title: "Solar Economics",
    description: "Understand the financial aspects of going solar, from costs and incentives to long-term savings and ROI.",
    keywords: ["solar costs", "solar savings", "tax credits", "solar incentives", "solar ROI", "solar financing"],
    lessons: [
      {
        slug: "understanding-solar-costs",
        title: "Understanding Solar Costs",
        description: "Learn about the various factors that influence solar system costs and how to evaluate the true cost of going solar.",
        keywords: ["solar pricing", "installation costs", "equipment costs", "solar investment"],
        content: [
          {
            type: "heading",
            body: "Breaking Down Solar Costs"
          },
          {
            type: "text",
            body: "Understanding the true cost of solar involves more than just the price tag on panels. Let's break down the various components that make up your solar investment and explore how Klaravia helps you get the best value for your money."
          },
          {
            type: "heading",
            body: "Equipment Costs"
          },
          {
            type: "text",
            body: "Solar equipment typically accounts for about 50% of your total system cost. This includes panels, inverters, racking, and other hardware. The quality and efficiency of these components significantly impact both the initial cost and long-term value of your system."
          },
          {
            type: "list",
            title: "Major Equipment Components",
            body: "Solar panels (25-30% of total cost), Inverters (10-15% of total cost), Racking and mounting (5-10% of total cost), Electrical components and wiring (5-10% of total cost)"
          },
          {
            type: "callout",
            title: "The Klaravia Advantage",
            body: "Our platform's direct-to-consumer model eliminates unnecessary markups on equipment costs. We leverage our installer network to secure competitive pricing while maintaining high quality standards."
          },
          {
            type: "heading",
            body: "Installation Labor Costs"
          },
          {
            type: "text",
            body: "Labor typically represents 30-35% of total system cost. This includes physical installation, electrical work, and system commissioning. Installation costs can vary based on roof complexity, system size, and local labor rates."
          },
          {
            type: "callout",
            title: "Quality Installation Matters",
            body: "Through Klaravia's vetted installer network, you get access to experienced professionals at competitive rates, with transparent pricing and no hidden costs."
          },
          {
            type: "heading",
            body: "Soft Costs"
          },
          {
            type: "text",
            body: "Soft costs include permitting, interconnection fees, inspection costs, and system design. These typically account for 15-20% of total system cost but can vary significantly by location."
          },
          {
            type: "list",
            title: "Common Soft Costs",
            body: "Permitting fees, Interconnection costs, System design and engineering, Site assessment, Project management"
          },
          {
            type: "heading",
            body: "Understanding Price Per Watt"
          },
          {
            type: "text",
            body: "Solar systems are often compared using 'price per watt' - the total system cost divided by the system's size in watts. This metric helps you compare different system quotes, though it shouldn't be your only consideration."
          },
          {
            type: "callout",
            title: "Transparent Pricing",
            body: "Klaravia's platform shows you clear price-per-watt comparisons across different system options and installers, helping you make informed decisions based on your specific needs and budget."
          },
          {
            type: "heading",
            body: "Additional Cost Considerations"
          },
          {
            type: "list",
            title: "Potential Extra Costs",
            body: "Roof repairs or reinforcement, Electrical panel upgrades, Tree removal or trimming, Extended warranties, Additional monitoring systems"
          },
          {
            type: "text",
            body: "These additional costs aren't always necessary but should be considered in your planning. Klaravia's assessment process helps identify any potential additional costs early in the process."
          },
          {
            type: "heading",
            body: "Cost Versus Value"
          },
          {
            type: "text",
            body: "While initial cost is important, the true measure of a solar investment is its long-term value. This includes energy savings, increased home value, and environmental benefits."
          },
          {
            type: "quote",
            body: "The cheapest solar system isn't always the best value - quality components and professional installation often provide better returns over time."
          },
          {
            type: "image",
            url: "/images/cost-breakdown-chart.jpg",
            description: "Pie chart showing typical breakdown of solar system costs"
          },
          {
            type: "callout",
            title: "Making an Informed Decision",
            body: "Klaravia's platform provides detailed cost breakdowns and long-term value projections, helping you understand exactly what you're paying for and why."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "In our next lesson, we'll explore the various incentives and tax credits available to help reduce your initial solar investment."
          }
        ]
      },
      {
        slug: "solar-incentives-and-tax-credits",
        title: "Solar Incentives and Tax Credits",
        description: "Understand the various incentives, tax credits, and rebates available for solar installations and how to qualify for them.",
        keywords: ["solar incentives", "tax credits", "ITC", "solar rebates", "SREC", "net metering"],
        content: [
          {
            type: "heading",
            body: "Understanding Solar Incentives"
          },
          {
            type: "text",
            body: "Solar incentives significantly reduce the overall cost of going solar. These incentives exist at federal, state, and local levels, as well as through utility companies. Understanding what's available in your area is crucial for maximizing your solar investment."
          },
          {
            type: "heading",
            body: "Federal Solar Tax Credit (ITC)"
          },
          {
            type: "text",
            body: "The federal solar Investment Tax Credit (ITC) is one of the most significant incentives available. It allows you to deduct 30% of your solar system's cost from your federal taxes, with no upper limit. This incentive is available through 2032 and applies to both residential and commercial installations."
          },
          {
            type: "callout",
            title: "Klaravia Simplifies Tax Credit Claims",
            body: "Our platform automatically calculates your estimated federal tax credit and provides the necessary documentation for claiming it on your taxes."
          },
          {
            type: "heading",
            body: "State-Level Incentives"
          },
          {
            type: "text",
            body: "State incentives vary significantly by location. These can include tax credits, rebates, performance payments, and property tax exemptions. Some states offer very generous incentives that can substantially reduce your solar costs."
          },
          {
            type: "list",
            title: "Common State Incentive Types",
            body: "State tax credits, Direct rebates, Performance-based incentives, Property tax exemptions, Sales tax exemptions"
          },
          {
            type: "heading",
            body: "Solar Renewable Energy Credits (SRECs)"
          },
          {
            type: "text",
            body: "In some states, you can earn SRECs for the solar power your system generates. These credits can be sold to utility companies, providing an ongoing source of income from your solar installation. The value of SRECs varies by market but can be substantial."
          },
          {
            type: "callout",
            title: "SREC Tracking Made Easy",
            body: "Klaravia's platform helps you track your SREC earnings potential and connects you with SREC marketplaces in eligible states."
          },
          {
            type: "heading",
            body: "Utility Company Incentives"
          },
          {
            type: "text",
            body: "Many utility companies offer their own solar incentives, including rebates, performance-based incentives, and net metering programs. These can vary significantly between utility companies, even within the same state."
          },
          {
            type: "list",
            title: "Common Utility Incentives",
            body: "Up-front rebates, Performance-based incentives, Net metering programs, Time-of-use rate optimization, Battery storage incentives"
          },
          {
            type: "heading",
            body: "Net Metering Policies"
          },
          {
            type: "text",
            body: "Net metering allows you to receive credit for excess solar power sent back to the grid. While not technically an incentive, it's a crucial policy that affects your solar savings. Net metering policies and rates vary by utility and state."
          },
          {
            type: "image",
            url: "/images/net-metering-diagram.jpg",
            description: "Diagram showing how net metering works with your solar system and the grid"
          },
          {
            type: "heading",
            body: "Local Government Incentives"
          },
          {
            type: "text",
            body: "Some cities and counties offer additional solar incentives. These can include grants, rebates, or property tax incentives. While often smaller than federal and state incentives, these local programs can provide meaningful additional savings."
          },
          {
            type: "callout",
            title: "Location-Specific Savings",
            body: "The Klaravia platform automatically identifies all available incentives in your area and calculates your total potential savings."
          },
          {
            type: "heading",
            body: "Qualifying for Incentives"
          },
          {
            type: "text",
            body: "Most incentives have specific requirements for qualification. These might include system size, equipment specifications, installer certifications, or application deadlines. Understanding and meeting these requirements is crucial for maximizing your incentives."
          },
          {
            type: "list",
            title: "Common Requirements",
            body: "Equipment certifications, Professional installation, System size limits, Application deadlines, Documentation requirements"
          },
          {
            type: "quote",
            body: "Solar incentives can reduce your system cost by 50% or more, making it crucial to understand and take advantage of all available programs."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "In our next lesson, we'll explore how these incentives combine with your electricity bill savings to create your total solar return on investment."
          }
        ]
      },
      {
        slug: "energy-bills-and-solar-savings",
        title: "Energy Bills and Solar Savings",
        description: "Learn how solar affects your electricity bills and calculate your potential long-term savings.",
        keywords: ["solar savings", "electricity bills", "energy consumption", "ROI", "payback period"],
        content: [
          {
            type: "heading",
            body: "Understanding Your Electric Bill"
          },
          {
            type: "text",
            body: "Before calculating solar savings, it's crucial to understand your current electricity costs. Your bill includes various charges: base rates, demand charges, time-of-use rates, and other fees. Solar can affect each of these components differently."
          },
          {
            type: "heading",
            body: "Breaking Down Electricity Costs"
          },
          {
            type: "list",
            title: "Key Bill Components",
            body: "Energy charges (kWh usage), Demand charges, Fixed monthly fees, Taxes and surcharges, Time-of-use rate adjustments"
          },
          {
            type: "callout",
            title: "Bill Analysis Made Simple",
            body: "Klaravia's platform automatically analyzes your electricity bill when you upload it, identifying all charges and calculating potential savings based on your specific rate structure."
          },
          {
            type: "heading",
            body: "How Solar Affects Your Bill"
          },
          {
            type: "text",
            body: "Solar power reduces your bill in multiple ways. It directly offsets your energy consumption, can reduce demand charges, and may provide additional credits through net metering. Understanding these effects helps you maximize your savings."
          },
          {
            type: "image",
            url: "/images/bill-comparison.jpg",
            description: "Before and after comparison of typical electricity bills with solar"
          },
          {
            type: "heading",
            body: "Calculating Solar Production"
          },
          {
            type: "text",
            body: "Your solar savings depend on how much electricity your system produces. This varies based on factors like panel efficiency, roof orientation, shading, and local weather patterns. Modern design tools can accurately predict your system's production."
          },
          {
            type: "callout",
            title: "Production Estimates",
            body: "Klaravia uses advanced satellite imagery and weather data to provide highly accurate production estimates for your specific location and roof configuration."
          },
          {
            type: "heading",
            body: "Net Metering and Bill Credits"
          },
          {
            type: "text",
            body: "With net metering, you receive credits for excess solar power sent to the grid. These credits offset your consumption during non-solar hours. Understanding your utility's net metering policy is crucial for calculating total savings."
          },
          {
            type: "list",
            title: "Net Metering Considerations",
            body: "Credit rates for excess production, Monthly vs. annual credit rollover, Minimum bills and fixed charges, Time-of-use credit variations"
          },
          {
            type: "heading",
            body: "Long-Term Savings Calculation"
          },
          {
            type: "text",
            body: "Long-term solar savings include both immediate bill reductions and future savings from avoided utility rate increases. Most utilities raise rates 2-4% annually, making future savings even more significant."
          },
          {
            type: "callout",
            title: "Future-Proof Savings",
            body: "Our platform projects your 25-year savings considering historical utility rate increases in your area and your system's expected performance degradation."
          },
          {
            type: "heading",
            body: "Understanding Payback Period"
          },
          {
            type: "text",
            body: "Your solar payback period is how long it takes for energy savings to equal your initial investment. This typically ranges from 5-10 years, depending on your electricity costs, incentives, and system production."
          },
          {
            type: "quote",
            body: "While payback periods are important, remember that solar panels typically produce power for 25-30 years, providing decades of savings after reaching payback."
          },
          {
            type: "heading",
            body: "Additional Financial Benefits"
          },
          {
            type: "list",
            title: "Other Value Factors",
            body: "Increased home value, Protection against rate hikes, Potential SREC income, Reduced carbon footprint value, Battery storage benefits"
          },
          {
            type: "heading",
            body: "Monitoring Your Savings"
          },
          {
            type: "text",
            body: "Modern solar systems include monitoring tools that track both production and savings in real-time. This helps you verify your system's performance and identify any issues quickly."
          },
          {
            type: "callout",
            title: "Savings Tracking",
            body: "Klaravia's user portal provides detailed tracking of your solar production, consumption, and savings, helping you verify your return on investment."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "In our next lesson, we'll explore the various financing options available for solar installations and how to choose the best one for your situation."
          }
        ]
      },
      {
        slug: "solar-financing-options",
        title: "Solar Financing Options",
        description: "Explore the various ways to finance your solar installation and understand which option best suits your situation.",
        keywords: ["solar loans", "solar lease", "PPA", "cash purchase", "financing solar"],
        content: [
          {
            type: "heading",
            body: "Understanding Solar Financing Options"
          },
          {
            type: "text",
            body: "There are several ways to finance your solar installation, each with its own advantages and considerations. The right choice depends on your financial situation, tax status, and long-term goals."
          },
          {
            type: "heading",
            body: "Cash Purchase"
          },
          {
            type: "text",
            body: "Paying cash for your solar system provides the highest long-term returns since you avoid interest charges and own the system outright. You'll be eligible for all available tax incentives and rebates directly."
          },
          {
            type: "list",
            title: "Cash Purchase Benefits",
            body: "Maximum long-term savings, Immediate system ownership, Direct tax incentive eligibility, No monthly payments, Increased home value"
          },
          {
            type: "callout",
            title: "Klaravia's Cash Purchase Process",
            body: "Our platform provides transparent pricing and direct purchasing options, with no hidden fees or markups. You'll see exactly what you're paying for and why."
          },
          {
            type: "heading",
            body: "Solar Loans"
          },
          {
            type: "text",
            body: "Solar loans allow you to own your system with little or no money down. You'll still be eligible for tax incentives and rebates, and your loan payment is often less than your previous electric bill."
          },
          {
            type: "list",
            title: "Types of Solar Loans",
            body: "Home equity loans, Specialized solar loans, Home improvement loans, PACE financing, Unsecured personal loans"
          },
          {
            type: "callout",
            title: "Comparing Loan Options",
            body: "Klaravia's platform helps you compare different loan options from trusted lenders, showing you real monthly payments and total costs for each option."
          },
          {
            type: "heading",
            body: "Solar Lease"
          },
          {
            type: "text",
            body: "Solar leases allow you to use a solar system with no upfront cost. You pay a fixed monthly lease payment, typically less than your previous electric bill. The leasing company owns the system and receives the tax incentives."
          },
          {
            type: "list",
            title: "Lease Considerations",
            body: "No upfront costs, Predictable monthly payments, Professional maintenance included, No tax incentive eligibility, Potential savings limitations"
          },
          {
            type: "heading",
            body: "Power Purchase Agreements (PPAs)"
          },
          {
            type: "text",
            body: "With a PPA, you agree to buy the power produced by the solar system at a set rate, typically lower than utility rates. Like leases, PPAs require no upfront cost, but you pay for the power produced rather than a fixed monthly payment."
          },
          {
            type: "callout",
            title: "Understanding PPAs",
            body: "While Klaravia primarily focuses on ownership options that maximize long-term value, we can help you evaluate if a PPA might be right for your situation."
          },
          {
            type: "heading",
            body: "Comparing Financing Options"
          },
          {
            type: "list",
            title: "Key Comparison Factors",
            body: "Upfront costs, Monthly payments, Long-term savings, Tax incentive eligibility, Maintenance responsibility, Contract length, Transfer options"
          },
          {
            type: "image",
            url: "/images/financing-comparison.jpg",
            description: "Chart comparing different solar financing options"
          },
          {
            type: "heading",
            body: "Making Your Decision"
          },
          {
            type: "text",
            body: "Your optimal financing choice depends on factors like your credit score, tax situation, home equity, and long-term plans. Consider both immediate affordability and long-term financial benefits."
          },
          {
            type: "callout",
            title: "Personalized Guidance",
            body: "Klaravia's platform analyzes your specific situation and helps you compare financing options side by side, showing real numbers for your project."
          },
          {
            type: "heading",
            body: "Common Questions About Financing"
          },
          {
            type: "list",
            title: "Key Considerations",
            body: "Early payoff options, Interest tax deductibility, Impact on home sale, Warranty coverage, Performance guarantees, Maintenance responsibilities"
          },
          {
            type: "quote",
            body: "The best financing option is one that makes solar affordable today while maximizing your long-term financial benefits."
          },
          {
            type: "heading",
            body: "Next Steps"
          },
          {
            type: "text",
            body: "Once you've chosen a financing option, the next step is moving forward with system design and installation. Understanding the installation process helps ensure a smooth transition to solar power."
          },
          {
            type: "divider"
          },
          {
            type: "callout",
            title: "Ready to Move Forward?",
            body: "Explore your personalized financing options on the Klaravia platform and see which choice best fits your needs."
          }
        ]
      }
    ]
  },
  {
    slug: "solar-installation-process",
    title: "Solar Installation Process",
    description: "Learn about each step of the solar installation process, from initial assessment to final inspection.",
    keywords: ["solar installation", "site assessment", "system design", "permits", "inspections"],
    lessons: [
      {
        slug: "site-assessment-and-design",
        title: "Site Assessment and Design",
        description: "Understand how solar professionals evaluate your property and design an optimal system for your needs.",
        keywords: ["site survey", "solar design", "roof assessment", "shade analysis", "system sizing"],
        content: [
          {
            type: "heading",
            body: "The Importance of Proper Site Assessment"
          },
          {
            type: "text",
            body: "A thorough site assessment is the foundation of a successful solar installation. This process ensures your system is optimally designed for your specific property and energy needs."
          },
          {
            type: "heading",
            body: "Remote Site Assessment"
          },
          {
            type: "text",
            body: "Modern technology allows for detailed preliminary assessments using satellite imagery and advanced software. This initial evaluation examines roof characteristics, sun exposure, and potential obstacles."
          },
          {
            type: "callout",
            title: "Klaravia's Advanced Assessment Tools",
            body: "Our platform uses high-resolution satellite imagery and AI-powered analysis to create accurate 3D models of your property, identifying optimal panel placement without an initial site visit."
          },
          {
            type: "heading",
            body: "Roof Evaluation"
          },
          {
            type: "list",
            title: "Key Roof Factors",
            body: "Age and condition, Material and type, Orientation and pitch, Structural integrity, Available space, Shading patterns"
          },
          {
            type: "text",
            body: "Your roof's characteristics significantly impact system design. We assess structural integrity, orientation, and available space to ensure safe and efficient installation."
          },
          {
            type: "heading",
            body: "Shade Analysis"
          },
          {
            type: "text",
            body: "A detailed shade analysis identifies potential obstacles to solar production throughout the day and across seasons. This includes trees, buildings, chimneys, and other structures that might cast shadows."
          },
          {
            type: "image",
            url: "/images/shade-analysis.jpg",
            description: "3D model showing sun path and shade analysis for a typical residential roof"
          },
          {
            type: "heading",
            body: "Electrical System Assessment"
          },
          {
            type: "text",
            body: "Your home's electrical system must be evaluated to ensure it can safely integrate with solar. This includes examining your electrical panel, wiring, and potential upgrade needs."
          },
          {
            type: "list",
            title: "Electrical Evaluation Points",
            body: "Panel capacity and age, Service size adequacy, Grounding system, Upgrade requirements, Meter compatibility"
          },
          {
            type: "heading",
            body: "System Design Process"
          },
          {
            type: "text",
            body: "Using assessment data, solar designers create a custom system that maximizes production while meeting aesthetic and budget requirements. This includes selecting equipment and determining optimal panel layout."
          },
          {
            type: "callout",
            title: "Custom Design Solutions",
            body: "Klaravia's platform generates multiple design options, allowing you to compare different layouts and equipment choices to find your ideal solution."
          },
          {
            type: "heading",
            body: "Production Modeling"
          },
          {
            type: "text",
            body: "Advanced software simulates your system's expected production using local weather data, shade analysis, and equipment specifications. This helps ensure your system will meet your energy goals."
          },
          {
            type: "image",
            url: "/images/production-model.jpg",
            description: "Graph showing predicted monthly solar production based on site analysis"
          },
          {
            type: "heading",
            body: "Design Considerations"
          },
          {
            type: "list",
            title: "Key Design Factors",
            body: "Energy consumption patterns, Future energy needs, Aesthetic preferences, Budget constraints, Local regulations, Equipment options"
          },
          {
            type: "heading",
            body: "Structural Requirements"
          },
          {
            type: "text",
            body: "The design must account for your roof's structural capacity and local wind and snow load requirements. This ensures your solar system will be safe and durable for decades."
          },
          {
            type: "callout",
            title: "Engineering Excellence",
            body: "All Klaravia designs include professional engineering review to ensure structural integrity and code compliance."
          },
          {
            type: "heading",
            body: "Final Design Review"
          },
          {
            type: "text",
            body: "Before proceeding to installation, the final design is reviewed with you to ensure it meets your expectations and requirements. This is your opportunity to request any adjustments."
          },
          {
            type: "quote",
            body: "A thorough site assessment and thoughtful design process are crucial for maximizing your solar investment's long-term performance and value."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "In our next lesson, we'll explore how to choose the right system size based on your energy needs and site capabilities."
          }
        ]
      },
      {
        slug: "choosing-the-right-system-size",
        title: "Choosing the Right System Size",
        description: "Learn how to determine the optimal solar system size for your home based on energy needs and site constraints.",
        keywords: ["system sizing", "energy consumption", "solar capacity", "energy offset", "system design"],
        content: [
          {
            type: "heading",
            body: "Understanding System Sizing"
          },
          {
            type: "text",
            body: "Determining the right size for your solar system is crucial for maximizing both performance and financial returns. This process involves balancing your energy needs with site constraints and financial goals."
          },
          {
            type: "heading",
            body: "Analyzing Energy Consumption"
          },
          {
            type: "text",
            body: "The first step in sizing your system is understanding your electricity usage patterns. This includes both total consumption and how it varies throughout the day and across seasons."
          },
          {
            type: "list",
            title: "Key Usage Factors",
            body: "Annual electricity consumption, Monthly usage variations, Peak demand periods, Time-of-use considerations, Future usage changes"
          },
          {
            type: "callout",
            title: "Smart Usage Analysis",
            body: "Klaravia's platform analyzes your utility bill history to identify usage patterns and recommend optimal system sizes based on your specific consumption profile."
          },
          {
            type: "heading",
            body: "Production Goals"
          },
          {
            type: "text",
            body: "Most homeowners aim to offset 100% of their electricity usage, but this isn't always the best or most feasible option. Factors like roof space, budget, and local regulations may influence your production goals."
          },
          {
            type: "image",
            url: "/images/consumption-vs-production.jpg",
            description: "Graph comparing typical home consumption with solar production patterns"
          },
          {
            type: "heading",
            body: "Understanding Solar Capacity"
          },
          {
            type: "text",
            body: "Solar system size is typically measured in kilowatts (kW). Each kilowatt of solar capacity produces different amounts of electricity depending on your location, equipment, and installation factors."
          },
          {
            type: "list",
            title: "Production Variables",
            body: "Geographic location, Panel efficiency, Roof orientation, Shading factors, System losses, Weather patterns"
          },
          {
            type: "heading",
            body: "Space Requirements"
          },
          {
            type: "text",
            body: "Each kilowatt of solar capacity requires approximately 100 square feet of roof space, though this varies based on panel efficiency. Your available roof space may limit your system size options."
          },
          {
            type: "callout",
            title: "Space Optimization",
            body: "Our platform's design tools automatically calculate the maximum system size your roof can accommodate while maintaining proper spacing and setbacks."
          },
          {
            type: "heading",
            body: "Financial Considerations"
          },
          {
            type: "text",
            body: "While larger systems produce more power, they also cost more. The optimal system size often balances maximum production with budget constraints and financial returns."
          },
          {
            type: "list",
            title: "Financial Factors",
            body: "Available budget, Incentive limitations, Utility rate structures, Net metering policies, Return on investment goals"
          },
          {
            type: "heading",
            body: "Future-Proofing"
          },
          {
            type: "text",
            body: "Consider future changes in your electricity usage when sizing your system. This might include electric vehicles, home additions, or other major changes in consumption patterns."
          },
          {
            type: "callout",
            title: "Growth Planning",
            body: "Klaravia helps you plan for future needs by modeling different consumption scenarios and showing how they affect optimal system sizing."
          },
          {
            type: "heading",
            body: "Equipment Selection Impact"
          },
          {
            type: "text",
            body: "Different solar panels have different efficiency ratings, affecting how much power you can generate in a given space. Higher efficiency panels can produce more power in limited roof areas."
          },
          {
            type: "list",
            title: "Equipment Considerations",
            body: "Panel efficiency ratings, Inverter sizing ratios, Temperature coefficients, Warranty terms, Cost per watt"
          },
          {
            type: "heading",
            body: "Utility Requirements"
          },
          {
            type: "text",
            body: "Some utilities have size limitations or specific requirements for solar installations. These regulations need to be considered when determining your system size."
          },
          {
            type: "quote",
            body: "The right system size balances your energy needs, site constraints, and financial goals while leaving room for future growth."
          },
          {
            type: "heading",
            body: "Making the Decision"
          },
          {
            type: "list",
            title: "Final Size Factors",
            body: "Current energy needs, Available roof space, Budget constraints, Future expansion plans, Local regulations"
          },
          {
            type: "callout",
            title: "Simplified Decision Making",
            body: "Our platform weighs all these factors to recommend optimal system sizes, allowing you to compare different options and their impacts on cost and production."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "In our next lesson, we'll explore the permitting and regulations process for solar installations."
          }
        ]
      },
      {
        slug: "permits-and-regulations",
        title: "Permits and Regulations",
        description: "Understand the various permits, regulations, and approvals needed for solar installation, and how to navigate them successfully.",
        keywords: ["solar permits", "building codes", "HOA approval", "interconnection", "inspections"],
        content: [
          {
            type: "heading",
            body: "Understanding Solar Permits and Regulations"
          },
          {
            type: "text",
            body: "Solar installations require various permits and approvals to ensure safety and compliance. While this process can seem complex, understanding the requirements helps ensure a smooth installation."
          },
          {
            type: "heading",
            body: "Building Permits"
          },
          {
            type: "text",
            body: "Most jurisdictions require building permits for solar installations. These permits ensure your system meets local building codes and safety standards."
          },
          {
            type: "list",
            title: "Common Permit Requirements",
            body: "Structural engineering reports, Electrical diagrams, Site plans, Equipment specifications, Fire safety compliance, Zoning verification"
          },
          {
            type: "callout",
            title: "Streamlined Permitting",
            body: "Klaravia's platform automatically generates complete permit packages based on your jurisdiction's specific requirements, and our installer network handles all permit submissions."
          },
          {
            type: "heading",
            body: "Electrical Permits"
          },
          {
            type: "text",
            body: "Separate electrical permits are often required to ensure your solar installation meets electrical codes. These focus on system wiring, grounding, and connection to your home's electrical system."
          },
          {
            type: "list",
            title: "Electrical Requirements",
            body: "Wire sizing calculations, Disconnect locations, Grounding specifications, Conduit routing plans, Equipment ratings"
          },
          {
            type: "heading",
            body: "HOA and Community Approvals"
          },
          {
            type: "text",
            body: "If you live in a community with a Homeowners Association (HOA), you may need their approval before installation. Many states have 'solar rights laws' that limit HOA restrictions on solar installations."
          },
          {
            type: "callout",
            title: "HOA Navigation",
            body: "Our platform includes templates and guides for HOA submissions, helping you present your solar plans effectively and address common concerns."
          },
          {
            type: "heading",
            body: "Utility Interconnection"
          },
          {
            type: "text",
            body: "Your utility company must approve your solar system's connection to the grid. This process includes application submission, technical review, and final approval."
          },
          {
            type: "list",
            title: "Interconnection Steps",
            body: "Initial application, Technical review, Equipment verification, System size approval, Metering requirements, Final authorization"
          },
          {
            type: "image",
            url: "/images/interconnection-diagram.jpg",
            description: "Diagram showing typical utility interconnection requirements"
          },
          {
            type: "heading",
            body: "Fire Safety Requirements"
          },
          {
            type: "text",
            body: "Solar installations must meet specific fire safety requirements, including setbacks for firefighter access and proper labeling of system components."
          },
          {
            type: "list",
            title: "Fire Safety Considerations",
            body: "Roof access paths, Setback distances, Emergency disconnects, System labeling, Rapid shutdown compliance"
          },
          {
            type: "heading",
            body: "Zoning Requirements"
          },
          {
            type: "text",
            body: "Local zoning laws may affect where and how solar panels can be installed. Some jurisdictions have specific solar zoning ordinances."
          },
          {
            type: "callout",
            title: "Zoning Compliance",
            body: "Klaravia's design tools automatically consider local zoning requirements when creating your system layout."
          },
          {
            type: "heading",
            body: "Inspection Process"
          },
          {
            type: "text",
            body: "Multiple inspections are typically required throughout the installation process. These ensure compliance with all applicable codes and regulations."
          },
          {
            type: "list",
            title: "Common Inspections",
            body: "Pre-installation structural inspection, Rough electrical inspection, Final building inspection, Utility inspection, Fire department inspection"
          },
          {
            type: "heading",
            body: "Timeline Considerations"
          },
          {
            type: "text",
            body: "Permit and approval processes can take several weeks to complete. Understanding typical timelines helps set realistic expectations for your installation."
          },
          {
            type: "callout",
            title: "Progress Tracking",
            body: "Our platform provides real-time updates on permit and approval status, keeping you informed throughout the process."
          },
          {
            type: "heading",
            body: "Documentation Requirements"
          },
          {
            type: "list",
            title: "Essential Documents",
            body: "Equipment specifications, Site plans, Engineering calculations, Electrical diagrams, Installation manuals, Safety compliance certificates"
          },
          {
            type: "quote",
            body: "While permitting can seem complex, proper preparation and understanding make it a manageable part of your solar journey."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "In our next lesson, we'll explore the installation timeline and what to expect during the physical installation process."
          }
        ]
      },
      {
        slug: "installation-timeline",
        title: "Installation Timeline and What to Expect",
        description: "Learn about each phase of the solar installation process and understand what happens on installation day.",
        keywords: ["solar installation", "timeline", "installation day", "commissioning", "activation"],
        content: [
          {
            type: "heading",
            body: "The Solar Installation Journey"
          },
          {
            type: "text",
            body: "Understanding the installation timeline helps you prepare for each phase of your solar project. While exact timelines vary, most residential installations follow a similar sequence of events."
          },
          {
            type: "heading",
            body: "Pre-Installation Phase"
          },
          {
            type: "text",
            body: "Before physical installation begins, several steps must be completed to ensure everything is ready for installation day."
          },
          {
            type: "list",
            title: "Pre-Installation Steps",
            body: "Final site survey verification, Material ordering and delivery, Permit approvals, HOA clearance if needed, Scheduling coordination"
          },
          {
            type: "callout",
            title: "Streamlined Preparation",
            body: "Klaravia's platform keeps you informed of each pre-installation milestone and automatically notifies you when action is needed."
          },
          {
            type: "heading",
            body: "Installation Day: Morning"
          },
          {
            type: "text",
            body: "The installation team typically arrives early in the morning to begin work. They'll start by preparing the work area and ensuring safety measures are in place."
          },
          {
            type: "list",
            title: "Morning Activities",
            body: "Safety setup and preparation, Equipment staging, Roof preparation, Initial electrical work, Mounting system installation"
          },
          {
            type: "heading",
            body: "Installation Day: Main Phase"
          },
          {
            type: "text",
            body: "The main installation phase includes mounting the panels and completing the electrical connections. This is typically the most visible and active part of the installation."
          },
          {
            type: "image",
            url: "/images/installation-process.jpg",
            description: "Step-by-step visualization of a typical solar installation day"
          },
          {
            type: "list",
            title: "Main Installation Steps",
            body: "Solar panel mounting, Inverter installation, Wiring and connections, Battery installation if applicable, System grounding"
          },
          {
            type: "heading",
            body: "Installation Day: Completion"
          },
          {
            type: "text",
            body: "As the installation nears completion, the team focuses on final connections, cleaning up the site, and preparing for inspection."
          },
          {
            type: "callout",
            title: "Quality Assurance",
            body: "All Klaravia network installers follow a comprehensive checklist to ensure every aspect of the installation meets our quality standards."
          },
          {
            type: "heading",
            body: "Post-Installation Phase"
          },
          {
            type: "text",
            body: "After the physical installation is complete, several steps remain before your system can begin producing power."
          },
          {
            type: "list",
            title: "Post-Installation Steps",
            body: "City inspection scheduling, Utility inspection coordination, Monitoring system setup, Final system testing, Permission to operate"
          },
          {
            type: "heading",
            body: "System Commissioning"
          },
          {
            type: "text",
            body: "Commissioning is the process of testing and verifying all system components are working correctly. This includes performance testing and safety checks."
          },
          {
            type: "list",
            title: "Commissioning Checks",
            body: "Performance verification, Safety system testing, Monitoring setup, Emergency shutdown test, Production meter verification"
          },
          {
            type: "heading",
            body: "Final Inspection and Activation"
          },
          {
            type: "text",
            body: "The final steps involve passing necessary inspections and receiving permission to operate from your utility company."
          },
          {
            type: "callout",
            title: "Activation Support",
            body: "Our platform tracks inspection schedules and utility approvals, keeping you updated on your system's path to activation."
          },
          {
            type: "heading",
            body: "System Training"
          },
          {
            type: "text",
            body: "Before considering the installation complete, you'll receive training on your system's operation, monitoring, and safety features."
          },
          {
            type: "list",
            title: "Training Topics",
            body: "System operation basics, Monitoring app usage, Emergency procedures, Maintenance guidelines, Performance expectations"
          },
          {
            type: "heading",
            body: "Timeline Variations"
          },
          {
            type: "text",
            body: "While most installations complete the physical installation in 1-2 days, the entire process from signing to activation typically takes 2-3 months due to permitting and inspections."
          },
          {
            type: "quote",
            body: "A successful solar installation is a coordinated effort that requires attention to detail at every step."
          },
          {
            type: "divider"
          },
          {
            type: "callout",
            title: "Project Tracking",
            body: "Klaravia's user portal provides real-time updates on your project's progress, upcoming steps, and any required actions."
          }
        ]
      }
    ]
  },
  {
    slug: "solar-industry-navigation",
    title: "Solar Industry Navigation",
    description: "Learn how to evaluate solar proposals, choose qualified installers, and avoid common sales tactics and pitfalls.",
    keywords: ["solar sales", "installer selection", "proposals", "solar quotes", "sales tactics"],
    lessons: [
      {
        slug: "traditional-vs-online-solar",
        title: "Traditional Solar Sales vs Online Platform",
        description: "Understand the differences between traditional solar sales approaches and modern online platforms.",
        keywords: ["solar sales", "online solar", "solar shopping", "sales process"],
        content: [
          {
            type: "heading",
            body: "The Evolution of Solar Sales"
          },
          {
            type: "text",
            body: "The solar industry has traditionally relied on in-person sales tactics, but modern technology is transforming how homeowners can shop for and purchase solar systems."
          },
          {
            type: "heading",
            body: "Traditional Solar Sales Model"
          },
          {
            type: "text",
            body: "Traditional solar sales typically involve door-to-door salespeople, home visits, and high-pressure sales tactics. This model can create stress and uncertainty for homeowners."
          },
          {
            type: "list",
            title: "Traditional Sales Characteristics",
            body: "Door-to-door solicitation, Multiple home visits required, Limited comparison options, Pressure to sign quickly, Complex pricing structures"
          },
          {
            type: "callout",
            title: "Industry Challenge",
            body: "High-pressure sales tactics and limited transparency have been significant barriers to solar adoption, leading to consumer hesitation and mistrust."
          },
          {
            type: "heading",
            body: "The Online Platform Advantage"
          },
          {
            type: "text",
            body: "Modern online platforms like Klaravia transform the solar buying experience by putting homeowners in control. You can research, compare options, and make decisions at your own pace."
          },
          {
            type: "list",
            title: "Online Platform Benefits",
            body: "24/7 access to information, No pushy salespeople, Transparent pricing, Easy comparison shopping, Self-paced decision making"
          },
          {
            type: "heading",
            body: "Information Access and Transparency"
          },
          {
            type: "text",
            body: "Online platforms provide comprehensive information about solar technology, costs, and benefits without the filtering lens of a salesperson trying to close a deal."
          },
          {
            type: "callout",
            title: "Klaravia's Approach",
            body: "Our platform provides unbiased information, transparent pricing, and easy-to-understand comparisons, empowering you to make informed decisions without sales pressure."
          },
          {
            type: "heading",
            body: "Pricing Transparency"
          },
          {
            type: "text",
            body: "Traditional solar sales often obscure true costs through complex financing arrangements and unclear pricing. Online platforms offer clear, upfront pricing and easy comparisons."
          },
          {
            type: "list",
            title: "Pricing Clarity Features",
            body: "Upfront total costs, Clear equipment pricing, Transparent installer fees, Financing cost breakdowns, Installation cost details"
          },
          {
            type: "heading",
            body: "Time and Convenience"
          },
          {
            type: "text",
            body: "While traditional sales require multiple home visits and meetings, online platforms let you explore options on your own schedule, from anywhere."
          },
          {
            type: "image",
            url: "/images/timeline-comparison.jpg",
            description: "Timeline comparison of traditional vs. online solar purchasing process"
          },
          {
            type: "heading",
            body: "System Design and Customization"
          },
          {
            type: "text",
            body: "Online platforms offer sophisticated design tools that let you explore different system configurations and equipment options without pressure from a salesperson."
          },
          {
            type: "callout",
            title: "Design Freedom",
            body: "Klaravia's platform lets you customize your system design, compare different equipment options, and see how changes affect performance and cost."
          },
          {
            type: "heading",
            body: "Installer Selection"
          },
          {
            type: "text",
            body: "Instead of being limited to a single installer's perspective, online platforms let you compare multiple pre-vetted installers and their offerings."
          },
          {
            type: "list",
            title: "Comparison Factors",
            body: "Installation costs, Customer reviews, Experience levels, Warranty coverage, Installation timelines"
          },
          {
            type: "heading",
            body: "Customer Support"
          },
          {
            type: "text",
            body: "While traditional sales rely on individual salespeople, online platforms provide consistent support through multiple channels whenever you need it."
          },
          {
            type: "quote",
            body: "The future of solar shopping is online, putting homeowners in control of their solar journey from start to finish."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "In our next lesson, we'll explore how to effectively evaluate solar proposals and compare different options."
          }
        ]
      },
      {
        slug: "choosing-qualified-installer",
        title: "Choosing a Qualified Installer",
        description: "Learn how to evaluate and select a qualified solar installer for your project, understanding key criteria and red flags.",
        keywords: ["solar installer", "contractor selection", "installer qualifications", "solar certification", "installer vetting"],
        content: [
          {
            type: "heading",
            body: "The Importance of Installer Selection"
          },
          {
            type: "text",
            body: "Your choice of solar installer significantly impacts your system's performance, reliability, and long-term value. Understanding how to evaluate installers helps ensure a quality installation and positive experience."
          },
          {
            type: "heading",
            body: "Key Qualifications"
          },
          {
            type: "text",
            body: "Professional solar installers should hold specific certifications and licenses that demonstrate their expertise and commitment to quality."
          },
          {
            type: "list",
            title: "Essential Credentials",
            body: "NABCEP certification, State electrical license, General contractor license, Manufacturer certifications, Insurance coverage"
          },
          {
            type: "callout",
            title: "Klaravia's Vetting Process",
            body: "Every installer in our network undergoes rigorous verification of credentials, insurance, and performance history before being approved to offer services on our platform."
          },
          {
            type: "heading",
            body: "Experience Matters"
          },
          {
            type: "text",
            body: "An installer's track record and experience level provide important insights into their capability to handle your installation professionally."
          },
          {
            type: "list",
            title: "Experience Indicators",
            body: "Years in business, Number of installations completed, Types of systems installed, Local market experience, Specialized expertise"
          },
          {
            type: "heading",
            body: "Customer Reviews and References"
          },
          {
            type: "text",
            body: "Previous customer experiences offer valuable insights into an installer's reliability, workmanship, and customer service quality."
          },
          {
            type: "callout",
            title: "Verified Reviews",
            body: "Klaravia only displays verified customer reviews from actual installations, ensuring you get authentic feedback about each installer's performance."
          },
          {
            type: "heading",
            body: "Financial Stability"
          },
          {
            type: "text",
            body: "An installer's financial stability affects their ability to honor warranties and provide long-term support. Look for established companies with strong financial foundations."
          },
          {
            type: "list",
            title: "Financial Indicators",
            body: "Business longevity, Bond coverage, Insurance levels, Manufacturer partnerships, Financial references"
          },
          {
            type: "heading",
            body: "Workmanship Warranty"
          },
          {
            type: "text",
            body: "A strong workmanship warranty demonstrates an installer's confidence in their work quality and commitment to customer satisfaction."
          },
          {
            type: "callout",
            title: "Warranty Standards",
            body: "All installers in Klaravia's network must offer minimum workmanship warranty coverage that meets or exceeds industry standards."
          },
          {
            type: "heading",
            body: "Installation Practices"
          },
          {
            type: "text",
            body: "Quality installers follow best practices for installation, using proper equipment and techniques to ensure system longevity and performance."
          },
          {
            type: "list",
            title: "Quality Indicators",
            body: "In-house installation crews, Professional equipment, Safety protocols, Quality control processes, Post-installation support"
          },
          {
            type: "heading",
            body: "Communication and Support"
          },
          {
            type: "text",
            body: "Effective communication and responsive support are crucial for a smooth installation process and long-term relationship."
          },
          {
            type: "list",
            title: "Service Factors",
            body: "Response time, Project updates, Support availability, Documentation clarity, Issue resolution process"
          },
          {
            type: "heading",
            body: "Red Flags to Watch For"
          },
          {
            type: "text",
            body: "Certain behaviors or practices should raise concerns when evaluating potential installers."
          },
          {
            type: "list",
            title: "Warning Signs",
            body: "Pressure tactics, Reluctance to provide references, Unclear pricing, Limited warranty coverage, Poor communication"
          },
          {
            type: "callout",
            title: "Protected Selection",
            body: "Klaravia's pre-vetting process eliminates installers exhibiting these red flags, ensuring you only choose from qualified professionals."
          },
          {
            type: "heading",
            body: "Questions to Ask"
          },
          {
            type: "text",
            body: "Asking the right questions helps you gather important information about potential installers."
          },
          {
            type: "list",
            title: "Key Questions",
            body: "Installation process details, Crew qualifications, Project timeline, Support policies, Emergency procedures, Warranty details"
          },
          {
            type: "quote",
            body: "The right installer combines technical expertise, quality workmanship, and excellent customer service to ensure your solar investment performs as promised."
          },
          {
            type: "heading",
            body: "Making Your Decision"
          },
          {
            type: "text",
            body: "Compare installers based on all these factors, not just price, to make an informed decision that ensures long-term satisfaction."
          },
          {
            type: "callout",
            title: "Simplified Comparison",
            body: "Our platform makes it easy to compare pre-vetted installers across all these criteria, helping you make a confident choice based on your priorities."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "In our next lesson, we'll explore common solar sales tactics and how to recognize and avoid potential scams."
          }
        ]
      },
      {
        slug: "why-choose-klaravia",
        title: "Why Choose Klaravia: The Future of Solar Shopping",
        description: "Understand how Klaravia's innovative platform transforms the solar buying experience and protects homeowner interests.",
        keywords: ["solar platform", "online solar", "solar marketplace", "solar shopping", "customer protection"],
        content: [
          {
            type: "heading",
            body: "Revolutionizing Solar Shopping"
          },
          {
            type: "text",
            body: "Throughout this course, you've learned about the complexities of going solar - from technical considerations to financial decisions. Now, let's summarize how Klaravia's platform addresses these challenges and transforms the solar buying experience."
          },
          {
            type: "heading",
            body: "Empowering Informed Decisions"
          },
          {
            type: "list",
            title: "Educational Resources",
            body: "Comprehensive learning materials, Interactive design tools, Real-time pricing information, Performance calculators, Environmental impact metrics"
          },
          {
            type: "callout",
            title: "Knowledge is Power",
            body: "Our platform ensures you understand every aspect of your solar investment before making any commitments, putting you in control of your solar journey."
          },
          {
            type: "heading",
            body: "Transparent Shopping Experience"
          },
          {
            type: "text",
            body: "Unlike traditional solar sales that often obscure true costs and options, Klaravia provides complete transparency throughout the process."
          },
          {
            type: "list",
            title: "Transparency Features",
            body: "Clear pricing breakdowns, Side-by-side comparisons, Verified customer reviews, Equipment specifications, Real installation timelines"
          },
          {
            type: "heading",
            body: "Advanced Design Technology"
          },
          {
            type: "text",
            body: "Our platform leverages cutting-edge technology to ensure your solar system is optimally designed for your specific situation."
          },
          {
            type: "callout",
            title: "Precision Design",
            body: "AI-powered analysis of your roof, advanced shade modeling, and detailed production forecasting ensure you get the most efficient system possible."
          },
          {
            type: "heading",
            body: "Quality Assurance"
          },
          {
            type: "list",
            title: "Protection Measures",
            body: "Pre-vetted installer network, Equipment quality standards, Installation best practices, Workmanship requirements, Performance guarantees"
          },
          {
            type: "heading",
            body: "Customer-First Process"
          },
          {
            type: "text",
            body: "Every aspect of our platform is designed to prioritize your needs and protect your interests throughout the solar journey."
          },
          {
            type: "list",
            title: "Customer Benefits",
            body: "No sales pressure, Shop at your own pace, Customize your system, Compare multiple options, Track project progress"
          },
          {
            type: "heading",
            body: "Ongoing Support"
          },
          {
            type: "text",
            body: "Our commitment to your solar success extends well beyond installation."
          },
          {
            type: "list",
            title: "Support Features",
            body: "Performance monitoring, Issue resolution assistance, Warranty tracking, Maintenance reminders, Production optimization"
          },
          {
            type: "heading",
            body: "Cost Savings"
          },
          {
            type: "text",
            body: "By eliminating traditional sales costs and streamlining the process, Klaravia helps you maximize your solar investment."
          },
          {
            type: "callout",
            title: "Maximum Value",
            body: "Our efficient platform and competitive installer network typically save homeowners 15-25% compared to traditional solar sales channels."
          },
          {
            type: "heading",
            body: "Simple Project Management"
          },
          {
            type: "list",
            title: "Management Tools",
            body: "Progress tracking dashboard, Document management, Milestone notifications, Communication tools, Schedule coordination"
          },
          {
            type: "heading",
            body: "Future-Proof Investment"
          },
          {
            type: "text",
            body: "Klaravia helps ensure your solar investment is ready for future energy needs and technology advances."
          },
          {
            type: "quote",
            body: "The future of solar is online, transparent, and customer-focused. Klaravia leads this transformation by putting homeowners first."
          },
          {
            type: "callout",
            title: "Ready to Begin?",
            body: "Now that you understand solar and how Klaravia's platform protects your interests, you're ready to start your solar journey with confidence."
          },
          {
            type: "heading",
            body: "Next Steps"
          },
          {
            type: "text",
            body: "Take the final quiz to complete your solar education, then use your knowledge to explore solar options on our platform. Our team is ready to support you every step of the way."
          },
          {
            type: "divider"
          },
          {
            type: "text",
            body: "Thank you for completing this comprehensive solar course. We look forward to helping you achieve your clean energy goals."
          }
        ]
      }
    ]
  }
];

// Utility functions for course navigation
export function getModuleBySlug(slug: string): Module | undefined {
  return courseStructure.find(module => module.slug === slug);
}

export function getLessonBySlug(moduleSlug: string, lessonSlug: string): Lesson | undefined {
  const module = getModuleBySlug(moduleSlug);
  return module?.lessons.find(lesson => lesson.slug === lessonSlug);
}

export function getNextLesson(moduleSlug: string, currentLessonSlug: string): 
  { moduleSlug: string; lessonSlug: string } | undefined {
  const currentModule = getModuleBySlug(moduleSlug);
  if (!currentModule) return undefined;

  const currentLessonIndex = currentModule.lessons.findIndex(
    lesson => lesson.slug === currentLessonSlug
  );

  // If there's another lesson in current module
  if (currentLessonIndex < currentModule.lessons.length - 1) {
    return {
      moduleSlug,
      lessonSlug: currentModule.lessons[currentLessonIndex + 1].slug
    };
  }

  // If we need to move to next module
  const currentModuleIndex = courseStructure.findIndex(
    module => module.slug === moduleSlug
  );

  if (currentModuleIndex < courseStructure.length - 1) {
    const nextModule = courseStructure[currentModuleIndex + 1];
    return {
      moduleSlug: nextModule.slug,
      lessonSlug: nextModule.lessons[0].slug
    };
  }

  return undefined;
}

export function getNextModule(currentModuleSlug: string): Module | undefined {
  const currentModuleIndex = courseStructure.findIndex(
    module => module.slug === currentModuleSlug
  );

  if (currentModuleIndex === -1 || currentModuleIndex === courseStructure.length - 1) {
    return undefined;
  }

  return courseStructure[currentModuleIndex + 1];
}