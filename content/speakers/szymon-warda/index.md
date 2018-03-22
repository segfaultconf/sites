---
speakername: "Szymon Warda"
presentationtitle: "You are using the wrong database!"
resources:
  - src: "szymon_warda.jpg"
    name: "photo"
---

# Bio

With .NET from version 1.1 and with web development from the time when IE6 was the “better” browser. Working with machine learning, cloud, and big data by day. By night a developer of cookit.pl- a pet project processing hundred of gigabytes of data with whatever suits the problem best (Graph databases/ML/C#/F#). Technology enthusiast, Neo4j ambassador, speaker, and a blogger at IndexOutOfRange.com

# Abstract

I’ve been heavily interested in different databases since I’ve started my pet project - cookit.pl. The front of the service is a food recipe search engine. The back is crawling almost 1 thousand websites. It determines if the page contains a recipe, extracts the text, ingredients, units, and amount. Images are similarly processed for relevance, rescaled and saved. This all sums up to 1 TB of data being processed on an Intel i3 with 8 gigabytes of RAM.

With those constraints and the fact that this data that is used for search, individual recipe display and NLP I’ve quickly understood that the database is the most common performance bottleneck and has a huge influence on how the domain is modeled. Since then I’ve been using relational, graph, object, stream and key-value databases.

This talk was inspired by a common tendency to use a “one fits all” database despite the fact that it will be average in every area of its usage. My goal is to show how diverse the world of databases is, how huge performance gains can easily be achieved by using the right database for the right problem.
