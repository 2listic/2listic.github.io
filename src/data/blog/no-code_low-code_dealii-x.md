---
draft: false
title: "The No-code/Low-code approach"
snippet: "How no-code and low-code programming unleash intuitive interactions with complex simulation and data management workflow, while retaining an high, expert-level of customizability."
image: {
    src: "/blog_gallery/lowcode.png",
    alt: "no-code/low-code"
}
publishDate: "2025-03-07 11:00"
category: "Projects"
author: "Dualistic"
tags: [no-code, low-code, dealii-x, use cases, requirements]
---

## A modern platform for human organ digital twin creation 

One of the long-term goals of the [dealii-X](https://www.dealii-x.eu/) project in which [Dualistic is a partner](http://localhost:4321/blog/dualistic-dealiix-partner) is to develop a modern **digital twin platform**, that will significantly enhance the creation of digital twins and the scheduling of related computational tasks.  

The platform will provide key components for diagnostic and training tools in the fields of personalized medicine. Some **use cases** could be a biomedical engineer willing to access the mechanical properties of the organs or tissues or a surgeon interested in intuitive ways to drag an MRI scan and have an interactive simulation without having to deal with all the technical details that are normally needed.

In view of these, it follows a list of **requirements** that the platform should satisfy:

- An interaction that allows deep customization without requiring specific coding skills

- A modular design, to allow components to be easily added

- A collaborative space, in which professionals with different needs can contribute

Those requirements naturally bring into play the programming approach that goes under the name of "Low-code/No-code".


## The No-code/Low-code approach

In modern IT, the demand for rapid application development has driven the rise of the no-code/low-code approaches. These tools empower developers, both experts and domain specialists, to build complex software with minimal manual coding, **reducing development time** and **lowering barriers to entry**. Although such platforms are widely used in business and enterprise applications, their impact on scientific software development is particularly significant.

Scientific research often requires custom software solutions for data analysis, simulation, and visualization. Traditionally, developing such tools has been time-consuming, requiring specialized programming expertise. However, low-code and block-based platforms offer a transformative approach, enabling researchers and engineers to build and modify scientific applications more efficiently. These platforms facilitate collaboration between scientists and software developers, enhance reproducibility, and accelerate innovation in fields such as computational physics, bioinformatics, and environmental modeling.

In practice, the interaction in a no-code/low-code approach typically consists in using a **graph-based** approach, in which every node of the graph is an operator that has inputs and outputs, with edges representing how the different operators are related to each other. 
In the following figure we report an example of a data analytics workflow created using the proprietary KNIME IDE. The workflow should be read from left to right, with the beginning being the reading of an XLS file. The data are then passed to both a node that does, in this example, color extraction, and to other tasks like partitioning and model training, but there are also branches for statistics and different kinds of plotting. Each of the nodes can perform complex operations, and custom nodes can be added to the system to extend its capabilities. 

![no-code](/blog_gallery/nocode-data.png)

The approach depicted so far goes under the name of **no-code programming** since there is coding logic involved, only relations between entities. Although this approach works for workflow definition, there could be more complex manipulation that require a coding approach. For these cases, it is still possible to rely on a visual approach that goes under the name of **low-code**. 


![low-code](/blog_gallery/lowcode.png)

 The above figure shows instead an example of a piece of code that generates the Fibonacci sequence, written in CodeWire. While retaining the logic and control structure of a programming language, it abstracts the details of the specific programming language. 

The approach that Dualistic is pursuing for dealii-X should sport **both strategies**, allowing high-level control by means of the no-code interface, while retaining the possibility of deep customization through the low-code interface. 


## Conclusions
In conclusion, the combination of no-code and low-code are a fundamental tools to unleash intuitive interactions with complex simulation and data management workflow, while retaining an high, expert-level of customizability. This will pave the way to streamlined tools for a more effective and quantitative personalized medicine. 