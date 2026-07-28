import{v as d}from"./index-C9UxTE8y.js";const h=`You are a strategic task analyst. Given a list of tasks, an optional end goal, and user context, categorise each task into a 2×2 matrix (size × urgency) and identify how tasks relate to each other.

Return ONLY valid JSON — no explanation, no markdown:

{
  "smallNow": [{"text": "task text", "id": null, "why": "why it belongs here"}],
  "smallLater": [{"text": "task text", "id": null, "why": "why it belongs here"}],
  "largeNow": [{"text": "task text", "id": null, "why": "why it belongs here"}],
  "largeLater": [{"text": "task text", "id": null, "why": "why it belongs here"}],
  "immediateActions": ["concrete thing to do right now under 80 chars"],
  "widerVision": ["broader perspective or strategic insight under 100 chars"],
  "focusSummary": "1-2 sentence recommendation on what to focus on now and why"
}

Rules:
- "small" = completable in under 1 hour; "large" = requires multiple hours or sessions
- "now" = should be done today or is blocking other work; "later" = can wait without consequence
- Every task from the input must appear in exactly one quadrant
- Preserve the original task id if provided
- immediateActions: 2–4 items — the very next concrete steps to take right now
- widerVision: 2–4 items — how today's tasks connect to bigger goals and long-term trajectory
- focusSummary: direct, practical, and motivating`;function u(e,r){const i={};r.forEach(t=>{i[t.text.toLowerCase().trim()]=t.id});for(const t of["smallNow","smallLater","largeNow","largeLater"])e[t]&&(e[t]=e[t].map(a=>{var o;return{...a,id:a.id||i[(o=a.text)==null?void 0:o.toLowerCase().trim()]||null}}))}async function g(e,{provider:r,apiKey:i,endGoal:t,profession:a,context:o,todayGoal:l}){const n=[`Tasks:
${e.filter(s=>!s.done&&!s.parentId).map(s=>`- [id:${s.id}] ${s.text}`).join(`
`)}`];l&&n.push(`
Today's goal: ${l}`),t&&n.push(`End goal: ${t}`),a&&n.push(`Profession: ${a}`),o&&n.push(`Context: ${o}`);const c=await d(h,n.join(`
`),{provider:r,apiKey:i,maxTokens:2048});return u(c,e),c}export{g as a};
