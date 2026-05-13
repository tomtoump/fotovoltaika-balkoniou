# Φωτοβολταϊκά Μπαλκονιού

Wiki + blog για plug-in φωτοβολταϊκά μπαλκονιού στην Ελλάδα. Στοχεύει σε SEO κάλυψη του θέματος και δουλεύει συμπληρωματικά με το αδελφό site [balconysolar.gr](https://balconysolar.gr) (υπολογισμός παραγωγής, λίστα ενημέρωσης για το eshop).

Production URL: <https://fotovoltaika-balkoniou.gr>

## Stack

- [Astro 5](https://astro.build) με content collections (`blog`, `docs`/wiki)
- Tailwind CSS v4
- Theme βάση: [Virex](https://github.com/erlandv/virex) (MIT) — διατηρείται το attribution στο `LICENSE`. Όλη η οπτική ταυτότητα, τα κείμενα και η δομή έχουν προσαρμοστεί για το παρόν έργο.

## Δομή

```
src/
  content/
    blog/         # Άρθρα ειδήσεων (ΥΠΕΝ, ΔΕΔΔΗΕ, ΦΕΚ, αγορά)
    docs/         # Wiki: τι είναι, πώς λειτουργεί, νομοθεσία, εγκατάσταση, κόστος...
  pages/
    blog/         # /blog index, slug, pagination, tag
    wiki/         # /wiki index + slug
  components/sections/marketing/  # Hero, HowItWorks, CTA
  config/         # site, content, navigation, features
.claude/skills/
  news-research/  # Skill για αναζήτηση και σύνταξη άρθρων στα ελληνικά
```

## Ανάπτυξη

```bash
npm install
cp .env.example .env   # προαιρετικό, για override του SITE_URL κ.λπ.
npm run dev            # http://localhost:4321
```

Build & preview:

```bash
npm run build
npm run preview
```

Έλεγχοι:

```bash
npm run check          # eslint + prettier + astro check
```

## Skill: news-research

Στο `.claude/skills/news-research/SKILL.md` υπάρχει ο οδηγός για το Claude Code agent ώστε να αναζητά ελληνικές πηγές (ΥΠΕΝ, ΔΕΔΔΗΕ, ΡΑΑΕΥ, ΦΕΚ, energypress.gr κ.ά.), να ελέγχει αξιοπιστία/πρωτοτυπία και να συντάσσει draft άρθρα στο `src/content/blog/` με σωστό frontmatter (`title`, `description`, `publishedDate`, `tags`, `source`).

## Νέο περιεχόμενο

- **Wiki page** → νέο `.md` στο `src/content/docs/` με frontmatter: `title`, `description`, `order`, `section`.
- **Blog post** → νέο `.md` στο `src/content/blog/` με frontmatter: `title`, `description`, `publishedDate`, `author`, `tags`, `source?`. Schema στο `src/content.config.ts`.

## Άδεια

Δες `LICENSE` (MIT — διατηρείται το copyright του αρχικού Virex theme).
