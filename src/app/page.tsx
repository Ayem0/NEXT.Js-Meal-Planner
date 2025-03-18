import { AnimatedText } from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section - improved centering */}
      <section className="container max-w-6xl mx-auto pt-10 md:pt-24 pb-16 md:pb-32">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-10">
          <AnimatedText text="Plan Your Meals With Ease" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Create personalized meal plans tailored to your preferences, dietary requirements, and schedule.
          </p>
          <Button size="lg" className="px-8">
            Get Started <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Main meal planner form section - improved centering */}
      <section className="container max-w-6xl mx-auto pb-16 md:pb-24">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Customize Your Meal Plan</CardTitle>
            <CardDescription>
              Fill out the details below to generate your personalized meal plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="preferences" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>
              
              <TabsContent value="preferences" className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="meals-per-day">Meals per day</Label>
                    <Select defaultValue="3">
                      <SelectTrigger id="meals-per-day">
                        <SelectValue placeholder="Select number of meals" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 meals</SelectItem>
                        <SelectItem value="3">3 meals</SelectItem>
                        <SelectItem value="4">4 meals</SelectItem>
                        <SelectItem value="5">5 meals</SelectItem>
                        <SelectItem value="6">6 meals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="plan-duration">Plan duration (days)</Label>
                    <Select defaultValue="7">
                      <SelectTrigger id="plan-duration">
                        <SelectValue placeholder="Select plan duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 days</SelectItem>
                        <SelectItem value="5">5 days</SelectItem>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="diet-type">Diet type</Label>
                    <Select>
                      <SelectTrigger id="diet-type">
                        <SelectValue placeholder="Select diet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="paleo">Paleo</SelectItem>
                        <SelectItem value="keto">Keto</SelectItem>
                        <SelectItem value="mediterranean">Mediterranean</SelectItem>
                        <SelectItem value="low-carb">Low Carb</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="calories" className="mb-2 block">Daily calorie target</Label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        defaultValue={[2000]}
                        max={4000}
                        min={1200}
                        step={100}
                        className="flex-1"
                      />
                      <span className="w-12 text-right">2000</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="meal-prep" />
                    <Label htmlFor="meal-prep">Optimize for meal prep</Label>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ingredients" className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="include-ingredients" className="mb-2 block">Ingredients to include</Label>
                    <Textarea
                      id="include-ingredients"
                      placeholder="Enter ingredients separated by commas (chicken, rice, broccoli, etc.)"
                      className="min-h-24"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="exclude-ingredients" className="mb-2 block">Ingredients to exclude</Label>
                    <Textarea
                      id="exclude-ingredients"
                      placeholder="Enter ingredients to avoid separated by commas (nuts, dairy, seafood, etc.)"
                      className="min-h-24"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="pantry-items" />
                    <Label htmlFor="pantry-items">Only use items in my pantry</Label>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="schedule" className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cooking-time" className="mb-2 block">Maximum cooking time (minutes)</Label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        defaultValue={[30]}
                        max={120}
                        min={10}
                        step={5}
                        className="flex-1"
                      />
                      <span className="w-12 text-right">30</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="meal-variety" className="mb-2 block">Meal variety</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="meal-variety">
                        <SelectValue placeholder="Select meal variety" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low (repeat meals often)</SelectItem>
                        <SelectItem value="medium">Medium (some repeats)</SelectItem>
                        <SelectItem value="high">High (mostly unique meals)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="shopping-frequency" className="mb-2 block">Shopping frequency</Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger id="shopping-frequency">
                        <SelectValue placeholder="Select shopping frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="every-other-day">Every other day</SelectItem>
                        <SelectItem value="twice-weekly">Twice weekly</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="leftovers" defaultChecked />
                    <Label htmlFor="leftovers">Plan for leftovers</Label>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Generate Meal Plan</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Features section - improved centering */}
      <section id="features" className="container max-w-6xl mx-auto py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Features</h2>
          <p className="text-muted-foreground mt-2">Everything you need to plan your meals efficiently</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Customized meal plans based on your dietary preferences, restrictions, and goals.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Smart Shopping Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Automatically generated shopping lists that minimize food waste and optimize shopping trips.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recipe Database</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access to thousands of recipes that match your preferences and dietary needs.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}