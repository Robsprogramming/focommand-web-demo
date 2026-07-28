import{v as y,r as u,j as e,z as g,m as v}from"./index-C9UxTE8y.js";import{c as j}from"./ui-DOlxeZP2.js";const N=`You are a motivation psychologist applying Self-Determination Theory's concept of self-concordance to a task list.

Self-concordance = how well a goal/task aligns with the person's authentic values, interests, and identity (vs being externally imposed or pressure-driven).

Analyse each task and the overall list. Return ONLY valid JSON:

{
  "overall_concordance": 0-100,
  "insight": "one sentence about their motivation balance",
  "recommendation": "one actionable suggestion to increase concordance",
  "tasks": [
    {
      "text": "the task text",
      "source": "self | external | mixed",
      "alignment": 0-100,
      "reframe": "if external/mixed, a way to find personal meaning — null if self"
    }
  ]
}

Rules:
- "self" = personally meaningful, chosen freely, connects to identity/values
- "external" = obligation, deadline-driven, someone else's priority
- "mixed" = has both elements
- alignment = how well the task connects to the stated end goal (0 = unrelated, 100 = directly advances it)
- Be honest but constructive — low concordance isn't bad, it's information
- The recommendation should be specific and actionable`,b=`Extract concrete, actionable tasks from this recommendation and assign each a category.
Valid categories: technical, business, marketing, financial, operations, personal-dev, other
Classify based on the NATURE of the activity — tasks about mindset, habits, emotions, or self-improvement are personal-dev even if they involve posting online.
Return ONLY valid JSON:
{
  "tasks": [
    {"text": "task text 1", "category": "personal-dev"},
    {"text": "task text 2", "category": "other"}
  ],
  "replaceAll": true
}
replaceAll must be true if the recommendation says to collapse, replace, discard, or clear existing tasks.
replaceAll must be false if it only adds tasks.
Each task text should be a single clear action sentence, not a fragment.`;async function C(n,{provider:s,apiKey:o}){return y(b,n,{provider:s,apiKey:o,maxTokens:512})}async function A(n,{provider:s,apiKey:o,endGoal:a,profession:r,context:i}){let t=`Tasks:
${n.map(d=>`- ${d.text}`).join(`
`)}`;return a&&(t+=`

End goal: ${a}`),r&&(t+=`
Profession: ${r}`),i&&(t+=`
Context: ${i}`),y(N,t,{provider:s,apiKey:o,maxTokens:2048})}function w(n){if(n.overall_concordance!=null)return n.overall_concordance;const s=n.tasks||[];return s.length?Math.round(s.reduce((o,a)=>o+(a.alignment||0),0)/s.length):null}function T(n,s,o){const a=typeof n=="string"?n:n.text,r=typeof n=="object"&&n.category?n.category:"other";return{id:Date.now()+s,text:a,done:!1,category:r,goalId:o||void 0}}function S({extracted:n,onConfirm:s,onCancel:o}){return e.jsxs("div",{className:"concordance-apply-confirm",children:[e.jsx("p",{className:"concordance-apply-title",children:n.replaceAll?"Replace all tasks with:":"Add to tasks:"}),e.jsx("ul",{className:"concordance-apply-list",children:n.tasks.map((a,r)=>e.jsxs("li",{children:[typeof a=="string"?a:a.text,typeof a=="object"&&a.category&&a.category!=="other"&&e.jsx("span",{className:"concordance-apply-cat",children:a.category})]},r))}),e.jsxs("div",{className:"concordance-apply-actions",children:[e.jsx("button",{className:"concordance-btn concordance-btn-apply",onClick:s,children:"Apply"}),e.jsx("button",{className:"concordance-btn concordance-btn-cancel",onClick:o,children:"Cancel"})]})]})}function E({result:n,setResult:s,scoreColor:o,ai:a}){const r=g(),i=n.tasks||[],t=w(n),[d,m]=u.useState(!1),[h,p]=u.useState(null);async function x(){m(!0);try{const c=await C(n.recommendation,{provider:a.provider,apiKey:a.apiKey});p(c)}catch(c){alert(`Could not parse recommendation: ${c.message}`)}m(!1)}function f(){const c=h.tasks.map((l,k)=>T(l,k,r.activeGoalId));h.replaceAll?r.setTasks(c):r.setTasks(l=>[...l,...c]),p(null)}return e.jsxs("div",{className:"concordance-results",children:[e.jsxs("div",{className:"concordance-score-ring",children:[e.jsxs("svg",{viewBox:"0 0 100 100",className:"concordance-ring-svg",children:[e.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:"rgba(255,255,255,0.07)",strokeWidth:"6"}),t!=null&&e.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"none",stroke:o(t),strokeWidth:"6",strokeDasharray:2*Math.PI*42,strokeDashoffset:2*Math.PI*42*(1-t/100),strokeLinecap:"round",transform:"rotate(-90 50 50)"})]}),e.jsx("span",{className:"concordance-score-text",children:t!=null?`${t}%`:"…"})]}),e.jsx("div",{className:"concordance-insight",children:n.insight}),e.jsx("div",{className:"concordance-tasks",children:i.map((c,l)=>e.jsxs("div",{className:`concordance-task concordance-task-${c.source}`,children:[e.jsxs("div",{className:"concordance-task-header",children:[e.jsxs("span",{className:`concordance-source-badge concordance-source-${c.source}`,children:[c.source==="self"?"💎":c.source==="external"?"📌":"🔀"," ",c.source]}),e.jsxs("span",{className:"concordance-task-align",children:[c.alignment,"%"]})]}),e.jsx("div",{className:"concordance-task-text",children:c.text}),c.reframe&&e.jsxs("div",{className:"concordance-task-reframe",children:["💡"," ",c.reframe]})]},l))}),n.recommendation&&e.jsxs("div",{className:"concordance-rec",children:[e.jsx("span",{className:"concordance-rec-icon",children:"✦"}),n.recommendation]}),h?e.jsx(S,{extracted:h,onConfirm:f,onCancel:()=>p(null)}):n.recommendation&&e.jsx("button",{className:"concordance-btn concordance-btn-apply-rec",onClick:x,disabled:d,children:d?"…":"✦ Apply to tasks"}),e.jsxs("button",{className:"concordance-btn concordance-btn-refresh",onClick:()=>s(null),children:["↻"," Re-analyse"]})]})}function R({tasks:n,aiConfig:s,endGoal:o}){const a=g(),r=v();return{tasks:n||a.tasks,ai:s||r.getAIConfig(),endGoal:o||a.endGoal}}function I({result:n,setResult:s,loading:o,pendingCount:a,onAnalyze:r,ai:i}){return o?e.jsxs("div",{className:"concordance-loading",children:[e.jsx("span",{className:"concordance-spinner"}),"Analysing motivation alignment..."]}):n!=null&&n.error?e.jsxs("div",{className:"concordance-error",children:["⚠ ",n.error,e.jsx("button",{className:"concordance-btn",onClick:()=>s(null),children:"Try again"})]}):n?e.jsx(E,{result:n,setResult:s,scoreColor:j,ai:i}):e.jsxs("button",{className:"concordance-btn",onClick:r,disabled:a===0,children:["💎 Analyse ",a," tasks"]})}function O({onClose:n,tasks:s,aiConfig:o,endGoal:a,profession:r,context:i}){const t=R({tasks:s,aiConfig:o,endGoal:a}),[d,m]=u.useState(null),[h,p]=u.useState(!1);async function x(){const c=t.tasks.filter(l=>!l.done&&!l.parentId);if(c.length!==0){p(!0);try{const l=await A(c,{provider:t.ai.provider,apiKey:t.ai.apiKey,endGoal:t.endGoal,profession:r,context:i});m(l)}catch(l){m({error:l.message})}p(!1)}}const f=t.tasks.filter(c=>!c.done&&!c.parentId).length;return e.jsx("div",{className:"concordance-overlay",onClick:c=>c.target===c.currentTarget&&n(),children:e.jsxs("div",{className:"concordance-modal",children:[e.jsx("button",{className:"concordance-close",onClick:n,children:"×"}),e.jsxs("div",{className:"concordance-header",children:[e.jsx("span",{className:"concordance-dot"}),e.jsx("h2",{className:"concordance-title",children:"Self-Concordance"})]}),e.jsx("p",{className:"concordance-subtitle",children:'Are your tasks aligned with your values? Tasks that are "owned rather than compelled" have higher achievement rates.'}),e.jsx(I,{result:d,setResult:m,loading:h,pendingCount:f,onAnalyze:x,ai:t.ai})]})})}export{O as default};
