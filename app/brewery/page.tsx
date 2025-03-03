import Image from "next/image";
import { Beer, Clock, Beaker, Leaf } from "lucide-react";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BreweryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1 page-transition">
        <PageHeader
          title="Our Craft Brewery"
          description="Experience the art of Ethiopian beer crafting"
          backgroundImage="/beer01.jpg?height=400&width=1920"
        />

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Our Unique In-House Brewery
                </h2>
                <p className="text-lg mb-4">
                  At SEIFERT Hotel, we take pride in our in-house brewery, where
                  we craft both traditional Ethiopian beers and modern craft
                  varieties using locally sourced ingredients from the fertile
                  lands of Bishoftu.
                </p>
                <p className="text-lg mb-6">
                  Our master brewers combine ancient Ethiopian brewing
                  techniques with contemporary methods to create unique flavors
                  that can't be found anywhere else.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-200 text-amber-900 mb-2">
                      <Clock />
                    </div>
                    <h3 className="font-semibold mb-2">Daily Tastings</h3>
                    <p>
                      Join our master brewer for daily tasting sessions at 2pm
                      and 6pm
                    </p>
                  </div>
                </div>
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

        <section className="py-16 bg-amber-900 text-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Brewing Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-800 text-amber-100 mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sourcing</h3>
                <p>
                  We source the finest local ingredients, including Ethiopian
                  barley, hops, and unique spices.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-800 text-amber-100 mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mashing</h3>
                <p>
                  We combine milled grains with hot water to extract the sugars
                  needed for fermentation.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-800 text-amber-100 mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fermentation</h3>
                <p>
                  Our brewers carefully monitor the fermentation process to
                  ensure perfect flavor development.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-800 text-amber-100 mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Finishing</h3>
                <p>
                  Each batch is carefully conditioned and tested before being
                  served to our guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Beer Selection
            </h2>

            <Tabs defaultValue="traditional" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="traditional">
                  Traditional Ethiopian
                </TabsTrigger>
                <TabsTrigger value="craft">Modern Craft</TabsTrigger>
              </TabsList>

              <TabsContent value="traditional" className="mt-6">
                <div className="grid md:grid-cols-3 gap-8">
                  <BeerCard
                    name="Tella Classic"
                    image="/placeholder.svg?height=300&width=300"
                    description="Our signature traditional Ethiopian beer, brewed using ancient methods with barley, gesho, and local herbs."
                    abv="5.2%"
                    type="Traditional Ale"
                  />
                  <BeerCard
                    name="Honey Tella"
                    image="/placeholder.svg?height=300&width=300"
                    description="A sweeter variation of traditional tella, infused with Ethiopian honey for a smooth finish."
                    abv="6.5%"
                    type="Honey Ale"
                  />
                  <BeerCard
                    name="Spiced Tella"
                    image="/placeholder.svg?height=300&width=300"
                    description="Our traditional tella enhanced with a blend of Ethiopian spices for a unique aromatic experience."
                    abv="5.8%"
                    type="Spiced Ale"
                  />
                </div>
              </TabsContent>

              <TabsContent value="craft" className="mt-6">
                <div className="grid md:grid-cols-3 gap-8">
                  <BeerCard
                    name="Addis IPA"
                    image="/placeholder.svg?height=300&width=300"
                    description="A hoppy IPA with citrus notes, brewed with a blend of imported and local Ethiopian hops."
                    abv="6.8%"
                    type="India Pale Ale"
                  />
                  <BeerCard
                    name="Coffee Stout"
                    image="/placeholder.svg?height=300&width=300"
                    description="A rich, dark stout infused with Ethiopian coffee beans for a complex, roasted flavor profile."
                    abv="7.2%"
                    type="Coffee Stout"
                  />
                  <BeerCard
                    name="Berbere Red Ale"
                    image="/placeholder.svg?height=300&width=300"
                    description="A malty red ale with a subtle kick of berbere spice, creating a uniquely Ethiopian craft beer."
                    abv="5.5%"
                    type="Spiced Red Ale"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-amber-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Brewery Experiences
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
                  <Beer />
                </div>
                <h3 className="text-xl font-semibold mb-2">Guided Tours</h3>
                <p className="mb-4">
                  Take a behind-the-scenes tour of our brewery and learn about
                  the art and science of beer making.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>45-minute guided tour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Learn about brewing equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Understand the brewing process</span>
                  </li>
                </ul>
                <p className="text-amber-800 font-medium">
                  Daily at 11am, 2pm, and 4pm
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
                  <Beaker />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tasting Sessions</h3>
                <p className="mb-4">
                  Sample our range of traditional and craft beers with guidance
                  from our expert brewers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>6 beer flight sampling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Paired with Ethiopian snacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Expert flavor notes and guidance</span>
                  </li>
                </ul>
                <p className="text-amber-800 font-medium">
                  Daily at 2pm and 6pm
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900 mb-4">
                  <Leaf />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Brewing Workshops
                </h3>
                <p className="mb-4">
                  Get hands-on experience brewing your own beer under the
                  guidance of our master brewers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>3-hour interactive workshop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Create your own recipe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-amber-600 mt-2"></div>
                    <span>Take home a bottle of your creation</span>
                  </li>
                </ul>
                <p className="text-amber-800 font-medium">
                  Saturdays at 10am (Reservation required)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function BeerCard({
  name,
  image,
  description,
  abv,
  type,
}: {
  name: string;
  image: string;
  description: string;
  abv: string;
  type: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-64 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <div className="flex gap-4 text-sm text-amber-800 mb-3">
          <span>{type}</span>
          <span>ABV: {abv}</span>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>
    </div>
  );
}
