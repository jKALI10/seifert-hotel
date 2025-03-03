import type React from "react";
import Image from "next/image";
import { Wifi, Tv, Coffee, Utensils } from "lucide-react";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RoomsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1 page-transition">
        <PageHeader
          backgroundImage="./ex01.jpg"
          title="Our Rooms & Suites"
          description="Luxurious accommodations for a comfortable stay"
        />

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Luxurious Accommodations
            </h2>

            <Tabs defaultValue="standard" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="standard">Standard</TabsTrigger>
                <TabsTrigger value="deluxe">Deluxe</TabsTrigger>
                <TabsTrigger value="suite">Suite</TabsTrigger>
                <TabsTrigger value="executive">Executive</TabsTrigger>
              </TabsList>

              <TabsContent value="standard" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/stan01.jpg?height=400&width=600"
                      alt="Standard Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Standard Room
                    </h3>
                    <p className="mb-4">
                      Our comfortable standard rooms offer all the essentials
                      for a pleasant stay, featuring modern amenities and
                      elegant décor.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <RoomFeature icon={<Wifi />} title="Free Wi-Fi" />
                      <RoomFeature icon={<Tv />} title="Flat-screen TV" />
                      <RoomFeature icon={<Coffee />} title="Coffee Maker" />
                      <RoomFeature icon={<Utensils />} title="Room Service" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      Room Details:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Queen-sized bed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>En-suite bathroom with shower</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Air conditioning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Work desk</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>In-room safe</span>
                      </li>
                    </ul>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold">4000 ETB/night</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="deluxe" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/del01.jpg?height=400&width=600"
                      alt="Deluxe Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Deluxe Room</h3>
                    <p className="mb-4">
                      Our deluxe rooms offer additional space and premium
                      amenities for guests seeking extra comfort during their
                      stay.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <RoomFeature icon={<Wifi />} title="High-Speed Wi-Fi" />
                      <RoomFeature icon={<Tv />} title="Smart TV" />
                      <RoomFeature icon={<Coffee />} title="Premium Coffee" />
                      <RoomFeature
                        icon={<Utensils />}
                        title="24/7 Room Service"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      Room Details:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>King-sized bed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Spacious bathroom with tub and shower</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Sitting area</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Minibar with complimentary items</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Bathrobes and slippers</span>
                      </li>
                    </ul>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold">5080 ETB/night</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="suite" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/ex01.jpg?height=400&width=600"
                      alt="Suite"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Luxury Suite
                    </h3>
                    <p className="mb-4">
                      Our spacious suites provide a luxurious home away from
                      home with separate living areas and premium amenities.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <RoomFeature icon={<Wifi />} title="Premium Wi-Fi" />
                      <RoomFeature icon={<Tv />} title="Multiple TVs" />
                      <RoomFeature icon={<Coffee />} title="Espresso Machine" />
                      <RoomFeature
                        icon={<Utensils />}
                        title="In-Suite Dining"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      Suite Details:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>King-sized bed with premium linens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Separate living room</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Luxury bathroom with jacuzzi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Private balcony with city view</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Dining area</span>
                      </li>
                    </ul>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold">6000 ETB/night</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="executive" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/stan01.jpg?height=400&width=600"
                      alt="Executive Suite"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Executive Suite
                    </h3>
                    <p className="mb-4">
                      Our executive suites offer the ultimate luxury experience
                      with expansive space and exclusive amenities for
                      discerning travelers.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <RoomFeature icon={<Wifi />} title="Ultra-Fast Wi-Fi" />
                      <RoomFeature icon={<Tv />} title="Home Theater System" />
                      <RoomFeature icon={<Coffee />} title="Full Bar Setup" />
                      <RoomFeature
                        icon={<Utensils />}
                        title="Personal Chef Option"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      Suite Details:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>King-sized bed with luxury linens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Separate living and dining areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Executive lounge access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Complimentary brewery tour and tasting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Private terrace with panoramic views</span>
                      </li>
                    </ul>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold">7000 ETB/night</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                All Rooms Include
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">Comfort</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Climate control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Premium bedding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Blackout curtains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Soundproofed rooms</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">Technology</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>High-speed internet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Flat-screen TV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>USB charging ports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Electronic safe</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">Amenities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Complimentary toiletries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Bottled water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Coffee and tea facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                      <span>Daily housekeeping</span>
                    </li>
                  </ul>
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

function RoomFeature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-900">
        {icon}
      </div>
      <span>{title}</span>
    </div>
  );
}
