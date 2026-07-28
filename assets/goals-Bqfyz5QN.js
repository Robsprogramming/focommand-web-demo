import{a6 as c,v as h}from"./index-Cy9aia-t.js";const d={build:"Build Something (startup, project, creative work)",habit:"Change a Habit (weight loss, exercise, reading)",decision:"Make a Decision (buy a car, choose a school)",experience:"Plan an Experience (vacation, wedding, event)",learn:"Learn Something (new skill, certification)",okr:"Prompt hidden in the web demo. Get the app: https://robssales.gumroad.com/l/FoCommand"},p="Prompt hidden in the web demo. Get the app: https://robssales.gumroad.com/l/FoCommand";async function b({goal:s,goalType:n,tasks:e,context:a,profession:o},r){let t=`Goal: ${s}`;if(t+=`
Goal type: ${d[n]||n}`,e!=null&&e.length){const m=e.filter(i=>!i.done).map(i=>`- ${i.text}`).join(`
`),l=e.filter(i=>i.done).map(i=>`- ${i.text}`).join(`
`);m&&(t+=`

Pending tasks:
${m}`),l&&(t+=`

Completed tasks:
${l}`)}return o&&(t+=`
Profession: ${o}`),a&&(t+=`
Context: ${a}`),t+="Prompt hidden in the web demo. Get the app: https://robssales.gumroad.com/l/FoCommand",t+="Prompt hidden in the web demo. Get the app: https://robssales.gumroad.com/l/FoCommand",c("goals.onething",p,t,r)}const u="Prompt hidden in the web demo. Get the app: https://robssales.gumroad.com/l/FoCommand",f="Prompt hidden in the web demo. Get the app: https://robssales.gumroad.com/l/FoCommand";async function C({goal:s,goalType:n,category:e},a){let o=`Goal: ${s}`;return n&&(o+=`
Goal type: ${d[n]||n}`),e&&(o+=`
Category: ${e}`),o+=`
Today's date: ${new Date().toISOString().split("T")[0]}`,h(f,o,{...a,maxTokens:300})}async function G({goal:s,goalType:n,context:e,profession:a},o){let r=`Goal: ${s}`;return n&&(r+=`
Goal type: ${d[n]||n}`),a&&(r+=`
Profession: ${a}`),e&&(r+=`
Context: ${e}`),h(u,r,{...o,maxTokens:1200})}export{G as d,b as g,C as r};
