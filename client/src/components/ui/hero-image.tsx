import { LazyImage } from "./lazy-image";

export default function HeroImage() {
  return (
    <div className="absolute w-full h-full overflow-hidden">
      <LazyImage
        src="/assets/HERO IMAGE HAIR EXAM.png"
        alt="Hair Restoration Background"
        className="w-full h-full absolute top-0 left-0"
        objectFit="cover"
        placeholderColor="#625046"
        onError={() => {
          console.error("Failed to load hero image");
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
    </div>
  );
}
