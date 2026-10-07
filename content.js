// Public profile and papers. Hidden entries can be enabled when ready.
// A missing URL is displayed as plain text; no fake links are generated.
window.homepageContent = {
  name: "Jingze Zhang",
  chineseName: "张竞择",
  role: "Ph.D. Student, Peking University · Research Intern, BIGAI",
  introduction: [
    [
      { text: "I am a second-year Ph.D. student at " },
      { text: "Peking University", url: "https://english.pku.edu.cn/" },
      { text: "’s School of Intelligence Science and Technology, advised by Prof. Song-Chun Zhu. My research focuses on humanoid loco-manipulation." }
    ],
    [
      { text: "I am also a research intern at " },
      { text: "BIGAI", url: "https://eng.bigai.ai/" },
      { text: ", where I am advised by " },
      { text: "Baoxiong Jia", url: "https://buzz-beater.github.io/" },
      { text: " and " },
      { text: "Siyuan Huang", url: "https://siyuanhuang.com/" },
      { text: "." }
    ],
    "Prior to that, I earned my bachelor’s degree from Tsinghua University’s Department of Automation in 2025."
  ],
  photo: "assets/jingze-and-cat-cutout.png",
  photoAlt: "Jingze Zhang holding his cat",
  links: [
    { label: "Email", url: "mailto:zhangjingze21@gmail.com" },
    { label: "CV", url: "", hidden: true },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=eLzBddcAAAAJ&hl=en" },
    { label: "GitHub", url: "https://github.com/zhangjingze21" }
  ],
  publications: [
    {
      title: "LARA: Latent Action Representation Alignment for Vision-Language-Action Models",
      url: "https://arxiv.org/abs/2606.07100",
      authors: "Mengya Liu*, Baoxiong Jia*, Jiangyong Huang, Jingze Zhang, Siyuan Huang",
      equalContribution: true,
      venue: "ICML 2026",
      description: "Aligns latent action representations with diffusion-based VLA policies to learn jointly from videos and robot demonstrations.",
      image: "assets/lara.png",
      imageAlt: "LARA framework aligning a latent action model and a vision-language-action policy",
      imageSource: "https://lmy1001.github.io/ICML26_LARA/assets/teaser.png",
      links: [
        { label: "Paper", url: "https://arxiv.org/pdf/2606.07100" },
        { label: "Project", url: "https://lmy1001.github.io/ICML26_LARA/" },
        { label: "Code", url: "https://github.com/lmy1001/LARA" }
      ]
    },
    {
      title: "Move as You Say, Interact as You Can: Language-guided Human Motion Generation with Scene Affordance",
      url: "https://arxiv.org/abs/2403.18036",
      authors: "Zan Wang, Yixin Chen, Baoxiong Jia, Puhao Li, Jinlu Zhang, Jingze Zhang, Tengyu Liu, Yixin Zhu, Wei Liang, Siyuan Huang",
      venue: "CVPR 2024 · Highlight",
      description: "Uses scene affordance to generate language-guided human motion in 3D environments.",
      image: "assets/afford-motion.png",
      imageAlt: "Language-guided motion generation results with predicted scene affordance maps",
      imageSource: "https://arxiv.org/html/2403.18036v1/results_h3d.png",
      links: [
        { label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2024/papers/Wang_Move_as_You_Say_Interact_as_You_Can_Language-guided_Human_CVPR_2024_paper.pdf" },
        { label: "Project", url: "https://afford-motion.github.io/" },
        { label: "Code", url: "https://github.com/afford-motion/afford-motion" }
      ]
    }
  ],
  preprints: [
    {
      title: "Spatial-Temporal Multi-Scale Quantization for Flexible Motion Generation",
      url: "https://arxiv.org/abs/2508.08991",
      authors: "Zan Wang*, Jingze Zhang*, Yixin Chen, Baoxiong Jia, Wei Liang, Siyuan Huang",
      equalContribution: true,
      venue: "arXiv preprint · 2025",
      description: "Represents human motion with spatial and temporal multi-scale tokens for flexible generation, editing, and control.",
      image: "assets/msq.png",
      imageAlt: "Multi-scale motion quantization and decoded motions at three scales",
      imageSource: "https://arxiv.org/html/2508.08991v1/teaser_v2.png",
      links: [
        { label: "Paper", url: "https://arxiv.org/pdf/2508.08991" },
        { label: "Project", url: "https://sites.google.com/view/msquantizer" }
      ]
    }
  ],
  // Set to true to show Updates and its navigation entry.
  showUpdates: false,
  updates: [
    { date: "YYYY.MM", text: "A recent paper, project release, or research milestone.", url: "" },
    { date: "YYYY.MM", text: "A short update about your work or academic journey.", url: "" }
  ]
};
