import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleNameSubmit = () => {
    if (name.trim()) {
      setIsEditing(false);
      toast({
        title: "Name updated",
        description: "Your name has been successfully updated.",
      });
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 animate-fade-in">
      {isEditing ? (
        <div className="mb-6 flex gap-2">
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-w-[200px]"
            onKeyPress={(e) => e.key === "Enter" && handleNameSubmit()}
          />
          <Button onClick={handleNameSubmit}>Save</Button>
        </div>
      ) : (
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {name}
        </h1>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        DevOps Engineer
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
        Automating deployments, optimizing pipelines, and ensuring smooth operations in the cloud.
      </p>
      <div className="flex gap-4 mb-12">
        <Button variant="outline" size="icon">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a href="mailto:contact@example.com">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;