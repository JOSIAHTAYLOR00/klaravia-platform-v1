import { Lesson } from "@/types/course";
import { VStack, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";

// Move your lessons array here
export const lessons: Lesson[] = [
  {
    title: "Introduction: Why Solar is a Smart Choice",
    content: (
      <VStack w="full" alignItems="flex-start" py="20px">
        <Text>
          Solar energy isn&#39;t just a trend, it&#39;s a movement toward sustainability, financial savings, and energy independence. Homeowners today are increasingly choosing
          solar because of its positive impact on the environment and its ability to lower energy bills. This guide will walk you through everything you need to know about solar,
          from how it works to why it can be a smart investment for your home and family.
        </Text>
        <br />
        <Text fontWeight="bold">1. Environmental Benefits of Solar</Text>
        <Text>
          Switching to solar helps you reduce your carbon footprint by generating clean, renewable energy. Traditional electricity often relies on burning fossil fuels, which
          release harmful greenhouse gases into the atmosphere. By installing solar panels, your household can avoid producing 3-4 tons of CO₂ annually on average, which is the
          equivalent of planting over 100 trees every single year! This collective effort helps promote a more sustainable future for ourselves and the next generation.
        </Text>
        <br />
        <Text fontWeight="bold">2. Financial Benefits</Text>
        <Text>
          Rooftop solar systems offer immediate savings on your monthly electricity bills by reducing the amount of energy you need to purchase from your utility company. Depending
          on where you live and the size of your system, the average homeowner can save tens of thousands of dollars over the life of the system. Additionally, government
          incentives and tax credits can significantly reduce the initial cost of installation, helping you see a return on investment even faster.
        </Text>
        <br />
        <Text fontWeight="bold">3. Energy Security</Text>
        <Text>
          By generating your own electricity, you&#39;re less reliant on the grid, protecting yourself from rising energy prices and outages. With the addition of a battery storage
          system, you can even store excess energy for use during the night or when the grid goes down. As the aging grid becomes more overworked and with power outages becoming
          increasingly prevalent, grid independence is moving from a luxury to an essential.
        </Text>
      </VStack>
    ),
  },
  {
    title: "How Does Solar Work?",
    content: (
      <VStack w="full" alignItems="flex-start" py="20px">
        <Text fontWeight="bold">1. Photovoltaic (PV) Cells and How They Capture Sunlight</Text>
        <Text>
          At the core of any solar system is the photovoltaic cell, which converts sunlight into direct current (DC) electricity. These cells are made from silicon, a
          semiconducting material that releases electrons when exposed to sunlight. This movement of electrons generates an electric current that flows through the system. There
          are different types of solar panels available, each with varying levels of efficiency:
        </Text>
        <UnorderedList ml="40px" mt="20px">
          <ListItem>
            <b>Monocrystalline panels</b> are the most efficient, offering the highest energy output per square foot.
          </ListItem>
          <ListItem mt="10px">
            <b>Polycrystalline panels</b> are slightly less efficient but tend to be more affordable.
          </ListItem>
          <ListItem mt="10px">
            <b>Thin-film panels</b> are flexible and lightweight, making them ideal for unconventional applications, though they are often less efficient than crystalline types.
          </ListItem>
        </UnorderedList>
        <br />
        <Text fontWeight="bold">2. The Role of the Inverter</Text>
        <Text>
          Solar panels generate <b>direct current (DC) electricity</b>, but homes run on <b>alternating current (AC) electricity</b>, which is why an inverter is essential in any
          solar power system. The inverter’s job is to convert the DC electricity produced by the solar panels into AC electricity that can be used by your home’s appliances,
          lights, and electronics. Without this conversion, the electricity generated by the panels would be incompatible with your home’s electrical system. There are different
          types of inverters available, and the choice depends on the design of your solar system and the specific characteristics of your home.
        </Text>
        <br />
        <Text>
          <b>String Inverter:</b> In this configuration, all the solar panels are connected in a series, forming a &quot;string&quot; that feeds into a single inverter. String
          inverters are a cost-effective option for homes with consistent sunlight exposure across the entire roof. However, the system&#39;s performance is limited by its weakest
          panel, meaning if one panel experiences shading or becomes dirty, the output of the entire string can be reduced.
        </Text>
        <br />
        <Text>
          <b>Microinverters:</b> Unlike string inverters, microinverters are installed on each individual panel. This means that each panel operates independently, so if one panel
          is shaded or underperforming, it doesn&#39;t affect the output of the other panels. Microinverters are ideal for homes with shading issues or complex roof designs where
          different parts of the roof receive different amounts of sunlight throughout the day. While more expensive upfront, microinverters can maximize energy production in these
          conditions.
        </Text>
        <br />
        <Text>
          <b>Power Optimizers:</b> These devices are similar to microinverters in that they allow panels to operate independently. However, instead of converting DC to AC at the
          panel level like microinverters, power optimizers work in conjunction with string inverters to increase the efficiency of panels that may be partially shaded. Power
          optimizers adjust the voltage of each panel to ensure that shading on one panel doesn’t negatively impact the entire string. This setup provides a balance between the
          cost- effectiveness of string inverters and the enhanced performance of microinverters, making it a popular choice for many installations.
        </Text>
        <br />
        <Text>
          The type of inverter you choose can have a significant impact on the overall performance and efficiency of your solar system, so it’s important to select the option that
          best suits your home’s specific conditions.
        </Text>
        <br />
        <Text fontWeight="bold">3. How Energy is Delivered to Your Home</Text>
        <Text>
          Once the electricity from your solar panels is converted from direct current (DC) to alternating current (AC) by the inverter, it flows into your home’s electrical panel
          to power your appliances, lighting, and electronics just like conventional grid electricity. If your system produces more electricity than your home needs during peak
          sunlight hours, the excess energy can either be sent back to the grid through <b>net metering</b>—earning you credits to offset future utility bills—or stored for later
          use if you have a battery system.
        </Text>
        <Text>
          For homes with <b>solar battery storage</b>, excess energy is saved in the battery for use during nighttime or power outages, providing a reliable backup. Batteries allow
          homeowners to reduce reliance on the grid by using stored energy when solar production is low or during peak utility hours, when grid electricity is more expensive. This
          combination of net metering and battery storage ensures that homeowners can maximize their solar savings and enjoy uninterrupted power during emergencies or grid
          failures.
        </Text>
        <br />
        <Text fontWeight="bold">4. The Efficiency of Solar Panels</Text>
        <Text>
          Solar panel efficiency, which generally ranges between 15% and 22%, is a key factor in determining how much energy a panel can generate from the sunlight it receives. The
          efficiency rate represents the percentage of sunlight that is converted into usable electricity. For example, a panel with 20% efficiency can convert 20% of the sunlight
          it captures into electrical power, with the rest being lost as heat or reflected away. Higher efficiency means that the same amount of sunlight will generate more
          electricity, making these panels especially useful in areas with limited space for installations or in regions that don’t get consistent sunlight year-round.
        </Text>
        <Text>
          A panel’s efficiency is influenced by various factors, including the type of solar cell used and the overall design of the panel. Monocrystalline panels tend to offer the
          highest efficiency due to their pure and uniform structure, which allows electrons to flow more easily. These panels typically achieve efficiency ratings of 18% to 22%.
          Polycrystalline panels are less efficient and usual have efficiency ranging between 15% and 17%. Environmental conditions such as temperature, shading, and panel
          cleanliness also impact efficiency, as higher temperatures can reduce performance, while dirt and debris on the panels can block sunlight from reaching the cells. Recent
          technological advances, like the development of PERC (Passivated Emitter and Rear Contact) cells and bifacial panels that capture sunlight on both sides, are helping push
          the boundaries of efficiency even higher, allowing homeowners to generate more energy from the same amount of sunlight.
        </Text>
      </VStack>
    ),
  },
  {
    title: "Is Your Home a Good Fit for Solar?",
    content: (
      <VStack w="full" alignItems="flex-start" py="20px">
        <Text fontWeight="bold">1. Roof Condition and Solar Installation</Text>
        <Text>
          The condition of your roof is crucial for a successful solar installation. Solar panels are built to last <b>25 years or more</b>, so it’s important to install them on a
          roof that can support them for that duration. If your roof is nearing the end of its life (typically <b>10 to 15 years</b> for asphalt shingles) it’s advisable to
          consider replacing it before adding solar. This helps avoid future costs related to panel removal and reinstallation for roof repairs. Many solar companies offer{" "}
          <b>bundled roof replacement and solar installation packages</b>, streamlining the process and potentially saving money by completing both projects at once. There are also
          incentives around replacing your roof and solar at the same time, such as bundled pricing and the cost of the roof getting looped into the federal solar tax credit
          program. Replacing the roof ahead of solar installation ensures a longer lifespan for your solar investment.
        </Text>
        <br />
        <Text fontWeight="bold">2. Roof Orientation and Tilt</Text>
        <Text>
          The orientation and tilt of your roof directly impact the efficiency of your solar panels. In the northern hemisphere, a <b>south-facing roof</b> is ideal, as it captures
          the most sunlight throughout the day. However, <b>east- and west-facing roofs</b> can also work effectively if enough panels are installed to account for less direct
          exposure. East-facing panels perform well in the morning, while west-facing panels are better for capturing afternoon sun. The <b>tilt angle</b> should ideally match your
          latitude for optimal sunlight capture year-round. For example, a home at 30 degrees latitude should have its panels tilted at 30 degrees. If your roof is flat or steep,
          mounting systems can adjust the tilt for better efficiency.
        </Text>
        <br />
        <Text fontWeight="bold">3. Shading and Sunlight Access</Text>
        <Text>
          Solar panels perform best with direct sunlight. Shading from trees, chimneys, or buildings can reduce their efficiency, but technologies like <b>microinverters</b> and{" "}
          <b>power optimizers</b> help mitigate the impact. Microinverters allow each panel to function independently, ensuring that shading on one doesn’t affect the rest of the
          system. Power optimizers also adjust the output of each panel to maximize performance in varying sunlight conditions. A <b>solar shading analysis</b> by a professional
          installer can determine optimal panel placement, and minor tree trimming can often improve sunlight access.
        </Text>
        <br />
        <Text fontWeight="bold">4. Energy Consumption and Solar Sizing</Text>
        <Text>
          Accurately assessing your home’s energy consumption is key to designing a solar system that meets your needs. Review your <b>utility bills</b> to determine your average
          electricity usage in <b>kilowatt-hours (kWh)</b>. This helps your installer calculate the number of panels needed to offset your electricity consumption. Seasonal energy
          variations, such as higher usage in summer for air conditioning, are also considered when sizing your system. The goal is to design a solar system that covers your energy
          needs and maximizes your savings, with room to grow for potential future energy demands, such as electric vehicles.
        </Text>
        <br />
      </VStack>
    ),
  },
  {
    title: "Financial Considerations",
    content: (
      <VStack w="full" alignItems="flex-start" py="20px">
        <Text fontWeight="bold">1. Upfront Costs and Financing Options</Text>
        <Text>
          Installing a solar system can seem like a large investment, but various financing options make it more accessible. The upfront cost typically ranges from $15,000 to
          $25,000, depending on system size and features like battery storage. Fortunately, how you finance it can greatly affect your savings and flexibility.
        </Text>
        <Text>
          <b>Cash Purchase</b> - A cash purchase offers the most long-term savings since there are no monthly payments or interest, and you’ll start saving on energy costs right
          away. Though the initial investment is higher, it gives the highest return on investment (ROI), as all the savings from lower energy bills go to you. Plus, you can take
          full advantage of federal and state incentives, like the 30% federal tax credit, reducing your overall costs.
        </Text>
        <Text>
          <b>Solar Loans</b> - For those preferring to spread the cost, solar loans offer low interest rates and flexible repayment terms (5 to 20 years). With a loan, you can
          avoid the upfront cost while still owning the system and benefiting from tax credits. In many cases, your monthly loan payment will be similar to or lower than your
          current electricity bill, meaning you can start saving immediately. Once the loan is paid off, you’ll continue enjoying reduced energy bills.
        </Text>
        <Text>
          <b>Power Purchase Agreements (PPAs) and Solar Leases</b> - With PPAs and solar leases, there’s no upfront cost, and you pay a fixed monthly fee or buy the electricity
          produced by the system at a lower rate than utility prices. This allows for immediate savings without financial commitment. However, since you don’t own the system, you
          won’t benefit from tax credits, and long-term savings may be lower than with ownership. These options work well for those who want to lower their bills without the
          responsibility of system ownership.
        </Text>
        <br />
        <Text fontWeight="bold">2. Incentives and Tax Credits</Text>
        <Text>
          One of the biggest financial incentives for going solar is the federal solar tax credit, which allows you to deduct 30% of the cost of your system from your federal
          taxes. This incentive won’t last forever, as it’s expected to decrease over the coming years, so now is the best time to take advantage of it.
        </Text>
        <Text>
          In addition to the federal credit, many states and local utilities offer rebates and performance-based incentives that can further reduce your costs. The easiest way to
          find out more about the financial incentives available in your state is to use the Database of State Incentives for Renewables &amp; Efficiency (DSIRE) by visiting 
          <Link href="https://www.dsireusa.org" color="blue.500">
            www.dsireusa.org
          </Link>
          . Your installer and your accountant are also great resources.
        </Text>
        <br />
        <Text fontWeight="bold">3. Net Metering and Net Billing</Text>
        <Text>
          <b>Net metering</b> is a system that allows homeowners with solar panels to send excess electricity generated by their system back to the grid. When your solar panels
          produce more energy than your home uses during the day, the surplus is sent to the utility grid, and in return, you receive credits on your future utility bills. These
          credits can then be used during times when your solar panels aren’t generating enough power, such as at night or during cloudy days. This system effectively allows
          homeowners to &quot;bank&quot; their energy and draw from those credits as needed, making solar energy a more financially viable option by maximizing savings.
        </Text>
        <Text>
          In contrast, <b>net billing</b> compensates homeowners for excess energy, but instead of earning credits, they are paid a wholesale rate for the electricity they send
          back to the grid, which is typically lower than the retail rate they pay for electricity from the grid. This system is less common but may be used in areas where
          traditional net metering is not available. Although net billing still provides financial benefits, it generally results in less compensation compared to net metering, as
          the rates are often lower than what the homeowner would pay for grid electricity.
        </Text>
        <br />
        <Text fontWeight="bold">4. Return on Investment (ROI)</Text>
        <Text>
          A well-designed solar system typically pays for itself in 5 to 10 years, depending on several factors such as your energy usage, local electricity rates, and available
          incentives like tax credits and rebates. Once the initial costs of installation and equipment are paid off, the energy produced by the solar system is essentially free
          for the remainder of the system’s lifespan, which is typically 25 to 30 years. This means that after the break-even point, homeowners can enjoy long-term savings on their
          energy bills for 15-20 years or more.
        </Text>
        <Text>
          The speed at which you achieve your return on investment depends largely on the cost of electricity in your area. Higher rates result in faster savings, along with the
          size and efficiency of your system. States with more generous incentives, such as rebates or performance-based credits, also shorten the payback period. After your system
          has paid for itself, you’ll continue to benefit from reduced or eliminated electricity bills, making solar one of the most effective investments for long-term financial
          and environmental benefits.
        </Text>
      </VStack>
    ),
  },
  {
    title: "How Klaravia Makes Going Solar Easy",
    content: (
      <VStack w="full" alignItems="flex-start" py="20px">
        <Text fontWeight="bold">1. The Traditional Model: Door-to-Door Salespeople</Text>
        <Text>
          At Klaravia, we make the process of going solar simple and transparent from start to finish. Our platform is designed to guide you through each step, providing you with
          the tools and information you need to make confident decisions about your solar investment at your own pace. Whether you&#39;re a homeowner new to solar energy or someone
          looking to streamline the installation process, Klaravia has your back. Here’s how we optimize the solar adoption process:
        </Text>
        <UnorderedList ml="40px" mt="20px">
          <ListItem mt="10px">
            <b>Enter Your Address:</b> Getting started is as simple as entering your home address and basic energy usage details on our platform. Using this information, Klaravia
            generates an instant solar design and quote tailored specifically to your home, giving you a clear picture of how solar will work for your property. No complicated
            forms, no emails or sales calls, just a fast, easy design and quote to get you started.
          </ListItem>
          <ListItem mt="10px">
            <b>Review Your Solar Design:</b> With Klaravia’s cutting-edge technology, we use satellite imagery to assess your roof’s layout, shading, and potential for energy
            generation. You’ll receive a custom design showing the recommended system size, expected energy output, and projected savings, helping you understand exactly how much
            you can save over time.
          </ListItem>
          <ListItem mt="10px">
            <b>Compare Local Installers:</b> Klaravia partners with a trusted network of certified, highly-rated local installers, so you don’t have to waste time vetting options.
            You’ll be able to compare quotes, project timelines, and read customer reviews, all within our platform. This gives you the transparency and control to choose the
            installer that provides the best value to you, all without any sales pressure.
          </ListItem>
          <ListItem mt="10px">
            <b>Track Your Installation:</b> Once you’ve selected an installer, Klaravia keeps you in the loop with our project-tracking tool. This tool provides real-time updates
            on the status of your project, from contract signing to system activation. You’ll also be able to upload documents, view project milestones, and receive quick and
            helpful customer service all in one convenient place.
          </ListItem>
          <ListItem mt="10px">
            <b>Start Saving:</b> After installation, your system will start generating clean energy, and you’ll see immediate savings on your utility bills. Klaravia offers support
            throughout the entire process through system activation, fighting for you to help create a quick and seamless transition to solar and to keep money in your pocket every
            step of the way. With Klaravia, you can feel confident that your transition to solar is smooth and supported.
          </ListItem>
        </UnorderedList>
        <br />
        <Text>
          <b>Ready to Go Solar?</b>
        </Text>
        <Text>
          Now that you understand how solar works and the financial and environmental benefits it brings, there’s no reason to wait! Klaravia makes the process of going solar as
          seamless as possible, giving you the tools to take control of your energy future. With instant designs, a network of trusted installers, and full project tracking,
          Klaravia provides everything you need in one easy-to-use platform.
        </Text>
        <Text>
          Are you ready to start saving on energy and make the switch to solar? Get your custom design and quote instantly with Klaravia - no hassle, no pressure, simply results.
          Click{" "}
          <Link color="blue.500" href="/LandingPage">
            here
          </Link>{" "}
          to begin your solar journey now!
        </Text>
      </VStack>
    ),
  },
];