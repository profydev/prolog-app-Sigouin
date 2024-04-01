type Meta = {
  title: string;
  description: string;
  image: string;
};

enum SectionType {
  Hero = "hero",
}

type HeroSection = {
  sectionType: SectionType.Hero;
  theme: "light-gray";
  title: string;
  subtitle: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

type Section = HeroSection;

export type Page = {
  meta: Meta;
  sections: Section[];
};
