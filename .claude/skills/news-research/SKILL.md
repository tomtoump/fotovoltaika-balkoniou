---
name: news-research
description: Research Greek balcony-PV news (νομοθεσία ΥΠΕΝ/ΡΑΑΕΥ/ΔΕΔΔΗΕ, ευρωπαϊκές οδηγίες, αγορά, νέα προϊόντα) and draft a blog post in Greek under src/content/blog/. Use when the user asks to draft an article, summarise a regulation, or write up news for fotovoltaika-mpalkoniou.gr.
---

# News research & draft skill

Drafts a Greek-language blog post for `fotovoltaika-mpalkoniou.gr` from primary sources. The
output is always a new file under `src/content/blog/<slug>.md` with `draft: true` so a human
reviewer ships it.

## Workflow

Follow the steps in order. Don't skip research — silent fabrication of dates/ΦΕΚ numbers is the
worst failure mode.

### 1. Clarify

If the topic is vague (e.g. "νέος νόμος"), use AskUserQuestion to nail down:

- Ποιο ΦΕΚ / ποια ΥΑ / ποιος φορέας;
- Ποια οπτική γωνία (νομική ανάλυση, πρακτικός οδηγός, ανακοίνωση);
- Στόχος μήκος (συντόμως: 400 λέξεις / κανονικό: 700–1000 λέξεις).

### 2. Research

Use WebSearch and WebFetch. **Primary sources only** for facts (numbers, dates, ΦΕΚ identifiers).
Secondary sources are fine for context but never as the sole citation for a claim.

**Primary (preferred):**
- `ypen.gov.gr` — Υπουργείο Περιβάλλοντος & Ενέργειας
- `et.gr` — Εφημερίδα της Κυβερνήσεως (ΦΕΚ)
- `rae.gr` / `raaey.gr` — ΡΑΑΕΥ
- `deddie.gr` — Διαχειριστής δικτύου διανομής
- `eur-lex.europa.eu` — επίσημες πράξεις ΕΕ
- `eea.europa.eu`, `ec.europa.eu/energy` — επίσημες ευρωπαϊκές πηγές

**Secondary (για περιβάλλον):**
- ενεργειακός τύπος: `energypress.gr`, `worldenergynews.gr`, `ecopress.gr`
- ευρωπαϊκός τύπος: `pv-magazine.com`, `solarpowereurope.org`

For every fact you'll cite, capture: **URL**, **Title**, **Publication date**. Keep them in
working memory — they go in the article's "Πηγές" section.

### 3. Outline

Draft a 3–6 section outline in plain text (no file yet) and confirm with the user before writing
the full draft. Skip this only if the user explicitly says "go straight to the draft".

### 4. Draft

Create `src/content/blog/<slug>.md`. The slug should be Greek-friendly (transliterated Latin,
hyphenated, no diacritics):

- ✅ `nea-ya-ypen-mai-2026`
- ✅ `eu-deal-cyprus-balcony-pv`
- ❌ `νέα ΥΑ ΥΠΕΝ.md`

Frontmatter — match the schema in `src/content.config.ts` exactly:

```yaml
---
title: '<Greek title, sentence case, no trailing period>'
description: '<1–2 sentence Greek description, ≤ 160 chars for SEO>'
publishedDate: <YYYY-MM-DD, today's date>
author: 'Συντακτική ομάδα'
tags: [<from the vocabulary below>]
source: '<URL of primary source if there is one>'   # optional, omit if N/A
draft: true
---
```

**Tag vocabulary** — pick 1–4, do **not** invent new tags:

- `νομοθεσία` — όταν αλλάζει νόμος ή ΥΑ
- `ΥΠΕΝ` — ανακοίνωση/απόφαση Υπουργείου
- `ΔΕΔΔΗΕ` — διαδικασίες σύνδεσης
- `ΡΑΑΕΥ` — ρυθμιστικές παρεμβάσεις
- `ΕΕ` — ευρωπαϊκές οδηγίες/πράξεις
- `αγορά` — εμπορικές εξελίξεις, τιμές, εταιρείες
- `προϊόντα` — νέα κιτ, εξοπλισμός
- `οδηγός` — how-to / explainer
- `ανακοίνωση` — δικές μας ανακοινώσεις του site

If a topic genuinely needs a new tag, ask the user — never silently introduce one (fragments the
`/blog/tag/...` namespace).

**Body conventions:**

- Greek, formal but accessible. Δεύτερο πληθυντικό («μπορείτε», «δείτε»).
- 600–1000 λέξεις για κανονικό άρθρο, 300–500 για quick news update.
- Markdown headings: `##` για section titles, `###` για subsections.
- Cross-link σε relevant `/wiki/*` pages όπου ταιριάζει — π.χ. όταν αναφέρεστε σε «νομικό
  πλαίσιο», linkάρετε στο `/wiki/nomiko-plaisio-ellada`. Διαβάστε τα frontmatter των wiki
  pages για να γνωρίζετε τι είναι διαθέσιμο.
- Links σε external πηγές inline όπως κανονικό markdown.
- **Υποχρεωτικό «Πηγές»** section στο τέλος, αριθμημένη λίστα με τίτλο + URL για κάθε primary
  source που χρησιμοποιήθηκε. Το `source` frontmatter field δείχνει την πιο σημαντική πηγή· οι
  υπόλοιπες μπαίνουν εδώ.

**Tone:**

- Όχι hype. Όχι «επαναστατικός», «πρωτοποριακός». Δουλεύουμε ενημερωτικά.
- Όχι νομικές συμβουλές. Όταν παρουσιάζετε κανονιστική αλλαγή, βάλτε disclaimer ότι ο αναγνώστης
  πρέπει να επιβεβαιώσει με αδειούχο επαγγελματία.
- Αναφέρετε τι ΔΕΝ είναι ξεκάθαρο. Αν π.χ. το ΥΠΕΝ έχει ανακοινώσει αλλαγή χωρίς να έχει
  δημοσιευτεί ακόμη ΦΕΚ, να το πείτε.

### 5. Verify

Πριν επιστρέψετε στον χρήστη:

1. Ότι κάθε αριθμός (W, kWh, €, χρόνος, ημερομηνία ΦΕΚ) έχει πηγή στις «Πηγές».
2. Ότι το `publishedDate` είναι σήμερα (όχι future-dated).
3. Ότι τα tags είναι από το vocabulary.
4. Ότι όλα τα internal links σε `/wiki/...` δείχνουν σε υπαρκτό slug — τρέξτε `ls
   src/content/docs` για επιβεβαίωση.
5. Run `npm run check` — αν αποτύχει το astro check λόγω frontmatter, διορθώστε.

### 6. Hand off

Επιστρέψτε στον χρήστη:

- Τη διαδρομή του νέου αρχείου.
- Σύντομη σύνοψη (3 lines): τι λέει το άρθρο, τι πηγές χρησιμοποιείτε, τι θα ήθελε να ελέγξει
  ένας human editor (συνήθως: ορθότητα νομικής ερμηνείας, αν ο τόνος ταιριάζει στο site).
- Reminder ότι το post είναι `draft: true` — αλλάξτε το όταν εγκρίνει ο editor.

## Pre-flight checklist (πριν αλλάξετε `draft: false`)

- [ ] Κάθε στατιστικό/ημερομηνία/αριθμός ΦΕΚ έχει πηγή.
- [ ] Δεν υπάρχει "fact" που να μην προέρχεται από κάποια από τις «Πηγές».
- [ ] Τα tags είναι από το vocabulary.
- [ ] Internal links λειτουργούν (έλεγχος με `npm run dev`).
- [ ] Τρέχει `npm run check` καθαρά.
- [ ] Διάβασε το άρθρο φωναχτά — ακούγεται φυσικό στα ελληνικά;
- [ ] Έχει disclaimer αν παρουσιάζει νομική/τεχνική αλλαγή;

## Anti-patterns to avoid

- **Hallucinated ΦΕΚ numbers**. Αν δεν είστε σίγουροι, μην δημοσιεύσετε αριθμό· γράψτε «πρόσφατη
  ΥΑ» και linkάρετε στην πηγή.
- **Future-dated posts**. publishedDate = σήμερα ή νωρίτερα. Όχι "in 3 weeks" εκτός κι αν είναι
  scheduled news embargo που έχει επιβεβαιωθεί από τον editor.
- **Generic claims**. «Η Ελλάδα έχει μεγάλο potential για ΑΠΕ» — useless. Αντικαταστήστε με
  conkrete data + source.
- **Σιωπηλή νέα ετικέτα**. Πάντα από το vocabulary.
- **Κρυφές πηγές**. Αν το έγραψες, πρέπει να μπορείς να το αποδείξεις.
