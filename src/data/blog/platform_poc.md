---
draft: true
title: "Design, simulate and visualize with Coral platform"
snippet: "How our user-friendly interface together with a scheduler and a visualizer uses a FEM library to easily create complex digital replicas."
image: {
    src: "/blog_gallery/screen_frontend.png",
    alt: "no-code/low-code"
}
publishDate: "2025-10-30 11:00"
category: "Projects"
author: "Dualistic"
tags: [no-code, low-code, dealii-x, use cases, requirements]
---

Today we are going to demostrate how easy can be to design, simulate and visualize results using **Coral** our digital twin platform.

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

Using the [No-code/Low-code approach](/blog/no-code_low-code_dealii-x) a computational graph structuring our digital replica is easly created. Nodes can be dropped, connected and tweaked to customize the simulation or create new graphs, which can then be saved, loaded and shared among users collaborating on the same project.

When the graph is ready, the user can choose the location where the simulation will actually run. This is because the resources needed can rapidly become very large: in the case of the [dealii-X project](/blog/dualistic-dealiix-partner/) High Performance Computing (HPC) clusters are used but nothing prevents to use a local machine or a cloud instance.

Now is when the Coral Orchestrate takes action managing the available resorces by queueing the different calculations and saving the results in the appropriate location. It also returns to the graphical interface the status of the computation providing usefull information to the user. 

Under the hood, Coral Simulate translates the graph into a set of classes, methods and functions to be compiled and executed using parallel computing. In this case the FEM dealii library is used to provide results with high fidelity. 

Finally, the user Coral Visualize provides a powerfull way to visualize the results.
