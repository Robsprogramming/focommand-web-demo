import{a6 as g,v as h}from"./index-C9UxTE8y.js";const c={build:"Build Something (startup, project, creative work)",habit:"Change a Habit (weight loss, exercise, reading)",decision:"Make a Decision (buy a car, choose a school)",experience:"Plan an Experience (vacation, wedding, event)",learn:"Learn Something (new skill, certification)",okr:"OKR Stretch Goal (ambitious objectives with measurable key results)"},u=`You are a focused productivity coach. Given a user's goal, goal type, current tasks, and context, pick the SINGLE most impactful action they should take today. This should feel like a gift, not a chore.

Return ONLY valid JSON — no explanation, no markdown:

{
  "action": "the one thing to do today — specific, concrete, starts with a verb, under 100 characters",
  "why": "one sentence explaining why THIS action moves the needle most right now",
  "timeEstimate": "realistic time e.g. '20 minutes' or '1 hour'",
  "extras": ["2-3 optional bonus actions if they want more — each under 80 characters"]
}

Rules:
- action: must be immediately doable today, not a multi-day project
- For habit goals: focus on the daily practice, not planning
- For decision goals: focus on reducing uncertainty (research, test drive, compare)
- For experience goals: focus on the next booking/reservation/preparation step
- For learning goals: focus on active practice, not passive reading
- For build goals: focus on the highest-leverage deliverable
- why: be specific to their situation, not generic motivation
- extras: 2-3 items only, each smaller/quicker than the main action
- timeEstimate: honest, includes setup time`;async function y({goal:r,goalType:t,tasks:e,context:i,profession:a},s){let n=`Goal: ${r}`;if(n+=`
Goal type: ${c[t]||t}`,e!=null&&e.length){const l=e.filter(o=>!o.done).map(o=>`- ${o.text}`).join(`
`),d=e.filter(o=>o.done).map(o=>`- ${o.text}`).join(`
`);l&&(n+=`

Pending tasks:
${l}`),d&&(n+=`

Completed tasks:
${d}`)}return a&&(n+=`
Profession: ${a}`),i&&(n+=`
Context: ${i}`),n+=`
Time: ${new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}`,n+=`
Date: ${new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long"})}`,g("goals.onething",u,n,s)}const m=`You are a strategic project planner. Given a goal and its type, create a practical phased breakdown that gives the user an instant starting structure.

Return ONLY valid JSON — no explanation, no markdown:

{
  "phases": [
    {
      "phase": "phase name, e.g. Research, Setup, Build, Launch, Review",
      "tasks": ["concrete task under 80 characters — starts with a verb"]
    }
  ],
  "taskCategories": ["category_id"],
  "successCriteria": "one clear sentence describing what done looks like — measurable and specific",
  "motivation": "one sentence capturing the real-world outcome this goal leads to"
}

Available category IDs: technical, business, marketing, financial, operations, personal-development, legal, design, content, testing, team, website, research, data

Rules:
- phases: 3–5 phases appropriate for the goal type (e.g. build → Research, Design, Build, Test, Launch; habit → Prepare, Start, Build Streak, Maintain)
- Each phase: 3–4 tasks, specific and actionable, starting with a verb
- taskCategories: 3–5 most relevant category IDs for this specific goal
- successCriteria: concrete and measurable — something the user can actually check off
- motivation: derived directly from the goal text, not generic`,p=`You are a strategic planning assistant. Given a user's goal and its type, recommend a realistic deadline.

Return ONLY valid JSON — no explanation, no markdown:

{
  "deadline": "YYYY-MM-DD",
  "rationale": "one sentence explaining why this timeline is realistic",
  "range": { "optimistic": "YYYY-MM-DD", "conservative": "YYYY-MM-DD" }
}

Rules:
- deadline: a realistic middle-ground date in YYYY-MM-DD format, counting from today
- For habit goals: 30–90 days depending on the habit complexity
- For decision goals: 1–4 weeks
- For experience goals: 3–12 months based on lead time needed
- For learning goals: 1–6 months based on depth and complexity
- For build goals: 3–12 months based on scope
- For OKR goals: align to quarterly cycles (~90 days)
- rationale: one sentence, specific to the goal text, not generic
- range.optimistic: a few weeks earlier than deadline (if everything goes smoothly)
- range.conservative: a few weeks to a month later (accounting for typical delays)`;async function v({goal:r,goalType:t,category:e},i){let a=`Goal: ${r}`;return t&&(a+=`
Goal type: ${c[t]||t}`),e&&(a+=`
Category: ${e}`),a+=`
Today's date: ${new Date().toISOString().split("T")[0]}`,h(p,a,{...i,maxTokens:300})}async function b({goal:r,goalType:t,context:e,profession:i},a){let s=`Goal: ${r}`;return t&&(s+=`
Goal type: ${c[t]||t}`),i&&(s+=`
Profession: ${i}`),e&&(s+=`
Context: ${e}`),h(m,s,{...a,maxTokens:1200})}export{b as d,y as g,v as r};
