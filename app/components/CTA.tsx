import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <div className="bg-secondary py-16 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-primary sm:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Join the ranks of industry leaders who trust us with their digital
            future.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/contact">Start Your Journey</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/services">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
