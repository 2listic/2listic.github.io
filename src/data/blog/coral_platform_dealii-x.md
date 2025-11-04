---
draft: false
title: "Design, simulate and visualize with Coral platform"
snippet: "Discover how our user-friendly interface, combined with a scheduler and a visualizator, leverages FEM libraries to create digital replicas with ease."
image: {
    src: "/blog_gallery/screen_frontend.png",
    alt: "no-code/low-code"
}
publishDate: "2025-10-30 11:00"
category: "Projects"
author: "Dualistic"
tags: [no-code, low-code, dealii-x, use cases, requirements]
---

In this post, we'll demonstrate how **Coral**, our digital twin platform, simplifies the entire workflow of designing, simulating, and visualizing complex engineering analyses.

<iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/dAVx0f7pP6U" 
    title="YouTube video player" 
    class="border-0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
</iframe>

Leveraging a [No-code/Low-code approach](/blog/no-code_low-code_dealii-x), Coral enables you to construct computational graphs that structure your digital replica through an intuitive **visual interface**. Simply drag and drop nodes, connect them to define relationships, and adjust parameters to customize your simulation. These graphs can be saved, loaded, and shared seamlessly with team members, fostering true collaborative engineering.

Once your computational graph is ready, Coral gives you the flexibility to choose **where your simulation runs**. Since computational requirements can scale dramatically—particularly for complex finite element analyses—you're not limited to your local machine. For instance, in the [dealii-X project](/blog/dualistic-dealiix-partner/), we leverage High Performance Computing (HPC) clusters for large-scale simulations, though local workstations and cloud instances are equally supported.

This is where **Coral Core** takes action. As an intelligent job scheduler, it manages computational resources by efficiently queueing simulations and storing results in designated locations. Throughout the process, it provides real-time status updates to the user interface, keeping you informed about your simulation's progress.

Behind the intuitive interface, **Coral Sim** performs the heavy lifting. It translates your visual computational graph into optimized code that compiles and executes using parallel computing paradigms. In this specific case it integrates with the [deal.II](https://dealii.org) finite element library, in order to provide high-fidelity results that meet demanding engineering standards.

Finally, **Coral Viz** transforms raw simulation data into actionable insights through powerful visualization capabilities, allowing you to explore and understand your results comprehensively.
