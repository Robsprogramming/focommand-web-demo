import{v as l}from"./index-Cy9aia-t.js";const m="Prompt hidden in the web demo. Get the app: https://robssales.gumroad.com/l/FoCommand";function c(o,i){const r={};i.forEach(a=>{r[a.text.toLowerCase().trim()]=a.id});for(const a of["smallNow","smallLater","largeNow","largeLater"])o[a]&&(o[a]=o[a].map(s=>{var t;return{...s,id:s.id||r[(t=s.text)==null?void 0:t.toLowerCase().trim()]||null}}))}async function h(o,{provider:i,apiKey:r,endGoal:a,profession:s,context:t,todayGoal:d}){const n=[`Tasks:
${o.filter(e=>!e.done&&!e.parentId).map(e=>`- [id:${e.id}] ${e.text}`).join(`
`)}`];d&&n.push(`
Today's goal: ${d}`),a&&n.push(`End goal: ${a}`),s&&n.push(`Profession: ${s}`),t&&n.push(`Context: ${t}`);const p=await l(m,n.join(`
`),{provider:i,apiKey:r,maxTokens:2048});return c(p,o),p}export{h as a};
