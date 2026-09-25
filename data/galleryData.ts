export type GalleryCategory = "all" | "repairs" | "installations" | "openers" | "springs";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  title: string;
  description?: string;
}

export const galleryImages: GalleryItem[] = [
  {
    id: 1,
    src: "/images/spring-replacement/IMG_0770.jpg",
    alt: "Garage Door Spring Replacement Project",
    category: "springs",
    title: "Torsion Spring Assembly",
    description: "High-cycle dual spring installation and tension balancing",
  },
  {
    id: 2,
    src: "/images/opener-repair/IMG_0766.jpg",
    alt: "Garage Door Opener Chain Drive Sprocket",
    category: "openers",
    title: "Opener Chain Drive Sprocket",
    description: "Heavy-duty chain drive gear alignment and sprocket service",
  },
  {
    id: 3,
    src: "/images/door-installation/C6.jpeg",
    alt: "Commercial & Residential Overhead Door Installation",
    category: "installations",
    title: "Overhead Roll-Up Door Installation",
    description: "New commercial and residential overhead garage door installation",
  },
  {
    id: 4,
    src: "/images/24-7-emergency-repair/IMG_8965.jpg",
    alt: "Emergency Garage Door Off Track Repair",
    category: "repairs",
    title: "Emergency Off-Track Repair",
    description: "Same-day emergency response for derailed garage door panel reset",
  },
  {
    id: 5,
    src: "/images/opener-installation/IMG_0764.jpg",
    alt: "Genie Smart Garage Door Opener Installation",
    category: "openers",
    title: "Genie 2028 Opener Installation",
    description: "Professional Genie ceiling mount opener installation",
  },
  {
    id: 6,
    src: "/images/door-replacement/IMG_0068.jpg",
    alt: "Garage Door Track Realignment & Frame Inspection",
    category: "repairs",
    title: "Door Frame Inspection & Replacement",
    description: "Complete opening casing inspection, frame repair, and door setup",
  },
  {
    id: 7,
    src: "/images/door-installation/C7.jpeg",
    alt: "Black Roll-Up Commercial Door Installation",
    category: "installations",
    title: "Black Roll-Up Bay Doors",
    description: "Industrial grade sectional roll-up doors fitted in entry bays",
  },
  {
    id: 8,
    src: "/images/spring-replacement/IMG_0777.jpg",
    alt: "Broken Torsion Spring Replacement",
    category: "springs",
    title: "Broken Spring Replacement",
    description: "Heavy-duty oil-tempered spring replacement and safety test",
  },
  {
    id: 9,
    src: "/images/cable-repair/IMG_9518.jpg",
    alt: "Garage Door Cable & Drum Repair",
    category: "repairs",
    title: "Cable Drum & Tension Service",
    description: "Precision cable spooling and drum assembly replacement",
  },
];

export const categoryLabels: Record<GalleryCategory, string> = {
  all: "All Projects",
  repairs: "Door Repairs",
  installations: "Installations",
  openers: "Opener Service",
  springs: "Spring Repair",
};

