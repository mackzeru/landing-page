import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="container py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Ready to find your next hire?
      </h2>
      <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
        Spin up your first search in under a minute. No credit card required.
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <Button variant="default" size="lg" className="pulse-btn">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          Talk to sales
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
