"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, GraduationCap, Globe, Mail, MessageCircle, Plane, Sparkles, Star, TrendingUp, Trophy } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="grid"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Sports", id: "sports" },
            { name: "Aviation", id: "aviation" },
            { name: "Academics", id: "academics" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Alessandro Noya"
          button={{ text: "Get in Touch", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Alessandro Noya"
          description="Junior at Torrey Pines High School • Volleyball Excellence • Chess Prodigy • Future Pilot • From Rio to Rome to San Diego"
          buttons={[
            { text: "View My Journey", href: "about" },
            { text: "Contact Me", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227549140-egrxwp33.jpg"
          imageAlt="Alessandro Noya volleyball action shot"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="A journey of excellence across three continents, combining athletic prowess, intellectual mastery, and aviation dreams into one remarkable story."
          features={[
            {
              icon: Plane,
              title: "Aviation Journey",
              description: "Currently pursuing my pilot license with dedication and passion for aviation, mastering the technical and practical aspects of flight."
            },
            {
              icon: Trophy,
              title: "Volleyball Excellence",
              description: "Exceptional volleyball player with tournament experience, combining athletic skill with strategic thinking and team leadership."
            },
            {
              icon: Crown,
              title: "Chess Prodigy",
              description: "Strategic chess player with advanced tactical abilities, demonstrating analytical thinking and competitive excellence in tournaments."
            },
            {
              icon: GraduationCap,
              title: "Academic Achievement",
              description: "Outstanding student at Torrey Pines High School with a strong academic record and commitment to educational excellence."
            }
          ]}
        />
      </div>

      <div id="sports" data-section="sports">
        <ProductCardOne
          title="Athletic Excellence"
          description="Showcasing achievements in volleyball and chess - two different worlds united by strategic thinking and competitive excellence"
          tag="Sports & Competition"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "volleyball",
              name: "Volleyball Champion",
              price: "Tournament Level",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227577565-m2n7zxub.jpg",
              imageAlt: "Alessandro volleyball spike"
            },
            {
              id: "chess",
              name: "Chess Strategy Master",
              price: "Prodigy Level",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227152975-5kpaaw28.jpg",
              imageAlt: "Chess tournament position"
            },
            {
              id: "leadership",
              name: "Team Leadership",
              price: "Captain Material",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227660166-xdm0tjtf.jpg",
              imageAlt: "Alessandro leadership portrait"
            }
          ]}
        />
      </div>

      <div id="aviation" data-section="aviation">
        <PricingCardThree
          title="Aviation Journey"
          description="My path to becoming a licensed pilot - combining technical knowledge with practical flight experience"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "ground-school",
              name: "Ground School",
              price: "In Progress",
              buttons: [
                { text: "Learn More", href: "contact" },
                { text: "View Progress", href: "#" }
              ],
              features: [
                "FAA regulations mastery",
                "Weather patterns study",
                "Navigation systems",
                "Flight safety protocols"
              ]
            },
            {
              id: "flight-training",
              badge: "Current Focus",
              badgeIcon: Sparkles,
              name: "Flight Training",
              price: "Active",
              buttons: [
                { text: "View Hours", href: "#" },
                { text: "Contact Instructor", href: "contact" }
              ],
              features: [
                "Solo flight achievements",
                "Cross-country navigation",
                "Emergency procedures",
                "Instrument flight training"
              ]
            }
          ]}
        />
      </div>

      <div id="academics" data-section="academics">
        <MetricCardOne
          title="Academic Excellence"
          description="Outstanding performance at Torrey Pines High School with achievements across multiple areas"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "gpa",
              value: "4.0+",
              title: "GPA",
              description: "Consistent academic excellence across all subjects",
              icon: TrendingUp
            },
            {
              id: "countries",
              value: "3",
              title: "Countries",
              description: "International experience: Brazil, Italy, USA",
              icon: Globe
            },
            {
              id: "languages",
              value: "3+",
              title: "Languages",
              description: "Multilingual abilities from global experience",
              icon: MessageCircle
            },
            {
              id: "activities",
              value: "5+",
              title: "Activities",
              description: "Diverse involvement in sports, academics, aviation",
              icon: Star
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What People Say"
          description="Testimonials from coaches, teachers, and peers who have witnessed Alessandro's excellence"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "volleyball-coach",
              name: "Coach Martinez",
              handle: "@tpvolleyball",
              testimonial: "Alessandro's combination of athletic skill and strategic thinking makes him one of our most valuable players. His leadership on the court is exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227156896-hqw970rl.jpg",
              imageAlt: "Volleyball coach portrait"
            },
            {
              id: "chess-mentor",
              name: "Mr. Thompson",
              handle: "@chessmaster",
              testimonial: "Rarely do I see such natural chess intuition combined with disciplined study. Alessandro's tactical awareness is truly at a prodigy level.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227157457-xznsah4t.jpg",
              imageAlt: "Chess instructor portrait"
            },
            {
              id: "flight-instructor",
              name: "Captain Rodriguez",
              handle: "@aviationpro",
              testimonial: "Alessandro shows remarkable maturity and skill in flight training. His attention to detail and safety protocols is exactly what we look for in future pilots.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227158695-v4nu6xzf.jpg",
              imageAlt: "Flight instructor portrait"
            },
            {
              id: "classmate",
              name: "Sarah",
              handle: "@tpstudent",
              testimonial: "Having Alessandro as a classmate is inspiring. He balances so many activities while maintaining top grades - and still has time to help others with their studies.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227158021-23j1h64h.jpg",
              imageAlt: "Classmate portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Global Journey"
          description="From Rio de Janeiro to Rome to San Diego - a multicultural background shaping a unique perspective"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227154897-zr7lb3nv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227155592-a9dajnjz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227156115-da3qw2n4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227154171-9gom27tm.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions About My Journey"
          sideDescription="Learn more about my background, achievements, and future plans"
          faqs={[
            {
              id: "background",
              title: "Tell me about your international background?",
              content: "I was born in Rio de Janeiro, Brazil, spent most of my childhood in Rome, Italy, and now live in San Diego, California. This multicultural experience has given me a unique global perspective and fluency in multiple languages."
            },
            {
              id: "volleyball",
              title: "What volleyball achievements do you have?",
              content: "I'm an exceptional volleyball player at Torrey Pines High School with tournament experience. I combine athletic skill with strategic thinking and have developed strong leadership abilities on the court."
            },
            {
              id: "chess",
              title: "How did you become a chess prodigy?",
              content: "My chess journey began early, and I've developed advanced tactical abilities through dedicated study and tournament play. I enjoy the strategic thinking required and the competitive excellence it demands."
            },
            {
              id: "aviation",
              title: "What's your aviation experience?",
              content: "I'm currently pursuing my pilot license with passion and dedication. I'm mastering both the technical knowledge through ground school and practical flight skills through hands-on training."
            },
            {
              id: "academics",
              title: "How do you balance academics with all these activities?",
              content: "Time management and passion for each activity help me maintain excellence across academics, sports, and aviation. At Torrey Pines High School, I've learned to prioritize effectively while pursuing what I love."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="My Journey Stories"
          description="Insights and experiences from my path through sports, academics, aviation, and international living"
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "volleyball-lessons",
              category: "Sports",
              title: "Leadership Lessons from Volleyball",
              excerpt: "How team sports taught me strategic thinking, communication, and leadership skills that apply far beyond the court.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227152303-475str3m.jpg",
              imageAlt: "Volleyball team action",
              authorName: "Alessandro Noya",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227151339-k0aze4t8.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "chess-strategy",
              category: "Strategy",
              title: "Chess Mind: Strategic Thinking in Life",
              excerpt: "The parallels between chess strategy and real-life decision making, from sports tactics to academic planning.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227152975-5kpaaw28.jpg",
              imageAlt: "Chess strategic position",
              authorName: "Alessandro Noya",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227151339-k0aze4t8.jpg",
              date: "10 Jan 2025"
            },
            {
              id: "aviation-dreams",
              category: "Aviation",
              title: "Taking Flight: My Aviation Journey",
              excerpt: "From ground school theory to actual flight training - the challenges and excitement of pursuing a pilot license as a high school student.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227153496-80b3qc2d.jpg",
              imageAlt: "Aircraft cockpit view",
              authorName: "Alessandro Noya",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763227151339-k0aze4t8.jpg",
              date: "05 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          tagIcon={Mail}
          title="Let's Connect and Explore Opportunities"
          description="Whether you're interested in my athletic achievements, academic projects, aviation journey, or just want to connect - I'd love to hear from you."
          inputPlaceholder="Enter your email"
          buttonText="Send Message"
          termsText="I respect your privacy and will respond to all genuine inquiries promptly."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Alessandro Noya"
          columns={[
            {
              items: [
                { label: "About Me", href: "about" },
                { label: "Sports", href: "sports" },
                { label: "Aviation", href: "aviation" }
              ]
            },
            {
              items: [
                { label: "Academics", href: "academics" },
                { label: "Blog", href: "blog" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}