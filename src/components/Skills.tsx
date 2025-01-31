import { Cloud, Container, Git, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: <Cloud className="h-8 w-8 mb-4 text-primary" />,
      title: "Cloud Platforms",
      description: "AWS, GCP, Azure",
    },
    {
      icon: <Container className="h-8 w-8 mb-4 text-primary" />,
      title: "Containerization",
      description: "Docker, Kubernetes",
    },
    {
      icon: <Git className="h-8 w-8 mb-4 text-primary" />,
      title: "Version Control",
      description: "Git, GitHub Actions",
    },
    {
      icon: <Server className="h-8 w-8 mb-4 text-primary" />,
      title: "Infrastructure",
      description: "Terraform, Ansible",
    },
  ];

  return (
    <div className="py-16 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <Card key={index} className="border border-border hover:border-primary transition-colors">
            <CardContent className="flex flex-col items-center text-center p-6">
              {skill.icon}
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;