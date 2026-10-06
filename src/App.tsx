import React, { useState } from 'react';
import { Printer, Filter, Sun, Sparkles } from 'lucide-react';

// Les 20 Titres de notre collège selon Parcours Français (Start du projet)
const TITRES_20 = [
  { id: 1, t: "Disparition mystérieuse du roman de la bibliothèque scolaire", v: "Incitative", s: "Nominale", m: "Français" },
  { id: 2, t: "L'équipe de futsal remporte la finale contre les professeurs !", v: "Informative", s: "Verbale", m: "EPS" },
  { id: 3, t: "Pourquoi les frites sont servies le mardi à la cantine ?", v: "Explicative", s: "Interrogative", m: "Vie Scolaire" },
  { id: 4, t: "Protégeons les espaces verts de notre cour de collège !", v: "Explicative", s: "Exclamative", m: "SVT" },
  { id: 5, t: "Inauguration du club de robotique et d'inventions utiles", v: "Informative", s: "Nominale", m: "Techno" },
  { id: 6, t: "Comment préparer sereinement le premier contrôle de maths ?", v: "Incitative", s: "Interrogative", m: "Maths" },
  { id: 7, t: "La troupe de théâtre adapte une scène classique en poésie slam", v: "Informative", s: "Verbale", m: "Français" },
  { id: 8, t: "Découverte des grands personnages d'Al-Andalus et d'Ibn Al Abbar", v: "Explicative", s: "Nominale", m: "Histoire" },
  { id: 9, t: "Attention aux sacs trop lourds pour votre colonne vertébrale !", v: "Explicative", s: "Exclamative", m: "SVT" },
  { id: 10, t: "L'atelier calligraphie expose ses parchemins au hall", v: "Informative", s: "Verbale", m: "Arts" },
  { id: 11, t: "Quel livre emprunter pour les vacances d'automne ?", v: "Incitative", s: "Interrogative", m: "Français" },
  { id: 12, t: "Élection des délégués de classe dans le calme et la transparence", v: "Informative", s: "Nominale", m: "Éduc. Civique" },
  { id: 13, t: "Les élèves observent la photosynthèse au microscope", v: "Informative", s: "Verbale", m: "SVT" },
  { id: 14, t: "Faites le plein de curiosité lors de la semaine de la presse !", v: "Incitative", s: "Exclamative", m: "Français" },
  { id: 15, t: "Pourquoi les oiseaux de la cour chantent-ils avant 8 heures ?", v: "Explicative", s: "Interrogative", m: "SVT" },
  { id: 16, t: "Tournoi d'échecs du midi : la concentration maximale des stratèges", v: "Incitative", s: "Nominale", m: "Maths" },
  { id: 17, t: "Le professeur de géographie dévoile la nouvelle carte interactive", v: "Informative", s: "Verbale", m: "Histoire-Géo" },
  { id: 18, t: "Respectez le règlement de la cour pour la sécurité de tous !", v: "Explicative", s: "Exclamative", m: "Vie Scolaire" },
  { id: 19, t: "Record de vitesse battu lors du cross d'endurance du collège", v: "Informative", s: "Nominale", m: "EPS" },
  { id: 20, t: "Comment rédiger un titre accrocheur pour son exposé ?", v: "Incitative", s: "Interrogative", m: "Français" },
];

export default function App() {
  const [filterVisee, setFilterVisee] = useState<string>('Toutes');

  const filtered = filterVisee === 'Toutes' 
    ? TITRES_20 
    : TITRES_20.filter((item) => item.v === filterVisee);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#0A1A2F] font-serif p-3 sm:p-6 selection:bg-[#163B66] selection:text-[#DFC07A]">
      
      {/* 1. LE BANDEAU (En haut de la Une) */}
      <div className="max-w-5xl mx-auto bg-[#0A1A2F] text-stone-200 border-2 border-[#C5A059] px-3 py-1.5 flex items-center justify-between text-xs">
        <span className="font-bold text-[#DFC07A] uppercase text-[10px] tracking-wider">
          LE BANDEAU · START DU PROJET (MANUEL PARCOURS FRANÇAIS)
        </span>
        <button
          onClick={() => window.print()}
          className="bg-[#C5A059] hover:bg-[#D4AF37] text-[#0A1A2F] font-bold px-2 py-0.5 text-[10px] cursor-pointer flex items-center gap-1 font-sans"
        >
          <Printer className="w-3 h-3" /> Imprimer La Une
        </button>
      </div>

      {/* 2. LA PREMIÈRE PAGE (LA UNE EN FORMAT BROADSHEET) */}
      <main className="max-w-5xl mx-auto bg-white border-2 border-[#C5A059] p-4 sm:p-6 shadow-sm my-2">
        
        {/* LA MANCHETTE ET SES DEUX OREILLES */}
        <header className="border-b-2 border-[#C5A059] pb-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Oreille Gauche */}
            <aside className="md:col-span-3 border border-[#C5A059]/60 p-2 bg-[#FAF8F3] text-xs">
              <span className="font-sans font-bold text-[9px] uppercase text-[#163B66] block border-b border-[#C5A059]/30 pb-0.5 mb-1">
                L'OREILLE GAUCHE
              </span>
              <strong className="block text-[11px] leading-tight">« L'équipe de futsal remporte la finale contre les profs ! »</strong>
              <span className="text-[9px] font-sans text-stone-500 italic">Visée Informative · Titre Verbal</span>
            </aside>

            {/* Manchette Centrale (Algorithme du cours en vocabulaire simple) */}
            <div className="md:col-span-6 text-center">
              <div className="text-[8px] font-sans font-bold tracking-[0.25em] uppercase text-[#163B66]">
                LA MANCHETTE · JOURNAL SCOLAIRE
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-[#0A1A2F]">
                LA UNE
              </h1>
              <h2 className="font-headline italic text-base sm:text-xl font-bold text-[#163B66]">
                Le Journal d'Ibn Al Abbar
              </h2>
              <p className="text-[11px] text-stone-600 italic">
                « La voix des collégiens, curieuse et indépendante »
              </p>
              
              {/* Algorithme : Nom, Date, Numéro, Périodicité, Prix, Slogan, Lieu */}
              <div className="mt-2 pt-1 border-t border-[#C5A059]/40 flex justify-between text-[10px] text-stone-600 px-2 font-sans">
                <span><strong>Date :</strong> Octobre 2026</span>
                <span><strong>N° :</strong> 1 (Start)</span>
                <span><strong>Périodicité :</strong> Mensuel</span>
                <span><strong>Prix :</strong> Gratuit</span>
                <span><strong>Lieu :</strong> Collège</span>
              </div>
            </div>

            {/* Oreille Droite */}
            <aside className="md:col-span-3 border border-[#C5A059]/60 p-2 bg-[#FAF8F3] text-xs">
              <span className="font-sans font-bold text-[9px] uppercase text-[#163B66] block border-b border-[#C5A059]/30 pb-0.5 mb-1">
                L'OREILLE DROITE
              </span>
              <div className="flex items-center gap-1.5 mb-1">
                <Sun className="w-4 h-4 text-[#C5A059]" />
                <span className="text-[10px]"><strong>Météo :</strong> 22°C ensoleillé</span>
              </div>
              <strong className="block text-[11px] leading-tight text-[#8B1E1E]">« Attention aux cartables trop lourds ! »</strong>
              <span className="text-[9px] font-sans text-stone-500 italic">Visée Explicative · Titre Exclamatif</span>
            </aside>

          </div>
        </header>

        {/* 3. LA TRIBUNE (LE GROS TITRE PRINCIPAL · SANS TEXTE D'ARTICLE) */}
        <section className="border-b-2 border-[#C5A059] pb-4 mb-4">
          <div className="flex justify-between items-center text-[10px] font-sans text-[#163B66] font-bold uppercase mb-1">
            <span>LA TRIBUNE · GROS TITRE PRINCIPAL</span>
            <span className="text-[#C5A059]">Visée Incitative · Titre Nominal</span>
          </div>
          
          <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-black text-[#0A1A2F] leading-tight mb-2">
            « Disparition mystérieuse du roman de la bibliothèque scolaire »
          </h2>
          
          {/* Emplacement de photo */}
          <div className="border border-dashed border-[#C5A059] bg-[#FAF8F3] p-4 text-center my-2">
            <span className="text-xl block mb-0.5">📸</span>
            <span className="font-bold text-xs text-[#0A1A2F] block">[ EMPLACEMENT PHOTO DE LA UNE ]</span>
            <span className="text-[10px] text-stone-500 italic">Start du projet : titres seulement, aucun texte rédigé</span>
          </div>
        </section>

        {/* 4. LA SOUS-TRIBUNE (2 TITRES SECONDAIRES) */}
        <section className="border-b-2 border-[#C5A059] pb-4 mb-4">
          <div className="text-[10px] font-sans font-bold uppercase text-[#163B66] mb-2">
            LA SOUS-TRIBUNE · 2 TITRES MARQUANTS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-2.5 bg-[#FAF8F3] border border-[#C5A059]/40">
              <span className="text-[8px] font-sans font-bold bg-[#163B66] text-white px-1 py-0.2 uppercase">Visée Informative · Titre Verbal</span>
              <h3 className="font-bold text-sm sm:text-base text-[#0A1A2F] mt-1">« La troupe de théâtre adapte une scène classique en slam »</h3>
              <span className="text-[10px] text-stone-500 italic">Matière : Français (Parcours Français)</span>
            </div>
            <div className="p-2.5 bg-[#FAF8F3] border border-[#C5A059]/40">
              <span className="text-[8px] font-sans font-bold bg-[#8B1E1E] text-white px-1 py-0.2 uppercase">Visée Explicative · Titre Exclamatif</span>
              <h3 className="font-bold text-sm sm:text-base text-[#0A1A2F] mt-1">« Protégeons les espaces verts de notre cour de collège ! »</h3>
              <span className="text-[10px] text-stone-500 italic">Matière : SVT & Écologie</span>
            </div>
          </div>
        </section>

        {/* 5. LE VENTRE : LES 20 TITRES DU COLLÈGE (PROJET PARCOURS FRANÇAIS) */}
        <section className="border-b-2 border-[#C5A059] pb-4 mb-4">
          <div className="bg-[#0A1A2F] text-white p-2.5 flex flex-wrap justify-between items-center gap-2 mb-3">
            <div>
              <span className="text-[9px] font-sans font-bold text-[#DFC07A] uppercase block">LE VENTRE DE LA UNE · PROJET PARCOURS FRANÇAIS</span>
              <h3 className="font-headline text-lg sm:text-xl font-bold uppercase">Les 20 Titres de Notre Collège</h3>
            </div>
            <span className="text-[10px] font-sans font-bold bg-[#163B66] text-[#DFC07A] px-2 py-0.5 border border-[#C5A059]">
              {filtered.length} / 20 Titres
            </span>
          </div>

          {/* Filtres simples par Visée */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[11px] font-sans">
            <span className="font-bold text-[#0A1A2F] flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3 text-[#C5A059]" /> Visée :
            </span>
            {['Toutes', 'Informative', 'Incitative', 'Explicative'].map((v) => (
              <button
                key={v}
                onClick={() => setFilterVisee(v)}
                className={`px-2 py-0.5 cursor-pointer border ${
                  filterVisee === v
                    ? 'bg-[#0A1A2F] text-[#DFC07A] font-bold border-[#0A1A2F]'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border-[#C5A059]/40'
                }`}
              >
                {v === 'Toutes' ? 'Tous les 20' : v}
              </button>
            ))}
          </div>

          {/* Grille des 20 titres seuls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {filtered.map((item) => (
              <div key={item.id} className="p-2 border border-[#C5A059]/40 bg-white hover:border-[#163B66]">
                <div className="flex justify-between text-[9px] font-sans text-stone-500 mb-0.5">
                  <span className="font-bold text-[#0A1A2F]">#{item.id} · {item.m}</span>
                  <span className={`px-1 font-bold uppercase ${
                    item.v === 'Informative' ? 'bg-[#163B66] text-white' : item.v === 'Incitative' ? 'bg-[#C5A059] text-[#0A1A2F]' : 'bg-[#8B1E1E] text-white'
                  }`}>
                    {item.v}
                  </span>
                </div>
                <strong className="block text-sm text-[#0A1A2F] leading-snug my-1">
                  « {item.t} »
                </strong>
                <span className="text-[9px] font-sans text-stone-500">Structure {item.s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. LE REZ-DE-CHAUSSÉE (PIED DE LA UNE · 3 TITRES COURTS) */}
        <footer className="pt-2 text-[11px] font-sans">
          <div className="text-[9px] font-bold uppercase text-[#163B66] mb-2 pb-0.5 border-b border-[#C5A059]/30">
            LE REZ-DE-CHAUSSÉE DE LA UNE · DÉTENTE & BRÈVES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-stone-700 mb-3">
            <div className="p-2 bg-[#FAF8F3] border border-[#C5A059]/30">
              <strong className="block text-[#0A1A2F]">😂 Blague :</strong> Quel est le comble pour un prof de maths ? Être trop carré !
            </div>
            <div className="p-2 bg-[#FAF8F3] border border-[#C5A059]/30">
              <strong className="block text-[#0A1A2F]">💬 Citation :</strong> « Monsieur, le contrôle est noté ou juste pour nous ? »
            </div>
            <div className="p-2 bg-[#FAF8F3] border border-[#C5A059]/30">
              <strong className="block text-[#0A1A2F]">📅 Rendez-vous :</strong> Semaine de la Presse au CDI mardi à 13h.
            </div>
          </div>
          <div className="text-center text-[10px] text-stone-500 border-t border-[#C5A059]/40 pt-2">
            Collège Ibn Al Abbar · Start du Projet Journal 2026 · Titres seuls (sans textes)
          </div>
        </footer>

      </main>

    </div>
  );
}
