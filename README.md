# Personal academic homepage

A single-page homepage inspired by the clean layout of Cheng Chi's website. It contains Jingze Zhang's confirmed biography, an approved transparent portrait with his cat, email, Google Scholar and GitHub links, two conference papers in Publications, and one paper in Preprints. Updates is retained but hidden by default. The CV entry is hidden until a file is supplied.

## Preview

From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ in a browser. The site is also viewable directly from `index.html`.

## Publish at zhangjingze21.github.io

1. In the `zhangjingze21` GitHub account, create a public repository named exactly `zhangjingze21.github.io`, or use that repository if it already exists.
2. Upload this directory's website files to the repository root: `index.html`, `styles.css`, `content.js`, `site.js`, `.nojekyll`, and `assets/`. Do not upload the enclosing `website/` directory or the ZIP file itself. The local preview screenshots and synced `sources/` files are not needed.
3. In the repository's **Settings → Pages**, choose **Deploy from a branch**, then select **main** and **/(root)** and click **Save**.
4. After the deployment finishes, visit https://zhangjingze21.github.io/. GitHub notes that publishing can take up to 10 minutes.

The `.nojekyll` file tells GitHub Pages to serve these static files without Jekyll processing. Future commits to the publishing branch will update the site. No custom domain or server is required for this address.

See [GitHub's setup guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [publishing source settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Add your content

Edit `content.js` to update the name, Chinese name, role, biography, profile links, publications, preprints, and updates. Put your portrait and paper figures in `assets/`, then reference their relative paths.

Put accepted conference or journal papers in `publications` and preprints in `preprints`. Move a paper into `publications` and update its venue when accepted. Both sections use the same paper layout; an empty section and its navigation entry are hidden automatically.

Biography paragraphs may be plain strings or arrays of `{ text, url }` segments for inline links. Your name is automatically emphasized in each paper's author list. Set `equalContribution: true` for papers using an asterisk to indicate equal contribution.

Set `showUpdates` to `true` to display both the Updates section and its navigation entry. The update entries are preserved while hidden.

For each real paper, set `placeholder` to `false`, replace the illustration, and add links like:

```js
links: [
  { label: "Paper", url: "https://..." },
  { label: "Project", url: "https://..." },
  { label: "Code", url: "https://..." }
]
```

Each entry may also have a `url` to make the title a link. Set `hidden: true` on a profile link to hide it; remove that flag when the link is ready. Other profile links without a URL appear as plain text. Paper links without a URL are omitted. Replace all visible placeholders before publishing.

## Publication sources

Metadata was checked against the authors' project pages and paper records on 2026-10-05:

- [LARA](https://lmy1001.github.io/ICML26_LARA/) — ICML 2026.
- [Spatial-Temporal Multi-Scale Quantization](https://sites.google.com/view/msquantizer) — arXiv preprint, 2025; Zan Wang and Jingze Zhang contributed equally.
- [Move as You Say, Interact as You Can](https://afford-motion.github.io/) — CVPR 2024, Highlight.

Each paper's `imageSource` records where its local figure came from. These are figures from the corresponding papers, displayed without cropping.

The project uses local HTML, CSS, JavaScript, and image assets, with no build step or external font, analytics, or package dependency. The sibling `sources/` directory is synced reference material and is not part of this website.
