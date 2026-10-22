import {escape,icon,link,button,card} from './components.mjs';

const intro=(eyebrow,title,text)=>`<div class="exp-heading reveal"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2><p>${text}</p></div>`;
const section=(id,body,variant='')=>`<section class="section exp-section ${variant}" id="${id}" data-expansion="${id}"><div class="container">${body}</div></section>`;
const ribbon='<svg class="exp-ribbon" viewBox="0 0 1200 180" fill="none" aria-hidden="true"><path d="M0 130H190C270 130 280 40 360 40H690C770 40 790 130 870 130H1200"/><path class="exp-packet" pathLength="100" d="M0 130H190C270 130 280 40 360 40H690C770 40 790 130 870 130H1200"/></svg>';

export const priorities=[
 ['Provider information','Bring an example of the documents, practice details and credential history your team needs to maintain.'],
 ['Application follow-up','Identify the missing information, signatures and payer responses that create the most coordination.'],
 ['Renewals and monitoring','List the credential expirations, attestations and recurring reviews your team tracks.'],
 ['Enrollment-to-billing handoff','Explain who needs confirmed payer, location and effective-date information, and how updates reach them.'],
 ['Security and data exchange','Bring requirements for access, hosting, data transfer, retention and product-specific evidence.'],
 ['Implementation and support','Clarify your internal capacity, training needs, existing records and the services you want to discuss.']
];

function planner(){return section('plan-your-credentialing-demo',`
 <div class="exp-planner-intro">${intro('A MORE USEFUL SOFTWARE CONVERSATION','Choose your priorities.<br><span>Shape the demonstration.</span>','The clearest comparison starts with your requirements. Select the areas you want to discuss, then carry them into your enquiry. This checklist helps prepare the conversation; it is not a feature-availability score.')}${link('Read the Evaluation Framework','/why-aelfacred/#evaluation-framework')}</div>
 <div class="exp-priorities" role="group" aria-label="Select your demonstration priorities">${priorities.map(([title,text],i)=>`<label class="exp-priority"><input type="checkbox" value="${i}"><span class="exp-priority-copy"><strong>${title}</strong><span>${text}</span></span></label>`).join('')}</div>
 <div class="exp-planner-footer"><p class="exp-selection-status" role="status" aria-live="polite">Select the topics that matter to your team.</p>${link('Discuss These Priorities','/contact/','button exp-priorities-link')}</div>`,'exp-planner');}

const evaluationRows=[
 ['Provider information','Spread across files, folders, and messages','Organized provider, group, and facility records'],
 ['Application preparation','Information copied by hand between records and forms','Stored information fills supported forms'],
 ['Application progress','Updates kept in separate trackers and conversations','Status and open tasks visible in the dashboard'],
 ['License and document expirations','Dates kept in trackers or calendars','Expiration dates tracked with automatic alerts'],
 ['CAQH and renewals','Follow-up handled through separate reminders','Due dates kept beside provider records'],
 ['Signatures','Status tracked through messages and manual updates','Pending signatures visible, with alerts to the provider and your team'],
 ['Specialist support','Updates sit outside internal tracking tools','Specialists work within an agreed scope, with progress visible in AelfaCred']
];

const whyPage={
 updated:'2026-10-22',
 path:'/why-aelfacred/',label:'Why AelfaCred',title:'Why AelfaCred | Credentialing Software and Support',
 description:'Bring provider records, automatic form filling, license expiration tracking, application tasks, and credentialing support together with AelfaCred.',
 keywords:['why AelfaCred','credentialing software','provider credentialing workflow','license expiration tracking'],
 content:section('why-aelfacred',`
  <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Why AelfaCred</span></nav>
  <div class="exp-hero-copy reveal"><p class="eyebrow">WHY AELFACRED</p><h1>Why AelfaCred:<br><span>Know Where Every Credentialing File Stands</span></h1><p>AelfaCred is your one-stop solution for simplifying and managing the entire credentialing process. One dashboard shows which stage each file has reached, what is still missing, and who is following up.</p><p>Nobody has to dig through separate records and messages to find out.</p><div class="actions">${button()}</div></div>`,'exp-hero')
 +section('why-points',`
  <div class="grid three">${card('Software and Specialists in One Workflow','Use AelfaCred to run credentialing in-house, add specialist support, or split the tasks between your team and ours. When our specialists are involved, you follow progress in the same dashboard instead of waiting on status reports.','layers','01')}${card('Less Retyping','Supported application forms fill in from the provider information you have stored. Your team reviews the details and completes whatever is missing before submission.','signature','02')}${card('Expiration Dates and Deadlines Next to Each File','License expirations, CAQH attestation dates, document expirations, and renewal deadlines sit on the provider record. Automatic alerts show what is coming up, so updated documents can be requested early.','calendar','03')}${card('Clear Responsibilities','You know which tasks your team owns and which ones our specialists handle. We agree on the scope before work starts and revisit it when your roster or workload changes.','people','04')}${card('Built by a Billing Company','AelfaCred comes from QWay Healthcare, a medical billing and revenue cycle management company. We know billing waits on enrollment, so the platform keeps enrollment status, confirmed effective dates, and open requirements beside the credentialing tasks behind them.','shield','05')}</div>`,'')
 +section('evaluation-framework',`
  ${intro('SPREADSHEETS AND EMAIL VS. AELFACRED','Spreadsheets and email<br><span>vs. AelfaCred.</span>','')}
  <div class="exp-evaluation-table exp-compare" role="table" aria-label="Spreadsheets and email versus AelfaCred"><div class="exp-evaluation-head" role="row"><span role="columnheader">Workflow area</span><span role="columnheader">Spreadsheet and email workflow</span><span role="columnheader">AelfaCred</span></div>${evaluationRows.map(([topic,before,after])=>`<div class="exp-evaluation-row" role="row"><strong role="rowheader">${topic}</strong><span role="cell" data-label="Spreadsheet and email">${before}</span><span role="cell" data-label="AelfaCred">${after}</span></div>`).join('')}</div>`,'exp-evaluation')
 +section('clear-expectations',`
  <div class="exp-final-copy reveal"><p class="eyebrow">CLEAR EXPECTATIONS FROM THE START</p><h2>Clear expectations<br><span>from the start.</span></h2><p>AelfaCred supports application preparation, tracking, and follow-up. Payers make credentialing and enrollment decisions and set their own review timelines. Neither the platform nor our services guarantee approval or payment.</p></div>`,'')
 +section('see-how-it-fits',`
  <div class="exp-final-copy reveal"><p class="eyebrow">SEE HOW AELFACRED FITS YOUR PROCESS</p><h2>See how AelfaCred<br><span>fits your process.</span></h2><p>Bring your current tracker and the step that slows you down most. We will show you how AelfaCred organizes the records and where specialist support can fit.</p><div class="actions">${button()}</div></div>${ribbon}`,'exp-final')
};

export function extendPages(originalPages){
 const additions={'/resources/':planner()};
 return [...originalPages.map(page=>{
  const addition=additions[page.path];if(!addition)return page;
  const position=page.content.lastIndexOf('<section');
  if(position<0)throw new Error(`No insertion point for ${page.path}`);
  return {...page,updated:'2026-10-15',content:page.content.slice(0,position)+addition+page.content.slice(position)};
 }),whyPage];
}
