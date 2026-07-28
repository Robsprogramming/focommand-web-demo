import{a6 as p,v as u}from"./index-C9UxTE8y.js";const f=`You are a world-class productivity strategist. You have been given a set of tasks along with deep analysis for each one (time estimate, feasibility rating, sub-steps, and approach options). Your job is to synthesise all of this into the most realistic possible plan for the day — including natural breaks a real person needs to sustain focus.

Return ONLY valid JSON — no explanation, no markdown:

{
  "type": "daily",
  "opener": "the single most important thing to do in the next 5 minutes to build momentum — starts with a verb",
  "blocks": [
    {
      "type": "task",
      "taskId": "original taskId from input",
      "task": "exact task text",
      "time": "time estimate e.g. '45 min' or '2 hours'",
      "approach": "the most efficient method to complete this task — synthesised from the analysis provided, 1–2 sentences",
      "first_step": "the very first concrete action — starts with a verb, under 80 chars",
      "why_here": "one-sentence reason this task is in this position in the sequence"
    },
    {
      "type": "break",
      "task": "break name e.g. 'Morning break', 'Lunch', 'Afternoon break'",
      "time": "duration e.g. '15 min', '45 min'"
    }
  ]
}

Rules:
- opener: one immediate action to start RIGHT NOW, no preamble
- blocks: include ALL provided tasks ordered from most to least urgent/impactful, with breaks woven in naturally
- Every block must have a "type" field — either "task" or "break"
- Insert a short morning break (10–15 min) after roughly 1.5–2 hours of focused work
- Insert a lunch break (30–60 min) around the midpoint of the day
- Insert a short afternoon break (10–15 min) after another 1.5–2 hours of work, if there are enough remaining tasks to warrant it
- taskId: copy the exact taskId string from the input for each task block
- Break blocks have only "type", "task", and "time" — no taskId, approach, first_step, or why_here
- approach: synthesise the plan steps, suggestions, and feasibility into the single best method — be direct and specific, not generic
- first_step: must be doable in under 2 minutes — the "foot in the door" action
- why_here: short, frank reasoning for the sequence position (e.g. "Clears the biggest blocker", "Quick win to build momentum", "Needs morning energy")
- If a "Today's goal" is provided, put tasks most relevant to it first
- Consider feasibility ratings: "Totally Doable" tasks early, "Ambitious" tasks when energy is highest (slots 1–2), not when fatigued`,g=`You are a world-class productivity strategist. You have been given a set of tasks — some taking hours, others days or even weeks. Your job: assign them realistically across multiple days, giving each day a clear focus and natural breaks.

Return ONLY valid JSON — no explanation, no markdown:

{
  "type": "weekly",
  "summary": "1–2 sentence overview of how the work is distributed and why",
  "days": [
    {
      "dayLabel": "Today (Thu Apr 3)",
      "goal": "what to accomplish today — one focused sentence",
      "blocks": [
        {
          "type": "task",
          "taskId": "original taskId from input",
          "task": "task text — for multi-day tasks use 'Phase 1: ...' style labels",
          "time": "time for today's work on this task e.g. '2 hours'",
          "approach": "how to approach this specific portion today — 1–2 sentences",
          "first_step": "very first concrete action — starts with a verb, under 80 chars",
          "why_here": "why this task is scheduled on this day"
        },
        {
          "type": "break",
          "task": "break name e.g. 'Morning break', 'Lunch'",
          "time": "15 min"
        }
      ]
    }
  ]
}

Rules:
- A workday has 6–7 hours of productive time
- Include 2–7 days total, enough to cover all tasks realistically
- Each day: 1–5 task blocks with natural breaks woven in (morning 10–15 min, lunch 30–60 min, afternoon 10–15 min)
- Break large tasks into phases across days: "Phase 1: Research", "Phase 2: Draft", "Phase 3: Review"
- Tasks taking weeks should be spread realistically — show what gets done each day toward completion
- Day 1 = today — prioritise the most urgent or impactful tasks
- "Totally Doable" tasks early on Day 1 for momentum, "Ambitious" tasks when energy is highest
- If a "Today's goal" is provided, front-load goal-related tasks on Day 1
- Use real calendar labels based on today's date: "Today (Thu Apr 3)", "Tomorrow (Fri Apr 4)", "Monday Apr 7"
- taskId: copy the exact taskId string from the input for each task block (even when splitting into phases, use the original taskId)
- Break blocks have only "type", "task", and "time" — no taskId or other fields`,w=`You are a world-class productivity strategist. You have been given tasks already categorised into a size × urgency matrix (small/large × now/later). Your job is to turn the "Now" tasks into an optimal daily schedule, following research-backed focus principles.

Return ONLY valid JSON — no explanation, no markdown:

{
  "type": "daily",
  "opener": "the single most important thing to do in the next 5 minutes to build momentum — starts with a verb",
  "blocks": [
    {
      "type": "task",
      "taskId": "original task id",
      "task": "exact task text",
      "size": "large" or "small",
      "time": "time estimate e.g. '45 min' or '2 hours'",
      "approach": "efficient method to complete this — 1–2 sentences",
      "first_step": "very first concrete action — starts with a verb, under 80 chars",
      "why_here": "reason for sequence position"
    },
    {
      "type": "break",
      "task": "break name",
      "time": "duration"
    }
  ]
}

Scheduling principles:
- Large + Now tasks go in deep focus blocks FIRST (morning/peak energy) — 60–90 min each
- Small + Now tasks are BATCHED together into a "quick wins" window after deep work
- Insert a short break (10–15 min) after every 1.5–2 hours of focused work
- Insert a lunch break (30–60 min) around the midpoint
- Large + Later and Small + Later tasks are EXCLUDED from today's schedule
- opener: one immediate action to start RIGHT NOW
- taskId: copy the exact task id from the input
- size: copy from the input — "large" or "small" exactly as categorised by the focus range analysis
- Break blocks have only "type", "task", and "time"
- why_here: frank reasoning like "Deep focus while energy is highest", "Quick win batch — low switching cost", "Needs morning clarity"
- Estimate realistic times: small tasks 10–30 min each, large tasks 1–3 hours each`;function b(s){if(!s)return 1;const e=s.toLowerCase(),t=e.match(/(\d+(?:\.\d+)?)\s*(?:-\s*\d+(?:\.\d+)?)?\s*week/);if(t)return parseFloat(t[1])*35;const a=e.match(/(\d+(?:\.\d+)?)\s*(?:-\s*\d+(?:\.\d+)?)?\s*day/);if(a)return parseFloat(a[1])*7;const i=e.match(/(\d+(?:\.\d+)?)\s*(?:-\s*(\d+(?:\.\d+)?))?\s*h/);if(i){const r=parseFloat(i[1]),n=i[2]?parseFloat(i[2]):r;return(r+n)/2}const o=e.match(/(\d+(?:\.\d+)?)\s*(?:-\s*(\d+(?:\.\d+)?))?\s*min/);if(o){const r=parseFloat(o[1]),n=o[2]?parseFloat(o[2]):r;return(r+n)/120}return 1}function v({task:s,plan:e,feas:t,sugg:a},i){var r,n;const o=[`Task ${i+1} (taskId: "${s.id}"): "${s.text}"`];return e!=null&&e.timeEstimate&&o.push(`  Time estimate: ${e.timeEstimate}`),t!=null&&t.rating&&o.push(`  Feasibility: ${t.rating}`),t!=null&&t.verdict&&o.push(`  Assessment: ${t.verdict}`),e!=null&&e.howToStart&&o.push(`  How to start: ${e.howToStart}`),(r=e==null?void 0:e.steps)!=null&&r.length&&o.push(`  Steps: ${e.steps.slice(0,3).join(" → ")}`),(n=a==null?void 0:a.items)!=null&&n.length&&o.push(`  Sub-tasks/approaches: ${a.items.slice(0,3).join(", ")}`),o.join(`
`)}function k(s,{profession:e,goal:t,context:a}){e!=null&&e.trim()&&s.push(`Profession: ${e.trim()}`),t!=null&&t.trim()&&s.push(`Today's goal: ${t.trim()}`),a!=null&&a.trim()&&s.push(`User context: ${a.trim()}`),s.push(`Current time: ${new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}`)}async function S(s,{provider:e,apiKey:t,goal:a,context:i,profession:o}){const r=s.map(v).join(`

`),h=s.reduce((y,{plan:l})=>y+b(l==null?void 0:l.timeEstimate),0)>7,c=h?g:f,d=[r];d.push(`
Today's date: ${new Date().toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"numeric",year:"numeric"})}`),k(d,{profession:o,goal:a,context:i});const m=d.join(`
`);return h?u(c,m,{provider:e,apiKey:t,maxTokens:16e3}):p("schedule.generate",c,m,{provider:e,apiKey:t,maxTokens:16e3})}function T(s){const e=[];for(const t of["largeNow","smallNow"]){const a=t.startsWith("large")?"Large":"Small";for(const i of s[t]||[])e.push({id:i.id,text:i.text,size:a,why:i.why})}return e}async function E(s,{provider:e,apiKey:t,endGoal:a,profession:i,context:o,todayGoal:r}){const n=T(s);if(n.length===0)return null;const h=["Tasks to schedule (ordered: large first, then small):"];return n.forEach(c=>{h.push(`- [taskId: "${c.id}"] [${c.size}] ${c.text}${c.why?` (context: ${c.why})`:""}`)}),r&&h.push(`
Today's goal: ${r}`),a&&h.push(`End goal: ${a}`),k(h,{profession:i,goal:null,context:o}),s.focusSummary&&h.push(`Focus recommendation: ${s.focusSummary}`),u(w,h.join(`
`),{provider:e,apiKey:t,maxTokens:4096})}export{E as g,S as s};
