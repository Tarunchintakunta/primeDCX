import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-white/10 text-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                     <span className="text-2xl font-bold tracking-tighter text-white">PRIME</span>
                     <span className="text-2xl font-bold tracking-tighter text-primary">DCX</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                    Redefining the standard of online trading with cutting-edge technology and premium service.
                </p>
                <div className="flex gap-4">
                    <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                    <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                    <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6">Products</h4>
                <ul className="space-y-4 text-muted-foreground">
                    <li className="hover:text-primary cursor-pointer">Web Platform</li>
                    <li className="hover:text-primary cursor-pointer">Mobile App</li>
                    <li className="hover:text-primary cursor-pointer">API Trading</li>
                    <li className="hover:text-primary cursor-pointer">Education</li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6">Company</h4>
                <ul className="space-y-4 text-muted-foreground">
                    <li className="hover:text-primary cursor-pointer">About Us</li>
                    <li className="hover:text-primary cursor-pointer">Careers</li>
                    <li className="hover:text-primary cursor-pointer">Contact</li>
                    <li className="hover:text-primary cursor-pointer">Press Types</li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6">Legal</h4>
                <ul className="space-y-4 text-muted-foreground">
                    <li className="hover:text-primary cursor-pointer">Terms of Service</li>
                    <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
                    <li className="hover:text-primary cursor-pointer">Risk Disclosure</li>
                    <li className="hover:text-primary cursor-pointer">Cookies Policy</li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2024 PRIME DCX. All rights reserved.</p>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to Top <ArrowUp className="w-4 h-4" />
            </Button>
        </div>
      </div>
    </footer>
  )
}
