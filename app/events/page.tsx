import Image from "next/image";
import {
  Users,
  Heart,
  Beer,
  Calendar,
  CheckCircle,
  Target,
  TrendingUp,
  Users2,
} from "lucide-react";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function EventFeature({ icon, title }: { icon: any; title: string }) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1 page-transition">
        <PageHeader
          title="Host Your Events"
          description="Versatile venues for all your special occasions"
          backgroundImage="/eve01.jpg?height=400&width=1920"
        />

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-6">
              Event Spaces
            </h2>
            <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, our versatile
              venues can accommodate events of all types and sizes.
            </p>

            <Tabs defaultValue="business" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="business">Business Events</TabsTrigger>
                <TabsTrigger value="social">Social Celebrations</TabsTrigger>
                <TabsTrigger value="brewery">Brewery Events</TabsTrigger>
              </TabsList>

              <TabsContent value="business" className="mt-6">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/me01.jpg?height=400&width=600"
                      alt="Conference Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Conference & Meeting Facilities
                    </h3>
                    <p className="text-lg mb-4">
                      Our state-of-the-art conference facilities provide the
                      perfect setting for productive business meetings,
                      conferences, and corporate events.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <EventFeature
                        icon={<Users />}
                        title="Capacity up to 200 people"
                      />
                      <EventFeature
                        icon={<CheckCircle />}
                        title="Latest AV equipment"
                      />
                      <EventFeature
                        icon={<Calendar />}
                        title="Flexible configurations"
                      />
                      <EventFeature icon={<Beer />} title="Catering options" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      Available Spaces:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Grand Boardroom (seats 20)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Addis Conference Hall (seats 200)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Executive Meeting Rooms (seats 10-30)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Business Center with private workstations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Business Event Packages
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2">
                        Half-Day Package
                      </h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>4-hour room rental</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Coffee break with snacks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Basic AV equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Notepads and pens</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2">
                        Full-Day Package
                      </h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>8-hour room rental</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Morning and afternoon breaks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Lunch buffet</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Full AV setup</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2">
                        Executive Package
                      </h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Full-day premium room</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Gourmet catering</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Dedicated event coordinator</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Beer tasting session</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="social" className="mt-6">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/wed01.jpg?height=400&width=600"
                      alt="Wedding Venue"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Weddings & Celebrations
                    </h3>
                    <p className="text-lg mb-4">
                      Create unforgettable memories with our elegant venues for
                      weddings, anniversaries, birthdays, and other special
                      celebrations.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <EventFeature
                        icon={<Heart />}
                        title="Customizable spaces"
                      />
                      <EventFeature
                        icon={<Users />}
                        title="Capacity up to 300 guests"
                      />
                      <EventFeature
                        icon={<CheckCircle />}
                        title="Event planning services"
                      />
                      <EventFeature
                        icon={<Beer />}
                        title="Custom catering menus"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">
                      Available Spaces:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Grand Ballroom (up to 300 guests)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Garden Terrace (up to 150 guests)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Rooftop Lounge (up to 80 guests)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                        <span>Private Dining Room (up to 40 guests)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    Wedding Packages
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2">
                        Classic Package
                      </h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Venue rental for ceremony and reception</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Basic decor and floral arrangements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Three-course meal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Open bar</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2">
                        Premium Package
                      </h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Venue rental for ceremony and reception</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Elegant decor and floral arrangements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Five-course meal with wine pairing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Premium open bar</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="text-lg font-semibold mb-2">
                        Luxury Package
                      </h4>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Venue rental for ceremony and reception</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Luxury decor and floral arrangements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>
                            Seven-course gourmet meal with premium wine pairing
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                          <span>Top-shelf open bar</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="brewery" className="mt-6">
                <section className="py-16 bg-amber-50">
                  <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">
                      Brewery Marketing Events
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
                          <Target />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Brand Launch Events
                        </h3>
                        <p className="mb-4">
                          Launch your brand in our unique brewery setting,
                          creating memorable experiences for your audience.
                        </p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                            <span>Custom branded space</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                            <span>Professional photography</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                            <span>Social media coverage</span>
                          </li>
                        </ul>
                        <p className="text-amber-800 font-medium">
                          Perfect for product launches and brand activations
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
                          <TrendingUp />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Corporate Networking
                        </h3>
                        <p className="mb-4">
                          Host engaging networking events in our brewery,
                          combining business with unique craft beer experiences.
                        </p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                            <span>Beer and business mixers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                            <span>Industry meetups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                            <span>Professional networking</span>
                          </li>
                        </ul>
                        <p className="text-amber-800 font-medium">
                          Ideal for B2B events and industry gatherings
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
                          <Users2 />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          Influencer Events
                        </h3>
                        <p className="mb-4">
                          Create content-worthy experiences for influencers and
                          social media personalities.
                        </p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                            <span>Instagram-worthy setups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                            <span>Live streaming facilities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                            <span>Content creation spaces</span>
                          </li>
                        </ul>
                        <p className="text-amber-800 font-medium">
                          Perfect for social media campaigns
                        </p>
                      </div>
                    </div>

                    <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold mb-6">
                        Marketing Benefits
                      </h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4">
                            Venue Highlights
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                              <span>
                                Unique brewery backdrop for content creation
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                              <span>
                                Professional lighting and sound systems
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                              <span>
                                Flexible spaces for various event formats
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                              <span>
                                High-speed internet for live streaming
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-4">
                            Marketing Support
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                              <span>Social media promotion of your event</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                              <span>
                                Professional photography package options
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                              <span>
                                Press release support for larger events
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-amber-600 mt-1" />
                              <span>Cross-promotion opportunities</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                        <h4 className="text-xl font-semibold mb-4">
                          Special Marketing Packages
                        </h4>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="p-4 bg-white rounded-lg">
                            <h5 className="font-semibold mb-2">
                              Social Media Package
                            </h5>
                            <ul className="space-y-2 text-sm">
                              <li>• Professional photographer</li>
                              <li>• Social media manager</li>
                              <li>• Content creation guide</li>
                              <li>• Hashtag strategy</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-white rounded-lg">
                            <h5 className="font-semibold mb-2">
                              Brand Launch Package
                            </h5>
                            <ul className="space-y-2 text-sm">
                              <li>• Custom venue styling</li>
                              <li>• Press kit preparation</li>
                              <li>• Media invitations</li>
                              <li>• Event documentation</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-white rounded-lg">
                            <h5 className="font-semibold mb-2">
                              Corporate Package
                            </h5>
                            <ul className="space-y-2 text-sm">
                              <li>• Professional networking</li>
                              <li>• Business presentation setup</li>
                              <li>• Corporate catering</li>
                              <li>• Event reporting</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
