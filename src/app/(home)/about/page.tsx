import React from "react";
import {
  Mail,
  Scale,
  FileText,
  Bell,
  Users,
  Briefcase,
  Heart,
  ArrowRight,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Your Legal Ally
            </h1>
            <p className="mb-8 text-xl text-gray-200">
              At LawCrew.net, we believe legal access is a right, not a
              privilege. We're transforming how people connect with legal
              solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed text-gray-600">
              We started this platform with one simple idea: To serve our
              community. To give people what they need — legal clarity, reliable
              services, and peace of mind — at better-than-reasonable prices or
              even completely free with the support of our growing community.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Scale className="h-8 w-8" />}
              title="Affordable Legal Services"
              description="Access quality legal services at reasonable prices"
            />
            <ServiceCard
              icon={<FileText className="h-8 w-8" />}
              title="Document Automation"
              description="Free tools to generate and manage legal documents"
            />
            <ServiceCard
              icon={<Bell className="h-8 w-8" />}
              title="Smart Reminders"
              description="Never miss important legal and tax deadlines"
            />
            <ServiceCard
              icon={<Users className="h-8 w-8" />}
              title="Expert Community"
              description="Connect with lawyers, CAs & legal experts"
            />
            <ServiceCard
              icon={<Briefcase className="h-8 w-8" />}
              title="Career Opportunities"
              description="Find or offer legal work opportunities"
            />
            <ServiceCard
              icon={<Heart className="h-8 w-8" />}
              title="Community Support"
              description="Join a movement that puts people first"
            />
          </div>
        </div>
      </div>

      {/* Why We Do It Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Why We Do It
            </h2>
            <p className="mb-12 text-center text-xl text-gray-600">
              We've seen too many people struggle to afford basic legal help.
              LawCrew.net exists to level the playing field. With your support —
              be it by joining, sharing, or donating — we can reach even more
              people who need legal support the most.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white">
            Join the Movement
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Be a part of a legal revolution that puts people first. Together, we
            can create a platform that truly serves the community.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:deepak@lawcrew.net"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </a>
            <button className="inline-flex items-center rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Because justice should never come with a heavy price tag.
          </p>
        </div>
      </footer>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}
function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
