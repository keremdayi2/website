---
layout: layout.njk
title: Research
---

# Research

Through my research I hope to tackle core problems in practical applications through a rigorous perspective to design faster and more robust algorithms. To that end, a unifying theme in my research is **learning and optimization**, as these two topics underlie many topics at the frontier of CS reserach. In particular, I have worked on **deep learning theory** and **distributed optimization** towards this goal.

## Deep Learning Theory

My most recent work is on quantifying separations between low-rank fine tuning with online SGD and feature learning ('learning from scratch'), advised by Sitan Chen. In this work, we identified a distinct regime under which LoRA operates, which is different from the linearized kernel ('NTK') regime and the feature learning regime. Remarkably, while learning from scratch with $d$ dimensional data can require $O(d^{l})$ iterations where $l$ is governed by the leap complexity (or information exponent), we prove LoRA can converge in $O(d)$ iterations, marking a separation between these two learning regimes.

## Distributed Optimization

Previously, I was fortunate work on distributed optimization advised by Stephanie Gil and Angelia Nedich, focusing on aspects relevant to constrained optimization and resilience. These problems involve solving convex optimization problems over distributed networks, using only local communication and computation. In particular, our research addressed the following issues:
* Solving constrained problems over _directed_ graphs, where the asymmetry of communication adds significant challenges. 
* Making algorithms resilient to malicious attacks using the _trust framework_ from cyberphysical systems.

## Selected Publications
Publications listed in reverse chronological order, \* denotes equal contribution.


* **Dayi, Arif Kerem**, and Sitan Chen. [Gradient dynamics for low-rank fine-tuning beyond kernels.](https://arxiv.org/abs/2411.15385) arXiv preprint arXiv:2411.15385 (2024).

* **Dayı, Arif Kerem**\*, Orhan Eren Akgün\*, Stephanie Gil, Michal Yemini, and Angelia Nedić. [Fast Distributed Optimization over Directed Graphs under Malicious Attacks using Trust.](https://arxiv.org/abs/2407.06541) arXiv preprint arXiv:2407.06541 (2024).


* Akgün, Orhan Eren\*, **Arif Kerem Dayı**\*, Stephanie Gil, and Angelia Nedić. [Projected Push-Pull for Distributed Constrained Optimization Over Time-Varying Directed Graphs.](https://ieeexplore.ieee.org/abstract/document/10644202/) In 2024 American Control Conference (ACC), pp. 2082-2089. IEEE, 2024.

* Akgun, Orhan Eren, **Arif Kerem Dayi**, Stephanie Gil, and Angelia Nedich. [Learning trust over directed graphs in multiagent systems.](https://proceedings.mlr.press/v211/akgun23a.html) In Learning for Dynamics and Control Conference, pp. 142-154. PMLR, 2023.

<!-- * **Dayı, Arif Kerem**, Volkan Rodoplu, Mert Nakip, Buse Pehlivan, and Cüneyt Güzeliş. [Multi-Channel Subset Iteration with Minimal Loss in Available Capacity (MC-SIMLAC) Algorithm for Joint Forecasting-Scheduling in the Internet of Things.](https://isyou.info/jowua/papers/jowua-v13n2-3.pdf) Journal of Wireless Mobile Networks, Ubiquitous Computing, and Dependable Applications 13, no. 2 (2022). -->

You can also see a full list of my research projects on my [Google Scholar](https://scholar.google.com/citations?user=PzQ0aAsAAAAJ&hl=en&oi=ao) page.