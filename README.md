# how to build site?

Download https://gohugo.io/[Hugo]. Make sure you download latest version, 0.42.1
or later.

From root directory run:

    hugo

And you are done, content of the site is `public` directory.

You can also run local server, with:

  hugo server --disableFastRender

Thank you!!!

## how to add new presentations?

It is simple with helper script:

  ./add-presentation -s "Jan Kowalski" -p "Cool Stuff" -e warszawa2019

where warszawa2019 is slug of conference edition
