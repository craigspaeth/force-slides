Force: A Tale of Technical Debt

--

* 2010 Artsy began as a splash page and stayed that way for a long time
* Only dev on-location
* Genome panel was essentially a poor version of an excel sheet

--

* LAMP

--

* No Tests
* Permission to deploy
* 9000+ CSS (largest ~600)
* 1500+ controller (largest ~100)

--

* Features broke all of the time
* Performance suffered
* Slow to develop in
* Confusing to navigate
* Hard to set up

* Acquired technical debt

* Worked well enough for Firefighting

* First round of funding
* Rebooted tech team

* No designer
* What will make us happy and productive

--

* Ruby on Rails
* Rigid, does a lot of things for you

--

* Rebuilt all existing functionality in 2 months undesigned
* TDD, standups, anyone deploys
* Very productive

--

* Robert joins
* Ambitious UI

--

* Lots of browser code called Javascript

--

* We outsource a mobile app, make API
* Manage Javascript with Backbone, "Eat our own dog food", move UI off Rails

* Admin panel breaks our tests, we extract it
* CMS + Folio + Mass + Heat... etc. eventually we're not really using Rails at all

--

* Pumping more Gravity
* Mailing campaigns
* Backbone UI
* API
* Admin Panel Residue
* Offline tasks like Analytics
* Mobile website code

--

* Performance suffered
* Slow to develop in
* Confusing to navigate
* Hard to set up
* Re-acquired technical debt

--

* Node.js
* Javascript on the server and browser
* Expiriment on Martsy

--

* Highly modular = Easy to expiriment and keep pages small + lightweight
* Smaller responsibilites

--

* Faster page loads by sharing rendering code

--

* Better testing = Faster builds + deploys
* Pages load faster
* Flexible, easy to expirement
* Easy to set up (point to staging)

--

* Extracted many open source projects
* Coalesced into Ezel a reusable boilerplate
* Easel.js was taken

--

* What's Force

--

* Desktop UI extracted onto an Ezel (or Martsy-like) technology
* Same benefits as Martsy
* Faster deploys
* Faster page loads
* Easy to set up

--

Thanks!
