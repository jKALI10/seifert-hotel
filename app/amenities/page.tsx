import type React from "react";
import Image from "next/image";
import {
  Beer,
  Calendar,
  Coffee,
  Dumbbell,
  PocketIcon as Pool,
  SpadeIcon as Spa,
  Utensils,
  Wifi,
  Car,
  Briefcase,
  ShieldCheck,
  Shirt,
} from "lucide-react";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function AmenitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1 page-transition">
        <PageHeader
          backgroundImage="./am01.jpg"
          title="Our Amenities"
          description="Experience luxury and comfort with our premium amenities"
        />

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Premium Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <AmenityCard
                icon={<Spa />}
                title="Luxury Spa"
                description="Relax and rejuvenate with our range of spa treatments"
              />
              <AmenityCard
                icon={<Pool />}
                title="Swimming Pool"
                description="Enjoy our outdoor pool with a view of the city"
              />
              <AmenityCard
                icon={<Beer />}
                title="Craft Brewery"
                description="Taste our in-house brewed traditional and modern beers"
              />
              <AmenityCard
                icon={<Calendar />}
                title="Event Spaces"
                description="Host your special events in our versatile venues"
              />
              <AmenityCard
                icon={<Utensils />}
                title="Fine Dining"
                description="Savor local and international cuisine at our restaurants"
              />
              <AmenityCard
                icon={<Dumbbell />}
                title="Fitness Center"
                description="Stay fit with our state-of-the-art equipment"
              />
              <AmenityCard
                icon={<Wifi />}
                title="High-Speed WiFi"
                description="Stay connected throughout your stay"
              />
              <AmenityCard
                icon={<Coffee />}
                title="Coffee Bar"
                description="Experience authentic Ethiopian coffee ceremonies"
              />
              <AmenityCard
                icon={<Car />}
                title="Shuttle Service"
                description="Complimentary airport and local area transfers"
              />
              <AmenityCard
                icon={<Briefcase />}
                title="Business Center"
                description="Fully equipped for all your business needs"
              />
              <AmenityCard
                icon={<ShieldCheck />}
                title="24/7 Security"
                description="Round-the-clock security for your peace of mind"
              />
              <AmenityCard
                icon={<Shirt />}
                title="Laundry Service"
                description="Same-day laundry and dry cleaning services"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Amenities
            </h2>

            {/* Spa Feature */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/sp01.jpg?height=400&width=600"
                  alt="SIFRET Spa"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Luxury Spa & Wellness
                </h3>
                <p className="text-lg mb-4">
                  Our spa offers a sanctuary of relaxation and rejuvenation.
                  Indulge in a range of treatments inspired by Ethiopian
                  traditions and international techniques.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>
                      Massage therapies using local Ethiopian oils and herbs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Facial treatments for all skin types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Body scrubs and wraps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Steam room and sauna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Relaxation lounge with herbal teas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Swimming Pool Feature */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4">
                  Outdoor Swimming Pool
                </h3>
                <p className="text-lg mb-4">
                  Our stunning outdoor pool offers a refreshing escape with
                  panoramic views of Addis Ababa. Relax on comfortable loungers
                  while enjoying poolside service.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>
                      Temperature-controlled water for year-round comfort
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>
                      Poolside bar serving refreshing drinks and light snacks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Complimentary towel service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Dedicated children's pool area</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/sw01.jpg?height=400&width=600"
                  alt="SIFRET Swimming Pool"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Dining Feature */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/din01.jpg?height=400&width=600"
                  alt="SIFRET Dining"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Fine Dining Experience
                </h3>
                <p className="text-lg mb-4">
                  Our restaurants offer a culinary journey through Ethiopian
                  flavors and international cuisine, complemented by our
                  in-house craft beers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>
                      Habesha Restaurant - Authentic Ethiopian cuisine
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>
                      Fusion Bistro - International dishes with local influences
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>
                      Brew Lounge - Casual dining paired with our craft beers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>
                      Rooftop Bar - Cocktails and appetizers with city views
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>24-hour room service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function AmenityCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
