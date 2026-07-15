import{c as Q,i as k,m as P,u as v,j as e,a0 as $,a1 as G,z as B,f as c,r as y,B as K,S as R,n as X}from"./index-BPn-f4_q.js";import{T as V,a as H,b as C,c as I}from"./tabs-DTKOhJZD.js";import{u as b}from"./useMutation-CjNa9IMb.js";import{C as g}from"./card-De06x9m0.js";import{B as d}from"./button-DIDkTrFU.js";import{B as f}from"./badge-DIpBqyne.js";import{I as p}from"./input-BgKOksxm.js";import{L as x}from"./label-4cqPPbhs.js";import{S as _}from"./switch-DUk0GfEH.js";import{D as J,a as Y,c as W,d as Z}from"./dialog-DtD1t9Ks.js";import{P as ee}from"./plus-CaQsBF6e.js";import{E as se}from"./external-link-sppDIKXA.js";import{P as te}from"./pen-line-DzeANwdL.js";import{T as D}from"./trash-2-v9L8JtfH.js";import{T as ae}from"./textarea-CeBuhQPx.js";import{c as re}from"./filterCheck-PqidadGY.js";import{C as A}from"./circle-x-bgb8a7ho.js";import{C as ne}from"./circle-check-COu7LPmA.js";import{D as S}from"./download-D7kQ5ay9.js";import{C as E}from"./check-CxJS2h7H.js";import{C as T}from"./copy-Cwnn9F4w.js";import"./index-1dXiu8Wy.js";import"./index-Ccmpt4zl.js";import"./index-AQe2iOgV.js";import"./index-CHlF5Ed3.js";import"./Combination-BJQgAW74.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]],O=Q("Chrome",oe),ie=[{label:"1 hora",hours:1},{label:"8 horas",hours:8},{label:"24 horas",hours:24}];function le(n){return!n||!n.active?!1:new Date(n.granted_until)>new Date}function ce(){const n=k(),{toast:t}=P(),{data:r=[]}=v({queryKey:["permission_grants"],queryFn:()=>c.entities.PermissionGrant.list("-created_date",5),refetchInterval:3e4}),i=r.find(le),l=b({mutationFn:async u=>{const w=new Date(Date.now()+u*3600*1e3).toISOString();return c.entities.PermissionGrant.create({scope:"all",granted_until:w,active:!0,notes:`Autorização geral por ${u}h`})},onSuccess:()=>{n.invalidateQueries({queryKey:["permission_grants"]}),t({title:"Permissão concedida",description:"O agente pode navegar e consultar IAs."})}}),o=b({mutationFn:async()=>{if(i)return c.entities.PermissionGrant.update(i.id,{active:!1})},onSuccess:()=>{n.invalidateQueries({queryKey:["permission_grants"]}),t({title:"Permissão revogada",variant:"destructive"})}}),s=!!i,j=i?new Date(i.granted_until)-new Date:0,h=Math.max(0,Math.round(j/6e4));return e.jsx(g,{className:`p-4 border ${s?"border-emerald-500/30 bg-emerald-500/5":"border-amber-500/30 bg-amber-500/5"}`,children:e.jsxs("div",{className:"flex items-center justify-between gap-4 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s?e.jsx($,{className:"w-8 h-8 text-emerald-400"}):e.jsx(G,{className:"w-8 h-8 text-amber-400"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-sm",children:s?"Permissão geral ATIVA":"Permissão geral INATIVA"}),e.jsx("div",{className:"text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5",children:s?e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"w-3 h-3"}),h>=60?`${Math.floor(h/60)}h ${h%60}m restantes`:`${h} min restantes`]}):"O agente não pode navegar nem consultar IAs externas até você autorizar."})]})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[s&&e.jsx(f,{variant:"outline",className:"border-emerald-500/40 text-emerald-400",children:i.scope==="all"?"Escopo: tudo":i.scope}),ie.map(u=>e.jsxs(d,{size:"sm",variant:"outline",onClick:()=>l.mutate(u.hours),disabled:l.isPending,className:"text-xs h-8 border-border/60",children:["+ ",u.label]},u.hours)),s&&e.jsx(d,{size:"sm",variant:"destructive",onClick:()=>o.mutate(),disabled:o.isPending,className:"text-xs h-8",children:"Revogar"})]})]})})}const de={name:"",provider_key:"",url:"",login_url:"",input_selector:"",submit_selector:"",response_selector:"",enabled:!0,color:"#22d3ee",notes:""};function me(){const n=k(),[t,r]=y.useState(null),{data:i=[]}=v({queryKey:["ai_providers"],queryFn:()=>c.entities.AIProvider.list("-created_date")}),l=b({mutationFn:s=>s.id?c.entities.AIProvider.update(s.id,s):c.entities.AIProvider.create(s),onSuccess:()=>{n.invalidateQueries({queryKey:["ai_providers"]}),r(null)}}),o=b({mutationFn:s=>c.entities.AIProvider.delete(s),onSuccess:()=>n.invalidateQueries({queryKey:["ai_providers"]})});return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Provedores de IA"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"A extensão navega nestes sites usando sua sessão logada."})]}),e.jsxs(d,{size:"sm",onClick:()=>r({...de}),className:"gap-1.5",children:[e.jsx(ee,{className:"w-3.5 h-3.5"})," Adicionar"]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:i.map(s=>e.jsxs(g,{className:"p-4 border-border/60 hover:border-primary/30 transition-colors",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg flex items-center justify-center border",style:{background:(s.color||"#22d3ee")+"22",borderColor:(s.color||"#22d3ee")+"55"},children:e.jsx(K,{className:"w-4 h-4",style:{color:s.color||"#22d3ee"}})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold",children:s.name}),e.jsx("div",{className:"text-[10px] text-muted-foreground font-mono",children:s.provider_key})]})]}),e.jsx(_,{checked:!!s.enabled,onCheckedChange:j=>l.mutate({...s,enabled:j})})]}),e.jsxs("div",{className:"text-xs text-muted-foreground mt-3 flex items-center gap-1 truncate",children:[e.jsx(se,{className:"w-3 h-3 shrink-0"}),e.jsx("span",{className:"truncate",children:s.url})]}),s.notes&&e.jsx("p",{className:"text-xs text-muted-foreground mt-2 line-clamp-2",children:s.notes}),e.jsxs("div",{className:"flex gap-1.5 mt-3",children:[e.jsx(f,{variant:"outline",className:s.enabled?"border-emerald-500/40 text-emerald-400":"border-muted text-muted-foreground",children:s.enabled?"Ativo":"Desativado"}),e.jsxs("div",{className:"ml-auto flex gap-1",children:[e.jsx(d,{size:"icon",variant:"ghost",className:"h-7 w-7",onClick:()=>r(s),children:e.jsx(te,{className:"w-3.5 h-3.5"})}),e.jsx(d,{size:"icon",variant:"ghost",className:"h-7 w-7 text-destructive",onClick:()=>o.mutate(s.id),children:e.jsx(D,{className:"w-3.5 h-3.5"})})]})]})]},s.id))}),e.jsx(J,{open:!!t,onOpenChange:s=>!s&&r(null),children:e.jsxs(Y,{className:"max-w-xl",children:[e.jsx(W,{children:e.jsx(Z,{children:t!=null&&t.id?"Editar provedor":"Novo provedor"})}),t&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx(x,{className:"text-xs",children:"Nome"}),e.jsx(p,{value:t.name,onChange:s=>r({...t,name:s.target.value})})]}),e.jsxs("div",{children:[e.jsx(x,{className:"text-xs",children:"Chave (sem espaços)"}),e.jsx(p,{value:t.provider_key,onChange:s=>r({...t,provider_key:s.target.value.toLowerCase()})})]})]}),e.jsxs("div",{children:[e.jsx(x,{className:"text-xs",children:"URL"}),e.jsx(p,{value:t.url,onChange:s=>r({...t,url:s.target.value})})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{children:[e.jsx(x,{className:"text-xs",children:"Seletor input"}),e.jsx(p,{value:t.input_selector,onChange:s=>r({...t,input_selector:s.target.value})})]}),e.jsxs("div",{children:[e.jsx(x,{className:"text-xs",children:"Seletor envio"}),e.jsx(p,{value:t.submit_selector,onChange:s=>r({...t,submit_selector:s.target.value})})]}),e.jsxs("div",{children:[e.jsx(x,{className:"text-xs",children:"Seletor resposta"}),e.jsx(p,{value:t.response_selector,onChange:s=>r({...t,response_selector:s.target.value})})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx(x,{className:"text-xs",children:"Cor"}),e.jsx(p,{type:"color",value:t.color||"#22d3ee",onChange:s=>r({...t,color:s.target.value}),className:"h-9"})]}),e.jsxs("div",{className:"flex items-end gap-2",children:[e.jsx(_,{checked:!!t.enabled,onCheckedChange:s=>r({...t,enabled:s})}),e.jsx(x,{className:"text-xs pb-2",children:"Habilitado"})]})]}),e.jsxs("div",{children:[e.jsx(x,{className:"text-xs",children:"Notas"}),e.jsx(p,{value:t.notes||"",onChange:s=>r({...t,notes:s.target.value})})]}),e.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[e.jsx(d,{variant:"outline",onClick:()=>r(null),children:"Cancelar"}),e.jsx(d,{onClick:()=>l.mutate(t),disabled:l.isPending,children:"Salvar"})]})]})]})})]})}const L={pending:{icon:B,color:"text-amber-400",bg:"bg-amber-400/10 border-amber-400/30",label:"Pendente"},running:{icon:X,color:"text-cyan-400 animate-spin",bg:"bg-cyan-400/10 border-cyan-400/30",label:"Executando"},completed:{icon:ne,color:"text-emerald-400",bg:"bg-emerald-400/10 border-emerald-400/30",label:"Concluído"},failed:{icon:A,color:"text-red-400",bg:"bg-red-400/10 border-red-400/30",label:"Falhou"},cancelled:{icon:A,color:"text-muted-foreground",bg:"bg-muted/30 border-border",label:"Cancelado"}};function ue(n){return n.some(t=>t.active&&new Date(t.granted_until)>new Date)}function xe(){const n=k(),{toast:t}=P(),[r,i]=y.useState(""),[l,o]=y.useState(new Set),{data:s=[]}=v({queryKey:["ai_providers"],queryFn:()=>c.entities.AIProvider.filter({enabled:!0})}),{data:j=[]}=v({queryKey:["permission_grants"],queryFn:()=>c.entities.PermissionGrant.list("-created_date",5),refetchInterval:3e4}),{data:h=[]}=v({queryKey:["ai_query_queue"],queryFn:()=>c.entities.AIQueryQueue.list("-created_date",20),refetchInterval:3e3}),u=b({mutationFn:async()=>{const a=Array.from(l).map(m=>({prompt:r,provider_key:m,status:"pending"}));return c.entities.AIQueryQueue.bulkCreate(a)},onSuccess:()=>{n.invalidateQueries({queryKey:["ai_query_queue"]}),i(""),t({title:"Enfileirado",description:`${l.size} consulta(s) na fila.`})}}),w=b({mutationFn:a=>c.entities.AIQueryQueue.delete(a),onSuccess:()=>n.invalidateQueries({queryKey:["ai_query_queue"]})}),F=a=>{const m=new Set(l);m.has(a)?m.delete(a):m.add(a),o(m)},z=async()=>{if(!r.trim()||l.size===0)return;if(!ue(j)){t({title:"Permissão necessária",description:"Conceda permissão geral acima antes de consultar.",variant:"destructive"});return}const a=await re(r,"agents");if(!a.allowed){t({title:"Bloqueado por filtro",description:a.reason,variant:"destructive"});return}u.mutate()};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(g,{className:"p-4 border-border/60",children:[e.jsx(ae,{value:r,onChange:a=>i(a.target.value),placeholder:"Digite o prompt que será enviado às IAs selecionadas...",className:"min-h-[100px] resize-none bg-secondary/20 border-border/50 text-sm"}),e.jsxs("div",{className:"flex items-center gap-2 mt-3 flex-wrap",children:[e.jsx("span",{className:"text-xs text-muted-foreground mr-1",children:"Enviar para:"}),s.length===0&&e.jsx("span",{className:"text-xs text-amber-400",children:"Nenhum provedor ativo. Adicione na aba Provedores."}),s.map(a=>e.jsx("button",{onClick:()=>F(a.provider_key),className:`px-3 py-1 rounded-full text-xs border transition-all ${l.has(a.provider_key)?"border-primary/50 bg-primary/15 text-primary":"border-border/60 text-muted-foreground hover:text-foreground"}`,children:a.name},a.id)),e.jsxs(d,{size:"sm",onClick:z,disabled:!r.trim()||l.size===0||u.isPending,className:"ml-auto gap-1.5",children:[e.jsx(R,{className:"w-3.5 h-3.5"})," Enviar"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Fila de execução"}),h.length===0?e.jsx("p",{className:"text-xs text-muted-foreground py-6 text-center",children:"Nada na fila ainda."}):e.jsx("div",{className:"space-y-2",children:h.map(a=>{const m=L[a.status]||L.pending,M=m.icon;return e.jsx(g,{className:`p-3 border ${m.bg}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(M,{className:`w-4 h-4 mt-0.5 shrink-0 ${m.color}`}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap mb-1",children:[e.jsx(f,{variant:"outline",className:"text-[10px] h-5",children:a.provider_key}),e.jsx("span",{className:"text-[10px] text-muted-foreground",children:m.label}),e.jsx(d,{size:"icon",variant:"ghost",className:"h-6 w-6 ml-auto",onClick:()=>w.mutate(a.id),children:e.jsx(D,{className:"w-3 h-3"})})]}),e.jsx("p",{className:"text-xs text-foreground/80 line-clamp-2",children:a.prompt}),a.response&&e.jsxs("details",{className:"mt-2",children:[e.jsx("summary",{className:"text-xs text-primary cursor-pointer",children:"Ver resposta"}),e.jsx("pre",{className:"text-xs whitespace-pre-wrap mt-2 p-2 bg-background rounded border border-border/50 max-h-64 overflow-auto",children:a.response})]}),a.error&&e.jsxs("p",{className:"text-xs text-red-400 mt-1",children:["⚠️ ",a.error]})]})]})},a.id)})})]})]})}const N=`${window.location.origin}/functions/extensionBridge`,pe=`{
  "manifest_version": 3,
  "name": "NEXUS AI Bridge",
  "version": "1.0.0",
  "description": "Roteia prompts do NEXUS para IAs externas logadas no seu navegador.",
  "permissions": ["storage", "tabs", "scripting", "alarms"],
  "host_permissions": [
    "https://chatgpt.com/*",
    "https://gemini.google.com/*",
    "https://claude.ai/*",
    "https://www.perplexity.ai/*",
    "https://copilot.microsoft.com/*",
    "${window.location.origin}/*"
  ],
  "background": { "service_worker": "background.js" },
  "action": { "default_title": "NEXUS Bridge", "default_popup": "popup.html" }
}`,he=`// NEXUS AI Bridge - background.js
const DEFAULT_API = "${N}";
const POLL_INTERVAL = 5000;
let busy = false;

const URLS = {
  chatgpt:   "https://chatgpt.com/",
  gemini:    "https://gemini.google.com/app",
  claude:    "https://claude.ai/new",
  perplexity:"https://www.perplexity.ai/",
  copilot:   "https://copilot.microsoft.com/"
};

const SELECTORS = {
  chatgpt:    { input: "#prompt-textarea", send: 'button[data-testid="send-button"]', resp: '[data-message-author-role="assistant"]' },
  gemini:     { input: 'rich-textarea div[contenteditable="true"]', send: 'button[aria-label*="end" i]', resp: 'message-content' },
  claude:     { input: 'div[contenteditable="true"]', send: 'button[aria-label*="Send" i]', resp: '.font-claude-message' },
  perplexity: { input: 'textarea[placeholder*="Ask" i]', send: 'button[aria-label*="Submit" i]', resp: '.prose' },
  copilot:    { input: 'textarea', send: 'button[type="submit"]', resp: '[data-content="ai-message"]' }
};

async function cfg() {
  return await chrome.storage.sync.get({ apiUrl: DEFAULT_API, apiKey: "" });
}

async function poll() {
  if (busy) return;
  const c = await cfg();
  if (!c.apiKey) return;
  try {
    const r = await fetch(c.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-Key": c.apiKey },
      body: JSON.stringify({ action: "poll" })
    });
    const job = await r.json();
    if (job && job.id) await execute(job, c);
  } catch (e) { /* silencioso */ }
}

async function execute(job, c) {
  busy = true;
  let tabId;
  try {
    const url = URLS[job.provider_key];
    if (!url) throw new Error("Provedor desconhecido: " + job.provider_key);
    const tab = await chrome.tabs.create({ url, active: false });
    tabId = tab.id;
    await new Promise(r => setTimeout(r, 7000));
    const result = await chrome.scripting.executeScript({
      target: { tabId },
      func: runInPage,
      args: [job.prompt, SELECTORS[job.provider_key]]
    });
    const response = (result[0] && result[0].result) || "";
    await fetch(c.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-Key": c.apiKey },
      body: JSON.stringify({ action: "submit", id: job.id, response, status: "completed" })
    });
  } catch (e) {
    await fetch(c.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-Key": c.apiKey },
      body: JSON.stringify({ action: "submit", id: job.id, error: String(e.message || e), status: "failed" })
    });
  } finally {
    if (tabId) try { await chrome.tabs.remove(tabId); } catch {}
    busy = false;
  }
}

function runInPage(prompt, sel) {
  return new Promise(resolve => {
    const input = document.querySelector(sel.input);
    if (!input) return resolve("ERRO: campo de entrada não encontrado. Faça login no provedor.");
    if (input.tagName === "TEXTAREA") {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
      setter.call(input, prompt);
      input.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
      input.focus();
      document.execCommand("insertText", false, prompt);
    }
    setTimeout(() => {
      const send = document.querySelector(sel.send);
      if (send) send.click();
      let lastLen = 0, stable = 0;
      const t = setInterval(() => {
        const all = document.querySelectorAll(sel.resp);
        const last = all[all.length - 1];
        const text = last ? (last.innerText || "") : "";
        if (text.length > 0 && text.length === lastLen) {
          if (++stable >= 4) { clearInterval(t); resolve(text); }
        } else { stable = 0; lastLen = text.length; }
      }, 1500);
      setTimeout(() => { clearInterval(t); resolve(lastLen > 0 ? "(timeout) " + (document.querySelector(sel.resp)?.innerText || "") : "TIMEOUT"); }, 180000);
    }, 1500);
  });
}

chrome.alarms.create("nexus_poll", { periodInMinutes: 0.1 });
chrome.alarms.onAlarm.addListener(a => { if (a.name === "nexus_poll") poll(); });
setInterval(poll, POLL_INTERVAL);
`,ge=`<!doctype html>
<html><head><meta charset="utf-8"><title>NEXUS Bridge</title>
<style>
body{font-family:system-ui;width:300px;padding:12px;background:#0a1018;color:#dde}
label{display:block;font-size:11px;color:#789;margin:8px 0 4px}
input{width:100%;padding:6px 8px;background:#121a26;border:1px solid #234;color:#dde;border-radius:6px;font-size:12px}
button{margin-top:10px;width:100%;padding:8px;background:#06b6d4;color:#021;border:0;border-radius:6px;cursor:pointer;font-weight:600}
.ok{color:#0e6}
</style></head>
<body>
<h3 style="margin:0 0 8px;font-size:14px">NEXUS Bridge</h3>
<label>API URL</label>
<input id="url" placeholder="${N}">
<label>API Key (de "Minha API")</label>
<input id="key" type="password">
<button id="save">Salvar</button>
<p id="msg" style="font-size:11px;margin-top:8px"></p>
<script>
chrome.storage.sync.get({ apiUrl: "${N}", apiKey: "" }, c => {
  document.getElementById("url").value = c.apiUrl;
  document.getElementById("key").value = c.apiKey;
});
document.getElementById("save").onclick = () => {
  chrome.storage.sync.set({
    apiUrl: document.getElementById("url").value,
    apiKey: document.getElementById("key").value
  }, () => { document.getElementById("msg").innerHTML = '<span class="ok">Salvo ✓</span>'; });
};
<\/script>
</body></html>`,q=[{name:"manifest.json",content:pe},{name:"background.js",content:he},{name:"popup.html",content:ge}];function U(n,t){const r=new Blob([t],{type:"text/plain"}),i=document.createElement("a");i.href=URL.createObjectURL(r),i.download=n,i.click(),URL.revokeObjectURL(i.href)}function ve(){const[n,t]=y.useState(null),{toast:r}=P(),i=(o,s)=>{navigator.clipboard.writeText(s),t(o),setTimeout(()=>t(null),1500),r({title:"Copiado",description:o})},l=()=>{q.forEach((o,s)=>setTimeout(()=>U(o.name,o.content),s*300))};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(g,{className:"p-4 border-cyan-500/30 bg-cyan-500/5",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(O,{className:"w-8 h-8 text-cyan-400"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-sm",children:"Extensão NEXUS Bridge (Chrome / Edge / Brave)"}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:["Baixe os 3 arquivos em uma pasta, abra ",e.jsx("code",{className:"text-primary",children:"chrome://extensions"}),', ative "Modo desenvolvedor" e clique em "Carregar sem compactação".']})]}),e.jsxs(d,{onClick:l,className:"gap-2",children:[e.jsx(S,{className:"w-4 h-4"})," Baixar tudo"]})]})}),e.jsxs(g,{className:"p-4 border-border/60",children:[e.jsx("h4",{className:"text-sm font-semibold mb-2",children:"Configuração na extensão"}),e.jsxs("div",{className:"space-y-1.5 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(f,{variant:"outline",children:"API URL"}),e.jsx("code",{className:"text-primary font-mono",children:N}),e.jsx(d,{size:"icon",variant:"ghost",className:"h-6 w-6 ml-auto",onClick:()=>i("url",N),children:n==="url"?e.jsx(E,{className:"w-3 h-3 text-emerald-400"}):e.jsx(T,{className:"w-3 h-3"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(f,{variant:"outline",children:"API Key"}),e.jsxs("span",{className:"text-muted-foreground",children:["Gere em ",e.jsx("code",{className:"text-primary",children:"Minha API"})," e cole na extensão."]})]})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-3",children:q.map(o=>e.jsxs(g,{className:"border-border/60",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-border/50",children:[e.jsx("code",{className:"text-xs font-semibold text-primary",children:o.name}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(d,{size:"sm",variant:"ghost",className:"h-7 text-xs gap-1",onClick:()=>i(o.name,o.content),children:n===o.name?e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"w-3 h-3 text-emerald-400"})," Copiado"]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{className:"w-3 h-3"})," Copiar"]})}),e.jsxs(d,{size:"sm",variant:"ghost",className:"h-7 text-xs gap-1",onClick:()=>U(o.name,o.content),children:[e.jsx(S,{className:"w-3 h-3"})," Baixar"]})]})]}),e.jsx("pre",{className:"text-[11px] font-mono p-3 overflow-x-auto max-h-48 text-muted-foreground bg-secondary/20",children:o.content})]},o.name))})]})}const be=[{name:"ChatGPT",provider_key:"chatgpt",url:"https://chatgpt.com/",color:"#10a37f",enabled:!0,notes:"OpenAI · usa sua conta logada"},{name:"Gemini",provider_key:"gemini",url:"https://gemini.google.com/app",color:"#4285f4",enabled:!0,notes:"Google · usa sua conta logada"},{name:"Claude",provider_key:"claude",url:"https://claude.ai/new",color:"#cc785c",enabled:!0,notes:"Anthropic · usa sua conta logada"},{name:"Perplexity",provider_key:"perplexity",url:"https://www.perplexity.ai/",color:"#22d3ee",enabled:!0,notes:"Pesquisa com IA"},{name:"Copilot",provider_key:"copilot",url:"https://copilot.microsoft.com/",color:"#a855f7",enabled:!1,notes:"Microsoft"}];function $e(){const{data:n=[],isLoading:t}=v({queryKey:["ai_providers"],queryFn:()=>c.entities.AIProvider.list()});return y.useEffect(()=>{!t&&n.length===0&&c.entities.AIProvider.bulkCreate(be)},[t,n.length]),e.jsxs("div",{className:"p-6 space-y-6 max-w-6xl mx-auto",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold font-heading",children:"Multi-IA Bridge"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Roteamento de prompts para ChatGPT, Gemini, Claude e outras IAs — usando suas sessões logadas via extensão de navegador."})]}),e.jsx(ce,{}),e.jsxs(V,{defaultValue:"console",children:[e.jsxs(H,{className:"bg-secondary/30 border border-border/50 p-1",children:[e.jsxs(C,{value:"console",className:"gap-2 data-[state=active]:bg-card",children:[e.jsx(R,{className:"w-4 h-4"})," Console"]}),e.jsxs(C,{value:"providers",className:"gap-2 data-[state=active]:bg-card",children:[e.jsx(K,{className:"w-4 h-4"})," Provedores"]}),e.jsxs(C,{value:"extension",className:"gap-2 data-[state=active]:bg-card",children:[e.jsx(O,{className:"w-4 h-4"})," Extensão"]})]}),e.jsx(I,{value:"console",className:"mt-5",children:e.jsx(xe,{})}),e.jsx(I,{value:"providers",className:"mt-5",children:e.jsx(me,{})}),e.jsx(I,{value:"extension",className:"mt-5",children:e.jsx(ve,{})})]})]})}export{$e as default};
