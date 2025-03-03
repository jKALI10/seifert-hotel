import Image from "next/image";
import { Beer, Coffee, Utensils } from "lucide-react";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function MenuPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1 page-transition">
        <PageHeader
          title="Our Menu"
          description="Experience Ethiopian cuisine with a modern twist"
          backgroundImage="/menu01.jpg?height=600&width=1920&text=Ethiopian+Cuisine"
        />

        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="food" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="food">Food Menu</TabsTrigger>
                <TabsTrigger value="drinks">Drinks</TabsTrigger>
                <TabsTrigger value="brewery">Brewery Selection</TabsTrigger>
              </TabsList>

              <TabsContent value="food" className="mt-6">
                <div className="grid gap-8">
                  {/* Ethiopian Specialties */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Utensils className="h-6 w-6 text-amber-600" />
                      Ethiopian Specialties
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <MenuItem
                        name="Doro Wat"
                        description="Traditional Ethiopian chicken stew with berbere sauce, served with injera"
                        price="280 ETB"
                        image="/placeholder.svg?height=300&width=400&text=Doro+Wat"
                        tags={["Spicy", "Traditional"]}
                      />
                      <MenuItem
                        name="Tibs Firfir"
                        description="Sautéed beef strips with injera pieces, onions, and peppers"
                        price="260 ETB"
                        image="/placeholder.svg?height=300&width=400&text=Tibs+Firfir"
                        tags={["Popular"]}
                      />
                      <MenuItem
                        name="Shiro"
                        description="Spiced ground chickpea stew, served with injera"
                        price="180 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Vegetarian"]}
                      />
                      <MenuItem
                        name="Beyaynetu"
                        description="Colorful platter of various vegetarian dishes served on injera"
                        price="220 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Vegetarian", "Popular"]}
                      />
                    </div>
                  </div>

                  {/* International Cuisine */}
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Utensils className="h-6 w-6 text-amber-600" />
                      International Cuisine
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <MenuItem
                        name="Grilled Salmon"
                        description="Fresh salmon fillet with herbs, served with seasonal vegetables"
                        price="320 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Healthy"]}
                      />
                      <MenuItem
                        name="Beef Tenderloin"
                        description="Premium cut beef with red wine sauce and truffle mashed potatoes"
                        price="380 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Chef's Special"]}
                      />
                      <MenuItem
                        name="Mediterranean Pasta"
                        description="Fresh pasta with sun-dried tomatoes, olives, and feta cheese"
                        price="240 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Vegetarian"]}
                      />
                      <MenuItem
                        name="Asian Stir-Fry"
                        description="Wok-fried vegetables and tofu in ginger-soy sauce"
                        price="220 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Vegan", "Healthy"]}
                      />
                    </div>
                  </div>

                  {/* Desserts */}
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Utensils className="h-6 w-6 text-amber-600" />
                      Desserts
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <MenuItem
                        name="Ethiopian Coffee Tiramisu"
                        description="Traditional tiramisu with Ethiopian coffee infusion"
                        price="160 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Signature"]}
                      />
                      <MenuItem
                        name="Honey & Date Cake"
                        description="Warm date cake with Ethiopian honey and vanilla ice cream"
                        price="140 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Popular"]}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="drinks" className="mt-6">
                <div className="grid gap-8">
                  {/* Coffee & Tea */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Coffee className="h-6 w-6 text-amber-600" />
                      Ethiopian Coffee & Tea
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <MenuItem
                        name="Traditional Coffee Ceremony"
                        description="Full Ethiopian coffee ceremony experience with snacks"
                        price="180 ETB"
                        image="/placeholder.svg?height=300&width=400&text=Ethiopian+Coffee+Ceremony"
                        tags={["Traditional", "Experience"]}
                      />
                      <MenuItem
                        name="Spiced Ethiopian Tea"
                        description="Black tea with Ethiopian spices and herbs"
                        price="80 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Popular"]}
                      />
                    </div>
                  </div>

                  {/* Cocktails */}
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Beer className="h-6 w-6 text-amber-600" />
                      Signature Cocktails
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <MenuItem
                        name="Ethiopian Sunset"
                        description="Tej-based cocktail with passion fruit and lime"
                        price="180 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Signature"]}
                      />
                      <MenuItem
                        name="Berbere Bloody Mary"
                        description="Classic Bloody Mary with Ethiopian berbere spice"
                        price="160 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Spicy"]}
                      />
                      <MenuItem
                        name="Coffee Martini"
                        description="Ethiopian coffee-infused vodka martini"
                        price="170 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Popular"]}
                      />
                      <MenuItem
                        name="Honey Wine Spritz"
                        description="Traditional tej with prosecco and citrus"
                        price="160 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Traditional"]}
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="brewery" className="mt-6">
                <div className="grid gap-8">
                  {/* Traditional Beers */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Beer className="h-6 w-6 text-amber-600" />
                      Traditional Ethiopian Beers
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <MenuItem
                        name="Tella Classic"
                        description="Traditional Ethiopian beer brewed with barley, gesho, and local herbs"
                        price="120 ETB"
                        image="/placeholder.svg?height=300&width=400&text=Tella+Classic"
                        tags={["Traditional", "House Brew"]}
                        details="ABV: 5.2%"
                      />
                      <MenuItem
                        name="Honey Tella"
                        description="Traditional tella infused with Ethiopian honey"
                        price="140 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["House Special"]}
                        details="ABV: 6.5%"
                      />
                    </div>
                  </div>

                  {/* Craft Beers */}
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Beer className="h-6 w-6 text-amber-600" />
                      SEIFERT Craft Beers
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <MenuItem
                        name="Addis IPA"
                        description="Hoppy IPA with citrus notes, brewed with local Ethiopian hops"
                        price="150 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Popular"]}
                        details="ABV: 6.8%"
                      />
                      <MenuItem
                        name="Coffee Stout"
                        description="Rich stout infused with Ethiopian coffee beans"
                        price="160 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Signature"]}
                        details="ABV: 7.2%"
                      />
                      <MenuItem
                        name="Berbere Red Ale"
                        description="Malty red ale with a subtle kick of berbere spice"
                        price="150 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Spicy"]}
                        details="ABV: 5.5%"
                      />
                      <MenuItem
                        name="Highland Wheat"
                        description="Light and refreshing wheat beer with hints of Ethiopian herbs"
                        price="140 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Light"]}
                        details="ABV: 4.8%"
                      />
                    </div>
                  </div>

                  {/* Tasting Flights */}
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Beer className="h-6 w-6 text-amber-600" />
                      Beer Flights
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <MenuItem
                        name="Traditional Flight"
                        description="Sample our traditional Ethiopian beers with light snacks"
                        price="220 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Experience"]}
                        details="4 x 150ml"
                      />
                      <MenuItem
                        name="Craft Beer Flight"
                        description="Try our selection of house-brewed craft beers"
                        price="280 ETB"
                        image="/placeholder.svg?height=200&width=300"
                        tags={["Popular"]}
                        details="4 x 150ml"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  details?: string;
}

function MenuItem({
  name,
  description,
  price,
  image,
  tags,
  details,
}: MenuItemProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <span className="text-lg font-bold text-amber-600">{price}</span>
        </div>
        <p className="text-muted-foreground mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800"
            >
              {tag}
            </span>
          ))}
        </div>
        {details && (
          <p className="mt-2 text-sm text-muted-foreground">{details}</p>
        )}
      </CardContent>
    </Card>
  );
}
