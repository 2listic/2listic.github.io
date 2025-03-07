---
draft: false
title: "Low-code/No-code approach in the dealii-X project."
snippet: "In today's rapidly evolving technological landscape, the concept of a digital twin has emerged as a game-changer across various industries. A digital twin represents a virtual replica of a physical entity, whether it's a machine, a process, or even a living organism."
image: {
    src: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "no-code/low-code"
}
publishDate: "2025-03-07 11:00"
category: "Projects"
author: "Dualistic"
tags: [dt, low-code]
---

One of the long-term goals of the [dealii-X](https://www.dealii-x.eu/) project is to develop key components for diagnostic and training tools in the fields of personalized medicine. In order for such tools to be used by a large number of professionals, some intuitive yet complete interfaces should be created. Moreover, different levels of interaction should be envisioned: a biomedical engineer should be able to access the mechanical properties of the organs or tissues, while a surgeon could be interested in intuitive ways to drag an MRI scan into the system and have an interactive simulation without having to deal with the technical details of the simulation.

In view of these diverse use cases, a list of requirements that the dealii-X platform should sport looks like

- A collaborative space, in which professionals with different needs can contribute
- A modular design, to allow components to be easily added
- An interaction that allows deep customization without requiring specific coding skills

Those requirements naturally bring into play the programming approach that goes under the name of "Low-code/No-code".


## No-code/Low-code approach

In modern IT, the demand for rapid application development has driven the rise of the no-code/low-code approaches. These tools empower developers, both experts and domain specialists, to build complex software with minimal manual coding, reducing development time and lowering barriers to entry. Although such platforms are widely used in business and enterprise applications, their impact on scientific software development is particularly significant.

Scientific research often requires custom software solutions for data analysis, simulation, and visualization. Traditionally, developing such tools has been time-consuming, requiring specialized programming expertise. However, low-code and block-based platforms offer a transformative approach, enabling researchers and engineers to build and modify scientific applications more efficiently. These platforms facilitate collaboration between scientists and software developers, enhance reproducibility, and accelerate innovation in fields such as computational physics, bioinformatics, and environmental modeling.

In practice, the interaction in a no-code/low-code approach typically consists in using a graph-based approach, in which every node of the graph is an operator that has inputs and outputs, with edges representing how the different operators are related to each other. 
In figure we report an example of a data analytics workflow created using the proprietary KNIME IDE. The workflow should be read from left to right, with the beginning being the reading of an XLS file. The data are then passed to both a node that does, in this example, color extraction, and to other tasks like partitioning and model training, but there are also branches for statistics and different kinds of plotting. Each of the nodes can perform complex operations, and custom nodes can be added to the system to extend its capabilities. 

![no-code](/blog_gallery/nocode-data.png)

The approach depicted so far goes under the name of no-code programming since there is coding logic involved, only relations between entities. Although this approach works for workflow definition, there could be more complex manipulation that require a coding approach. For these cases, it is still possible to rely on a visual approach that goes under the name of low-code. 


![predictive maintenance](/blog_gallery/lowcode.png)

The approach that Dualistic is pursuing for dealii-X should sport both strategies, allowing high-level control by means of the no-code interface, while retaining the possibility of deep customization through the low-code interface. 


## Conclusions
In conclusion, the combination of no-code and low-code is a fundamental tools to unleash intuitive interactions with complex simulation and data management workflow, while retaining an high, expert-level of customizability. This will pave the way to streamlined tools for a more effective and quantitative personalized medicine. 