---
draft: false
title: "Design, simulate and visualize with Coral platform"
snippet: "Discover how our user-friendly interface, combined with a scheduler and a visualizator, leverages FEM libraries to create digital replicas with ease."
image: {
    src: "/blog_gallery/graphical_interface_coral_build.png",
    alt: "Coral build graphical interface screenshot"
}
publishDate: "2025-10-30 11:00"
category: "Projects"
author: "Dualistic"
tags: [Coral, Coral Build, Coral Viz, Coral Core, Coral Sim, dealii-x]
---

In this post, we'll demonstrate how **Coral**, our digital twin platform, simplifies the entire workflow of designing, simulating, and visualizing complex engineering analyses.

<!-- <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/V44hH8C_D7E" 
    title="YouTube video player" 
    class="border-0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
</iframe> -->
<div class="relative w-full h-[400px]">
    <div id="placeholder-coral-alpha"
        class="absolute inset-0 z-0 bg-black animate-pulse">
    </div>
    <iframe 
        title="Coral: alpha preview"
        src="https://peertube.uno/videos/embed/jhVMj7CeWSPESxf9uhDY7J?muted=1&amp;title=0&amp;warningTitle=0&amp;peertubeLink=0"
        allow="fullscreen"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        class="absolute inset-0 z-10 w-full h-full border-0"
        onload="document.getElementById('placeholder-coral-alpha').style.display='none'"
    ></iframe>
</div>

Leveraging a [No-code/Low-code approach](/blog/no-code_low-code_dealii-x), Coral enables you to construct computational graphs that structure your digital replica through an intuitive **visual interface**. Simply drag and drop nodes, connect them to define relationships, and adjust parameters to customize your simulation. These graphs can be saved, loaded, and shared seamlessly with team members, fostering true collaborative engineering.

Once your computational graph is ready, Coral gives you the flexibility to choose **where your simulation runs**. Since computational requirements can scale dramatically—particularly for complex finite element analyses—you're not limited to your local machine. For instance, in the [dealii-X project](/blog/dualistic-dealiix-partner/), we leverage High Performance Computing (HPC) clusters for large-scale simulations, though local workstations and cloud instances are equally supported.

This is where **Coral Core** takes action. As an intelligent job scheduler, it manages computational resources by efficiently queueing simulations and storing results in designated locations. Throughout the process, it provides real-time status updates to the user interface, keeping you informed about your simulation's progress.

Behind the intuitive interface, **Coral Sim** performs the heavy lifting. It translates your visual computational graph into optimized code that compiles and executes using parallel computing paradigms. In this specific case it integrates with the [deal.II](https://dealii.org) finite element library, in order to provide high-fidelity results that meet demanding engineering standards.

Finally, **Coral Viz** transforms raw simulation data into actionable insights through powerful visualization capabilities, allowing you to explore and understand your results comprehensively.
