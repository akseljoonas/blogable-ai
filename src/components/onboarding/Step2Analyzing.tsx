import { Loader2 } from "lucide-react";

export const Step2Analyzing = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-3">Analysing Your Website...</h2>
      <p className="text-muted-foreground text-lg mb-12">
        We're analyzing your website to get things set up. This includes scanning your pages, pulling key content,
        and summarizing what your business is about – all so we can suggest relevant blog post ideas tailored to you.
      </p>

      <div className="flex flex-col items-center gap-6">
        <Loader2 className="w-16 h-16 text-primary animate-spin" />
        <p className="text-sm text-muted-foreground">This may take up to 2-3 minutes...</p>
      </div>
    </div>
  );
};
