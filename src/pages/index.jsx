import React from 'react'
import DefaultLayout from '../layouts/default'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <DefaultLayout>
      <Seo />

      <div class="flex flex-col sm:flex-row mx-auto -mx-32">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 inline-flex items-center justify-center">
            <img src="/images/headshot.jpeg" alt="headshot" class="rounded-full" width="80" height="80" />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Adam Jedlička</h2>
            <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4" />
            <p class="text-base text-gray-600 mb-4">Full stack developer at MageXo&nbsp;s.r.o.</p>
            <p class="text-base text-gray-600 mb-4">Student at Prague University of Economics and Business</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
          <div class="prose">
            <p>
              My first experience with programming was at 7 years old when I was spicing up mine and my friends profile
              pages with HTML and CSS on Czech social network for kids - <a href="https://www.alik.cz">Alík.cz</a>.
              Since then I learned some more HTML, CSS and even a bit of JS on Czech equivalent of{' '}
              <a href="https://www.w3schools.com">W3Schools</a> from two thousands -{' '}
              <a href="https://www.jakpsatweb.cz">Jak psát web</a>.
            </p>
            <p>
              The real programming started in high school, where I learned C#, Java and C++. I completely fell in love
              with it and to this day it's consuming the biggest part of my daily life.
            </p>
            <p>
              One of my favourite subject are programming languages themselves. I've written non-trivial programs in at
              least a dozen of them and at least experimented with much more. My favourites are definitelly Go, PHP and
              JavaScript (I know...). My fascination with programming languages even got me to write language of my own
              - <a href="https://github.com/adamjedlicka/blu">blu</a>.
            </p>
            <p>
              Even though in my professional career I do mostly frontend work in Vue.js, I still prefer backend because
              of its complexity, broader variety and my suckiness in design.
            </p>
            <p>
              <sup>i use arch btw</sup>
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
