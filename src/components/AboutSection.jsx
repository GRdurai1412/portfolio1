import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return(<section id="about" className="py-24 px-4 relative" >
        <div className="container mx-auto max-w-5xl" >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >
                About<span className="text-primary" > Me </span>
            </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 item-center ">
            <div className="space-y-6 mt-10">
                <h3 className="text-2xl font-semibold" >Passionate Web Developer</h3>
                <p className="text-muted-foreground" >
                    With over 3 month of InternShip I experience in web development ,I Specialize 
                    in creating responsive ,accessible, and performat web 
                    applications using modern technologies.
                </p>
                  <p className="text-muted-foreground" >
                    I'm passionate about creating elegant solutions complex 
                    problems and I'm constantly learning new technologies and
                    techniques to stay at the foefront of the over-evolcving web 
                    landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button" >
                        Get IN Touch

                    </a>
                   <a
  href="/duraipandi(cse-2025).pdf"
  download="My_Resume.pdf"
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>

                </div>
            </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full  bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                        <h4 className="text-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">Creating responsive, user-friendly websites. Focused on performance and clean code</p>
                    </div>

                </div>
            </div>
             <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full  bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                    </div>
                      <div className="text-left">
                        <h4 className="text-semibold text-lg">Building Future-Ready Solutions</h4>
                        <p className="text-muted-foreground">I build clean, maintainable, and future-ready web solutions optimized for performance, accessibility, and user experience.</p>
                    </div>

               
            </div>
            </div>
              <div className="gradient-border p-6 card-hover"> 
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full  bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                      <div className="text-left">
                        <h4 className="text-semibold text-lg">Passion for Modern Technologies</h4>
                        <p className="text-muted-foreground">I use modern web tech like SPA, PWA, REST APIs, and tools like Git and Docker for scalable, high-performance apps.</p>
                    </div>

               
           
            </div>
            </div>
          </div>
               

            

        </div>
        </div>
    </section>
    );
};