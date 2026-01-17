import { useState } from "react";
import { Bot, Wand2, Layers, Palette, Download, RefreshCw, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

const stylePresets = [
  { name: "Photorealistic", emoji: "📷" },
  { name: "Anime", emoji: "🎌" },
  { name: "Oil Painting", emoji: "🎨" },
  { name: "Digital Art", emoji: "💻" },
  { name: "Watercolor", emoji: "🖌️" },
  { name: "3D Render", emoji: "🧊" },
];

const sampleImages = [
  { prompt: "A mystical forest at sunset with glowing mushrooms", style: "Digital Art" },
  { prompt: "Cyberpunk city street in the rain", style: "Photorealistic" },
  { prompt: "Serene Japanese garden with cherry blossoms", style: "Anime" },
  { prompt: "Abstract cosmic nebula with vibrant colors", style: "Digital Art" },
];

export default function AIImageGenDemo() {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Photorealistic");
  const [quality, setQuality] = useState([75]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <Link to="/projects" className="text-primary hover:underline mb-4 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
              <Bot className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">AI Image Generator</h1>
              <p className="text-muted-foreground">Text-to-image with style transfer & inpainting</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Stable Diffusion", "FastAPI", "Redis", "S3", "React"].map(tech => (
              <span key={tech} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Generator Interface */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Controls */}
          <div className="space-y-6 animate-fade-in stagger-1">
            {/* Prompt Input */}
            <div className="glass p-6 rounded-xl">
              <label className="block text-sm font-medium text-foreground mb-3">
                <Wand2 className="h-4 w-4 inline mr-2" />
                Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to create..."
                className="w-full h-24 px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-primary"
              />
            </div>

            {/* Style Presets */}
            <div className="glass p-6 rounded-xl">
              <label className="block text-sm font-medium text-foreground mb-3">
                <Palette className="h-4 w-4 inline mr-2" />
                Style Preset
              </label>
              <div className="grid grid-cols-3 gap-2">
                {stylePresets.map((style) => (
                  <button
                    key={style.name}
                    onClick={() => setSelectedStyle(style.name)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      selectedStyle === style.name
                        ? "bg-primary/20 border border-primary/50"
                        : "bg-muted/30 border border-transparent hover:bg-muted/50"
                    }`}
                  >
                    <div className="text-xl mb-1">{style.emoji}</div>
                    <div className="text-xs text-muted-foreground">{style.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="glass p-6 rounded-xl">
              <label className="block text-sm font-medium text-foreground mb-3">
                <Settings className="h-4 w-4 inline mr-2" />
                Quality
              </label>
              <Slider
                value={quality}
                onValueChange={setQuality}
                max={100}
                step={1}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Draft</span>
                <span>{quality}%</span>
                <span>Ultra HD</span>
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4 mr-2" />
                  Generate Image
                </>
              )}
            </Button>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2 animate-fade-in stagger-2">
            <div className="glass rounded-xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-card via-muted to-card flex items-center justify-center relative">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-muted-foreground">Creating your masterpiece...</p>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <Layers className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">Enter a prompt and click generate</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sample Gallery */}
        <div className="animate-fade-in stagger-3">
          <h2 className="text-xl font-semibold text-foreground mb-6">Sample Creations</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {sampleImages.map((image, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-neon-pink/20 flex items-center justify-center">
                  <Wand2 className="h-8 w-8 text-primary/40" />
                </div>
                <div className="p-3">
                  <p className="text-xs text-muted-foreground line-clamp-2">{image.prompt}</p>
                  <span className="text-xs text-primary mt-1 inline-block">{image.style}</span>
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
