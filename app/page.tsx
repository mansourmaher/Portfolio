import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileDown } from "lucide-react";

import Photo from "./_com/Photo";
import Stats from "./_com/Stats";
import Social from "./_com/Social";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24 text-white">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl">Software Developer</span>
            <h1 className="h1">
              Hello I am <br />{" "}
              <span className="text-accent-foreground text-blue-400">
                Maher Mansour
              </span>
            </h1>
            <p className="text-white/80 mt-8 max-w-[500px]">
              I am a software developer, I build web applications using modern
              technologies. There my account on social media, you can follow me
              to get the latest updates.
            </p>
            <div className="flex flex-col xl:flex-row  items-center gap-4 mt-8">
              <Button variant="outline">
                <span className="flex items-center gap-2">
                  Download CV <FileDown className="text-blue-400" />
                </span>
              </Button>
            </div>
          </div>

          <Photo />
        </div>
        <div className="mt-4">
          <Stats />
        </div>
      </div>
    </section>
  );
}
