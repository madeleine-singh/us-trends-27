# Ingestion log — US Trends 2027 Microsite

Append-only log of files ingested into this project. Newest at the bottom. One row per file —
don't rewrite or remove past rows. Created lazily on the first ingest; updated by `/prez-proj ingest`,
on re-run, and automatically at the start of any task (CLAUDE.md pre-flight).

- **Date** — when the file was ingested (absolute date).
- **File** — the original filename as dropped in.
- **Folder** — which content folder it landed in (`context/`, `design/`, `research/`, `materials/`).
- **Action** — `converted` (document → markdown; original moved to `<folder>/original/`),
  `cataloged` (media/asset left in place), `linked` (already markdown/text), or `pending`
  (convertible but `markdown-converter` wasn't available yet — a later run finishes it).
- **Reference** — the canonical path to read/use: the converted `.md`, the asset path, or the file.

| Date | File | Folder | Action | Reference |
|---|---|---|---|---|
| 2026-07-31 | project-context.txt | context/ | linked | context/project-context.txt |
| 2026-07-31 | design.md | design/ | linked | design/design.md |
| 2026-08-05 | Trends 2027 Pitches Combined.pdf | materials/ | cataloged | materials/Trends 2027 Pitches Combined.pdf |
| 2026-08-05 | Aug5 Microsite Feedback.docx | context/ | linked | context/Aug5 Microsite Feedback.docx |
| 2026-08-13 | Aug4 Microsite Feedback_v1.docx | context/ | linked | context/Aug4 Microsite Feedback_v1.docx |
| 2026-08-19 | photos-library.xlsx | materials/ | converted | materials/photos-library.md |
