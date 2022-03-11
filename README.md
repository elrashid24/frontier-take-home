👋 Hey there, welcome to Frontier's Full-Stack takehome exercise!

At [Frontier](https://frontier-jobs.com), we are on a [mission to get America back to work.](https://www.nfx.com/post/3-reasons-why-nfx-invested-in-frontier)

We are building a vertically-integrated hiring marketplace that connects job seekers and employers faster than ever before. We’ve reimagined the job search experience, allowing jobseekers to book interviews directly with employers and connect them instantly via our virtual interview platform. And we're just getting started!

Everything starts with the candidate, and Frontier's highly optimized application form is the first piece of Frontier's product a candidate will interact with.

## 🛠 Your Challenge
![Form prototype](https://cdn.frontier.jobs/frontier-exercise-proto.png)

Your challenge is to finish building Frontier's new candidate application form. This is a dynamic form that candidates will use to apply to any job on the Frontier platform.

We've added some form components and scaffolding so you can hit the ground running, but there's still some work to do:

- [x] Setup the project.
- [x] Create base form elements.
- [x] Load the data from the server.
- [ ] Create a form using the fetched JSON and the included components.
- [ ] Create the missing 'monochoice' component.
- [ ] When the form is submitted, send the user's inputted data to the endpoint in `/api/apply.ts` and log it to the console.
- [ ] Write down and share via email or in the Readme what considerations you would make if you needed to deploy and host this project for the following use cases:
  - 1. One developer working on this as an MVP where the project won't need many updates, and the lifetime of the project may be short.
  - 2. Multiple developers working over a prolonged period of time where multiple updates are made per day.
- [ ] (optional) Break the form steps into pages, so each section is a new page.
- [ ] (optional) Add some validation to the form.
- [ ] (optional) Come up with a way to only show the `experience` field if the user confirms they are 18+ years old. Ideally the method you use can be used to conditionally show any field depending on a previous answer.


## ⚙️ Getting Started
1. Checkout the project, `cd` into the directory, and run `yarn` to install dependencies.
2. Run the dev server using `yarn dev`.
3. Open [http://localhost:3000](http://localhost:3000) with your browser.
4. Make changes and the browser will automatically refresh.
5. See the demo page to view available elements: [http://localhost:3000/elements](http://localhost:3000/elements).


*This project was bootstrapped with create_next_app*

## Principles
- Please use Typescript to the best of your ability.
- Please try to make good use of ES6 and React hooks.
- Try to avoid using external npm modules unless there's good reason to.
- We've added boilerplate code to help you, but you don't have to use it. Please feel free to remove or replace anything you want!

---

Good luck!

_– Frontier Engineering :)_

_ps -- We encourage you to treat the brief above like a product spec (and not a school test) where the customer requirements take precidence over the path you take to deliver them. So if you notice a more efficient path, or need to shave off some time to deliver your solution, just let us know in your response!_