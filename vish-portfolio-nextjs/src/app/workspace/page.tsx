import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Workspace",
  description: "Explore Vishal Thimmaiah's portfolio, projects, and professional work as an IT Business Analyst.",
};

export default function Workspace() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative">
        <section className="w-full py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">My Workspace</h1>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
              <p className="text-lg text-muted-foreground">
                This section is currently under construction.
                <br />
                <br />
                Coming soon: Portfolio projects, case studies, professional work samples, and downloadable resources.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
