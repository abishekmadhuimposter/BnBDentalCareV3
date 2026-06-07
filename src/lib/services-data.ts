export type Benefit = {
  title: string
  description: string
}

export type ProcessStep = {
  stepNumber: string
  title: string
  description: string
}

export type FAQ = {
  question: string
  answer: string
}

export type ServiceData = {
  slug: string
  name: string
  image: string
  tagline: string
  metaTitle: string
  metaDescription: string
  overview: string
  benefitsTitle: string
  benefits: Benefit[]
  processTitle: string
  process: ProcessStep[]
  faqs: FAQ[]
}

export const servicesData: ServiceData[] = [
  {
    slug: "scaling-and-root-planing",
    name: "Scaling and Root Planing",
    image:
      "https://cdn.prod.website-files.com/66eae30169bcd82affc17f29/6740c278b77f130a63d608b1_scaling.jpg",
    tagline: "Deep Clean for Healthier Gums",
    metaTitle: "Scaling & Root Planing in Thrissur | B&B Dental Care",
    metaDescription:
      "Get professional scaling and root planing at B&B Dental Care — the best affordable dental clinic in Thrissur. Expert gum disease treatment and deep dental cleaning in Thrissur, Kerala.",
    overview:
      "Scaling and Root Planing is a deep-cleaning procedure designed to treat gum disease and prevent tooth loss. At B&B Dental Care — the most trusted and affordable dental clinic in Thrissur — our experienced periodontists use advanced ultrasonic instruments to remove plaque, tartar and bacterial deposits from below the gum line. This non-surgical treatment is ideal for patients with early to moderate periodontitis, helping reverse gum inflammation, reduce pocket depth and restore oral health. If you are searching for effective gum disease treatment in Thrissur, our clinic offers personalised care with long-term results.",
    benefitsTitle: "Why Choose Our Scaling & Root Planing Treatment?",
    benefits: [
      {
        title: "Eliminates Harmful Bacteria",
        description:
          "Deep cleaning below the gum line removes infection-causing bacteria that brushing and flossing simply cannot reach.",
      },
      {
        title: "Prevents Tooth Loss",
        description:
          "Treating gum disease early stops the bone and tissue destruction that leads to loose or missing teeth.",
      },
      {
        title: "Reduces Gum Inflammation",
        description:
          "Patients notice significant reduction in bleeding, swelling and bad breath after treatment.",
      },
      {
        title: "Minimally Invasive",
        description:
          "No surgery required. Our skilled dentists in Thrissur perform this procedure comfortably with local anaesthesia.",
      },
      {
        title: "Long-Lasting Results",
        description:
          "Combined with good home care habits, results can last for years, keeping your gums consistently healthy.",
      },
      {
        title: "Affordable Treatment in Thrissur",
        description:
          "B&B Dental Care offers the most competitive gum treatment packages in Thrissur without compromising quality.",
      },
    ],
    processTitle: "What to Expect During Treatment",
    process: [
      {
        stepNumber: "01",
        title: "Comprehensive Gum Examination",
        description:
          "Our dentist assesses your gum health, measures pocket depth and takes X-rays to evaluate bone levels.",
      },
      {
        stepNumber: "02",
        title: "Ultrasonic Scaling",
        description:
          "We use ultrasonic scalers to break up and remove tartar and plaque deposits from above and below the gum line.",
      },
      {
        stepNumber: "03",
        title: "Root Planing",
        description:
          "The roots of your teeth are smoothed to remove rough patches where bacteria lodge, helping gums reattach securely.",
      },
      {
        stepNumber: "04",
        title: "Antimicrobial Rinse",
        description:
          "An antibacterial rinse helps eliminate remaining bacteria and soothe treated areas.",
      },
      {
        stepNumber: "05",
        title: "Follow-Up & Maintenance",
        description:
          "We schedule follow-up visits to monitor healing and recommend a personalised maintenance routine.",
      },
    ],
    faqs: [
      {
        question: "Is scaling and root planing painful?",
        answer:
          "The procedure is performed under local anaesthesia, so you should feel minimal discomfort. Some sensitivity may persist for a day or two afterwards.",
      },
      {
        question: "How long does the treatment take?",
        answer:
          "Typically each quadrant of the mouth takes 45–60 minutes. The full treatment may be spread over 2–4 appointments depending on severity.",
      },
      {
        question: "How often should I get teeth scaling in Thrissur?",
        answer:
          "For patients with gum disease, every 3–4 months is recommended. Healthy patients may need it once a year as part of routine dental check-ups.",
      },
      {
        question:
          "Does B&B Dental Care offer affordable scaling in Thrissur?",
        answer:
          "Yes. We are known as one of the most affordable dental clinics in Thrissur, offering transparent pricing and easy payment options.",
      },
    ],
  },
  {
    slug: "gum-depigmentation",
    name: "Gum Depigmentation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMwfap9el1sh7Lgc2AQM_gplAfJAm2xdiEA&s",
    tagline: "Brighter Gums for a More Confident Smile",
    metaTitle: "Gum Depigmentation in Thrissur | B&B Dental Care",
    metaDescription:
      "Transform dark or patchy gums with professional gum depigmentation at B&B Dental Care, Thrissur's leading cosmetic dental clinic. Best gum brightening treatment in Thrissur, Kerala.",
    overview:
      "Gum Depigmentation — also known as gum bleaching or gum brightening — is a cosmetic dental procedure that removes dark patches and uneven pigmentation from the gums, revealing a healthy, uniform pink appearance. At B&B Dental Care, Thrissur's most trusted cosmetic dental clinic, we use advanced laser and electrosurgery techniques to safely and effectively lighten melanin-pigmented gums. Many patients feel self-conscious about dark gums when they smile. Our expert team delivers natural-looking, long-lasting results in just one or two sessions, giving you the confidence to show off your smile.",
    benefitsTitle: "Benefits of Gum Depigmentation at B&B Dental Care",
    benefits: [
      {
        title: "Aesthetic Gum Brightening",
        description:
          "Achieve visibly lighter, more uniform pink gums that complement your smile beautifully.",
      },
      {
        title: "Quick Procedure",
        description:
          "The treatment is completed in a single session in most cases, with minimal downtime.",
      },
      {
        title: "Long-Lasting Results",
        description:
          "With proper oral hygiene, results last for many years before any touch-up is required.",
      },
      {
        title: "Safe & Precise Laser Treatment",
        description:
          "Our dentists use laser technology for precise pigment removal with minimal impact on surrounding healthy tissue.",
      },
      {
        title: "Improved Self-Confidence",
        description:
          "Patients report a significant boost in confidence and willingness to smile after treatment.",
      },
      {
        title: "Best Cosmetic Dentistry in Thrissur",
        description:
          "B&B Dental Care is recognised as the best cosmetic dental and gum brightening clinic in Thrissur, Kerala.",
      },
    ],
    processTitle: "How Gum Depigmentation Works",
    process: [
      {
        stepNumber: "01",
        title: "Consultation & Assessment",
        description:
          "Our cosmetic dentist evaluates your gum colour, identifies the extent of pigmentation and discusses the expected outcome.",
      },
      {
        stepNumber: "02",
        title: "Local Anaesthesia",
        description:
          "A topical and local anaesthetic is applied to ensure a comfortable, pain-free experience throughout.",
      },
      {
        stepNumber: "03",
        title: "Depigmentation Procedure",
        description:
          "Using a dental laser or electrosurgical unit, pigmented gum tissue is carefully removed to expose the lighter layer beneath.",
      },
      {
        stepNumber: "04",
        title: "Healing & Aftercare",
        description:
          "The treated gum heals within 1–2 weeks. We provide detailed aftercare instructions and a follow-up appointment.",
      },
    ],
    faqs: [
      {
        question: "Is gum depigmentation permanent?",
        answer:
          "Results are long-lasting, typically several years. Repigmentation is possible over time, and a touch-up session may occasionally be needed.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "Not at all. Local anaesthesia ensures you are comfortable throughout. Mild soreness after treatment subsides within a few days.",
      },
      {
        question: "Who is a good candidate for gum depigmentation?",
        answer:
          "Anyone with dark, patchy or uneven gum pigmentation who desires a more aesthetic smile is a suitable candidate.",
      },
      {
        question: "Where can I get gum depigmentation in Thrissur?",
        answer:
          "B&B Dental Care in Thrissur is the trusted choice for cosmetic gum treatments, including professional gum brightening and depigmentation.",
      },
    ],
  },
  {
    slug: "denture",
    name: "Denture",
    image:
      "https://www.bridgedentalcosmetic.co.uk/blog/wp-content/uploads/2025/11/What-is-a-Partial-Denture.jpg",
    tagline: "Restore Your Smile with Comfortable Dentures",
    metaTitle: "Affordable Dentures in Thrissur | B&B Dental Care",
    metaDescription:
      "Get high-quality, affordable complete and partial dentures at B&B Dental Care — the best dental clinic in Thrissur. Restore your smile and confidence today in Thrissur, Kerala.",
    overview:
      "Dentures are removable prosthetic teeth designed to replace missing teeth and restore normal chewing, speaking and a confident smile. At B&B Dental Care — one of Thrissur's most trusted and affordable dental clinics — we provide custom-fitted complete dentures for patients with no remaining natural teeth and partial dentures for those missing some teeth. Each denture is crafted from high-quality materials to look natural, fit comfortably and stand the test of time. Whether you need dentures for the first time or require a replacement for worn or ill-fitting ones, our experienced team in Thrissur is ready to help you smile again.",
    benefitsTitle: "Why Choose B&B Dental Care for Dentures in Thrissur?",
    benefits: [
      {
        title: "Custom-Fitted for Comfort",
        description:
          "Each denture is fabricated from precise impressions of your mouth to ensure a snug, comfortable fit.",
      },
      {
        title: "Natural-Looking Appearance",
        description:
          "Our dentures are crafted to match the shade and shape of natural teeth, so no one will know the difference.",
      },
      {
        title: "Complete & Partial Options",
        description:
          "We offer full dentures for entirely toothless arches and partial dentures to fill gaps in existing teeth.",
      },
      {
        title: "Affordable Pricing in Thrissur",
        description:
          "As one of the most affordable dental clinics in Thrissur, we offer dentures at prices to suit every budget.",
      },
      {
        title: "Restores Full Functionality",
        description:
          "Eat, speak and smile with renewed confidence once your dentures are fitted and properly adjusted.",
      },
      {
        title: "Ongoing Support",
        description:
          "Our team provides regular reviews and refitting services to keep your dentures comfortable as your mouth changes over time.",
      },
    ],
    processTitle: "The Denture Fitting Process",
    process: [
      {
        stepNumber: "01",
        title: "Initial Consultation",
        description:
          "We assess remaining teeth, gum condition and facial structure to determine the best denture solution for you.",
      },
      {
        stepNumber: "02",
        title: "Dental Impressions",
        description:
          "Precise moulds of your mouth are taken to create a denture that fits exactly to your gum contours.",
      },
      {
        stepNumber: "03",
        title: "Denture Fabrication",
        description:
          "Your custom denture is crafted in a dental laboratory using high-quality acrylic and porcelain materials.",
      },
      {
        stepNumber: "04",
        title: "Trial Fitting",
        description:
          "A trial denture is placed so you can check appearance, bite and comfort before finalisation.",
      },
      {
        stepNumber: "05",
        title: "Final Fitting & Adjustment",
        description:
          "The finished denture is delivered and adjusted until your bite and comfort are perfect.",
      },
    ],
    faqs: [
      {
        question: "How long do dentures last?",
        answer:
          "With proper care, dentures typically last 5–10 years. Over time the fit may loosen due to jaw bone changes, and relining or replacement may be needed.",
      },
      {
        question: "Will dentures affect my ability to eat?",
        answer:
          "There is an adjustment period, but most patients regain full eating ability within a few weeks of wearing new dentures.",
      },
      {
        question: "Are dentures noticeable?",
        answer:
          "Modern dentures are designed to look very natural. Our clinic uses top-quality materials to ensure a lifelike and aesthetic result.",
      },
      {
        question: "Where can I get affordable dentures in Thrissur?",
        answer:
          "B&B Dental Care offers high-quality dentures at competitive, affordable prices in Thrissur. Contact us for a consultation and personalised quote.",
      },
    ],
  },
  {
    slug: "surgical-corrections",
    name: "Surgical Corrections",
    image:
      "https://www.rajkotdentist.com/wp-content/uploads/2023/07/20230726161245_fpdl.in_young-woman-with-red-bleeding-gums-health-gums-before-after-treatment_407348-1533_medium.jpg",
    tagline: "Advanced Oral Surgery for Lasting Results",
    metaTitle: "Oral Surgical Corrections in Thrissur | B&B Dental Care",
    metaDescription:
      "Expert oral surgical corrections at B&B Dental Care, Thrissur. From tooth extractions to corrective jaw procedures — your trusted oral surgery clinic in Thrissur, Kerala.",
    overview:
      "Oral surgical corrections encompass a range of procedures to address structural problems in the teeth, jaws and surrounding tissues. At B&B Dental Care in Thrissur, our skilled oral surgeon performs procedures including wisdom tooth extractions, soft-tissue surgeries, crown lengthening, frenectomies and corrective jaw surgeries. Whether you need a simple extraction or a complex surgical procedure, our team uses the latest equipment and techniques to ensure precise, safe and comfortable treatment. As the most trusted dental clinic in Thrissur, we prioritise your health, safety and recovery at every stage.",
    benefitsTitle: "Benefits of Choosing Us for Oral Surgery in Thrissur",
    benefits: [
      {
        title: "Expert Oral Surgeon",
        description:
          "Our clinic houses an experienced oral and maxillofacial surgeon with expertise across a wide spectrum of surgical procedures.",
      },
      {
        title: "State-of-the-Art Facility",
        description:
          "We use digital X-rays, 3D imaging and sterilised surgical instruments to ensure safe and precise procedures.",
      },
      {
        title: "Advanced Pain Management",
        description:
          "Advanced local anaesthesia and, where needed, sedation ensure you are completely comfortable during surgery.",
      },
      {
        title: "Comprehensive Post-Operative Care",
        description:
          "We provide detailed recovery guidance and scheduled follow-up appointments to monitor your healing.",
      },
      {
        title: "Minimised Recovery Time",
        description:
          "Our minimally invasive surgical techniques promote faster tissue healing and shorter recovery periods.",
      },
      {
        title: "All Surgical Needs Under One Roof",
        description:
          "From simple extractions to complex corrections, B&B Dental Care handles every surgical need in Thrissur.",
      },
    ],
    processTitle: "Our Surgical Correction Process",
    process: [
      {
        stepNumber: "01",
        title: "Diagnostic Assessment",
        description:
          "We take detailed X-rays and clinical photographs to understand the extent of the issue and plan the correct surgical approach.",
      },
      {
        stepNumber: "02",
        title: "Pre-Surgical Preparation",
        description:
          "You are briefed on what to expect, medications are prescribed as needed, and anaesthesia options are discussed.",
      },
      {
        stepNumber: "03",
        title: "Surgical Procedure",
        description:
          "Our surgeon performs the procedure with precision using the latest sterile instruments and techniques.",
      },
      {
        stepNumber: "04",
        title: "Recovery & Aftercare",
        description:
          "Detailed post-operative instructions are provided to promote safe and comfortable healing at home.",
      },
      {
        stepNumber: "05",
        title: "Follow-Up Review",
        description:
          "We schedule follow-up appointments to check healing progress and address any concerns promptly.",
      },
    ],
    faqs: [
      {
        question: "Is oral surgery safe?",
        answer:
          "Yes. All surgical procedures at B&B Dental Care are performed by qualified professionals using sterilised equipment in a clinical setting.",
      },
      {
        question: "How long is recovery after oral surgery?",
        answer:
          "Recovery depends on the procedure. Simple extractions heal in 3–7 days, while more complex surgeries may require 2–4 weeks.",
      },
      {
        question:
          "What surgeries does B&B Dental Care offer in Thrissur?",
        answer:
          "We offer wisdom tooth extraction, crown lengthening, frenectomies, soft-tissue surgery, corrective jaw procedures and more.",
      },
      {
        question: "Will oral surgery be painful?",
        answer:
          "With proper anaesthesia, you should feel no pain during the procedure. Post-operative discomfort is managed with prescribed medication.",
      },
    ],
  },
  {
    slug: "teeth-whitening-treatment-thrissur",
    name: "Professional Teeth Whitening Treatment in Thrissur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGVLP7t4Emyoj5ELeNdLdezp3Jc9YF7NuoQ&s",
    tagline: "A Brighter Smile in Just One Visit",
    metaTitle:
      "Professional Teeth Whitening Treatment in Thrissur | B&B Dental Care",
    metaDescription:
      "Get professional teeth whitening treatment in Thrissur at B&B Dental Care. Whiten teeth up to 8 shades in just 45 mins. Safe, laser whitening by expert dentists. Book free consultation — Call +91 98466 46488.",
    overview:
      "A bright, white smile is one of the most powerful confidence boosters — and professional teeth whitening treatment in Thrissur at B&B Dental Care is the safest, fastest way to achieve it. Unlike over-the-counter whitening kits or home remedies, our in-clinic professional teeth whitening uses clinically tested, high-concentration bleaching agents precisely applied by trained cosmetic dentists to protect your gums and enamel throughout the process. <br>Whether your teeth are stained from years of tea, coffee, or tobacco use, yellowed due to age, or discoloured from medications, our expert dentists evaluate the exact cause of discolouration and recommend the most effective whitening method for your specific case. Patients can choose from our advanced light-activated laser whitening system for instant results or customised take-home whitening trays for gradual brightening at their own convenience. <br>At B&B Dental Care — the most trusted clinic for professional teeth whitening treatment in Thrissur — we combine premium whitening technology with personalised care to deliver results that are not just visibly dramatic but also long-lasting and safe. Located near Padavarad Junction, Ollur, our clinic is easily accessible for patients from across Thrissur district including Irinjalakuda, Chalakudy, Kunnamkulam, Kodungallur, and Guruvayur. Book a free smile consultation today and discover how many shades whiter your smile can become in just one visit.",
    benefitsTitle: "Why Choose Professional Teeth Whitening Treatment in Thrissur?",
    benefits: [
      {
        title: "Up to 8 Shades Whiter",
        description:
          "Our professional whitening treatments can lighten teeth by up to 8 shades in a single in-clinic session.",
      },
      {
        title: "Safe & Clinically Supervised",
        description:
          "Unlike home kits, our treatment is supervised by dental professionals to protect your enamel and gums throughout.",
      },
      {
        title: "Fast, Visible Results",
        description:
          "In-clinic whitening gives you noticeably whiter teeth in just 45–60 minutes — perfect before an important event.",
      },
      {
        title: "Customised to Your Teeth",
        description:
          "We evaluate the cause of staining and select the most suitable whitening method for your specific case.",
      },
      {
        title: "Long-Lasting Brightness",
        description:
          "Results typically last 1–2 years with good maintenance, dietary habits and periodic touch-up sessions.",
      },
      {
        title: "Best Teeth Whitening Clinic in Thrissur",
        description:
          "B&B Dental Care is the top choice for professional teeth whitening treatment in Thrissur and surrounding areas of Kerala.",
      },
    ],
    processTitle: "How Our Professional Teeth Whitening Treatment Works in Thrissur",
    process: [
      {
        stepNumber: "01",
        title: "Smile Assessment",
        description:
          "Our dentist evaluates the shade of your teeth, the cause of discolouration and your suitability for whitening treatment.",
      },
      {
        stepNumber: "02",
        title: "Teeth Preparation",
        description:
          "Your teeth are thoroughly cleaned to remove surface plaque before the whitening gel is applied.",
      },
      {
        stepNumber: "03",
        title: "Gum Protection",
        description:
          "A protective barrier is applied to the gums and soft tissue to prevent any irritation from the whitening agent.",
      },
      {
        stepNumber: "04",
        title: "Whitening Gel Application",
        description:
          "A professional-grade hydrogen peroxide or carbamide peroxide gel is carefully applied to the tooth surfaces.",
      },
      {
        stepNumber: "05",
        title: "Light Activation & Results",
        description:
          "An activating light accelerates the whitening process. After 45 minutes, rinse and reveal your brighter, whiter smile.",
      },
    ],
    faqs: [
      {
        question: "Is professional teeth whitening safe?",
        answer:
          "Yes, when performed by qualified dentists in a clinical setting, teeth whitening is completely safe. We take care to protect your gums and enamel throughout the process.",
      },
      {
        question: "How long does teeth whitening last?",
        answer:
          "Results typically last 1–2 years, depending on diet, smoking habits and oral hygiene. Touch-up treatments can extend the effect.",
      },
      {
        question: "Are there any side effects of teeth whitening?",
        answer:
          "Some patients experience temporary tooth sensitivity after treatment. This usually subsides within 24–48 hours.",
      },
      {
        question:
          "Where can I get the best teeth whitening in Thrissur?",
        answer:
          "B&B Dental Care is the leading professional teeth whitening clinic in Thrissur, offering safe and effective cosmetic dental treatments.",
      },
    ],
  },
  {
    slug: "root-canal-treatment-thrissur",
    name: "Root Canal Treatment Doctors in Thrissur",
    image:
      "https://www.sakethospital.in/wp-content/uploads/2025/05/Tooth-With-Root-Canal-Hurt-With-Pressure-TruSmile-Dental.png",
    tagline: "Save Your Tooth with Painless Root Canal Treatment",
    metaTitle: "Root Canal Treatment Doctors in Thrissur | B&B Dental Care",
    metaDescription:
      "Looking for the best root canal treatment doctors in Thrissur? B&B Dental Care offers painless, single-sitting RCT using advanced rotary endodontics. Book a free consultation today!",
    overview:
      "Looking for trusted root canal treatment doctors in Thrissur? At B&B Dental Care, our specialist endodontists bring years of clinical expertise to save your natural tooth — without the pain you might expect. Root Canal Treatment (RCT) removes infected or damaged pulp from inside the tooth, eliminates bacterial infection, and seals the tooth to restore full function. We use advanced rotary endodontic instruments and digital radiography for precise, comfortable treatment — available in a single sitting for most cases. Whether you're dealing with severe toothache, a cracked tooth, or a deep cavity, our root canal doctors in Thrissur are here to help. Visit B&B Dental Care at Ollur, Thrissur and get back to pain-free living today.",
    benefitsTitle: "Why Choose Our Root Canal Doctors in Thrissur?",
    benefits: [
      {
        title: "Save Your Natural Tooth",
        description:
          "Root canal treatment preserves your natural tooth, avoiding extraction and the need for costly replacement options.",
      },
      {
        title: "Relieves Severe Toothache",
        description:
          "The procedure eliminates the infection and nerve pain, providing immediate and lasting relief.",
      },
      {
        title: "Painless with Modern Techniques",
        description:
          "We use advanced anaesthesia and gentle rotary instruments to ensure the treatment is as comfortable as possible.",
      },
      {
        title: "Single-Sitting Option Available",
        description:
          "Many cases can be completed in one visit using our efficient rotary endodontic system.",
      },
      {
        title: "Prevents Spread of Infection",
        description:
          "Treating the infected pulp stops bacteria from spreading to adjacent teeth, jawbone and surrounding tissue.",
      },
      {
        title: "Expert Root Canal Doctors in Thrissur",
        description:
          "Our root canal specialists bring years of clinical expertise to ensure precise, effective treatment every time.",
      },
    ],
    processTitle: "How Our Root Canal Doctors in Thrissur Treat Your Tooth",
    process: [
      {
        stepNumber: "01",
        title: "Diagnosis & X-Ray",
        description:
          "We take digital X-rays to assess the extent of infection and confirm that root canal treatment is the best option.",
      },
      {
        stepNumber: "02",
        title: "Local Anaesthesia",
        description:
          "A local anaesthetic is administered to completely numb the tooth and surrounding area for a pain-free experience.",
      },
      {
        stepNumber: "03",
        title: "Pulp Removal",
        description:
          "Infected pulp tissue from the tooth's inner chamber and root canals is carefully removed using precision endodontic instruments.",
      },
      {
        stepNumber: "04",
        title: "Canal Cleaning & Shaping",
        description:
          "The root canals are cleaned, disinfected and shaped using rotary files to ensure complete removal of bacteria.",
      },
      {
        stepNumber: "05",
        title: "Sealing & Crown Placement",
        description:
          "The canals are filled with a biocompatible material and sealed. A crown is placed to restore full strength and function.",
      },
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "Modern root canal treatment performed by our experienced dentists in Thrissur is largely pain-free. Local anaesthesia ensures comfort throughout the procedure.",
      },
      {
        question: "How long does a root canal take?",
        answer:
          "Most cases are completed in 1–2 sessions of 60–90 minutes each, depending on the complexity of the root canal anatomy.",
      },
      {
        question: "What happens after root canal treatment?",
        answer:
          "Slight soreness may be felt for a day or two after treatment. A dental crown is recommended to protect the restored tooth.",
      },
      {
        question: "Is root canal treatment better than extraction?",
        answer:
          "Yes. Preserving your natural tooth with root canal treatment is almost always the preferred option as it maintains normal chewing and prevents bone loss.",
      },
    ],
  },
  {
    slug: "veneers-teeth-treatment-thrissur",
    name: "Veneers Teeth Treatment in Thrissur",
    image:
      "https://guptadentalclinic.com/wp-content/uploads/2026/03/Dental-Veneers.jpg",
    tagline: "Perfect Smiles with Precision-Crafted Veneers",
    metaTitle: "Veneers Teeth Treatment in Thrissur | B&B Dental Care",
    metaDescription:
      "Looking for veneers teeth treatment in Thrissur? B&B Dental Care offers porcelain & composite veneers with free smile consultation. Call +91 9846646488.",
    overview:
      "Dental veneers are ultra-thin porcelain or composite shells bonded to the front surface of teeth to correct imperfections such as discolouration, chips, cracks, gaps and minor misalignment. At B&B Dental Care — the leading centre for veneers teeth treatment in Thrissur — we craft each veneer to perfectly match the shape, size and shade of your natural teeth, creating a seamlessly beautiful smile. Our cosmetic dentists use the latest CAD/CAM technology and premium materials to deliver exceptional aesthetics with minimal tooth reduction. Whether you want a subtle enhancement or a complete smile transformation, our personalised veneer treatment plans are designed around your unique smile goals.",
    benefitsTitle: "Why Choose B&B Dental Care for Veneers in Thrissur?",
    benefits: [
      {
        title: "Instantly Transforms Your Smile",
        description:
          "Veneers dramatically improve the appearance of stained, chipped, misaligned or uneven teeth in just two appointments.",
      },
      {
        title: "Natural-Looking Results",
        description:
          "Each veneer is custom-shaded and shaped for a natural, beautiful smile tailored to your facial aesthetics.",
      },
      {
        title: "Long-Lasting Durability",
        description:
          "High-quality porcelain veneers last 10–15 years with proper care, making them a worthwhile investment.",
      },
      {
        title: "Minimal Enamel Removal",
        description:
          "Our conservative approach uses minimal-prep or no-prep veneers to preserve maximum natural tooth structure.",
      },
      {
        title: "All-Purpose Cosmetic Fix",
        description:
          "Veneers correct staining, gaps, chips and mild crowding — multiple cosmetic issues addressed in one treatment.",
      },
      {
        title: "Trusted Veneers Clinic in Thrissur",
        description:
          "B&B Dental Care is the most sought-after clinic for dental veneers in Thrissur, trusted by hundreds of satisfied patients.",
      },
    ],
    processTitle: "Veneers Teeth Treatment Process at Our Thrissur Clinic",
    process: [
      {
        stepNumber: "01",
        title: "Smile Consultation",
        description:
          "We discuss your smile goals, evaluate your teeth and decide the type, number and shade of veneers best suited for you.",
      },
      {
        stepNumber: "02",
        title: "Tooth Preparation",
        description:
          "A minimal amount of enamel is removed from the front teeth to create space for the veneers (skipped for no-prep options).",
      },
      {
        stepNumber: "03",
        title: "Impressions & Lab Fabrication",
        description:
          "Precise moulds or digital scans are used to fabricate your custom veneers in an advanced dental laboratory.",
      },
      {
        stepNumber: "04",
        title: "Temporary Veneers",
        description:
          "We place temporary veneers to protect prepared teeth and let you preview your new smile while permanent ones are being made.",
      },
      {
        stepNumber: "05",
        title: "Bonding & Final Fitting",
        description:
          "The finished veneers are bonded with strong dental cement, adjusted for a perfect bite and polished for a flawless finish.",
      },
    ],
    faqs: [
      {
        question: "How long do dental veneers last?",
        answer:
          "Porcelain veneers typically last 10–15 years. Composite veneers last 5–7 years. Regular dental check-ups extend their longevity.",
      },
      {
        question: "Are veneers reversible?",
        answer:
          "Traditional veneers involve minor enamel removal, making the process irreversible. No-prep and minimal-prep veneers preserve more natural tooth structure.",
      },
      {
        question: "Will veneers look natural?",
        answer:
          "Absolutely. Our veneers are crafted to match your natural tooth colour and translucency for completely seamless results.",
      },
      {
        question: "Can veneers fix gaps between teeth?",
        answer:
          "Yes, dental veneers can close gaps between teeth without the need for orthodontic treatment in many cases.",
      },
    ],
  },
  {
    slug: "digital-smile-designing-clinic-thrissur",
    name: "Best Digital Smile Design Clinic in Thrissur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLTBGN5F16M6uxGG_0ni0TmuXP-0Rw2EvyA&s",
    tagline: "See Your New Smile Before Treatment Begins",
    metaTitle: "Best Digital Smile Design Clinic in Thrissur | B&B Dental Care",
    metaDescription:
      "Looking for the best Digital Smile Design clinic in Thrissur? B&B Dental Care uses advanced DSD technology to preview your perfect smile before treatment. Book a free consultation today!",
    overview:
      "Looking for the best Digital Smile Design clinic in Thrissur? At B&B Dental Care, we use advanced DSD technology to plan and preview your perfect smile — before any treatment begins. We capture high-resolution photos and videos of your face and teeth, analysed with specialised software to design a smile that suits your unique facial features. You'll see exactly how your smile will look after veneers, crowns, whitening or aligners — ensuring zero surprises. Our DSD approach blends art, technology and dental science to deliver Thrissur's most personalised smile makeovers.",
    benefitsTitle: "Why Digital Smile Designing at B&B Dental Care?",
    benefits: [
      {
        title: "See Results Before Treatment",
        description:
          "DSD lets you preview your transformed smile digitally, so you know exactly what to expect before any work begins.",
      },
      {
        title: "Completely Personalised",
        description:
          "Every smile is designed around your facial proportions, skin tone, lip line and personal aesthetic preferences.",
      },
      {
        title: "Better Doctor-Patient Communication",
        description:
          "The digital preview facilitates clear communication between you and your dentist about the desired outcome.",
      },
      {
        title: "No Unexpected Surprises",
        description:
          "Seeing the result in advance means no unexpected outcomes — what you see is what you get.",
      },
      {
        title: "Comprehensive Smile Makeover",
        description:
          "DSD can coordinate multiple treatments including whitening, veneers and aligners for a complete transformation.",
      },
      {
        title: "Best DSD Clinic in Thrissur",
        description:
          "B&B Dental Care is acclaimed as the best Digital Smile Design clinic in Thrissur, with a track record of stunning smile transformations.",
      },
    ],
    processTitle: "The DSD Process at B&B Dental Care",
    process: [
      {
        stepNumber: "01",
        title: "Digital Photography & Video",
        description:
          "High-resolution photos and videos of your face, lips and teeth are captured to gather a complete aesthetic reference.",
      },
      {
        stepNumber: "02",
        title: "Facial Analysis & Smile Mapping",
        description:
          "Specialised software analyses your facial symmetry, lip dynamics and tooth proportions to define the ideal smile framework.",
      },
      {
        stepNumber: "03",
        title: "Digital Smile Preview",
        description:
          "Your anticipated smile design is rendered digitally and shown to you in photos and video, allowing discussion and refinement.",
      },
      {
        stepNumber: "04",
        title: "Mock-Up & Approval",
        description:
          "A physical mock-up is created for you to trial-fit in your mouth, verifying the feel and look of the design.",
      },
      {
        stepNumber: "05",
        title: "Treatment Execution",
        description:
          "Once you approve the design, the agreed restorative or cosmetic treatment plan is executed to realise your new smile.",
      },
    ],
    faqs: [
      {
        question: "What is Digital Smile Designing (DSD)?",
        answer:
          "DSD is a digital planning tool used by cosmetic dentists to design and preview a smile makeover before any treatment, ensuring the final result matches the patient's expectations.",
      },
      {
        question: "Is DSD only for cosmetic dentistry?",
        answer:
          "While DSD is primarily used for cosmetic cases such as smile makeovers, it can also guide restorative and orthodontic treatment planning.",
      },
      {
        question: "How long does the digital design process take?",
        answer:
          "The digital planning phase typically takes 1–2 appointments. Overall treatment duration depends on which procedures are included in the plan.",
      },
      {
        question:
          "Which is the best Digital Smile Design clinic in Thrissur?",
        answer:
          "B&B Dental Care is widely regarded as the best Digital Smile Design clinic in Thrissur, offering state-of-the-art DSD technology and expert cosmetic dentists.",
      },
    ],
  },
  {
    slug: "dental-implant-treatment-provider-thrissur",
    name: "Best Dental Implant Treatment Provider in Thrissur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5QbaKzAZAbjml8UwppqQv1YreOVPQLgUFQ&s",
    tagline: "Permanent Tooth Replacement That Looks and Feels Real",
    metaTitle: "Best Dental Implant Treatment Provider in Thrissur | B&B Dental Care",
    metaDescription:
      "B&B Dental Care is the best dental implant treatment provider in Thrissur. Expert implantologists, 3D planning, titanium implants & free consultation. Call now!",
    overview:
      "Looking for the best dental implant treatment provider in Thrissur? B&B Dental Care offers world-class dental implant solutions at our state-of-the-art clinic in Ollur, Thrissur. Our specialist implantologists combine advanced 3D digital planning with premium titanium implants to deliver results that look, feel, and function exactly like your natural teeth.<br>Dental implants are the gold standard in modern dentistry for replacing missing teeth — and at B&B Dental Care, we have helped hundreds of patients across Thrissur and Kerala restore their smiles with lasting confidence. Unlike removable dentures or traditional bridges, implants are surgically placed into the jawbone, preventing bone loss and providing a lifetime solution with a success rate exceeding 95%.<br>Whether you are missing a single tooth, multiple teeth, or require full-arch restoration, our team personalises every treatment plan to your unique needs. From the first consultation and CBCT scan to the final crown fitting, we walk with you through every step — ensuring a comfortable, precise, and stress-free experience.<br>Choose B&B Dental Care — the most trusted dental implant clinic in Thrissur — and take the first step towards a permanent, beautiful smile today.",
    benefitsTitle: "Benefits of Choosing Our Dental Implant Treatment in Thrissur",
    benefits: [
      {
        title: "Permanent Lifetime Solution",
        description:
          "Dental implants are designed to last a lifetime — a one-time investment for decades of confident smiling.",
      },
      {
        title: "Looks and Feels Natural",
        description:
          "Implant-supported crowns are indistinguishable from real teeth in both appearance and function.",
      },
      {
        title: "Prevents Bone Loss",
        description:
          "Implants stimulate the jawbone, preventing the bone resorption that typically follows tooth loss.",
      },
      {
        title: "No Damage to Adjacent Teeth",
        description:
          "Unlike bridges, implants stand alone and do not require grinding down neighbouring healthy teeth.",
      },
      {
        title: "Over 95% Success Rate",
        description:
          "Dental implants have a clinical success rate exceeding 95%, making them the most reliable tooth replacement option.",
      },
      {
        title: "Best Implant Clinic in Thrissur",
        description:
          "B&B Dental Care is the foremost dental implant treatment provider in Thrissur, trusted by patients across Kerala.",
      },
    ],
    processTitle: "Dental Implant Procedure at Thrissur's Most Trusted Clinic",
    process: [
      {
        stepNumber: "01",
        title: "Consultation & 3D Scanning",
        description:
          "We take CBCT/3D scans to assess bone density, locate key anatomical structures and plan implant placement digitally.",
      },
      {
        stepNumber: "02",
        title: "Implant Surgery",
        description:
          "Under local anaesthesia, a titanium post is precisely placed into the jawbone at the site of the missing tooth.",
      },
      {
        stepNumber: "03",
        title: "Osseointegration",
        description:
          "Over 3–6 months, the implant fuses with the surrounding bone in a natural process, forming a permanent foundation.",
      },
      {
        stepNumber: "04",
        title: "Abutment Placement",
        description:
          "Once integrated, an abutment connector is attached to the implant to support the final crown.",
      },
      {
        stepNumber: "05",
        title: "Crown Fitting",
        description:
          "A custom-fabricated ceramic crown is fixed to the abutment, completing the restoration with a natural-looking, functional tooth.",
      },
    ],
    faqs: [
      {
        question: "Is dental implant surgery painful?",
        answer:
          "The procedure is performed under local anaesthesia and is generally no more uncomfortable than a routine tooth extraction. Post-operative discomfort is manageable with prescribed medication.",
      },
      {
        question: "How long do dental implants last?",
        answer:
          "With proper oral hygiene and regular dental check-ups, dental implants can last a lifetime. The crown may need replacement after 15–20 years.",
      },
      {
        question: "Am I a suitable candidate for dental implants?",
        answer:
          "Most adults with good general and oral health are candidates. Cases involving diabetes, significant bone loss or smoking are evaluated individually at our clinic.",
      },
      {
        question: "Who is the best dental implant provider in Thrissur?",
        answer:
          "B&B Dental Care is recognised as the best dental implant treatment provider in Thrissur, with a proven track record of successful implant placements.",
      },
    ],
  },
  {
    slug: "dental-aligners-and-braces",
    name: "Dental Aligners and Braces",
    image:
      "https://cdn.prod.website-files.com/64200f66a2bd1e03e145e5ac/64773050b9047f0ddf5f2db2_Blog%2012-06.webp",
    tagline: "Straighten Your Smile Comfortably and Discreetly",
    metaTitle: "Braces & Clear Aligners in Thrissur | B&B Dental Care",
    metaDescription:
      "Get straighter teeth with braces and clear aligners at B&B Dental Care — the leading orthodontic clinic in Thrissur. Affordable teeth straightening treatment in Thrissur, Kerala.",
    overview:
      "Dental aligners and braces are orthodontic treatments designed to correct misaligned, crowded or gapped teeth, improving both aesthetics and oral health. At B&B Dental Care in Thrissur, we offer a full range of orthodontic solutions including traditional metal braces, ceramic (tooth-coloured) braces and modern clear aligner systems. Our orthodontists assess each patient's bite, jaw position and tooth alignment to recommend the most effective treatment. Clear aligners offer a discreet, removable and comfortable alternative to traditional braces, making orthodontic treatment more accessible than ever. Start your journey to a straighter, healthier smile at Thrissur's most trusted orthodontic clinic.",
    benefitsTitle: "Benefits of Orthodontic Treatment at B&B Dental Care",
    benefits: [
      {
        title: "Improved Smile Aesthetics",
        description:
          "Straight, well-aligned teeth enhance your smile, boost confidence and improve overall facial appearance.",
      },
      {
        title: "Better Oral Hygiene",
        description:
          "Aligned teeth are easier to brush and floss, reducing the risk of cavities and gum disease.",
      },
      {
        title: "Corrects Bite Problems",
        description:
          "Treatment addresses overbites, underbites and crossbites that cause jaw pain and uneven wear on teeth.",
      },
      {
        title: "Discreet Clear Aligner Options",
        description:
          "Clear aligners are virtually invisible and removable — ideal for working professionals and adults.",
      },
      {
        title: "Suitable for All Ages",
        description:
          "We treat children, teenagers and adults with specialised orthodontic plans for every age group.",
      },
      {
        title: "Expert Orthodontist in Thrissur",
        description:
          "Our experienced orthodontists deliver precision treatment with beautiful, lasting results.",
      },
    ],
    processTitle: "Your Orthodontic Treatment Journey",
    process: [
      {
        stepNumber: "01",
        title: "Orthodontic Consultation",
        description:
          "We perform a thorough assessment including clinical examination, dental X-rays and photos to understand your bite and alignment needs.",
      },
      {
        stepNumber: "02",
        title: "Digital Treatment Planning",
        description:
          "A digital treatment plan is created showing the step-by-step movement of teeth and the estimated treatment duration.",
      },
      {
        stepNumber: "03",
        title: "Fitting of Braces or Aligners",
        description:
          "Metal or ceramic braces are bonded to teeth, or custom clear aligner trays are issued for you to wear and change fortnightly.",
      },
      {
        stepNumber: "04",
        title: "Regular Adjustments",
        description:
          "Monthly or fortnightly visits allow us to adjust wires or issue new aligner trays to keep treatment progressing.",
      },
      {
        stepNumber: "05",
        title: "Retainer & Completion",
        description:
          "Once teeth reach their ideal position, appliances are removed and a retainer is provided to maintain the results.",
      },
    ],
    faqs: [
      {
        question: "How long does orthodontic treatment take?",
        answer:
          "Treatment duration ranges from 6 months to 2.5 years depending on complexity. Clear aligners often work faster for mild to moderate cases.",
      },
      {
        question: "Are clear aligners as effective as braces?",
        answer:
          "Clear aligners are highly effective for mild to moderate crowding and spacing. Complex bite corrections may still require traditional braces.",
      },
      {
        question:
          "At what age should a child start orthodontic treatment?",
        answer:
          "An initial orthodontic assessment is recommended around age 7–8. Active treatment usually begins between 11–14 years.",
      },
      {
        question: "Where can I get clear aligners in Thrissur?",
        answer:
          "B&B Dental Care offers both clear aligners and traditional braces in Thrissur. Contact us to find out which option is right for you.",
      },
    ],
  },
  {
    slug: "skin-tag-wart-removal-thrissur",
    name: "Painless Skin Tag & Wart Removal Clinic in Thrissur",
    image:
      "https://premier-clinic.com/wp-content/uploads/2020/08/Electrocautery-01.jpg",
    tagline: "Safe & Painless Skin Tag and Wart Removal in Thrissur",
    metaTitle:
      "Painless Skin Tag & Wart Removal Clinic in Thrissur | B&B Dental Care",
    metaDescription:
      "Looking for a painless skin tag and wart removal clinic in Thrissur? B&B Dental Care offers expert electrocauterization — quick, safe & scar-free. Book a free consultation today!",
    overview:
      "Electrocauterization is a safe, precise and minimally invasive treatment that uses controlled electrical current to remove unwanted skin growths such as skin tags, warts, moles and oral fibrous tissue. At B&B Dental Care in Thrissur — Thrissur's most trusted clinic for painless skin tag and wart removal — our trained practitioners use an electrocautery instrument to precisely target and eliminate unwanted growths with minimal discomfort and virtually zero recovery time. In addition to skin growths, electrocauterization is used intraorally to treat gum overgrowth and fibromas inside the mouth. The procedure is quick, clean and highly effective, with most patients resuming normal activity immediately after treatment.",
    benefitsTitle:
      "Why We're Thrissur's Most Trusted Skin Tag Removal Clinic",
    benefits: [
      {
        title: "Virtually Painless Procedure",
        description:
          "With topical or local anaesthetic, electrocauterization is virtually pain-free — patients describe it as a mild warm sensation at most.",
      },
      {
        title: "Precise Targeted Removal",
        description:
          "The electrocautery instrument precisely targets only the growth being removed without damaging surrounding healthy tissue.",
      },
      {
        title: "Minimal to No Bleeding",
        description:
          "The electrical current simultaneously seals blood vessels, resulting in minimal to no bleeding during the procedure.",
      },
      {
        title: "Instant Results in One Session",
        description:
          "The growth is removed in just one session, often in under 15 minutes per lesion.",
      },
      {
        title: "Quick Recovery",
        description:
          "No stitches are needed in most cases. Treated areas heal cleanly within 5–10 days.",
      },
      {
        title: "Top-Rated Skin Tag Removal in Thrissur",
        description:
          "B&B Dental Care is the most trusted, painless skin tag and wart removal clinic in Thrissur, serving patients from across Kerala.",
      },
    ],
    processTitle: "How Painless Skin Tag Removal Works at Our Thrissur Clinic",
    process: [
      {
        stepNumber: "01",
        title: "Consultation & Assessment",
        description:
          "Our practitioner examines the growth, confirms it is suitable for electrocauterization and discusses the procedure with you.",
      },
      {
        stepNumber: "02",
        title: "Skin Preparation",
        description:
          "The treatment area is thoroughly cleaned and antiseptic is applied to minimise any infection risk.",
      },
      {
        stepNumber: "03",
        title: "Local or Topical Anaesthesia",
        description:
          "A numbing cream or local anaesthetic injection ensures the area is completely numb and you feel no pain.",
      },
      {
        stepNumber: "04",
        title: "Electrocauterization",
        description:
          "The electrocautery probe is applied to the growth, delivering controlled current that precisely ablates the tissue.",
      },
      {
        stepNumber: "05",
        title: "Post-Procedure Care",
        description:
          "An antibiotic ointment is applied and detailed aftercare instructions are provided. The area heals cleanly within a week.",
      },
    ],
    faqs: [
      {
        question: "Is electrocauterization painful?",
        answer:
          "With proper local anaesthesia, the procedure is essentially painless. Patients may feel slight warmth but no significant pain.",
      },
      {
        question: "Does electrocauterization leave scars?",
        answer:
          "In most cases, electrocauterization heals without visible scarring. Our practitioners use precise, minimal current levels for the cleanest possible results.",
      },
      {
        question:
          "What types of growths can be removed with electrocauterization?",
        answer:
          "Common growths treated include skin tags, warts, benign moles, oral fibromas and gum overgrowth.",
      },
      {
        question:
          "Where can I get painless skin tag removal in Thrissur?",
        answer:
          "B&B Dental Care in Thrissur is the most trusted clinic for painless electrocauterization — skin tag and wart removal in Thrissur and across Kerala.",
      },
    ],
  },
  {
    slug: "gluta-iv",
    name: "Gluta IV",
    image:
      "https://lanalifecare.com/wp-content/uploads/2025/04/Glutathione-IV-Drip-Before-and-After-scaled.webp",
    tagline: "Glow from Within with Glutathione IV Therapy",
    metaTitle:
      "Glutathione IV Drip in Thrissur | Gluta IV Therapy | B&B Dental Care",
    metaDescription:
      "Experience the best Glutathione IV drip treatment in Thrissur at B&B Dental Care. Professional Gluta IV skin whitening, brightening and wellness therapy in Thrissur, Kerala.",
    overview:
      "Gluta IV is an intravenous (IV) infusion of Glutathione — the body's most powerful antioxidant — delivered directly into the bloodstream for maximum absorption and effectiveness. At B&B Dental Care in Thrissur, our trained medical professionals administer premium Glutathione IV drip therapy in a safe, clinical environment. Glutathione works by inhibiting melanin synthesis, resulting in skin brightening and a radiant, even complexion, while simultaneously detoxifying the body, boosting immunity and combating oxidative stress. B&B Dental Care offers Gluta IV sessions tailored to your skin tone goals and overall wellness. This treatment is popular with patients seeking brighter skin, more energy and enhanced overall vitality.",
    benefitsTitle: "Key Benefits of Gluta IV Therapy",
    benefits: [
      {
        title: "Brightens & Evens Skin Tone",
        description:
          "Glutathione inhibits melanin production, delivering a visibly brighter, more radiant and even complexion.",
      },
      {
        title: "Powerful Antioxidant Effect",
        description:
          "IV Glutathione neutralises free radicals throughout the body, slowing premature ageing and cellular damage.",
      },
      {
        title: "Boosts Immune System",
        description:
          "Glutathione strengthens the immune response, helping your body fight infections and illness more effectively.",
      },
      {
        title: "Liver Detoxification",
        description:
          "As the body's primary detox agent, Glutathione supports liver function and helps eliminate toxins efficiently.",
      },
      {
        title: "Increased Energy & Vitality",
        description:
          "Many patients report a significant improvement in energy levels, mental clarity and overall vitality after Gluta IV sessions.",
      },
      {
        title: "Safe & Clinically Administered",
        description:
          "All IV infusions at B&B Dental Care are administered by trained healthcare professionals in a sterile, monitored clinical setting.",
      },
    ],
    processTitle: "Your Gluta IV Session at B&B Dental Care",
    process: [
      {
        stepNumber: "01",
        title: "Pre-Treatment Consultation",
        description:
          "Our practitioner reviews your health history, discusses your skin goals and recommends a suitable glutathione dosage and course.",
      },
      {
        stepNumber: "02",
        title: "IV Line Preparation",
        description:
          "A small IV cannula is placed in a vein in your arm — a quick, minimally uncomfortable step done by our trained staff.",
      },
      {
        stepNumber: "03",
        title: "Infusion Session",
        description:
          "The Glutathione solution is infused slowly over 30–45 minutes. Patients relax comfortably in a calm clinical environment.",
      },
      {
        stepNumber: "04",
        title: "Post-Session Care",
        description:
          "After the infusion, you can resume normal activities immediately. Sun protection is recommended to maintain skin brightening results.",
      },
      {
        stepNumber: "05",
        title: "Ongoing Treatment Plan",
        description:
          "For best results, a course of sessions is recommended. We create a personalised schedule based on your individual skin goals.",
      },
    ],
    faqs: [
      {
        question:
          "How many sessions are needed for skin brightening?",
        answer:
          "Most patients need 6–12 sessions spaced 1–2 weeks apart for optimal brightening. Maintenance sessions are recommended thereafter.",
      },
      {
        question: "Is Gluta IV safe?",
        answer:
          "Yes, when administered by trained professionals in a clinical setting using pharmaceutical-grade Glutathione, IV therapy is considered safe. We conduct a health check before every session.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "Some patients notice a glow after the first few sessions. Significant brightening is typically visible after 4–6 sessions.",
      },
      {
        question:
          "Where can I get Glutathione IV drip in Thrissur?",
        answer:
          "B&B Dental Care in Thrissur offers premium Gluta IV therapy administered by trained healthcare professionals in a safe, comfortable clinical environment.",
      },
    ],
  },
  {
    slug: "Tooth-grills-dental-clinic-kerala",
    name: "Tooth Grills Dental Clinic in Kerala — B&B Dental Care, Thrissur",
    image: "https://media.istockphoto.com/id/2166148636/photo/young-man-shows-off-his-grillz-on-fisheye-lens.webp?a=1&b=1&s=612x612&w=0&k=20&c=CKpulcI4tNdlKlxOEnQmGyBSB2tzgobESVe02iioptY=",
    tagline: "Custom Tooth Grills Crafted for Your Unique Style",
    metaTitle: "Tooth Grills Dental Clinic in Kerala | Custom Grillz in Thrissur | B&B Dental Care",
    metaDescription:
      "Looking for a Tooth Grills Dental Clinic in Kerala? B&B Dental Care, Thrissur offers 100% custom dental grillz in gold, silver & platinum. Book a free consultation today.",
    overview:
      "Tooth grills — also known as dental grills or grillz — are premium decorative accessories crafted from precious metals like gold, silver, and platinum, often set with diamonds or gemstones. B&B Dental Care is the most trusted tooth grills dental clinic in Kerala, offering 100% custom-fabricated grillz built precisely around your teeth, your style, and your personality. Whether you want a subtle single-tooth gold grill or a bold full-set statement piece, our expert team in Thrissur delivers flawless craftsmanship with an extensive range of designs to suit every look. Every grill starts with an exact dental impression of your teeth — guaranteeing a snug, comfortable fit that looks and feels perfect from day one. Patients travel to our Thrissur clinic from Kochi, Kozhikode, Ernakulam, Palakkad, and across Kerala to get their custom grillz done right. If you've been searching for a reliable tooth grills dental clinic in Kerala — your search ends here.",
    benefitsTitle: "Why B&B is Kerala's Best Tooth Grill Clinic ?",
    benefits: [
      {
        title: "Best Tooth Grills in Thrissur",
        description:
          "B&B Dental Care is Thrissur's premier destination for custom dental grills, trusted by customers for quality craftsmanship and precision fit.",
      },
      {
        title: "100% Custom Built",
        description:
          "Every grill is made from an exact dental impression of your teeth — custom built to your specifications for a secure, comfortable fit.",
      },
      {
        title: "Vast Design Selection",
        description:
          "Choose from an extensive catalogue of designs including gold grills, diamond-cut patterns, gemstone settings and personalised styles.",
      },
      {
        title: "Premium Materials",
        description:
          "We use high-quality metals and materials to ensure your grill is durable, safe and retains its shine over time.",
      },
      {
        title: "Perfect Fit Every Time",
        description:
          "Precision dental moulds ensure your grill fits snugly without slipping, making it comfortable for extended wear.",
      },
      {
        title: "Expert Dental Supervision",
        description:
          "Our dental team ensures your grill is crafted and fitted with full attention to your oral health and safety.",
      },
    ],
    processTitle: "How Our Kerala Dental Clinic Crafts Your Custom Grillz",
    process: [
      {
        stepNumber: "01",
        title: "Consultation & Design Selection",
        description:
          "Visit our clinic in Thrissur to discuss your preferred style. Browse our vast design catalogue and choose the metal, finish and design that suits you.",
      },
      {
        stepNumber: "02",
        title: "Dental Impressions",
        description:
          "Precise moulds of your teeth are taken to ensure a perfectly snug and comfortable fit for your custom grill.",
      },
      {
        stepNumber: "03",
        title: "Custom Fabrication",
        description:
          "Your grill is handcrafted by skilled artisans using your chosen materials and design, built exactly to your dental impressions.",
      },
      {
        stepNumber: "04",
        title: "Quality Check",
        description:
          "Each grill undergoes a thorough quality inspection for finish, fit and material integrity before delivery.",
      },
      {
        stepNumber: "05",
        title: "Fitting & Care Instructions",
        description:
          "We fit the completed grill and provide full care and maintenance instructions to keep your grill looking its best.",
      },
    ],
    faqs: [
      {
        question: "Are tooth grills safe to wear?",
        answer:
          "When properly fitted and worn responsibly, tooth grills are safe. Our team ensures every grill is crafted from safe materials and provides guidance on hygienic wear and cleaning.",
      },
      {
        question: "Where can I get tooth grills in Kerala?",
        answer:
          "B&B Dental Care in Thrissur is Kerala's most trusted tooth grills dental clinic. We specialize in 100% custom-fabricated dental grillz in gold, silver, platinum, and gemstone designs — crafted under full dental supervision for a perfect, safe fit. Our clinic is easily accessible from Kochi, Kozhikode, Palakkad, Ernakulam, and all major cities across Kerala. Book a free consultation today and meet our expert team in person.",
      },
      {
        question: "How long does it take to make a custom grill?",
        answer:
          "Most custom grills are ready within 5–10 working days after we take your dental impressions, depending on the complexity of the design.",
      },
      {
        question: "What designs are available for tooth grills?",
        answer:
          "We offer a vast selection including plain gold or silver grills, diamond-cut finishes, gemstone-encrusted designs and fully bespoke personalised patterns. Visit our clinic in Thrissur to view the full catalogue.",
      },
      {
        question: "What is the price of tooth grills in Kerala?",
        answer:
          "The cost of tooth grills in Kerala depends on several factors — the metal used (gold, silver, or platinum), the number of teeth covered, stone settings, and the complexity of the design. At B&B Dental Care, we offer highly competitive pricing with complete transparency and no hidden charges. Contact us directly or book a free consultation at our Thrissur clinic for a personalised quote based on your exact requirements.",
      },
      {
        question: "Are tooth grills safe to wear?",
        answer:
          "Yes — when designed and fitted by a qualified dental professional, tooth grills are safe to wear. At B&B Dental Care, Kerala's dedicated tooth grills dental clinic, every grill is fabricated using body-safe, certified materials under full expert dental supervision. We also provide detailed care and maintenance instructions after fitting to ensure your oral health is fully protected. We strongly advise against purchasing grillz from non-dental sources, as poorly fitted grills can cause damage to your teeth, gums, and bite over time.",
      },
      {
        question: "How long does it take to make custom grillz in Thrissur, Kerala?",
        answer:
          "Your custom tooth grill is typically ready within 5 to 10 working days from your dental impression appointment. The exact turnaround time depends on the design complexity, the materials chosen, and any custom stone or engraving work involved. We will give you a confirmed timeline during your first consultation at our Thrissur clinic. Patients travelling from other parts of Kerala can also arrange both appointments on convenient dates.",
      },
      {
        question: "Do you make gold and diamond tooth grills in Kerala?",
        answer:
          "Yes. At B&B Dental Care — Kerala's premier tooth grills dental clinic — we craft grillz in gold, silver, platinum, and diamond or gemstone-studded designs. From a classic single-tooth plain gold grill to a fully iced-out diamond set, our skilled team can bring any design to life. Every piece is custom-built from a dental impression of your teeth, so the fit is always perfect. Visit our Thrissur clinic to browse our full design catalogue and find the style that suits you best.",
      },                  
    ],
    
  },
]
