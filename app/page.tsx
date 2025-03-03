import type React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Beer,
  Calendar,
  MapPin,
  PocketIcon as Pool,
  SpadeIcon as Spa,
} from "lucide-react";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full">
          <Image
            src="/ho01.jpg?height=1080&width=1920"
            alt="SEIFERT Hotel"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              SEIFERT HOTEL
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Where culture meets craft, offering a unique stay with our
              in-house brews and top-tier amenities in the heart of Bishoftu,
              Ethiopia.
            </p>
            <div className="flex gap-4 mt-8">
              <Link
                href="/rooms"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium text-lg"
              >
                Explore Rooms
              </Link>
              <Link
                href="/brewery"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-white/20"
              >
                Discover Our Brewery
              </Link>
            </div>
          </div>
        </section>

        {/* About Section Preview */}
        <section className="py-16 bg-amber-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Experience Ethiopian Luxury
                </h2>
                <p className="text-lg mb-4">
                  SEIFERT Hotel blends traditional Ethiopian hospitality with
                  modern luxury, creating a unique experience for both leisure
                  and business travelers.
                </p>
                <p className="text-lg mb-6">
                  Located in the heart of Addis Ababa, our hotel offers easy
                  access to the city's cultural landmarks, business districts,
                  and entertainment venues.
                </p>
                <div className="flex items-center gap-2 text-amber-800 mb-6">
                  <MapPin className="h-5 w-5" />
                  <span>Bishoftu Road, Bishoftu, Ethiopia</span>
                </div>
                <Link
                  href="/about"
                  className="text-amber-600 font-medium hover:underline"
                >
                  Learn more about us →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/ho02.jpg?height=400&width=300"
                  alt="Hotel Exterior"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover h-full"
                />
                <div className="grid grid-rows-2 gap-4">
                  <Image
                    src="/ho03.jpg?height=200&width=300"
                    alt="Hotel Lobby"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full"
                  />
                  <Image
                    src="/ho04.jpg?height=200&width=300"
                    alt="Hotel Restaurant"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section Preview */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-6">
              Premium Amenities
            </h2>
            <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
              Discover our range of world-class amenities designed to make your
              stay comfortable and memorable.
            </p>
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
            </div>
            <div className="text-center mt-8">
              <Link
                href="/amenities"
                className="text-amber-600 font-medium hover:underline"
              >
                View all amenities →
              </Link>
            </div>
          </div>
        </section>

        {/* Brewery Highlight Section */}
        <section className="py-16 bg-amber-900 text-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Our Unique In-House Brewery
                </h2>
                <p className="text-lg mb-4">
                  Experience the art of Ethiopian beer crafting at SEIFERT
                  Hotel's in-house brewery, where tradition meets innovation.
                </p>
                <p className="text-lg mb-6">
                  We brew traditional tella using ancient Ethiopian methods
                  alongside modern craft beers infused with local ingredients
                  and flavors.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-amber-800 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Daily Tastings</h3>
                    <p>Join our master brewer for daily tasting sessions</p>
                  </div>
                  <div className="bg-amber-800 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Brewery Tours</h3>
                    <p>Learn about the brewing process with guided tours</p>
                  </div>
                </div>
                <Link
                  href="/brewery"
                  className="inline-block bg-white text-amber-900 hover:bg-amber-100 px-6 py-3 rounded-md font-medium"
                >
                  Explore Our Brewery
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/bre01.jpg?height=400&width=600"
                  alt="SEIFERT Brewery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Preview */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-6">
              Luxurious Accommodations
            </h2>
            <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
              Our rooms and suites offer the perfect blend of comfort, luxury,
              and Ethiopian hospitality.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <RoomCard
                title="Standard Room"
                image="/stan01.jpg?height=300&width=400"
                description="Comfortable rooms with all essential amenities for a pleasant stay."
              />
              <RoomCard
                title="Deluxe Room"
                image="/del01.jpg?height=300&width=400"
                description="Spacious rooms with premium amenities and elegant décor."
              />
              <RoomCard
                title="Luxury Suite"
                image="/ex01.jpg?height=300&width=400"
                description="Expansive suites with separate living areas and exclusive amenities."
              />
            </div>
            <div className="text-center mt-8">
              <Link
                href="/rooms"
                className="text-amber-600 font-medium hover:underline"
              >
                View all room types →
              </Link>
            </div>
          </div>
        </section>

        {/* Events Preview */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-6">
              Host Your Events
            </h2>
            <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
              From business conferences to weddings, our versatile venues can
              accommodate events of all types and sizes.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <EventCard
                title="Conferences & Meetings"
                image="/me01.jpg?height=300&width=400"
                description="State-of-the-art facilities for business events of all sizes"
              />
              <EventCard
                title="Weddings & Celebrations"
                image="/wed01.jpg?height=300&width=400"
                description="Beautiful venues for your special day with customized catering"
              />
              <EventCard
                title="Beer Tasting Events"
                image="/bet01.jpg?height=300&width=400"
                description="Unique brewery events featuring our craft beers and local cuisine"
              />
            </div>
            <div className="text-center mt-8">
              <Link
                href="/events"
                className="text-amber-600 font-medium hover:underline"
              >
                Explore our event options →
              </Link>
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

function RoomCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link
          href="/rooms"
          className="text-amber-600 font-medium hover:underline"
        >
          View details →
        </Link>
      </div>
    </div>
  );
}

function EventCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link
          href="/events"
          className="text-amber-600 font-medium hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
