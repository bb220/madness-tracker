# madness-tracker
- experimental software project that tracks march madness games
- fun and simple exploration of agents, automations, and personalized software (not prod-grade, not a multitenant solution)

<div align="center">

<img width="200" alt="image" src="https://github.com/user-attachments/assets/8a04b6a4-43fb-44ff-8f68-e258cfd71329" />
  <p>
    <a href="https://x.com/brandonbellero/status/2034313221499396549?s=20">Video demo</a> 
  </p>
</div>

## How it works
### Initial ETL
1. dropped pool CSV into [claude](https://claude.ai/), extracted matchups relevant to me
2. transformed data into a simple list, scraped web for game times and broadcast networks
4. spun up a simple nextjs app to [store the list](https://github.com/bb220/madness-tracker/blob/main/app/page.tsx#L3) and display my matchups
5. deployed to [vercel](https://vercel.com/) with a public domain

<img width="800" height="456" alt="image" src="https://github.com/user-attachments/assets/169a806b-a72e-4fff-8960-642e7ad488ed" />
   
### Sync
1. set up [codex automations](https://developers.openai.com/codex/app/automations) (agent cron jobs) to scrape spreads, score, and results throughout the tournament. codex updates the data in the nextjs app code directly and pushes to github. vercel listens for changes and deploys to prod.

<img width="800" height="560" alt="image" src="https://github.com/user-attachments/assets/33e16d89-e44e-4f90-9a7f-1f3d65d21662" />
