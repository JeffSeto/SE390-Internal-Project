## Initial idea

The idea is that we can have a visual course selection tool that helps students plan out their courses so that they meet the requirements for their programs and help plan out prerequisites

* Search: we want students to be able to quickly find courses by searching for keyword or course code
* Visualization: we want students to be able to visualize their course selection as they are building it across multiple terms
* Suggested courses: We can recommend courses to students based on what program they are in, what courses they've taken, and what courses have good ratings

### Competitors

* Schedule storm: broken and doesn't work for Waterloo
* Coursicle: isn't integrated with a course data source so it is basically a calendar app
* Griddy(u of t): search is bad, visualization for sections is not good
* VSB(york): search is bad, UI is clunky and unintuitive

There are a couple more, but they almost always fall into two categories; either they are more or less a calendar app with some extra functionality or they have bad user experience and especially poor search functionality.

### Plan

We are planning to initially build out the UI and a mocked out backend for a MVP
Eventually, we want to hook this UI and backend into UWFlow so we can use UWFlow as a datasource. We want to use the course and ratings tables to power our UI
We can also use the search bar from uwflow instead of building our own

### Technologies

Frontend: React
Backend: Python/Flask
