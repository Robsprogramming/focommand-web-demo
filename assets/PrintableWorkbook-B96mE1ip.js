import{r as v}from"./index-Cy9aia-t.js";function b(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function m(t){const e={};return t.filter(i=>i.parentId).forEach(i=>{e[i.parentId]||(e[i.parentId]=[]),e[i.parentId].push(i)}),e}function u({tasks:t,goals:e,activeGoalId:i,endGoal:s,todayGoal:l,blank:o}){const a=o?[]:t||[],n=o?null:e==null?void 0:e.find(r=>r.id===i),d=a.filter(r=>!r.parentId),p=m(a),c=d.filter(r=>!r.done),f=a.filter(r=>r.done),h=o?"":l,g=o?"":s,x=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return{allTasks:a,activeGoal:n,parentTasks:d,subtaskMap:p,pendingParents:c,completedTasks:f,_todayGoal:h,_endGoal:g,today:x,titleSuffix:o?" (Blank)":""}}function w({today:t,_endGoal:e,esc:i}){return`
<!-- ═══════════════════════════════════════════════════════
     COVER — Workbook Overview & Flow Guide
     ═══════════════════════════════════════════════════════ -->
<div class="page">
  <div style="text-align:center;margin-top:20px">
    <div style="font-size:42px;margin-bottom:4px">☑</div>
    <div class="cover-title">FoCommand Workbook</div>
    <div class="cover-subtitle">${t}</div>
  </div>

  <p class="flow-intro">
    This workbook follows a deliberate sequence designed to move you from big-picture clarity
    all the way through to focused execution and meaningful reflection. Each section builds on
    the one before it - complete them in order for the best results.
  </p>

  <div class="flow-steps">
    <div class="flow-phase-label" style="margin-left:0;margin-bottom:4px">Phase 1 - Clarify</div>

    <div class="flow-step">
      <div class="flow-step-num">1</div>
      <div class="flow-step-body">
        <div class="flow-step-title">Goal Breakdown</div>
        <div class="flow-step-desc">Start with the big picture. Define your goal, why it matters, set milestones, and identify obstacles. Everything else flows from this clarity.</div>
        <div class="flow-step-page">Page 2</div>
      </div>
    </div>

    <div class="flow-step">
      <div class="flow-step-num">2</div>
      <div class="flow-step-body">
        <div class="flow-step-title">Brain Dump</div>
        <div class="flow-step-desc">Clear your mind completely. Write down every thought, worry, idea, and to-do so nothing stays hidden and draining your focus.</div>
        <div class="flow-step-page">Page 3</div>
      </div>
    </div>

    <div class="flow-phase-label" style="margin-left:0;margin-top:14px;margin-bottom:4px">Phase 2 - Prioritise & Plan</div>

    <div class="flow-step">
      <div class="flow-step-num">3</div>
      <div class="flow-step-body">
        <div class="flow-step-title">Priority Matrix</div>
        <div class="flow-step-desc">Take what surfaced in your brain dump and sort it. Use the Eisenhower quadrants to separate what truly matters from noise.</div>
        <div class="flow-step-page">Page 4</div>
      </div>
    </div>

    <div class="flow-step">
      <div class="flow-step-num">4</div>
      <div class="flow-step-body">
        <div class="flow-step-title">Weekly Overview</div>
        <div class="flow-step-desc">Zoom out to the week. Distribute your priorities across days, set weekly goals, and commit to the habits that support your goal.</div>
        <div class="flow-step-page">Page 5</div>
      </div>
    </div>

    <div class="flow-step">
      <div class="flow-step-num">5</div>
      <div class="flow-step-body">
        <div class="flow-step-title">Daily Planner</div>
        <div class="flow-step-desc">Zoom in to today. Pick your #1 focus, list your top 3 priorities, and commit to a clear set of tasks drawn from your weekly plan.</div>
        <div class="flow-step-page">Page 6</div>
      </div>
    </div>

    <div class="flow-step">
      <div class="flow-step-num">6</div>
      <div class="flow-step-body">
        <div class="flow-step-title">Time-Block Schedule</div>
        <div class="flow-step-desc">Assign each hour to a specific task. Protect deep-work blocks and track your energy to work with your natural rhythm.</div>
        <div class="flow-step-page">Page 7</div>
      </div>
    </div>

    <div class="flow-phase-label" style="margin-left:0;margin-top:14px;margin-bottom:4px">Phase 3 - Execute & Reflect</div>

    <div class="flow-step">
      <div class="flow-step-num">7</div>
      <div class="flow-step-body">
        <div class="flow-step-title">Focus Session Log</div>
        <div class="flow-step-desc">Track each work session as you go. Record duration, accomplishments, and flow rating. Park stray thoughts so they do not break your focus.</div>
        <div class="flow-step-page">Page 8</div>
      </div>
    </div>

    <div class="flow-step">
      <div class="flow-step-num">8</div>
      <div class="flow-step-body">
        <div class="flow-step-title">Progress Review</div>
        <div class="flow-step-desc">End your day here. Celebrate wins, capture gratitude, reflect on what worked, and set intentions for tomorrow - closing the loop.</div>
        <div class="flow-step-page">Page 9</div>
      </div>
    </div>
  </div>

  <div style="margin-top:24px;padding:12px 16px;border:1.5px dashed #ccc;border-radius:8px;text-align:center">
    <p style="font-size:11px;color:#888;margin:0;line-height:1.6">
      <strong style="color:#555">Tip:</strong> Print this workbook daily or weekly. Use the <em>Personalised</em> version
      to carry your current tasks and goals onto paper, or the <em>Blank</em> version for a fresh start.
      The flow is designed as a cycle - tomorrow's intentions on the last page become the starting point for your next workbook.
    </p>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════
     PAGE 2 — Goal Breakdown (Step 1: Clarify your target)
     ═══════════════════════════════════════════════════════ -->
<div class="page">
  <div class="page-header">
    <h1>1. Goal Breakdown</h1>
    <span class="date">${t}</span>
  </div>
  <p class="page-subtitle">Start with the big picture. Define what you are working toward and break it into actionable milestones.</p>

  <h2>My Goal</h2>
  <div class="write-line tall">${e?`<span class="prefill">${i(e)}</span>`:""}</div>

  <h2>Why This Matters</h2>
  <div class="reflection-box" style="min-height:60px">
    ${Array(3).fill('<div class="r-line"></div>').join("")}
  </div>

  <h2>Deadline</h2>
  <div class="write-line"></div>

  <h2>Milestones</h2>
  ${[1,2,3,4,5].map(s=>`
    <div style="display:flex;gap:8px;align-items:flex-end;margin-bottom:2px">
      <span style="font-size:10px;color:#999;width:16px;flex-shrink:0">${s}.</span>
      <div class="write-line" style="flex:1"></div>
    </div>
  `).join("")}

  <h2>Obstacles I Might Face</h2>
  ${Array(3).fill('<div class="write-line"></div>').join("")}

  <h2>What I Will Sacrifice</h2>
  <div class="reflection-box" style="min-height:50px">
    ${Array(2).fill('<div class="r-line"></div>').join("")}
  </div>

  <h2>Immediate Next Actions</h2>
  ${Array(5).fill('<div class="task-row"><div class="checkbox"></div><span class="task-text"></span></div>').join("")}
</div>

<!-- ═══════════════════════════════════════════════════════
     PAGE 3 — Brain Dump (Step 2: Empty your mind)
     ═══════════════════════════════════════════════════════ -->
<div class="page">
  <div class="page-header">
    <h1>2. Brain Dump</h1>
    <span class="date">${t}</span>
  </div>
  <p class="page-subtitle">Get everything out of your head before you start planning. Sort it later - just capture it now.</p>

  <h2>Ideas & Thoughts</h2>
  ${Array(12).fill('<div class="write-line"></div>').join("")}

  <h2>Worries / Blockers</h2>
  ${Array(6).fill('<div class="write-line"></div>').join("")}

  <h2>Things to Research / Learn</h2>
  ${Array(5).fill('<div class="write-line"></div>').join("")}

  <h2>People to Contact</h2>
  ${Array(4).fill('<div class="task-row"><div class="checkbox"></div><span class="task-text"></span></div>').join("")}

  <h2>Self-Care / Wellness</h2>
  <div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:6px">
    <div>
      <span style="font-size:10px;color:#999">WATER INTAKE</span>
      <div class="water-row">
        ${Array(8).fill('<div class="water-cup"></div>').join("")}
      </div>
    </div>
    <div>
      <div class="write-line" style="width:140px"><span class="label">Hours of Sleep</span></div>
    </div>
    <div>
      <div class="write-line" style="width:140px"><span class="label">Exercise</span></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════
     PAGE 4 — Priority Matrix (Step 3: Sort what matters)
     ═══════════════════════════════════════════════════════ -->
<div class="page">
  <div class="page-header">
    <h1>3. Priority Matrix</h1>
    <span class="date">${t}</span>
  </div>
  <p class="page-subtitle">Take what surfaced in your brain dump and sort it. Focus on Quadrant 1, then schedule Quadrant 2.</p>

  <div class="quadrants">
    <div class="quadrant" style="border-color:#c0392b">
      <h3 style="color:#c0392b">Q1 - Urgent & Important (Do First)</h3>
      ${Array(7).fill('<div class="q-line"></div>').join("")}
    </div>
    <div class="quadrant" style="border-color:#2980b9">
      <h3 style="color:#2980b9">Q2 - Not Urgent & Important (Schedule)</h3>
      ${Array(7).fill('<div class="q-line"></div>').join("")}
    </div>
    <div class="quadrant" style="border-color:#f39c12">
      <h3 style="color:#f39c12">Q3 - Urgent & Not Important (Delegate)</h3>
      ${Array(7).fill('<div class="q-line"></div>').join("")}
    </div>
    <div class="quadrant" style="border-color:#95a5a6">
      <h3 style="color:#95a5a6">Q4 - Not Urgent & Not Important (Eliminate)</h3>
      ${Array(7).fill('<div class="q-line"></div>').join("")}
    </div>
  </div>

  <h2>Quick Wins (Under 5 Minutes)</h2>
  ${Array(4).fill('<div class="task-row"><div class="checkbox"></div><span class="task-text"></span></div>').join("")}
</div>
`}const y=`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Outfit:wght@400;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', 'Segoe UI', sans-serif;
    color: #1a1a2e;
    background: #fff;
    padding: 0;
    margin: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page {
    width: 7.5in;
    min-height: 10in;
    margin: 0 auto;
    padding: 0.6in 0.65in;
    page-break-after: always;
    position: relative;
  }
  .page:last-child { page-break-after: avoid; }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 2.5px solid #1a1a2e;
    padding-bottom: 6px;
    margin-bottom: 18px;
  }
  .page-header h1 {
    font-family: 'Outfit', sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.3px;
  }
  .page-header .date {
    font-size: 11px;
    color: #666;
  }
  .page-subtitle {
    font-size: 12px;
    color: #555;
    margin-bottom: 14px;
    font-style: italic;
  }

  h2 {
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin: 18px 0 8px;
    color: #1a1a2e;
    border-bottom: 1px solid #ccc;
    padding-bottom: 3px;
  }
  h3 {
    font-size: 13px;
    font-weight: 600;
    margin: 12px 0 6px;
    color: #333;
  }

  .write-line {
    border-bottom: 1px solid #bbb;
    height: 28px;
    margin-bottom: 2px;
    position: relative;
  }
  .write-line.tall { height: 36px; }
  .write-line .label {
    position: absolute;
    top: 2px;
    left: 0;
    font-size: 9px;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .write-line .prefill {
    position: absolute;
    bottom: 4px;
    left: 0;
    font-size: 12px;
    color: #444;
  }
`,k=`
  .task-row {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    margin-bottom: 2px;
    min-height: 26px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 2px;
  }
  .task-row .checkbox {
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    border: 1.5px solid #888;
    border-radius: 2px;
    margin-bottom: 3px;
  }
  .task-row .checkbox.checked {
    background: #ccc;
    position: relative;
  }
  .task-row .checkbox.checked::after {
    content: '\\2713';
    position: absolute;
    top: -3px;
    left: 1px;
    font-size: 13px;
    color: #555;
  }
  .task-row .task-text {
    font-size: 12px;
    color: #333;
    flex: 1;
    padding-bottom: 2px;
  }
  .task-row .task-cat {
    font-size: 9px;
    color: #999;
    text-transform: uppercase;
    flex-shrink: 0;
  }
  .task-row.empty .task-text {
    color: transparent;
  }

  .subtask-row {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    margin-bottom: 1px;
    min-height: 22px;
    border-bottom: 1px dotted #e0e0e0;
    padding-bottom: 1px;
    padding-left: 28px;
  }
  .subtask-row .checkbox {
    flex-shrink: 0;
    width: 11px;
    height: 11px;
    border: 1.5px solid #aaa;
    border-radius: 2px;
    margin-bottom: 2px;
  }
  .subtask-row .checkbox.checked {
    background: #ccc;
    position: relative;
  }
  .subtask-row .checkbox.checked::after {
    content: '\\2713';
    position: absolute;
    top: -4px;
    left: 0px;
    font-size: 11px;
    color: #555;
  }
  .subtask-row .task-text {
    font-size: 11px;
    color: #555;
    flex: 1;
    padding-bottom: 1px;
  }
  .subtask-row .task-text.done {
    text-decoration: line-through;
    color: #aaa;
  }

  .schedule-grid {
    width: 100%;
    border-collapse: collapse;
    margin-top: 6px;
  }
  .schedule-grid th,
  .schedule-grid td {
    border: 1px solid #ccc;
    padding: 4px 8px;
    text-align: left;
    font-size: 11px;
    height: 28px;
  }
  .schedule-grid th {
    background: #f5f5f5;
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .schedule-grid td.time-col {
    width: 70px;
    font-size: 10px;
    color: #666;
    white-space: nowrap;
  }

  .quadrants {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 8px;
  }
  .quadrant {
    border: 1.5px solid #aaa;
    border-radius: 6px;
    padding: 10px;
    min-height: 160px;
  }
  .quadrant h3 {
    margin: 0 0 8px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #555;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 4px;
  }
  .quadrant .q-line {
    border-bottom: 1px solid #ddd;
    height: 22px;
  }

  .reflection-box {
    border: 1.5px solid #bbb;
    border-radius: 6px;
    padding: 10px 12px;
    min-height: 100px;
    margin-top: 6px;
    margin-bottom: 10px;
  }
  .reflection-box .prompt {
    font-size: 11px;
    color: #777;
    margin-bottom: 6px;
    font-style: italic;
  }
  .reflection-box .r-line {
    border-bottom: 1px solid #ddd;
    height: 24px;
  }

  .goal-card {
    border: 1.5px solid #aaa;
    border-radius: 6px;
    padding: 10px 12px;
    margin-bottom: 10px;
  }
  .goal-card .goal-name {
    font-weight: 600;
    font-size: 13px;
  }
  .goal-card .goal-type {
    font-size: 10px;
    color: #888;
    text-transform: uppercase;
  }

  .habit-grid {
    width: 100%;
    border-collapse: collapse;
    margin-top: 6px;
  }
  .habit-grid th, .habit-grid td {
    border: 1px solid #ccc;
    padding: 3px 6px;
    text-align: center;
    font-size: 10px;
    height: 24px;
    width: 30px;
  }
  .habit-grid th:first-child, .habit-grid td:first-child {
    text-align: left;
    width: auto;
  }
  .habit-grid th { background: #f5f5f5; font-weight: 600; }

  .water-row {
    display: flex;
    gap: 8px;
    margin-top: 6px;
    margin-bottom: 8px;
  }
  .water-cup {
    width: 28px;
    height: 28px;
    border: 1.5px solid #aaa;
    border-radius: 4px;
  }
`,z=`
  @media print {
    body { padding: 0; }
    .page { margin: 0; padding: 0.5in 0.6in; width: auto; }
    .no-print { display: none !important; }
  }

  .print-bar {
    position: sticky;
    top: 0;
    background: #1a1a2e;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 100;
    font-family: 'Outfit', sans-serif;
  }
  .print-bar button {
    background: #fff;
    color: #1a1a2e;
    border: none;
    padding: 8px 20px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    font-family: inherit;
  }
  .print-bar button:hover { background: #e0e0e0; }
  .print-bar span { font-size: 13px; opacity: 0.8; }

  .cover-title {
    font-family: 'Outfit', sans-serif;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-align: center;
    margin: 24px 0 6px;
    color: #1a1a2e;
  }
  .cover-subtitle {
    text-align: center;
    font-size: 13px;
    color: #666;
    margin-bottom: 28px;
  }
  .flow-intro {
    font-size: 12px;
    color: #444;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: center;
    max-width: 5.5in;
    margin-left: auto;
    margin-right: auto;
  }

  .flow-steps {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 0 auto;
    max-width: 5.8in;
  }
  .flow-step {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 10px 0;
  }
  .flow-step-num {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #1a1a2e;
    color: #fff;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flow-step-body {
    flex: 1;
    padding-top: 2px;
  }
  .flow-step-title {
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #1a1a2e;
    margin-bottom: 2px;
  }
  .flow-step-desc {
    font-size: 11px;
    color: #666;
    line-height: 1.5;
  }
  .flow-step-page {
    font-size: 9px;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }
  .flow-arrow {
    width: 30px;
    display: flex;
    justify-content: center;
    padding: 0;
    color: #ccc;
    font-size: 16px;
    line-height: 1;
  }
  .flow-phase-label {
    font-family: 'Outfit', sans-serif;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #aaa;
    margin: 8px 0 0 44px;
  }
`,P=y+k+z;function S({blank:t,titleSuffix:e,today:i,_endGoal:s,activeGoal:l,_todayGoal:o,pendingParents:a,subtaskMap:n,completedTasks:d,parentTasks:p}){return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>FoCommand - Printable Workbook${e}</title>
<style>${P}</style>
</head>
<body>

<div class="print-bar no-print">
  <button onclick="window.print()">🖨  Print / Save as PDF</button>
  <span>${t?"Blank workbook — ready to fill in by hand":"Personalised with your tasks & goals"}</span>
</div>

${w({today:i,_endGoal:s,esc:b})}
</body>
</html>`}function A({tasks:t,goals:e,activeGoalId:i,endGoal:s,todayGoal:l,blank:o,onClose:a}){return v.useEffect(()=>{const n=window.open("","_blank","width=900,height=700");if(!n){a();return}const d=u({tasks:t,goals:e,activeGoalId:i,endGoal:s,todayGoal:l,blank:o}),p=S({blank:o,...d}),c=new Blob([p],{type:"text/html;charset=utf-8"}),f=URL.createObjectURL(c);n.location.href=f,setTimeout(()=>URL.revokeObjectURL(f),6e4),a()},[l,a,o,t,e,s,i]),null}export{A as default};
