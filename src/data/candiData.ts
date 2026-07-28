import imgTikus from "@/imports/image-1.png"
import imgBrahu from "@/imports/image-2.png"
import imgBajangRatu from "@/imports/image-3.png"
import imgWringinLawang from "@/imports/image-4.png"
import imgJolotundo from "@/imports/image-5.png"
import imgSooko from "@/imports/image.png"

export type Lang = "ID" | "EN"

export interface Temple {
  id: number
  name: Record<Lang, string>
  location: Record<Lang, string>
  category: Record<Lang, string>
  categoryColor: string
  description: Record<Lang, string>
  image: string
  alt: string
  year: Record<Lang, string>
  mapsQuery: string
  lat: number
  lng: number
}

export const temples: Temple[] = [
  {
    id: 1,
    name: { ID: "Candi Tikus", EN: "Tikus Temple" },
    location: { ID: "Trowulan, Mojokerto", EN: "Trowulan, Mojokerto" },
    category: { ID: "Petirtaan", EN: "Sacred Bath" },
    categoryColor: "#1a5276",
    description: {
      ID: "Petirtaan bawah tanah berbentuk kolam pemandian, tiruan miniatur Gunung Mahameru purba dengan pancuran air yang masih mengalir hingga kini.",
      EN: "Subterranean bathing pool modelled on Mount Mahameru, with historic fountains flowing uninterrupted to this day.",
    },
    image: imgTikus,
    alt: "Candi Tikus — kolam petirtaan bata merah era Majapahit",
    year: { ID: "Abad XIV", EN: "14th Century" },
    mapsQuery: "Candi+Tikus+Trowulan+Mojokerto",
    lat: -7.5606,
    lng: 112.3807,
  },
  {
    id: 2,
    name: { ID: "Candi Brahu", EN: "Brahu Temple" },
    location: { ID: "Trowulan, Mojokerto", EN: "Trowulan, Mojokerto" },
    category: { ID: "Candi Pendarmaan", EN: "Buddhist Sanctuary" },
    categoryColor: "#7b241c",
    description: {
      ID: "Salah satu candi bata merah tertua dan paling ikonik peninggalan Majapahit, berdiri megah di tengah pekarangan hijau kawasan Trowulan.",
      EN: "One of the oldest and most iconic red-brick Majapahit temples standing majestically amid the green grounds of Trowulan.",
    },
    image: imgBrahu,
    alt: "Candi Brahu — menara bata merah ikonik Majapahit",
    year: { ID: "Abad XIII–XIV", EN: "13th–14th c." },
    mapsQuery: "Candi+Brahu+Trowulan+Mojokerto",
    lat: -7.5458,
    lng: 112.3705,
  },
  {
    id: 3,
    name: { ID: "Gapura Bajang Ratu", EN: "Bajang Ratu Gate" },
    location: { ID: "Trowulan, Mojokerto", EN: "Trowulan, Mojokerto" },
    category: { ID: "Gapura Paduraksa", EN: "Paduraksa Gate" },
    categoryColor: "#784212",
    description: {
      ID: "Gapura paduraksa megah dengan relief sayap garuda di bagian puncaknya — pintu seremonial berukiran paling lengkap di kawasan Trowulan.",
      EN: "Grand paduraksa gate crowned with garuda-wing reliefs — the most elaborately carved ceremonial portal in Trowulan.",
    },
    image: imgBajangRatu,
    alt: "Gapura Bajang Ratu — gapura paduraksa berukir era Majapahit",
    year: { ID: "Abad XIV", EN: "14th Century" },
    mapsQuery: "Gapura+Bajang+Ratu+Trowulan+Mojokerto",
    lat: -7.5639,
    lng: 112.3888,
  },
  {
    id: 4,
    name: { ID: "Gapura Wringin Lawang", EN: "Wringin Lawang Gate" },
    location: { ID: "Trowulan, Mojokerto", EN: "Trowulan, Mojokerto" },
    category: { ID: "Gapura Belah", EN: "Split Portal" },
    categoryColor: "#1e8449",
    description: {
      ID: "Gapura candi terbelah (candi bentar) yang megah, berfungsi sebagai gerbang masuk utama kawasan keraton Majapahit pada abad ke-14.",
      EN: "Imposing split gateway (candi bentar) serving as the main royal entry into the 14th-century Majapahit palace compound.",
    },
    image: imgWringinLawang,
    alt: "Gapura Wringin Lawang — gapura belah dua menara bata Majapahit",
    year: { ID: "Abad XIV", EN: "14th Century" },
    mapsQuery: "Gapura+Wringin+Lawang+Trowulan+Mojokerto",
    lat: -7.5442,
    lng: 112.3881,
  },
  {
    id: 5,
    name: { ID: "Candi Jolotundo", EN: "Jolotundo Temple" },
    location: { ID: "Trawas, Mojokerto", EN: "Trawas, Mojokerto" },
    category: { ID: "Petirtaan Suci", EN: "Sacred Spring" },
    categoryColor: "#1a5276",
    description: {
      ID: "Petirtaan suci di lereng Gunung Penanggungan dengan sumber mata air jernih yang tak pernah kering sejak era Mataram Kuno dan Udayana.",
      EN: "Sacred mountain-spring sanctuary on Mount Penanggungan with crystal-clear waters flowing since the Mataram Kuno era.",
    },
    image: imgJolotundo,
    alt: "Candi Jolotundo — petirtaan suci di lereng Gunung Penanggungan",
    year: { ID: "Abad X", EN: "10th Century" },
    mapsQuery: "Candi+Jolotundo+Trawas+Mojokerto",
    lat: -7.6075,
    lng: 112.5878,
  },
  {
    id: 6,
    name: { ID: "Situs Bhre Kahuripan", EN: "Bhre Kahuripan Site" },
    location: { ID: "Sooko, Mojokerto", EN: "Sooko, Mojokerto" },
    category: { ID: "Situs Ekskavasi", EN: "Excavation Site" },
    categoryColor: "#6e2f8c",
    description: {
      ID: "Situs ekskavasi baru yang luas mempertegas keberadaan pusat keraton bawahan Majapahit, masih aktif diteliti para arkeolog hingga kini.",
      EN: "Vast active excavation revealing sub-royal palace foundations, continually studied by contemporary archaeologists.",
    },
    image: imgSooko,
    alt: "Situs Bhre Kahuripan — reruntuhan batu era Majapahit di Sooko",
    year: { ID: "Abad XIV–XV", EN: "14th–15th c." },
    mapsQuery: "Situs+Bhre+Kahuripan+Sooko+Mojokerto",
    lat: -7.5333,
    lng: 112.4333,
  },
]

export const translations = {
  ID: {
    navItems: [
      { label: "Beranda", href: "#beranda" },
      { label: "Daftar Candi", href: "#daftar-candi" },
      { label: "Peta Interaktif", href: "#peta-interaktif" },
      { label: "Tentang", href: "#tentang" },
    ],
    badge: "Warisan Budaya Mojokerto",
    h1: ["Candi & Situs", "Kerajaan Majapahit"],
    desc: "Arsip digital situs candi, petirtaan, dan gapura bersejarah warisan Kerajaan Majapahit — untuk peneliti, pelancong, dan pecinta sejarah.",
    placeholder: "Cari nama candi, lokasi, atau kategori…",
    stats: [
      { v: "6", l: "Situs Candi" },
      { v: "XIV", l: "Abad Majapahit" },
      { v: "400+", l: "Artefak Tercatat" },
    ],
    scrollLabel: "Gulir",
    introCards: [
      {
        title: "Petirtaan Suci",
        desc: "Kolam pemandian dan sumber mata air bersejarah yang digunakan dalam ritual keagamaan Majapahit selama berabad-abad.",
      },
      {
        title: "Gapura & Pintu Gerbang",
        desc: "Gerbang seremonial dari bata merah yang menjadi penanda batas kawasan sakral dan keraton kerajaan.",
      },
      {
        title: "Situs Ekskavasi",
        desc: "Lokasi penelitian arkeologi aktif yang terus mengungkap lapisan sejarah peradaban agung Nusantara.",
      },
    ],
    sectionTag: "— Koleksi Situs",
    sectionTitle: ["Daftar Candi & Situs", "Pilihan Mojokerto"],
    viewMap: "Lihat semua di peta",
    exploreSite: "Jelajahi situs",
    noResult: "Tidak ada situs yang cocok dengan pencarian",
    mapTag: "— Sebaran Lokasi",
    mapTitle: "Peta Interaktif",
    mapDesc: "Pilih situs untuk melihat lokasi dan informasi detailnya.",
    mapSelect: "Pilih Situs",
    mapBuilt: "Dibangun:",
    mapOpen: "Buka di Google Maps",
    aboutTag: "— Tentang Proyek",
    aboutTitle: "Mendokumentasikan Peradaban yang Membentuk Nusantara",
    aboutP1:
      "Jejak Majapahit adalah arsip digital independen yang didedikasikan untuk mendokumentasikan, melestarikan, dan menyebarluaskan pengetahuan tentang situs-situs bersejarah Kerajaan Majapahit di wilayah Mojokerto, Jawa Timur.",
    aboutP2:
      "Melalui kolaborasi antara peneliti, fotografer, dan arkeolog lokal, kami menyajikan data terkini yang dapat diakses secara luas oleh publik, akademisi, dan generasi penerus.",
    aboutCta: "Pelajari Lebih Lanjut",
    aboutContact: "Hubungi Kami →",
    footerDesc:
      "Arsip digital situs candi dan warisan budaya Kerajaan Majapahit di Mojokerto, Jawa Timur.",
    footerCols: [
      {
        label: "Jelajahi",
        links: [
          "Daftar Candi",
          "Peta Interaktif",
          "Galeri Foto",
          "Bibliografi",
        ],
      },
      {
        label: "Informasi",
        links: [
          "Tentang Proyek",
          "Tim Peneliti",
          "Panduan Kunjungan",
          "Kontak",
        ],
      },
    ],
    copy: "© 2024 Jejak Majapahit. Seluruh konten hak cipta dilindungi undang-undang.",
    copyNote: "Didedikasikan untuk pelestarian warisan budaya lokal Indonesia.",
  },
  EN: {
    navItems: [
      { label: "Home", href: "#beranda" },
      { label: "Temples", href: "#daftar-candi" },
      { label: "Interactive Map", href: "#peta-interaktif" },
      { label: "About", href: "#tentang" },
    ],
    badge: "Mojokerto Cultural Heritage",
    h1: ["Temples & Sites of", "Majapahit Empire"],
    desc: "Digital archive of historical temples, sacred springs, and ceremonial gateways of the Majapahit Kingdom — for researchers, travellers, and history enthusiasts.",
    placeholder: "Search temple name, location, or category…",
    stats: [
      { v: "6", l: "Heritage Sites" },
      { v: "XIV", l: "Majapahit Era" },
      { v: "400+", l: "Recorded Artifacts" },
    ],
    scrollLabel: "Scroll",
    introCards: [
      {
        title: "Sacred Bathing Sites",
        desc: "Historic bathing pools and sacred springs used for Majapahit royal rituals and religious ceremonies for centuries.",
      },
      {
        title: "Gates & Portals",
        desc: "Red-brick ceremonial gateways marking sacred precincts and royal palace boundaries of the Majapahit realm.",
      },
      {
        title: "Excavation Sites",
        desc: "Active archaeological sites continually revealing new layers of Nusantara civilisation history.",
      },
    ],
    sectionTag: "— Site Collection",
    sectionTitle: ["Featured Temples &", "Heritage Sites"],
    viewMap: "View all on map",
    exploreSite: "Explore site",
    noResult: "No sites matched your search",
    mapTag: "— Site Locations",
    mapTitle: "Interactive Map",
    mapDesc:
      "Select a site to view its precise location and full heritage details.",
    mapSelect: "Select Site",
    mapBuilt: "Constructed:",
    mapOpen: "Open in Google Maps",
    aboutTag: "— About the Project",
    aboutTitle: "Documenting the Civilisation That Shaped Nusantara",
    aboutP1:
      "Jejak Majapahit is an independent digital archive dedicated to documenting, preserving, and disseminating knowledge of historical Majapahit Kingdom sites in Mojokerto, East Java.",
    aboutP2:
      "In collaboration with local researchers, photographers, and archaeologists, we present up-to-date data freely accessible to the public, academics, and future generations.",
    aboutCta: "Learn More",
    aboutContact: "Contact Us →",
    footerDesc:
      "Digital archive of ancient temples and Majapahit Kingdom cultural heritage in East Java, Indonesia.",
    footerCols: [
      {
        label: "Explore",
        links: [
          "Temple Collection",
          "Interactive Map",
          "Photo Gallery",
          "Bibliography",
        ],
      },
      {
        label: "Information",
        links: ["About Project", "Research Team", "Visitor Guide", "Contact"],
      },
    ],
    copy: "© 2024 Jejak Majapahit. All rights reserved.",
    copyNote: "Dedicated to the preservation of Indonesian cultural heritage.",
  },
}
