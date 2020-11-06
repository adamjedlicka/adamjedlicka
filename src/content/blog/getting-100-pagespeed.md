---
date: '2020-11-06'
title: 'Getting 100 in PageSpeed Insights'
category: 'frontend'
---

Since April when Google announced Web Vitals getting a high score in PageSpeed Insights became quite difficult. Scores dropped for everybody, most of the sites are now in red numbers, and getting 90+ is something to boast about.

At my work, we are developing e-commerce platforms for which SEO is really important. So when Google announced Web Vitals and said it will have a significant impact on SEO, we saw an opportunity. A competitive advantage. To offer an e-commerce platform with the highest PageSpeed score. So I spend the past month optimizing and experimenting with Lighthouse and PageSpeed Insights. And this is what I learned.

## How to get green numbers?

Remove all JavaScript. The end.

Sadly that was the biggest take-away. Even though Google pushes SPAs, PWAs, AMPs, and whatnot, JavaScript is still the biggest speed bump on the road for the 100. Primarily it's because Google measures only the initial load. It doesn't care about the user experience after the page loads. It doesn't care about caching, client-side routing, transitions, or any other bells and whistles modern JavaScript frameworks brought to the table.

The only use case where I found JavaScript to be useful in getting a higher score is lazy-loading of images.

## How to get green numbers even with JavaScript?

Getting rid of JavaScript is not a viable strategy for most sites. The benefits of a better user experience are just too great.

The second best thing you can do is remove unused JavaScript. Google still penalizes you if you have too much JavaScript but if it's doing something and not just sitting there, the punishment is not too severe.

![Hopper The Rabbit](/images/unused-javascript.png)
