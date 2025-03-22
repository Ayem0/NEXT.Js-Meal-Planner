import { Button } from "../ui/button";

export default function Footer() {
    return (
        <footer className="border-t">
          <div className="container max-w-6xl mx-auto py-8 md:py-12">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="font-bold text-lg mb-2">Meal Planner</h3>
                <p className="text-muted-foreground">Simplify your meal planning process</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-medium mb-3">Product</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">Testimonials</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Company</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Legal</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-muted-foreground">© 2025 Meal Planner. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Button variant="ghost" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
              </div>
            </div>
          </div>
        </footer>
    )
}