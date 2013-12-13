Force: A Tale of Technical Debt

![Sketch/Image of Artsy's splash page]()

* 2010 Artsy began as a splash page and stayed that way for a long time
* Only dev on-location
* Genome panel was essentially a poor version of an excel sheet

--

![PHP logo]
LAMP stack

--

![bullet points]

One giant 9000+ line CSS files (Many files largest 614)
1500+ line controller files (Largest is 132)
No Tests
Permission to deploy

--

![Funny gif of two people hacking on the same keyboard]

* Features broke all of the time
* Performance suffered
* Slow to develop in
* Confusing to navigate
* Hard to set up
Acquired technical debt
Worked well enough for Firefighting

First round of funding
Rebooted tech team
No designer
What will make us happy and productive

--

![ROR logo]()

Ruby on Rails

--

![Ho-hum Wireframe Sketch]()

TDD
Agile, standups, anyone deploys
Worked well, very productive on rigid Rails

--

[View in Room]()

Robert joins, ambitious awesome designe

--

[Filter Iframe]()

--

![Diagram showing evolution of stack]()

We outsource a mobile app, make API
"Eat our own dog food", move UI off Rails to Backbone
Admin panel breaks our tests, we extract it
CMS + Folio + Mass + Heat... etc. eventually we're not really using Rails at all

--

![Diagram of Gravity's responsibilites]()

Pumping more Gravity
* Mailing campaigns
* Backbone UI
* API
* Admin Panel Residue
* Offline tasks like Analytics
* Mobile website code

--

![Why You No Build Meme]()

* Performance suffered
* Slow to develop in
* Confusing to navigate
* Hard to set up
Re-acquired technical debt

--

![Node Logo]

--

![Diagram of Marty's architecture vs. Gravity]()

Separate our UI
Martsy let us try something new

Better testing
Faster page loads by sharing rendering code

Highly modular = Easy to expiriment and keep pages small + lightweight
Smaller responsibilites
Faster builds + deploys
Easy to set up (point to staging)

![Maybe split diagrams and so much win]

--

[Extracted Ezel]()

--

[Several open source projects]()
Blog post in the works

What is Force?

![Star war meme]

Gravity's UI extracted onto an Ezel (or Martsy-like) technology
Same benefits as Martsy
Faster deploys
Faster pages
Easy to set up
etc.

--

Thanks!