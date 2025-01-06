import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <div className="bg-secondary py-16 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <h2 className="text-4xl font-extrabold text-primary sm:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground">
            Partner with us to unlock your digital potential and achieve
            measurable results.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/contact">Get Started Today</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/services">Explore Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
