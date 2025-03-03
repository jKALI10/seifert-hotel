import Image from "next/image";
import { MapPin, Clock, Award } from "lucide-react";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1 page-transition">
        <PageHeader
          backgroundImage="./ho02.jpg"
          title="About Us"
          description="Discover the story behind SIFRET Hotel and our commitment to excellence"
        />

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg mb-4">
                  Founded in 2015, SIFRET Hotel was born from a vision to create
                  a unique hospitality experience that celebrates Ethiopian
                  culture while offering world-class amenities and service.
                </p>
                <p className="text-lg mb-4">
                  Our name "SIFRET" draws inspiration from the Amharic word for
                  "hospitality," reflecting our commitment to providing guests
                  with an authentic and welcoming experience.
                </p>
                <p className="text-lg mb-4">
                  What sets us apart is our dedication to blending traditional
                  Ethiopian hospitality with modern luxury, creating a space
                  where guests can immerse themselves in local culture while
                  enjoying all the comforts of a premium hotel.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/ho01.jpg?height=400&width=600"
                  alt="SIFRET Hotel History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
                  <Award />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p>
                  We strive for excellence in every aspect of our service, from
                  the quality of our accommodations to the attentiveness of our
                  staff.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
                  <MapPin />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Cultural Authenticity
                </h3>
                <p>
                  We celebrate Ethiopian culture and traditions, offering guests
                  an authentic experience that honors our heritage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
                  <Clock />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p>
                  We continuously innovate to enhance the guest experience, as
                  exemplified by our unique in-house brewery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Location
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/ho03.jpg?height=400&width=600"
                  alt="SIFRET Hotel Location"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  In the Heart of Addis Ababa
                </h3>
                <p className="text-lg mb-4">
                  SIFRET Hotel is located on lorem raod in Bishoftu, Ethiopia's
                  vibrant city. Our central location provides easy access to:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Major business districts and corporate offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>
                      Popular tourist attractions including the and Holy
                      Cathedral
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Shopping centers and local markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>
                      Fine dining restaurants and entertainment venues
                    </span>
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-amber-800">
                  <MapPin className="h-5 w-5" />
                  <span>Bishoftu, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
