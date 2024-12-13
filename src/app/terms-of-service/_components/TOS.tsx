import Navbar from "@/app/components/Navbar";
import { Box, VStack, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";

const TOS = () => {
  const headerFontSize = { base: "20px", lg: "24px" };
  const bodyFontSize = { base: "12px", lg: "16px" };

  return (
    <Box w="full" minH="90vh" p="10px" fontFamily="times new roman" pb="40px">
      <Navbar />
      <VStack w="full">
        <VStack w="full" maxW="800px" pt="80px" alignItems="flex-start">
          <Text w="full" textAlign="center" fontSize={headerFontSize} textDecoration="underline" fontWeight={600} mb="20px">
            Klaravia Installer and Homeowner Terms of Service
          </Text>
          <Text fontSize={bodyFontSize}>Last Updated: August 29, 2024</Text>
          <Text fontSize={bodyFontSize} fontWeight="bold" mb="20px">
            SECTION 21 OF THESE TERMS CONTAINS AN ARBITRATION AGREEMENT AND CLASS ACTION WAIVER THAT APPLY TO ALL CLAIMS BROUGHT AGAINST KLARAVIA. PLEASE READ THEM CAREFULLY.
          </Text>
          <Text fontSize={bodyFontSize}>Thank you for using Klaravia!</Text>
          <Text fontSize={bodyFontSize}>
            We are Klaravia Inc., a Delaware Corporation (“<b>Klaravia</b>”, “<b>we</b>”, “<b>us</b>”, or “<b>our</b>”), and we are excited to work with you. These Terms of Service
            (“<b>Terms</b>”) are a binding legal agreement between you and Klaravia. These Terms govern the right to use our online facilitation and solar panel installation
            service management platform through our desktop and mobile website (together, the “<b>Klaravia Platform</b>”).
          </Text>
          <Text fontSize={bodyFontSize}>
            The Klaravia Platform enables homeowners and solar panel installers (collectively, “<b>Users</b>”) to publish, offer, search for, book, and manage solar panel
            installation services for residential buildings (each, a “<b>Home</b>”). Users who publish and offer residential solar panel installation services are referred to as “
            <b>Installers</b>” and Users who search for, book, or use such solar panel installation services are referred to as “<b>Homeowners</b>.”
          </Text>
          <Text fontSize={bodyFontSize}>
            Through the Klaravia Platform, Installers offer and advertise solar panel installation services (“<b>Solar Installation Services</b>” or “<b>SIS</b>”) to Homeowners (in
            each instance, an “<b>Installer Listing</b>” or just “<b>Listing</b>”). The Klaravia Platform allows Homeowners to connect with the Installers best tailored to fit
            their geographic and pricing needs, and acts as a central repository for their essential documents related to any SIS. Subject to the limitations and restrictions on
            liability discussed in Section 18 and elsewhere in these Terms, Klaravia facilitates the delivery of SIS progress updates until such SIS are fully rendered and the
            solar panels are installed. The Klaravia Platform is also a transaction hub, used to execute payments between the Homeowner and Installer throughout the SIS process and
            following the activation of the system (as described in further detail in Section 10).
          </Text>
          <Text fontSize={bodyFontSize}>
            We vet all Installers prior to the publication of any Installer Listing. As the provider of the Klaravia Platform, neither Klaravia (nor its affiliates) owns, controls,
            offers, or manages any Installer Listings or Solar Installation Services, except as expressly provided in these Terms. While we are a facilitator of the SIS between the
            Installer and the Homeowner, <b>WE ARE NOT AND SHOULD NOT BE CONSIDERED A PARTY TO THE CONTRACTS ENTERED INTO DIRECTLY BETWEEN INSTALLERS AND HOMEOWNERS</b>. Klaravia
            is not a SIS provider, insurance or real estate broker, nor are we a SIS or real estate agent. Klaravia is not acting as an agent in any capacity for any User, except
            as specified in Section 10 below and in policies on the Klaravia Platform now in existence or hereinafter created related to payment terms (“<b>Payment Terms</b>”). To
            learn more about Klaravia’s role as the SIS transaction facilitator, see Section 15.
          </Text>
          <Text fontSize={bodyFontSize}>
            Other terms and policies, including those now in existence and hereinafter created, may supplement these Terms. Such supplementary terms and policies may include
            documents like a separate privacy policy (describing the collection and use of personal data through the Klaravia Platform) and/or separate Payment Terms, (further
            clarifying the details related to payment services provided to Users through the Klaravia Platform by the Klaravia payment organizations (collectively, &quot;
            <b>Klaravia Payments</b>&quot;)).{" "}
            <b>
              <u>It is your responsibility to familiarize yourself with all policies and procedures currently in place on the Klaravia platform.</u>
            </b>
          </Text>
          <Text fontWeight="bold" mt="20px">
            Homeowner Terms
          </Text>
          <ul>
            <li>
              1.{" "}
              <Link href="/terms-of-service#Searching-for-and-Contracting-with-Installers-on-Klaravia" color="blue">
                Searching for and Contracting with Installers on Klaravia.
              </Link>
            </li>
            <li>
              2.{" "}
              <Link href="/terms-of-service#Homeowner-Use-of-the-Klaravia-Platform-Disclaimers" color="blue">
                Homeowner Use of the Klaravia Platform; Disclaimers.
              </Link>
            </li>
            <li>
              3.{" "}
              <Link href="/terms-of-service#Your-Responsibilities-and-Assumption-of-Risk" color="blue">
                Your Responsibilities and Assumption of Risk.
              </Link>
            </li>
          </ul>

          <Text fontWeight="bold" mt="20px">
            Installer Terms
          </Text>
          <ul>
            <li>
              4.{" "}
              <Link href="/terms-of-service#Providing-Solar-Installation-Services-through-Klaravia" color="blue">
                Providing Solar Installation Services through Klaravia.
              </Link>
            </li>
            <li>
              5.{" "}
              <Link href="/terms-of-service#Managing-Your-Installer-Listing" color="blue">
                Managing Your Installer Listing.
              </Link>
            </li>
            <li>
              6.{" "}
              <Link href="/terms-of-service#Installer-Use-of-the-Klaravia-Platform" color="blue">
                Installer Use of the Klaravia Platform.
              </Link>
            </li>
            <li>
              7.{" "}
              <Link href="/terms-of-service#Taxes" color="blue">
                Taxes.
              </Link>
            </li>
          </ul>

          <Text fontWeight="bold" mt="20px">
            General Terms
          </Text>
          <ul>
            <li>
              8.{" "}
              <Link href="/terms-of-service#Reviews" color="blue">
                Reviews.
              </Link>
            </li>
            <li>
              9.{" "}
              <Link href="/terms-of-service#Content" color="blue">
                Content.
              </Link>
            </li>
            <li>
              10.{" "}
              <Link href="/terms-of-service#Payments-and-Fees" color="blue">
                Payments and Fees.
              </Link>
            </li>
            <li>
              11.{" "}
              <Link href="/terms-of-service#Klaravia-Platform-Rules" color="blue">
                Klaravia Platform Rules.
              </Link>
            </li>
            <li>
              12.{" "}
              <Link href="/terms-of-service#Termination-Suspension-and-other-Measures" color="blue">
                Termination.
              </Link>
            </li>
            <li>
              13.{" "}
              <Link href="/terms-of-service#Modification" color="blue">
                Modification.
              </Link>
            </li>
            <li>
              14.{" "}
              <Link href="/terms-of-service#Resolving-Complaints-and-Damage-Claims" color="blue">
                Resolving Complaints and Damage Claims.
              </Link>
            </li>
            <li>
              15.{" "}
              <Link href="/terms-of-service#Klaravias-Role" color="blue">
                Klaravia’s Role.
              </Link>
            </li>
            <li>
              16.{" "}
              <Link href="/terms-of-service#User-Accounts" color="blue">
                User Accounts.
              </Link>
            </li>
            <li>
              17.{" "}
              <Link href="/terms-of-service#Disclaimer-of-Warranties" color="blue">
                Disclaimer of Warranties.
              </Link>
            </li>
            <li>
              18.{" "}
              <Link href="/terms-of-service#Limitations-on-Liability" color="blue">
                Limitations on Liability.
              </Link>
            </li>
            <li>
              19.{" "}
              <Link href="/terms-of-service#Indemnification" color="blue">
                Indemnification.
              </Link>
            </li>
            <li>
              20.{" "}
              <Link href="/terms-of-service#Governing-Law-and-Venue" color="blue">
                Governing Law and Venue.
              </Link>
            </li>
            <li>
              21.{" "}
              <Link href="/terms-of-service#Dispute-Resolution-and-Arbitration-Agreement" color="blue">
                Dispute Resolution and Arbitration Agreement.
              </Link>
            </li>
            <li>
              22.{" "}
              <Link href="/terms-of-service#Miscellaneous" color="blue">
                Miscellaneous.
              </Link>
            </li>
          </ul>

          <Text w="full" textAlign="center" fontSize={headerFontSize} textDecoration="underline" fontWeight={600} mb="20px" mt="40px" id="Homeowner-Terms">
            Homeowner Terms
          </Text>
          <Text fontWeight="bold" id="Searching-for-and-Contracting-with-Installers-on-Klaravia">
            1. <u>Searching for and Contracting with Installers on Klaravia.</u>
          </Text>
          <Text>
            1.1. <u>Searching</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            By creating a Klaravia Platform account (an “<b>Account</b>”) you can search for specific Installers who fit your needs by using criteria and filters like your Home
            address, price range, dates SIS are requested, and more. Search results are based on their relevance to your search and other criteria. Relevance considers factors like
            price, availability, Installer reviews and customer service ratings, completion percentage, cancellation history, popularity, Installer requirements, and more.
          </Text>
          <Text fontSize={bodyFontSize}>
            By providing your Home address on the Klaravia Platform, we can display designs through Google API and EagleView, each a third-party service provider, which show how
            the solar panels you want put on your Home could potentially be installed.
          </Text>
          <Text fontSize={bodyFontSize} fontWeight="bold">
            KLARAVIA NEITHER REPRESENTS NOR WARRANTS THAT ANY SUCH DESIGN PREPARED THROUGH GOOGLE API’S OR EAGLEVIEW’S DESIGN SOFTWARE CAN BE IMPLEMENTED IN REAL LIFE AT YOUR HOME.
            THE MATERIALIZATION OF ANY DESIGN VIA SIS IS ALWAYS SUBJECT TO ONE OR MORE IN-PERSON SITE VISITS WITH AN INSTALLER, UNFORESEEABLE CIRCUMSTANCES, AND MORE.
          </Text>
          <Text fontSize={bodyFontSize} fontWeight="bold">
            NO PRICE QUOTED IN CONNECTION WITH ANY DESIGN ON THE KLARAVIA PLATFORM SHALL BE CONSIDERED FINAL OR BINDING ON ANY PARTY UNTIL AGREED TO IN AN IHA (AS SUCH TERM IS
            DEFINED BELOW).
          </Text>
          <Text fontSize={bodyFontSize} fontWeight="bold">
            KLARAVIA ASSUMES NO RESPONSIBILITY OR LIABILITY FOR ANY ERRORS OR OMISSIONS, OR THE VALUATION LISTED IN THE PRESENTATION OF SUCH DESIGN PROVIDED BY GOOGLE API,
            EAGLEVIEW, OR OTHER THIRD-PARTY SERVICE PROVIDERS ON THE KLARAVIA PLATFORM.
          </Text>
          <Text>
            1.2. <u>Contracting with Installers</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            When you agree to contract with a specific Installer through Klaravia, you agree to pay all charges due, in accordance with Section 10, herein.
          </Text>
          <Text fontSize={bodyFontSize}>
            After contacting an Installer who you want to provide SIS for your Home, and who wants to provide you such SIS, you will receive a notification via email that the
            Installer has shared its services agreement (“<b>Installer-Homeowner Agreement</b>” or “<b>IHA</b>”) with you, and you will be prompted to make an Account if you have
            not already made one. Following the execution of the Installer-Homeowner Agreement, a relationship is formed directly between you and the Installer, and you will be
            bound by the terms of such IHA.{" "}
            <b>
              <u>We are not a party to the IHA and are not bound by the terms of such Agreement.</u>
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            The complete terms of your contract for SIS include and incorporate these Terms and the terms in the IHA, including without limitation, the cancellation policy and any
            other rules, standards, policies, or requirements identified on our Klaravia Platform, those terms included in the Installer Listing, and any terms identified during
            checkout that apply to your Homeowner-Installer Agreement.{" "}
            <b>
              <u>
                It is your responsibility to read and understand these terms of the contract for SIS, including these Terms, which include all rules, standards, policies, and
                requirements; and all terms of the Installer-Homeowner Agreement prior to executing such IHA and prior to checking out.
              </u>
            </b>
          </Text>
          <Text>
            1.3. <u>Hierarchy of Terms; Precedence</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            If the terms provided in any IHA cause any Homeowner or Installer to be in conflict with these Terms or other Klaravia Platform policies now in effect or hereinafter
            created, you covenant and agree to draw such conflict to our attention immediately after discovering such conflict. In the event of a conflict between these Terms,
            other Klaravia Platform policies now in effect or hereinafter created, and the IHA, the following hierarchy shall apply, with the terms described in (1) being effective
            over those described in (2), and so forth:
          </Text>
          <Text fontSize={bodyFontSize}>(1) These Terms;</Text>
          <Text fontSize={bodyFontSize}>(2) Klaravia Platform policies now in effect or hereinafter created;</Text>
          <Text fontSize={bodyFontSize}>(3) Terms and conditions passed down from these Terms to an applicable IHA between the Homeowner and Installer*; and</Text>
          <Text fontSize={bodyFontSize}>(4) Other terms and conditions provided for in an applicable IHA;</Text>
          <Text fontSize={bodyFontSize}>
            <i>
              *In the event one or more Klaravia Platform policies are created or updated, and the creation or update causes such policy’s terms to conflict with one or more other
              Klaravia Platform policies, the policy most recently updated shall prevail; unless one or more policies do not comply with applicable laws, while only one policy
              does, then such policy that complies with applicable laws shall prevail.
            </i>
          </Text>
          <Text fontWeight="bold" mt="20px" id="Homeowner-Use-of-the-Klaravia-Platform-Disclaimers">
            2. <u>Homeowner Use of the Klaravia Platform; Disclaimers.</u>
          </Text>
          <Text>
            2.1. <u>Permitted Use of the Klaravia Platform (Without an Account)</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            If you do not wish to make an Account, you can still access and use the educational information and all Content (as such term is defined in Section 9) made available on
            the blog and elsewhere on the Klaravia Platform, subject to these Terms, and any other applicable policies, rules, or requirements pertaining to your access and use of
            the Klaravia Platform, and the information you provide and disclose on it.
          </Text>
          <Text fontSize={bodyFontSize}>
            Further, by inputting your Home address, the Klaravia Platform, through Google API, can provide you with a simple design of what your Home may look like after agreeing
            to work with an Installer for SIS. By providing your home address, you acknowledge that Klaravia may retain this information for internal use, including but not limited
            to creating your solar design. Additionally, Klaravia reserves the right to use, share, or sell this data in accordance with our Privacy Policy and applicable laws.
          </Text>
          <Text>
            2.2. <u>Permitted Use of the Klaravia Platform (With an Account)</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            If you create an Account on the Klaravia Platform, you can fully utilize the search functionality described in Section 1.1 to connect with specific Installers, and gain
            access to other benefits such as exclusive discount codes, our customer newsletter, and more.
          </Text>
          <Text>
            2.3. <u>Privacy Notice; Use of Private Information and PII</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Following the creation of any Account, your disclosure of any Personally Identifiable Information (“<b>PII</b>”) on the Klaravia Platform, including but not limited to
            your full name, Home address, mailing address, phone number, email address, billing address, and financial information, is subject to the privacy standards,
            restrictions, protections, and rules discussed in these Terms, and those described in other Klaravia Platform policies now in effect or hereinafter created.
          </Text>
          <Text fontSize={bodyFontSize}>
            Information you provide, including PII, is used for the purposes of providing the services the Klaravia Platform has to offer, including the following:
          </Text>
          <UnorderedList>
            <ListItem>Creating and maintaining an Account;</ListItem>
            <ListItem>Communicating sales, discounts, and promotions;</ListItem>
            <ListItem>Contacting you regarding updates to the policies on the Klaravia Platform;</ListItem>
            <ListItem>Making Installer SIS available to you/Completing SIS transactions with Installers;</ListItem>
            <ListItem>Providing ads that are relevant to while you visit;</ListItem>
            <ListItem>Evaluating Homeowner engagement analytics;</ListItem>
            <ListItem>Ensuring the security and confidentiality of your information by implementing industry-standard security measures;</ListItem>
            <ListItem>
              Sharing relevant data with trusted third-party service providers and Installers as necessary to facilitate services, subject to applicable laws and agreements to
              which we are a party;
            </ListItem>
            <ListItem>
              Communicating with you to obtain your explicit consent for certain uses of data, such as marketing communications or sharing information with third parties for direct
              marketing purposes;
            </ListItem>
            <ListItem>Personalizing and improving your experience on the Klaravia Platform, including through data analysis, research, and user feedback;</ListItem>
            <ListItem>Detecting, preventing, and responding to fraud, abuse, security incidents, and other harmful activity;</ListItem>
            <ListItem>Complying with applicable laws, regulations, and legal requests related to the services provided through the Klaravia Platform.</ListItem>
          </UnorderedList>
          <Text fontSize={bodyFontSize}>
            We protect your information by ensuring that all Account data, including PII, is encrypted and protected against outside access. However, your disclosure of such
            information through the Klaravia Platform could nevertheless make you susceptible to breach, either through the Klaravia Platform or through a third-party provider’s
            use of that data. For more information, see Section 22.5.
          </Text>
          <Text fontSize={bodyFontSize}>
            We do not gather your sensitive PII, such as your SSN, driver’s license or passport number, ethnicity, race, religion, health metrics, criminal background information,
            etc.
          </Text>
          <Text>
            2.4. <u>DISCLAIMER ON THIRD-PARTY USE AND PROTECTION OF PII</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            KLARAVIA NEITHER REPRESENTS NOR WARRANTS THAT THE THIRD-PARTY PROCESSING OR OTHER USE OF YOUR PII AND OTHER INFORMATION WILL MEET THE MINIMUM STANDARDS REQUIRED BY THE
            CALIFORNIA CONSUMER PRIVACY ACT (“<b>CCPA</b>”), THE EUROPEAN UNION GENERAL DATA PROTECTION REGULATION (“<b>GDPR</b>”), APPLICABLE STATE OR FEDERAL LAWS, OR OTHER RULES
            AND REGULATIONS RELATED TO THE PROTECTION, USE, AND MISUSE OF PII (“<b>PRIVACY LAWS</b>”). TO THE EXTENT PERMITTED BY LAW, WE DISCLAIM ALL LIABILITY RELATED TO OR
            ARISING OUT OF ANY THIRD PARTY’S NON-COMPLIANCE WITH SUCH PRIVACY LAWS.
          </Text>
          <Text>
            2.5. <u>Cancellations, Reservation Issues, and Refunds</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            In general if you cancel SIS with an Installer, the amount refunded to you is determined by the Installer&#39;s cancellation policy or relevant provision(s) in the IHA.
            But in certain situations, parts of these Terms or other policies on the Klaravia Platform now in effect or later created may determine what refund, if any, you
            receive.
          </Text>
          <Text fontSize={bodyFontSize}>
            If something outside your control forces you to cancel SIS with an Installer, you may communicate with Klaravia about your situation within five (5) days of the when
            the outside forces causing you to cancel began. In such event, a representative of Klaravia will determine, in his/her/their sole discretion and with or without input
            from the Installer, whether you are eligible for a partial or full refund under these Terms or other Klaravia Platform policies now in effect or hereinafter created.
          </Text>
          <Text fontSize={bodyFontSize}>
            If the Installer cancels SIS under an IHA, you may be eligible for a partial or full rebate, or the reapplication of your funds to SIS with another Installer. Such
            determination shall be subject to these Terms, other Klaravia Platform policies now in effect or hereinafter created, the terms and conditions of the IHA with the first
            Installer (if applicable), and the terms and conditions of the IHA with such second Installer (if applicable).
          </Text>
          <Text>
            2.6. <u>Installer-Homeowner Agreement Modifications</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Only Homeowners and Installers are responsible for any modifications they agree to make to the IHA or related documents via the Klaravia Platform or offline (“
            <b>IHA Modificiations</b>”), and Homeowner agrees to pay any additional amounts, fees, or taxes associated with any such IHA Modifications to Klaravia via Klaravia
            Payments.
          </Text>
          <Text fontSize={bodyFontSize} fontWeight="bold">
            AS KLARAVIA IS NOT A PARTY TO ANY IHA, IHA MODIFICATIONS DO NOT NEED TO BE CLEARED WITH KLARAVIA. HOWEVER, ANY IHA MODIFICATION SHALL BE DEEMED NULL AND VOID IF SUCH
            IHA MODIFICATION PREVENTS THE ENFORCEMENT OF ANY KLARAVIA, HOMEOWNER, OR INSTALLER RIGHT OR OBLIGATION UNDER THESE TERMS, OR OTHERWISE ALTERS ANY REPRESENTATION,
            WARRANTY, COVENANT, OBLIGATION, LIMITATION, RESTRICTION, OR OTHER PROVISION IN THESE TERMS OR OTHER KLARAVIA PLATFORM POLICY NOW IN EFFECT OR HEREINAFTER CREATED.
          </Text>
          <Text mt="20px" id="Your-Responsibilities-and-Assumption-of-Risk">
            <b>
              3. <u>Your Responsibilities and Assumption of Risk</u>
            </b>
            .
          </Text>
          <Text>
            3.1. <u>Your Responsibilities</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            You understand that the Klaravia Platform is created to facilitate communications between Homeowners and Installers for the purpose of transacting Solar Installation
            Services.
          </Text>
          <Text fontSize={bodyFontSize}>
            Prior to transacting with any Installer for SIS, it is your responsibility to use the Klaravia Platform in its intended way and for the permitted purposes described in
            Sections 2.1 and 2.2, respectively, as either applies or both sections apply to you.
          </Text>
          <Text fontSize={bodyFontSize}>
            After executing an Installer’s IHA to have such Installer perform SIS and checking out through Klaravia Payments, you shall continue to abide by these Terms, any
            applicable policies included on the Klaravia Platform now posted or hereinafter created, and follow the terms and conditions described in the IHA you signed with the
            Installer.
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              <u>
                Noncompliance with the terms of the IHA, whether such terms are Passthrough Obligations (as defined in Section 4.4) or otherwise, shall be considered a material
                breach of these Terms. In such event, we may attempt to remediate such breach and utilize all or any applicable rights or remedies made available to us in these
                Terms, any other policy now or later posted to and made effective on the Klaravia Platform, and those available to us at law and at equity.
              </u>
            </b>
          </Text>
          <Text>
            3.2. <u>YOUR ASSUMPTION OF RISK</u>.
          </Text>
          <Text fontSize={bodyFontSize} fontWeight="bold">
            YOU ACKNOWLEDGE THAT MANY ACTIVITIES CARRY INHERENT RISKS AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU ASSUME THE ENTIRE RISK ARISING OUT OF
            YOUR ACCESS TO AND USE OF THE KLARAVIA PLATFORM AND ANY SOLAR INSTALLATION SERVICES PROFFERED ON IT, YOUR USE OF ANY INSTALLER FOR SIS OR OTHER SERVICES, OR ANY OTHER
            INTERACTION YOU HAVE WITH OTHER USERS OR INSTALLERS, WHETHER IN PERSON OR ONLINE.
          </Text>
          <Text fontSize={bodyFontSize} fontWeight="bold">
            ALTHOUGH INSTALLERS PROVIDE INSTALLER LISTINGS TO THE KLARAVIA PLATFORM, IT IS YOUR RESPONSIBILITY TO INVESTIGATE AN INSTALLER SERVICE TO DETERMINE WHETHER IT IS
            SUITABLE FOR YOU. FOR EXAMPLE, SOLAR INSTALLATION SERVICES MAY CARRY CERTAIN RISKS LIKE DESTRUCTION OF PROPERTY, DISPLACEMENT FORM YOUR HOME, BODILY INJURY, DISABILITY,
            OR DEATH, AND YOU FREELY AND WILLFULLY ASSUME THOSE RISKS BY CHOOSING TO PARTICIPATE IN ANY SOLAR INSTALLATION SERVICES CONTEMPLATED UNDER THESE TERMS AND THE POLICIES
            ON THE KLARAVIA PLATFORM NOW IN EFFECT OR HEREINAFTER CREATED.
          </Text>
          <Text w="full" textAlign="center" fontSize={headerFontSize} textDecoration="underline" fontWeight={600} mb="20px" mt="40px">
            Installer Terms
          </Text>
          <Text mt="20px" id="Providing-Solar-Installation-Services-through-Klaravia">
            <b>
              4. <u>Providing Solar Installation Services through Klaravia</u>
            </b>
            .
          </Text>
          <Text>
            4.1. <u>Installer Listing and Contracting with Homeowners</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            As an Installer, Klaravia offers you the right to use the Klaravia Platform in accordance with these Terms to offer your SIS to the Homeowners who create Accounts on
            the Klaravia Platform. As an Installer, you will be subject to our standard vetting practices, and, if approved by us to offer SIS on the Klaravia Platform, you will be
            required to create an Installer Listing to advertise your SIS to Homeowners.
          </Text>
          <Text>
            4.2. <u>Contracting with Homeowners</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            When you and the Homeowner (or, if applicable, just the Homeowner) sign your IHA, you are entering into a contract directly with the Homeowner and are responsible for
            delivering the SIS under the terms identified therein, and subject to these Terms and any policies on the Klaravia Platform. You also agree to pay applicable fees like
            Klaravia’s service fee (and applicable taxes) for each SIS transaction, as applicable.
          </Text>
          <Text fontSize={bodyFontSize}>
            Any terms or conditions that you include in any IHA with Homeowners must: (i) be consistent with these Terms, any Klaravia Platform policies now in effect or
            hereinafter created, and the information provided in your Installer Listing (and shall not contravene, limit, or restrict any right granted to Klaravia under such Terms
            or policies); (ii) include the specific and general Passthrough Obligations identified in Section 4.4.; and (iii) be prominently disclosed in your Installer Listing
            description.
          </Text>
          <Text>
            4.3. <u>Independence of Installers</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Your relationship with Klaravia is that of an independent individual or entity and not an employee, agent, joint venturer, or partner of Klaravia, except that Klaravia
            Payments acts as a payment collection agent as described in the Payments Terms. Klaravia does not direct or control your Installer Service, and you understand that you
            have complete discretion whether and when to provide Solar Installation Services, and at what price and on what terms to offer them.
          </Text>
          <Text>
            4.4. <u>Passthrough Obligations</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            By agreeing to have your SIS listed on the Klaravia Platform, you covenant and agree to include, verbatim or in a substantially similar manner, the following provisions
            in your IHA with any Homeowner for whom you to perform such SIS (the “<b>Passthrough Obligations</b>”):
          </Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <Text fontSize={bodyFontSize}>
              <i>Article</i> #: <b>Klaravia Passthrough Obligations</b>.
            </Text>
            <Text>
              #.1. <u>Klaravia Installer and Homeowner Terms of Service Definitions</u>. For the purposes of this Section, all capitalized terms shall have the meanings defined in
              the Klaravia Installer and Homeowner Terms of Service.
            </Text>
            <Text>
              #.2. <u>Passthrough Obligations</u>. The provisions of this Article # shall be known as and be considered, with respect to the Terms and the policies now in effect or
              hereinafter posted to the Klaravia Platform as “<b>Passthrough Obligations</b>”.
            </Text>
            <Text>
              #.3. <u>Dispute Resolution and Applicable Law</u>. The terms of this IHA shall be governed by and construed in accordance with the laws of the State of Missouri,
              without regard to its conflicts of law principles. Any dispute relating to or arising out of this IHA shall be and shall continue to be, unless otherwise restricted
              by law, arbitrated in accordance with the Terms or other policies on the Klaravia Platform now in effect or hereinafter created.
            </Text>
            <Text>
              #.4. <u>Quality of Service</u>. Installer covenants and agrees that it will maintain at least the same quality of service that caused Klaravia to permit its Installer
              Listing to be included on the Klaravia Platform, and that it will perform any SIS contemplated hereunder in a good and workmanlike manner, in accordance with all
              current industry standards. If Homeowner is unsatisfied with Installer’s execution of its SIS, then by providing notice to Installer in accordance with the notice
              requirements of this IHA, Homeowner may request that Klaravia assess an audit of such SIS, so long as Installer is given a fifteen (15) day cure period to repair,
              fix, or prepare to repair or fix any defects identified by Homeowner in such notice.
            </Text>
            <Text>
              #.5. <u>Disclaimers</u>. The parties represent and warrant that they are aware of and have read all disclaimers, warranties, and guarantees described in the Terms and
              other policies on the Klaravia Platform now in effect, and will apprise themselves of those disclaimers, warranties, and guarantees described in policies provided on
              the Klaravia Platform that are hereinafter created.
            </Text>
            <Text>
              #.6. <u>Intellectual Property Rights</u>. The parties understand and acknowledge that all intellectual property provided to them by Klaravia may be used only in
              accordance with and subject to the limitations and restrictions described under the Terms and other policies on the Klaravia Platform now in effect or hereinafter
              created.
            </Text>
            <Text>
              #.7. <u>Confidentiality and Data Protection</u>. Installer shall maintain all Confidential Information made available to it while providing SIS and through the
              Klaravia Platform, including Homeowner PII, with at least the same level of care as identified in the Terms and other policies on the Klaravia Platform now in effect
              and hereinafter created, and a heightened level of care for any sensitive personal information the Homeowner provides to it. Further, Installer shall protect
              Homeowner’s Confidential Information, including its PII and sensitive personal information, in accordance with all current and applicable Privacy Laws and data
              protection laws, rules and regulations.
            </Text>
            <Text>
              #.8. <u>Validity of and Consistency with Termination Rights</u>. Unless otherwise permitted at law, any right to terminate this IHA contemplated hereunder shall,
              before becoming effective, comply with the terminating party’s termination obligations described in the Terms or other policies on the Klaravia Platform then in
              effect.
            </Text>
            <Text>
              #.9. <u>Non-Solicitation from Klaravia</u>. Installer covenants and agrees not to solicit Homeowner from Klaravia or the Klaravia Platform for the purposes of
              performing SIS or for any other reason that would circumvent Installer’s obligations under the Terms while this IHA is in effect. Similarly, if Homeowner cancels this
              IHA prior to the completion of the SIS, Homeowner covenants and agrees not to hire Installer for a period of one (1) year, and Installer agrees not to perform SIS for
              Homeowner for a period of one (1) year.
            </Text>
            <Text>
              #.10. <u>Noncompliance with Passthrough Obligations</u>. If one party to this IHA is in breach of these obligations and such breach comes to the attention of
              Klaravia, the other party covenants and agrees to do all that is reasonably necessary, including the execution of written instruments, if requested, to assist
              Klaravia in the prosecution of any relevant claim against the first party.
            </Text>
          </VStack>
          <Text fontSize={bodyFontSize}>
            Further, by agreeing to have your SIS listed on the Klaravia Platform, you covenant and agree to cover the following general provisions in your IHA with any Homeowner
            for whom you to perform such SIS:
          </Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <UnorderedList>
              <ListItem>A provision ensuring that the IHA will comply with all applicable laws and regulations.</ListItem>
              <ListItem>A provision obliging you to protect, indemnify, and hold Klaravia harmless from and against third party claims.</ListItem>
              <ListItem>A provision describing when and how notice shall be given and when such notice is deemed delivered.</ListItem>
              <ListItem>A provision describing what customer support you will provide to the Homeowner, and when it is appropriate to request such customer support.</ListItem>
              <ListItem>
                A limitation of liability provision that is now and will remain consistent with or stricter than those described under the Terms and other policies on the Klaravia
                Platform now in effect or hereinafter created.
              </ListItem>
            </UnorderedList>
          </VStack>
          <Text mt="20px" id="Managing-Your-Installer-Listing">
            <b>
              5. <u>Managing Your Installer Listing</u>
            </b>
            .
          </Text>
          <Text>
            5.1. <u>Creating and Managing Your Listing</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Your Installer Listing provides basic and accurate information to Homeowners, including but not limited to your business’ name, your business’ contact information, a
            link to your Yelp page and/or other online rating systems, your standard red line/kWh pricing, a review-only copy of your standard IHA, and more.
          </Text>
          <Text fontSize={bodyFontSize}>
            After a Homeowner executes an IHA with you for SIS, such Homeowner will be directed to check out through Klaravia Payments, where he/she/they will provide the initial
            payment, pursuant to Section 10.1.
          </Text>
          <Text fontSize={bodyFontSize}>
            You are responsible for obtaining appropriate insurance for your Solar Installation Services. Further, it is your responsibility to ensure that all equipment, workers,
            tools, and other materials and labor required in the execution of SIS are covered under your own insurance, warranties, policies, etcetera. Following the execution of
            an IHA with a Homeowner, you agree to handle all questions brought by such Homeowner, manage any warranty claims or complaints brought by such Homeowner, and
            settle/resolve any such issues with the Homeowner without involving Klaravia.
          </Text>
          <Text>
            5.2. <u>Know Your Legal Obligations</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            You are responsible for understanding and complying with any laws, rules, regulations, and contracts with third parties that apply to your Solar Installation Services.
            Some jurisdictions require Installers to register, get a permit, or obtain a license before providing certain Solar Installation Services. Check your local rules to
            learn what rules apply to Solar Installation Services where you plan to offer them.{" "}
            <b>
              <u>
                The information we provide regarding legal requirements is for informational purposes only and you should independently confirm your obligations. You are
                responsible for handling and using personal data and PII of Homeowners and others in compliance with applicable Privacy Laws, these Terms, and other policies now
                posted to the Klaravia Platform or hereinafter made effective.
              </u>
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>If you have questions about how local laws apply to you, you should seek independent legal advice.</Text>
          <Text>
            5.3. <u>Search Results</u>.
          </Text>
          <Text fontSize={bodyFontSize}>The ranking of Listings in search results on the Klaravia Platform depends on a variety of factors, including these main parameters:</Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <UnorderedList>
              <ListItem>Installer reviews;</ListItem>
              <ListItem>Installer pricing;</ListItem>
              <ListItem>Typical installation turnaround time;</ListItem>
              <ListItem>Service areas covered;</ListItem>
              <ListItem>And more.</ListItem>
            </UnorderedList>
          </VStack>
          <Text fontSize={bodyFontSize}>
            Klaravia may allow certain Installers to promote their Installer Listings in search or elsewhere on the Klaravia Platform by paying an additional fee or for other
            consideration.
          </Text>
          <Text>
            5.4. <u>Your Responsibilities</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            You are responsible and liable for your own acts and omissions and are also responsible for the acts and omissions of anyone you allow to participate in providing your
            Solar Installation Services. You are responsible for setting your price and establishing rules and requirements for your Installer Listing and the terms in your IHA.
            You are also responsible for ensuring the SIS you provide are now and will continue to be provided in a good and workmanlike manner, in accordance with industry
            standards.
          </Text>
          <Text fontSize={bodyFontSize}>
            You must describe any and all fees and charges in your Installer Listing and/or IHA and may not collect any additional fees or charges outside the Klaravia Platform.{" "}
            <b>
              <u>
                Do not encourage Homeowners to create third- party accounts, submit reviews, provide their contact information, or take other actions outside the Klaravia Platform
                in violation of these rules and regulations.
              </u>
            </b>
          </Text>
          <Text>
            5.5. <u>Installing with Subcontractors, as a Team, or as an Organization</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            If you work with a co-Installer, subcontractors, or provided SIS as part of a team, business, or other organization, you are responsible and liable as an Installer
            under these Terms for the acts and omissions of each entity, individual, subcontractor, who participates in providing SIS, and you are responsible for informing
            personnel engaged by you to deliver any SIS of your obligations under these Terms.
          </Text>
          <Text fontSize={bodyFontSize}>
            If you accept terms or enter into contracts with third parties, you represent and warrant that you are authorized to enter into contracts for and bind your team,
            business, or other organization, and that each entity you use is in good standing under the laws of the place where it is established. If you perform other functions,
            you represent and warrant that you are authorized to perform those functions. If you instruct Klaravia to transfer a portion of your payout to a co-Installer,
            subcontractor, or other Installers, or send payments to someone else, you must be authorized to do so and are responsible and liable for the payment amounts and
            accuracy of any payout information you provide.
          </Text>
          <Text>
            5.6. <u>YOUR ASSUMPTION OF RISK</u>.
          </Text>
          <Text fontSize={bodyFontSize} fontWeight="bold">
            YOU ACKNOWLEDGE THAT SIS CARRIES INHERENT RISKS AND AGREE AND COVENANT TO ASSUME THE ENTIRE RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE KLARAVIA PLATFORM,
            OFFERING SOLAR INSTALLATION SERVICES, AND ANY INTERACTION YOU HAVE WITH OTHER USERS WHETHER IN PERSON OR ONLINE. YOU AGREE THAT YOU HAVE HAD THE OPPORTUNITY TO
            INVESTIGATE THE KLARAVIA PLATFORM AND ANY LAWS, RULES, REGULATIONS, OR OBLIGATIONS THAT MAY BE APPLICABLE TO YOUR LISTINGS OR SOLAR INSTALLATION SERVICES AND THAT YOU
            ARE NOT RELYING UPON ANY STATEMENT OF LAW MADE BY KLARAVIA.
          </Text>
          <Text fontSize={bodyFontSize} fontWeight="bold">
            FURTHER, KLARAVIA MAKES NO GUARANTEES AND DISCLAIMS ANY WARRANTIES RELATED TO THE QUALITY OR VIABILITY OF ANY ROOF, LOT, YARD, OR FACILITY WHERE SIS ARE TO BE PERFORMED
            ON BEHALF OF ANY HOMEOWNER, AS WELL AS THE GRANT OF ANY MUNICIPAL OR OTHER GOVERNMENT PERMIT AND/OR LICENSES REQUIRED TO PERFORM SUCH SIS.
          </Text>
          <Text mt="20px" id="Installer-Use-of-the-Klaravia-Platform">
            <b>
              6. <u>Installer Use of the Klaravia Platform</u>
            </b>
            .
          </Text>
          <Text>
            6.1. <u>Cancellations of SIS</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            In the event a Homeowner cancels SIS after the initial payment towards the Total Price (discussed in further detail in Section 10), Installer will not look to Klaravia
            to recover the payment of future obligations beyond what was initially collected.
          </Text>
          <Text fontSize={bodyFontSize}>
            In general, if a Homeowner cancels a Reservation, the amount paid to you is determined by the cancellation policy that applies to that Reservation. As an Installer, you
            should not cancel on a Homeowner without a valid reason. If you cancel on a Homeowner without a valid reason, we may impose a cancellation fee and other consequences.
          </Text>
          <Text fontSize={bodyFontSize}>
            If a natural disaster or other force majeure event (as defined in Section 22.7) arises, or SIS services are canceled under Section 12 of these Terms, the amount you are
            paid will be reduced by the amount we refund or otherwise provide to the Homeowner, and by any other reasonable costs we incur as a result of the cancellation. If a
            Homeowner receives a refund after you have already been paid, or the amount of the refund and other costs incurred by Klaravia exceeds your payout, Klaravia (via
            Klaravia Payments) may recover that amount from you, including by deducting the refund against your future payouts.
          </Text>
          <Text fontSize={bodyFontSize}>
            You agree that these Terms and the policies on the Klaravia Platform now in effect or hereinafter created preempt the cancellation policy you set in your IHA (in
            accordance with Section 1.3). If we reasonably expect to provide a refund to a Homeowner under one of these policies, we may delay release of any payout for those SIS
            until a refund decision is made.
          </Text>
          <Text>
            6.2. <u>Booking Modifications.</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Installers and Homeowners are responsible for any Booking Modifications they agree to make via the Klaravia Platform or direct Klaravia to make on their behalf, and
            agree to pay any additional amounts, fees or taxes associated with a Booking Modification.
          </Text>
          <Text mt="20px" id="Taxes">
            <b>
              7. <u>Taxes</u>
            </b>
            .
          </Text>
          <Text>
            7.1. <u>Installer Taxes</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            As an Installer, you are responsible for determining and fulfilling your obligations under applicable laws to report, collect, remit, or include in your price any
            applicable VAT or other indirect taxes, occupancy taxes, tourist, income, or other taxes (&quot;<b>Taxes</b>&quot;).
          </Text>
          <Text>
            7.2. <u>Collection and Remittance by Klaravia</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Although typically covered in an IHA, in jurisdictions where Klaravia facilitates the collection and/or remittance of Taxes on behalf of Installers, you instruct and
            authorize Klaravia to collect Taxes on your behalf, and/or to remit such Taxes to the relevant Tax authority. Any Taxes that are collected and/or remitted by Klaravia
            are identified to Users on their transaction records, as applicable. Klaravia may seek additional amounts from Users (including by deducting such amounts from future
            payouts) when the Taxes collected and/or remitted are insufficient to fully discharge that Users’ tax obligations, and you agree that your sole remedy for Taxes
            collected by Klaravia is a refund from the applicable Tax authority. You acknowledge and agree that we retain the right, with prior notice to affected Users, to cease
            the collection and remittance of Taxes in any jurisdiction for any reason.
          </Text>
          <Text>
            7.3. <u>Tax Information</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            In certain jurisdictions, Tax regulations may require that we collect and/or report Tax information about you, or withhold Taxes from payouts to you, or both. If you
            fail to provide us with documentation that we determine to be sufficient to support any such obligation to withhold Taxes from payouts to you, we may withhold payouts
            up to the amount as required by law, until sufficient documentation is provided. You agree that Klaravia may issue on your behalf invoices or similar documentation for
            your Solar Installation Services to facilitate accurate tax reporting.
          </Text>
          <Text mt="20px" id="Reviews">
            <b>
              8. <u>Reviews</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            After the Installer renders SIS and the panels are turned on, Homeowners will have an opportunity to review their Installer. All reviews must be accurate and may not
            contain any discriminatory, offensive, defamatory, or other language that violates these Terms, other policies on the Klaravia Platform now in effect or hereinafter
            created, or applicable law. Reviews are not verified by Klaravia for accuracy and may be incorrect or misleading.
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              <u>
                Klaravia disclaims any and all warranties that the reviews provided by Homeowners and third parties on the Klaravia Platform are accurate or can be relied upon when
                determining whether to hire any specific Installer. Reviews should be considered at your own discretion.
              </u>
            </b>
          </Text>
          <Text mt="20px" id="Content">
            <b>
              9. <u>Content</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            Parts of the Klaravia Platform enable you to provide feedback, text, binding written agreements, photos, audio, video, information, and other content (“<b>Content</b>
            ”). By providing Content, in whatever form and through whatever means, you grant Klaravia, to the extent permitted by law, a non-exclusive, worldwide, royalty-free,
            perpetual, sub-licensable and transferable license to access, use, store, copy, modify, prepare derivative works of, distribute, publish, transmit, stream, broadcast,
            and otherwise exploit that Content in any manner to provide and/or promote the Klaravia Platform, in any media or platform, now known or hereinafter created, and in
            particular on Internet and social networks.
          </Text>
          <Text fontSize={bodyFontSize}>
            If Content includes PII, such Content will be used for these purposes only if and only to the extent such use complies with applicable Privacy Laws, our Terms, and
            other policies on the Klaravia Platform now in effect or hereinafter created. Where Klaravia pays for the creation of Content or facilitates its creation, Klaravia may
            own that Content, in which case supplemental terms or disclosures will indicate as such.
          </Text>
          <Text fontSize={bodyFontSize}>
            You are solely responsible for all Content that you provide and warrant that you either own such Content or are authorized to grant Klaravia the rights described in
            these Terms and other policies on the Klaravia Platform. You are responsible and liable if any of your Content violates or infringes the intellectual property or
            privacy rights of any third party. Content must comply not, among other things, be discriminatory, obscene, offensive, harassing towards others, deceptive, violent, or
            illegal. You agree that Klaravia may make available services or automated tools to translate Content and that your Content may be translated using such services or
            tools. Klaravia does not guarantee the accuracy or quality of translations and Users are responsible for confirming the accuracy of such translations.
          </Text>
          <Text mt="20px" id="Payments-and-Fees">
            <b>
              10. <u>Payments and Fees</u>
            </b>
            .
          </Text>
          <Text>
            10.1. <u>Payments</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            When you contract with a specific Installer through Klaravia, you agree to pay all charges due to Klaravia and those due to the Installer, including the price
            identified by the Installer in the IHA, applicable fees like Klaravia’s service fee, applicable taxes, and any other items identified during checkout (collectively, “
            <b>Total Price</b>”). You further agree that we, via Klaravia Payments, may charge the payment method you provide in order to collect amounts related to claims brought
            pursuant to Section 14.
          </Text>
          <Text fontSize={bodyFontSize}>
            Klaravia also provides a calculator on the Klaravia Platform that provides SIS estimates and calculates and incorporates government incentives, where applicable, into
            the Total Price.{" "}
            <b>
              <u>
                However, Klaravia disclaims any and all warranties, and in no way guarantees that any Homeowner can collect any one or more government incentives, or that any such
                government incentives are still active and available.
              </u>
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            The Total Price collected by Klaravia includes three (3) payments, which are collected by Klaravia while facilitating the SIS transaction between the parties:
          </Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <Text fontSize={bodyFontSize}>(1) First, Klaravia collects the initial deposit from the Homeowner at checkout through Klaravia Payments.</Text>
            <Text fontSize={bodyFontSize}>(2) Second, Klaravia invoices Homeowner eighty percent (80%) of the remaining cost before the SIS are started.</Text>
            <Text fontSize={bodyFontSize}>(3) Finally, Klaravia invoices Homeowner the remaining twenty percent (20%) of the cost once the system is turned on.</Text>
          </VStack>
          <Text>
            10.2. <u>Fees</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Klaravia may charge fees (and applicable Taxes) to Installers and Homeowners for the right to use the Klaravia Platform. More information about when service fees apply
            and how they are calculated can be found on our Service Fees page. Any applicable fees are disclosed to Homeowners before making a Booking. Except as otherwise provided
            on the Klaravia Platform, service fees are non-refundable. Klaravia reserves the right to change the service fees at any time and will provide Users notice of any fee
            changes before they become effective. Fee changes will not affect bookings made prior to the effective date of the fee change. If you disagree with a fee change you may
            terminate this agreement at any time pursuant to Section 12.2.
          </Text>
          <Text>
            10.3. <u>Use of the Stripe Platform through Klaravia Payments</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Klaravia Payments utilizes Stripe’s payment processing platform in accepting online payments. As such, in addition to Klaravia’s Payment Terms that are now in effect or
            are hereinafter created, your use of any Stripe product may cause you to be subject to Stripe’s Consumer Terms of Service.
          </Text>
          <Text fontSize={bodyFontSize}>
            As of August 29, 2024, Stripe’s Consumer Terms of Service are available at the following link:{" "}
            <Link color="blue" href="https://stripe.com/legal/consumer#link-account-terms">
              https://stripe.com/legal/consumer#link-account-terms
            </Link>
            .
          </Text>
          <Text fontSize={bodyFontSize}>Stripe’s Consumer Terms of Service include, but are not limited to the following terms that apply to you:</Text>
          <Text fontSize={bodyFontSize}>
            10.3.1 <i>Arbitration Agreement.</i> IF YOU ARE LOCATED IN THE UNITED STATES, YOU AGREE TO OUR ARBITRATION AGREEMENT, WHICH REQUIRES YOU TO RESOLVE DISPUTES BETWEEN YOU
            AND STRIPE ON AN INDIVIDUAL BASIS THROUGH ARBITRATION, PROHIBITS YOU FROM MAINTAINING OR PARTICIPATING IN A CLASS ACTION LAWSUIT, WAIVES YOUR RIGHT TO A JURY TRIAL, AND
            LIMITS THE TIME IN WHICH A CLAIM MAY BE BROUGHT.
          </Text>
          <Text fontSize={bodyFontSize}>
            10.3.2 <i>Link E-Sign Disclosure.</i> You agree to the <u>Link E-Sign Disclosure.</u> It provides that we will communicate with you electronically. Your electronic
            agreement has <b>the</b> same effect as if you sign in ink, and you agree to receive notices through our Consumer Services.
          </Text>
          <Text fontSize={bodyFontSize}>
            10.3.3 <i>Privacy Policy.</i> You acknowledge the <u>Privacy Policy.</u> Stripe and the Business User [Klaravia] are independent controllers of personal data collected
            in conjunction with the Consumer Services and will independently and separately determine the purposes and means of its processing of personal data.  We may transfer
            your personal data to countries other than your own country, including the United States. Please read the Privacy Policy carefully to understand how your information is
            collected, used, and shared in connection with these Consumer Services.  Learn more by reviewing <u>Link’s Privacy Center</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            10.3.4 <i>Product-Specific Terms.</i> A Consumer Service may have specific terms that apply when you use that particular Consumer Service. These product-specific Terms
            are listed in the left-hand menu.
          </Text>
          <Text fontSize={bodyFontSize}>
            10.3.5 <i>Acceptable Use Policy.</i> Your use of a Consumer Service is subject to Stripe’s Acceptable Use Policy.
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              KLARAVIA NEITHER REPRESENTS NOR WARRANTS THAT THESE ARE THE ONLY STRIPE PAYMENT TERMS OR STRIPE CONSUMER TERMS TO WHICH YOU ARE BOUND. IT IS YOUR RESPONSIBILITY TO
              REVIEW STRIPE’S TERMS AND CONDITIONS.
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>IF YOU DO NOT UNDERSTAND YOUR OBLIGATIONS UNDER STRIPE’S ABOVE-LISTED OR OTHER CONSUMER OR PAYMENT TERMS, YOU SHOULD SEEK INDEPENDENT LEGAL COUNSEL.</b>
          </Text>
          <Text mt="20px" id="Klaravia-Platform-Rules">
            <b>
              11. <u>Klaravia Platform Rules</u>
            </b>
            .
          </Text>
          <Text>
            11.1. <u>Rules</u>.
          </Text>
          <Text fontSize={bodyFontSize}>You must follow these rules and must not help or induce others to break or circumvent these rules.</Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <UnorderedList>
              <ListItem>Act with integrity and treat others with respect</ListItem>
              <ListItem>Do not lie, misrepresent services, something else, someone, or pretend to be someone else.</ListItem>
              <ListItem>Be polite and respectful when you communicate or interact with others.</ListItem>
              <ListItem>Do not attempt to evade enforcement of these Terms or other policies on the Klaravia Platform now in effect or hereinafter created.</ListItem>
              <ListItem>Do not discriminate against or harass others.</ListItem>
            </UnorderedList>
          </VStack>
          <Text fontSize={bodyFontSize}>Do not scrape, hack, reverse engineer, compromise or impair the Klaravia Platform</Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <UnorderedList>
              <ListItem>
                Do not use bots, crawlers, scrapers, or other automated means to access or collect data or other content from or otherwise interact with the Klaravia Platform.
              </ListItem>
              <ListItem>
                Do not hack, avoid, remove, impair, or otherwise attempt to circumvent any security or technological measure used to protect the Klaravia Platform or Content.
              </ListItem>
              <ListItem>Do not decipher, decompile, disassemble, or reverse engineer any of the software or hardware used to provide the Klaravia Platform.</ListItem>
              <ListItem>Do not take any action that could damage or adversely affect the performance or proper functioning of the Klaravia Platform.</ListItem>
            </UnorderedList>
          </VStack>
          <Text fontSize={bodyFontSize}>Only use the Klaravia Platform as authorized by these Terms or another agreement with us</Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <UnorderedList>
              <ListItem>
                You may only use another User’s personal information as necessary to facilitate a transaction using the Klaravia Platform as authorized by these Terms.
              </ListItem>
              <ListItem>Do not use the Klaravia Platform, our messaging tools, or Users’ personal information to send commercial messages without their express consent.</ListItem>
              <ListItem>
                You may use Content made available through the Klaravia Platform solely for educational purposes, or as necessary to enable your use of the Klaravia Platform as a
                Homeowner or Installer.
              </ListItem>
              <ListItem>
                Do not use Content unless you have permission from the Content owner or the use is authorized by us in these Terms or another agreement you have with us.
              </ListItem>
              <ListItem>
                Do not request, make, or accept a booking of SIS or any payment outside of the Klaravia Platform to avoid paying fees, taxes or for any other reason.
              </ListItem>
              <ListItem>
                Do not require or encourage Homeowners to open an account, leave a review, complete a survey, or otherwise interact, with a third-party website, application or
                service before, during or after the provision of SIS, unless authorized by Klaravia.
              </ListItem>
              <ListItem>
                Do not engage in any practices that are intended to manipulate our search algorithm.
                <VStack w="full" ml="20px" alignItems="flex-start">
                  <ol>
                    <li>- Do not book Solar Installation Services unless you are actually using the Solar Installation Services.</li>
                    <li>
                      - Do not run bots whose function is to manipulate, attack, abuse, sabotage, take advantage of, or otherwise manipulate in a way other than intended the
                      Klaravia Platform’s offerings, including but not limited to its free or paid third-party service provider home design functions.
                    </li>
                  </ol>
                </VStack>
              </ListItem>
            </UnorderedList>
          </VStack>
          <Text fontSize={bodyFontSize}>Honor your legal obligations.</Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <UnorderedList>
              <ListItem>Understand and follow the laws that apply to you, including privacy, data protection, and export laws.</ListItem>
              <ListItem>
                <VStack w="full" ml="20px" alignItems="flex-start">
                  <ol>
                    <li>
                      - If you provide us with someone else’s personal information, you: (i) must do so in compliance with applicable law, (ii) must be authorized to do so, and
                      (iii) authorize us to process that information in accordance with the Klaravia Platform policies and procedures on privacy then in effect.
                    </li>
                    <li>- Read and follow our Terms and other policies on the Klaravia Platform now in effect and hereinafter created.</li>
                  </ol>
                </VStack>
              </ListItem>
              <ListItem>Do not use the name, logo, branding, or trademarks of Klaravia or others without permission.</ListItem>
              <ListItem>
                Do not use or register any domain name, social media handle, trade name, trademark, branding, logo, or other source identifier that is confusingly similar to any
                Klaravia trademarks, logos, or branding.
              </ListItem>
              <ListItem>Do not offer Solar Installation Services that violate the laws or agreements that apply to you.</ListItem>
            </UnorderedList>
          </VStack>
          <Text>
            11.2. <u>Reporting Violations</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            If you believe that a User, Installer Listing, or Content poses an imminent risk of harm to a person or property, you should immediately contact local authorities
            before contacting Klaravia. In addition, if you believe that a User, Installer Listing or Content violates these Terms or our Klaravia Platform policies, you should
            report your concerns to Klaravia. If you reported an issue to local authorities, Klaravia may request a copy of that report. Except as required by law, we are not
            obligated to respond or act in response to any report.
          </Text>
          <Text>
            11.3. <u>Copyright Notifications.</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            If you believe that Content on the Klaravia Platform infringes copyrights or other intellectual property rights, please notify us immediately or as soon as possible via
            email.
          </Text>
          <Text mt="20px" id="Termination-Suspension-and-other-Measures">
            <b>
              12. <u>Termination, Suspension and other Measures</u>
            </b>
            .
          </Text>
          <Text>
            12.1. <u>Term</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            The agreement between you and Klaravia reflected by these Terms is effective when you access the Klaravia Platform (for example, to create an Account) and remains in
            effect until either you or we terminate the agreement in accordance with these Terms.
          </Text>
          <Text>
            12.2. <u>Termination</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            You may terminate this agreement at any time by sending us an email or by deleting your Account and discontinuing all use of the Klaravia Platform thereafter.{" "}
            <b>
              Klaravia may terminate this agreement and your Account for any reason by providing you thirty (30) days’ notice via email or using any other contact information you
              have provided for your account.
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            Klaravia may also terminate these Terms immediately and without notice and stop providing access to the Klaravia Platform if you are in breach of these Terms or the
            policies currently in effect or hereinafter created, you violate applicable laws, or we reasonably believe termination is necessary to protect Klaravia, its Users, or
            third parties. If your account has been inactive for more than two (2) years, we may terminate your account without prior notice.
          </Text>
          <Text>
            12.3. <u>User Violations</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            If (i) you breach these Terms or other policies on the Klaravia Platform now in effect or hereinafter created, (ii) you violate applicable laws, regulations, or
            third-party rights, or (iii) Klaravia believes it is reasonably necessary to protect itself, its Users, or third parties; we may, with or without prior notice:
          </Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <UnorderedList>
              <ListItem>suspend or limit your access to or use of the Klaravia Platform and/or your account;</ListItem>
              <ListItem>suspend, remove, disable access to, or restrict visibility of Installer Listings, reviews, blog posts, or other Content;</ListItem>
              <ListItem>cancel pending or confirmed SIS bookings; or</ListItem>
              <ListItem>suspend or revoke any special status associated with your account.</ListItem>
            </UnorderedList>
          </VStack>
          <Text fontSize={bodyFontSize}>
            For minor violations or where otherwise appropriate, as Klaravia determines in its sole discretion, you will be given notice of any intended measure by Klaravia and an
            opportunity to resolve the issue. If SIS are canceled under this Section, the amount paid to the Installer will be reduced by the amount we refund or otherwise provide
            to the Homeowner, and by any other costs we incur as a result of the cancellation.
          </Text>
          <Text>
            12.4. <u>Legal Mandates</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Klaravia may take any action it determines is reasonably necessary to comply with applicable law, or the order or request of a court, law enforcement, or other
            administrative agency or governmental body, including the measures described above in Section 12.3.
          </Text>
          <Text>
            12.5. <u>Effect of Termination</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            If you are an Installer and terminate your Klaravia account, any confirmed booking(s) for SIS will be automatically canceled, the Homeowners who hired you for SIS will
            receive a full refund, and both Homeowners and Klaravia may pursue all rights and remedies available to them at law and equity. If you terminate your account as a
            Homeowner, any confirmed booking(s) for SIS will be automatically canceled and any refund will depend upon the terms of the IHA.
          </Text>
          <Text fontSize={bodyFontSize}>
            When this agreement has been terminated, you are not entitled to a restoration of your account or any of your Content. If your access to or use of the Klaravia Platform
            has been limited, or your Klaravia account has been suspended, or this agreement has been terminated by us, you may not register a new account or access or use the
            Klaravia Platform through an account of another User.
          </Text>
          <Text>
            12.6. <u>Survival</u>.
          </Text>
          <Text fontSize={bodyFontSize}>Parts of these Terms that by their nature survive termination, will survive the termination of these Terms.</Text>
          <Text mt="20px" id="Modification">
            <b>
              13. <u>Modification</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            Klaravia may modify these Terms at any time. When we make material changes to these Terms, we will post the revised Terms on the Klaravia Platform and update the “Last
            Updated” date at the top of these Terms. We will also provide you with notice of any material changes by email, notifications through the Klaravia Platform, messaging
            service, or any other contact method made available by us and selected by you at least thirty (30) days before the date they become effective. If you disagree with the
            revised Terms, you may terminate this agreement immediately as provided in these Terms. If you do not terminate your agreement before the date the revised Terms become
            effective, your continued access to or use of the Klaravia Platform will constitute acceptance of the revised Terms.
          </Text>
          <Text mt="20px" id="Resolving-Complaints-and-Damage-Claims">
            <b>
              14. <u>Resolving Complaints and Damage Claims</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>If a User provides valid evidence that you or your agent or affiliate have:</Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <ol>
              <li>
                (i) damaged the complaining User’s real or personal property, or real or personal property the complaining User is responsible for, or has an economic interest in;
                or
              </li>
              <li>
                (ii) caused loss of SIS income for Users via the Klaravia Platform or other consequential damages which result directly from the damage caused under (i) above,
              </li>
            </ol>
          </VStack>
          <Text fontSize={bodyFontSize}>
            then the complaining User can notify Klaravia to attempt to remediate the situation. You will be notified of the claim and given an opportunity to respond. If you agree
            to pay, or if the claim is escalated to Klaravia and Klaravia determines in its sole discretion that the claim is valid and you are responsible for the claim, Klaravia,
            via Klaravia Payments, can collect the amount of the claim from you, and you agree to pay the same.
          </Text>
          <Text fontSize={bodyFontSize}>
            You agree that Klaravia may seek to recover from you under any insurance policies you maintain and that Klaravia may also pursue against you any remedies it may have
            available under applicable law, including referral of the matter to a collections agency, and/or pursuit of available causes of action and/or claims against you. You
            agree to cooperate in good faith, provide any information Klaravia requests, execute documents, and take further reasonable action, in connection with Damage Claims,
            User complaints, claims under insurance policies, or other claims related to your provision or use of Solar Installation Services.
          </Text>
          <Text mt="20px" id="Klaravias-Role">
            <b>
              15. <u>Klaravia’s Role</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            We offer you the right to use a platform that enables Homeowners and Installers to publish, offer, search for, and book Solar Installation Services. We work hard to
            ensure our Users have great experiences using Klaravia, but we do not and cannot control the conduct of Homeowners and Installers. You acknowledge that Klaravia (or its
            affiliates) has the right, but does not have any obligation, to monitor the use of the Klaravia Platform and verify information provided by our Users.
          </Text>
          <Text fontSize={bodyFontSize}>
            For example, we may review, disable access to, remove, or edit Content to: (i) operate, secure and improve the Klaravia Platform (including for fraud prevention, risk
            assessment, investigation and customer support purposes); (ii) ensure Users’ compliance with these Terms; (iii) comply with applicable law or the order or requirement
            of a court, law enforcement or other administrative agency or governmental body; (iv) address Content that we determine is harmful or objectionable; (v) take actions
            set out in these Terms or other policies on the Klaravia Platform now in existence or hereinafter provided; and (vi) maintain and enforce any quality or eligibility
            criteria, including by removing Installers and/or Installer Listings that don’t meet quality and eligibility criteria of the standard vetting process.
          </Text>
          <Text fontSize={bodyFontSize}>
            Users agree to cooperate with and assist Klaravia in good faith, and to provide us with such information and take such actions as may be reasonably requested by us with
            respect to any investigation undertaken by us regarding the use or abuse of the Klaravia Platform. Klaravia is not acting as an agent for any User except for where
            Klaravia Payments acts as a collection agent as provided herein.
          </Text>
          <Text mt="20px" id="User-Accounts">
            <b>
              16. <u>User Accounts</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            You must register an Account to access and use many features of the Klaravia Platform. Registration is only permitted (i) as an Installer: for legal entities,
            partnerships and natural persons who are 18 years or older; or (ii) as a Homeowner: for natural persons who are 18 years old or older.
          </Text>
          <Text fontSize={bodyFontSize}>
            You represent and warrant that you are not a person or entity barred from using the Klaravia Platform under the laws of the United States, your place of residence, or
            any other applicable jurisdiction. You must provide accurate, current, and complete information during registration and keep your Account information up-to- date. You
            may not transfer your Account to someone else. You are responsible for maintaining the confidentiality and security of your Account credentials and may not disclose
            your credentials to any third party. You are responsible and liable for activities conducted through your Account and must immediately notify Klaravia if you suspect
            that your credentials have been lost, stolen, or your account is otherwise compromised.
          </Text>
          <Text fontSize={bodyFontSize}>
            If and as permitted by applicable law, we may, but have no obligation to (i) ask you to provide identification or other information, (ii) undertake checks designed to
            help verify your identity or background, (iii) screen you against third-party databases or other sources and request reports from service providers, and (iv) obtain
            reports from public records of criminal convictions or sex offender registrations or their local equivalents.
          </Text>
          <Text mt="20px" id="Disclaimer-of-Warranties">
            <b>
              17. <u>Disclaimer of Warranties</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              In addition to and not in lieu of other disclaimers provided herein and in the other policies on the Klaravia Platform now in effect or hereinafter created, the
              Klaravia Platform and all Content thereon are provided “as is” without warranty of any kind, and Klaravia (or its affiliates) disclaim all warranties, whether express
              or implied.
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              WE MAKE NO REPRESENTATION OR WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, REGARDING OR RELATED TO THE ACCURACY, ADEQUACY, VALIDITY, RELIABILITY, AVAILABILITY, OR
              COMPLETENESS OF ANY CONTENT PROVIDED BY US OR ANY THIRD PARTY ON THE KLARAVIA PLATFORM. WE WAIVE RESPONSIBILITY FOR CLAIMS RELATED TO OR ARISING OUT OF THE CONTENT OR
              ACCURACY, OR OPINIONS EXPRESSED ON OR UNAUTHORIZED USE OF THIRD-PARTY SITES OR INFORMATION MADE AVAILABLE THEREFROM THAT ARE NOW OR MAY IN THE FUTURE BE ACCESSIBLE
              THROUGH THE KLARAVIA PLATFORM VIA HYPERLINK OR OTHER TECHNOLOGICAL MEANS.
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              We do not endorse or warrant the existence, conduct, performance, safety, quality, legality or suitability of any Homeowner, Installer, SIS, Installer Listing, or
              third party.
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>We do not warrant the performance or non-interruption of the Klaravia Platform.</b>
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              We do not warrant that verification, identity, or background checks conducted on Installers and Installer Listings will identify past misconduct or prevent future
              misconduct. Any references to a User or Installer Listing being &quot;verified&quot; (or similar language) indicate only that Klaravia has completed a relevant
              verification or identification process and nothing else.
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              The disclaimers in these Terms apply to the maximum extent permitted by law. If you have statutory rights or warranties Klaravia (or its affiliates) cannot disclaim,
              then the duration of any such statutorily required rights or warranties will be limited to the maximum extent permitted by law.
            </b>
          </Text>
          <Text mt="20px" id="Limitations-on-Liability">
            <b>
              18. <u>Limitations on Liability</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              Neither Klaravia (including its affiliates and personnel) nor any other party involved in creating, producing, or delivering the Klaravia Platform or any Content will
              be liable for any incidental, special, exemplary or consequential damages, including lost profits, loss of data or loss of goodwill, service interruption, computer
              damage or system failure or the cost of substitute products or services, or for any damages for personal or bodily injury or emotional distress arising out of or in
              connection with (i) these Terms, (ii) the use of or inability to use the Klaravia Platform or any Content, (iii) any communications, interactions or meetings you may
              have with someone you interact or meet with through, or as a result of, your use of the Klaravia Platform, or (iv) the booking or provision of Solar Installation
              Services; whether based on warranty, contract, tort (including negligence), product liability or any other legal theory, and whether or not Klaravia has been informed
              of the possibility of such damage, even if a limited remedy set out in these Terms is found to have failed of its essential purpose.
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              Except for our obligation to transmit payments to Installers under these Terms, in no event will Klaravia’s aggregate liability for any claim or dispute arising out
              of or in connection with these Terms, your interaction with any Users, or your use of or inability to use the Klaravia Platform, any Content, or any Installer
              Service, exceed: (A) to Homeowners, the amount you paid for SIS prior to the event giving rise to the liability, (B) to Installers, the amount paid to you as an
              Installer for SIS prior to the event giving rise to the liability, or (C) to anyone else, one hundred U.S. dollars (US$100).
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              These limitations of liability and damages are fundamental elements of the agreement between you and Klaravia. If applicable law does not allow the limitations of
              liability set out in these Terms, the above limitations may not apply to you.
            </b>
          </Text>
          <Text mt="20px" id="Indemnification">
            <b>
              19. <u>Indemnification</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              To the maximum extent permitted by applicable law, you agree to release, defend (at Klaravia’s option), indemnify, and hold Klaravia harmless from and against any
              claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with:
              (i) your breach of these Terms (including any supplemental or additional terms that apply to a product or feature) or other policies on the Klaravia Platform, (ii)
              your improper use of the Klaravia Platform, (iii) your interaction with any User, delivery or receipt of SIS, or any injuries, losses, or damages arising from or
              related thereto (whether compensatory, direct, incidental, consequential or otherwise) of any kind, (iv) your failure, or our failure at your direction, to accurately
              report, collect or remit taxes, or (v) your breach of any laws, regulations or third party rights such as intellectual property or privacy rights.
            </b>
          </Text>
          <Text mt="20px" id="Governing-Law-and-Venue">
            <b>
              20. <u>Governing Law and Venue</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            These Terms shall be construed and interpreted in accordance with the laws of the State of Missouri, without regard to its conflicts of law principles.
          </Text>
          <Text fontSize={bodyFontSize}>
            Judicial proceedings (other than small claims actions) excluded from the arbitration agreement in Section 22 must be brought in state or federal court in St. Louis
            County, Missouri. You and we both consent to venue and personal jurisdiction in St. Louis, Missouri.
          </Text>
          <Text mt="20px" id="Dispute-Resolution-and-Arbitration-Agreement">
            <b>
              21. <u>Dispute Resolution and Arbitration Agreement</u>
            </b>
            .
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              PLEASE READ THE FOLLOWING PARAGRAPHS CAREFULLY BECAUSE THEY PROVIDE THAT YOU AND KLARAVIA AGREE TO RESOLVE ALL DISPUTES BETWEEN US THROUGH BINDING INDIVIDUAL
              ARBITRATION AND INCLUDE A CLASS ACTION WAIVER AND JURY TRIAL WAIVER.
            </b>
          </Text>
          <Text fontSize={bodyFontSize}>This Arbitration Agreement supersedes all prior versions.</Text>
          <Text>
            21.1 <u>Overview of Dispute Resolution Process</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Klaravia is committed to participating in a consumer-friendly dispute resolution process. To that end, these Terms provide for a two-part process for individuals to
            whom this Section 22 applies: (1) an informal negotiation directly with Klaravia, and if necessary (2) a binding arbitration in accordance with the terms of this
            Arbitration Agreement. You and Klaravia each retain the right to seek resolution of the dispute in small claims court as an alternative to arbitration.
          </Text>
          <Text>
            21.2 <u>Agreement to Arbitrate</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            <b>
              You and Klaravia mutually agree that any dispute, claim or controversy arising out of or relating to these Terms or the applicability, breach, termination, validity,
              enforcement or interpretation thereof, or any use of the Klaravia Platform, Solar Installation Services, or any Content (collectively, “Disputes”) will be settled by
              binding arbitration on an individual basis (the “Arbitration Agreement”). If there is a dispute about whether this Arbitration Agreement can be enforced or applies to
              a Dispute, you and Klaravia agree that an arbitrator will decide that issue. For the avoidance of doubt, you and Klaravia agree that any question regarding
              arbitrability and the formation, enforceability, validity, scope, or interpretation of all or part of this Section 22, including any dispute over compliance with the
              Pre- Dispute Notice requirement and a party’s responsibility to pay arbitration fees, shall be resolved exclusively by an arbitrator.
            </b>
          </Text>
          <Text>
            21.3 <u>Arbitrator’s Decision</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            The arbitrator will issue a written decision which shall include the essential findings and conclusions upon which the arbitrator based the award. Judgment on the
            arbitration award may be entered in any court with proper jurisdiction. The arbitrator may award any relief allowed by law or the ADR Rules, but declaratory or
            injunctive relief may be awarded only on an individual basis and only to the extent necessary to provide relief warranted by the claimant’s individual claim.
          </Text>
          <Text>
            21.4 <u>JURY TRIAL WAIVER</u>.
          </Text>
          <Text fontSize={bodyFontSize}>YOU AND KLARAVIA ACKNOWLEDGE AND AGREE THAT BOTH PARTIES ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY AS TO ALL ARBITRABLE DISPUTES.</Text>
          <Text>
            21.5 <u>No Class Actions or Representative Proceedings</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            You and Klaravia acknowledge and agree that, to the fullest extent permitted by law, we are each waiving the right to participate as a plaintiff or class User in any
            purported class action lawsuit, class-wide arbitration, private attorney general action, or any other representative or consolidated proceeding. Unless we agree in
            writing or as provided in this agreement, the arbitrator may not consolidate more than one party’s claims and may not otherwise preside over any form of any class or
            representative proceeding. If there is a final judicial determination that applicable law precludes enforcement of the waiver contained in this paragraph as to any
            claim, cause of action or requested remedy, then that claim, cause of action or requested remedy, and only that claim, cause of action or requested remedy, will be
            severed from this agreement to arbitrate and will be brought in a court of competent jurisdiction. In the event that a claim, cause of action or requested remedy is
            severed pursuant to this paragraph, then you and we agree that the claims, causes of action or requested remedies that are not subject to arbitration will be stayed
            until all arbitrable claims, causes of action and requested remedies are resolved by the arbitrator.
          </Text>
          <Text>
            21.6 <u>Class Action Waiver</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            You and Klaravia acknowledge and agree that the relative benefits and efficiencies of arbitration may be lost when one hundred (100) or more arbitration claims are
            filed within one hundred eighty (180) days which: (1) involve the same or similarly situated parties; (2) are based on the same or similar claims which arise from the
            same or substantially identical transactions, incidents, alleged violations or events requiring the determination of the same or substantially identical questions of
            law or fact; and (3) involve the same or coordinated counsel for the parties (“Class Action”). Accordingly, you and Klaravia agree to waive the right to have any
            Dispute administered, arbitrated, or resolved as part of a Class Action (though Sections 21 and 22, as applicable, of these Terms will continue to apply to the
            Dispute). In case of a dispute, the appointed arbitrator for the first matter instituted within a set of claims identified by either party shall decide whether those
            claims are part of a Class Action. If no arbitrator has yet been appointed, an arbitrator shall be appointed solely to determine whether claims identified by either
            party are part of a Class Action. Nothing in this provision prevents you or Klaravia from participating in a mass settlement of claims.
          </Text>
          <Text>
            21.7 <u>Severability</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Except with respect to the Jury trial waiver provided herein, in the event that any portion of this Arbitration Agreement is deemed illegal or unenforceable, such
            provision will be severed and the remainder of the Arbitration Agreement will be given full force and effect.
          </Text>
          <Text>
            21.8 <u>Amendment to Agreement to Arbitrate</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            If Klaravia amends this Section 22 after the date you last accepted these Terms (or accepted any subsequent changes to these Terms), you may reject the change by
            sending us written notice no later than thirty (30) days of the date the change is effective. Your notice must include your name, mailing address, the date of the
            notice, your Klaravia username, the email address you used to set up your Klaravia account, your signature, and an unequivocal statement that you want to opt out of the
            amended Section 22. You must either mail your notice to this address: Klaravia, Inc., 600 N Broad Street, Ste. 5, #446, Middletown, DE 19709, Attn: Tyler Yates, or
            email the opt-out notice to <u>info@klaravia.co</u>. Rejecting a new change, however, does not revoke or alter your prior consent to any earlier agreements to arbitrate
            any Dispute between you and Klaravia (or your prior consent to any subsequent changes thereto), which will remain in effect and enforceable as to any Dispute between
            you and Klaravia.
          </Text>
          <Text>
            21.9 <u>Survival</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Subject to the severability requirements of Section 12.6 and unless specified otherwise herein, this Section 22 will survive any termination of these Terms and will
            continue to apply even if you stop using the Klaravia Platform or terminate your Klaravia account.
          </Text>
          <Text mt="20px" id="Miscellaneous">
            <b>
              22 <u>Miscellaneous</u>
            </b>
            .
          </Text>
          <Text>
            22.1 <u>Interpreting these Terms</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Except as they may be supplemented by additional terms, conditions, policies, guidelines, standards, and in- product disclosures, these Terms (including those items
            incorporated by reference) constitute the entire agreement between Klaravia and you pertaining to your access to or use of the Klaravia Platform and supersede any and
            all prior oral or written understandings or agreements between Klaravia and you. These Terms do not and are not intended to confer any rights or remedies upon anyone
            other than you and Klaravia. If any provision of these Terms is held to be invalid or unenforceable, except as otherwise indicated herein, such provision will be struck
            and will not affect the validity and enforceability of the remaining provisions. Where the word “will” is used in these Terms it connotes an obligation with the same
            meaning as “shall.”
          </Text>
          <Text>
            22.2 <u>No Waiver</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Klaravia’s failure to enforce any right or provision in these Terms will not constitute a waiver of such right or provision unless acknowledged and agreed to by us in
            writing. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other
            remedies under these Terms or otherwise permitted under law.
          </Text>
          <Text>
            22.3 <u>Assignment.</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Unless provided elsewhere in these Terms or in other policies on the Klaravia Platform now in effect or hereinafter created, you may not assign, transfer or delegate
            this agreement or your rights and obligations hereunder, without Klaravia&#39;s prior written consent. Klaravia may, without restriction, assign, transfer, or delegate
            any rights and obligations under these Terms, at its sole discretion, with thirty (30) days’ prior notice.
          </Text>
          <Text>
            22.4 <u>Notice</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Unless specified otherwise, any notices or other communications to any party permitted or required under this agreement, will be provided electronically and given by
            Klaravia via email, Klaravia Platform notification, or any other contact method we enable, and you provide.
          </Text>
          <Text>
            22.5 <u>Third-Party Services</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            The Klaravia Platform may contain links to third-party websites, applications, services or resources (“<b>Third-Party Services</b>”) that are subject to different
            terms, privacy practices, and/or payment policies, such as the Stripe Consumer Terms of Service, described in further detail in Section 10.3. Klaravia is not
            responsible or liable for any aspect of such Third-Party Services and links to such Third-Party Services are not an endorsement.
          </Text>
          <Text fontSize={bodyFontSize}>
            The PII you disclose on the Klaravia Platform may also be subject to certain standards, restrictions, protections, and rules now in effect or later created by the
            following Third-Party Services:
          </Text>
          <VStack w="full" ml="20px" alignItems="flex-start">
            <UnorderedList>
              <ListItem>
                Google API (Available, as of August 29, 2024, at{" "}
                <Link color="blue" href="https://developers.google.com/terms/api-services-user-data-policy">
                  https://developers.google.com/terms/api-services-user-data-policy
                </Link>{" "}
                and, more generally, at{" "}
                <Link color="blue" href="https://policies.google.com/privacy">
                  https://policies.google.com/privacy
                </Link>
                );
              </ListItem>
              <ListItem>
                EagleView (Available, as of August 29, 2024, at{" "}
                <Link color="blue" href="https://www.eagleview.com/privacy-statement/">
                  https://www.eagleview.com/privacy-statement/
                </Link>
                );
              </ListItem>
              <ListItem>
                Salesforce (Available, as of August 29, 2024, at{" "}
                <Link color="blue" href="https://www.salesforce.com/company/legal/privacy/#1715371091743_14ay">
                  https://www.salesforce.com/company/legal/privacy/#1715371091743_14ay
                </Link>
                );
              </ListItem>
              <ListItem>
                Stripe (Available, as of August 29, 2024, at{" "}
                <Link color="blue" href="https://stripe.com/privacy">
                  https://stripe.com/privacy
                </Link>
                ).
              </ListItem>
            </UnorderedList>
          </VStack>
          <Text>
            22.6 <u>Platform Content</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Content made available through the Klaravia Platform may include, without limitation, trademarks, trade dress, inventions, algorithms, computer programs (in source code
            and object code), customer and marketing information and other content (“<b>Platform Content</b>”), whether registered or unregistered, which may be protected by
            copyright, trademark, patent, trade secrets, know how, and/or other laws of the United States and other countries. You acknowledge that all intellectual property rights
            for that Platform Content are the exclusive property of Klaravia and/or its licensors and agree that you will not remove, alter or obscure any copyright, trademark,
            service mark or other proprietary rights notices.
          </Text>
          <Text fontSize={bodyFontSize}>
            You may not use, copy, adapt, Modify, prepare derivative works of, distribute, license, sell, transfer, publicly display, publicly perform, transmit, broadcast or
            otherwise exploit any Platform Content accessed through the Klaravia Platform except to the extent you are the legal owner of that Platform Content or as expressly
            permitted in these Terms. Subject to your compliance with these Terms, Klaravia grants you a limited, non-exclusive, non- sublicensable, revocable, non-transferable
            license to access the Platform Content available on the Klaravia Platform, solely for your personal and non-commercial use.
          </Text>
          <Text>
            22.7 <u>Force Majeure</u>.
          </Text>
          <Text fontSize={bodyFontSize}>
            Klaravia shall not be liable for any delay or failure to perform resulting from abnormal or unforeseeable circumstances outside its reasonable control, the consequences
            of which would have been unavoidable despite all efforts to the contrary, including, but not limited to, acts of God, natural disasters, war, terrorism, riots,
            embargoes, acts of civil or military authorities, War, floods, accidents, pandemics, epidemics or disease, strikes or shortages of transportation facilities, fuel,
            energy, labor or materials.
          </Text>
          <Text>
            22.8 <u>Contact Us</u>.
          </Text>
          <Text fontSize={bodyFontSize} display="inline-flex">
            If you have any questions about these Terms please email us at{" "}
            <Text color="blue" ml="6px">
              <u>info@klaravia.co</u>
            </Text>
            .
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};
export default TOS;
