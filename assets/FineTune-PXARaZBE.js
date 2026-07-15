import{c as K,r as p,j as e,k as H,i as G,m as W,u as X,a2 as O,f as $,x as Y,y as Z,E as ee,I as ae}from"./index-BPn-f4_q.js";import{u as S}from"./useMutation-CjNa9IMb.js";import{C as R}from"./card-De06x9m0.js";import{c as te,B as b}from"./button-DIDkTrFU.js";import{I as N}from"./input-BgKOksxm.js";import{L as f}from"./label-4cqPPbhs.js";import{B as C}from"./badge-DIpBqyne.js";import{S as P,a as A,b as L,c as D,d as v}from"./select-Cqe10U66.js";import{D as re,a as se,c as ne,d as oe}from"./dialog-DtD1t9Ks.js";import{P as ie}from"./plus-CaQsBF6e.js";import{V as le}from"./video-UA6UpSc0.js";import{F as ce}from"./file-text-DNUK4b7W.js";import{P as de}from"./play-Bf6Rr2MQ.js";import{D as ue}from"./download-D7kQ5ay9.js";import{T as me}from"./trash-2-v9L8JtfH.js";import"./index-BdQq_4o_.js";import"./index-1dXiu8Wy.js";import"./index-Ccmpt4zl.js";import"./Combination-BJQgAW74.js";import"./index-CHlF5Ed3.js";import"./chevron-up-DU5OJZb0.js";import"./check-CxJS2h7H.js";import"./index-AQe2iOgV.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],xe=K("Music",pe);function ge(a,s=[]){let r=[];function n(u,l){const i=p.createContext(l);i.displayName=u+"Context";const c=r.length;r=[...r,l];const g=_=>{var m;const{scope:x,children:t,...d}=_,h=((m=x==null?void 0:x[a])==null?void 0:m[c])||i,j=p.useMemo(()=>d,Object.values(d));return e.jsx(h.Provider,{value:j,children:t})};g.displayName=u+"Provider";function y(_,x){var h;const t=((h=x==null?void 0:x[a])==null?void 0:h[c])||i,d=p.useContext(t);if(d)return d;if(l!==void 0)return l;throw new Error(`\`${_}\` must be used within \`${u}\``)}return[g,y]}const o=()=>{const u=r.map(l=>p.createContext(l));return function(i){const c=(i==null?void 0:i[a])||u;return p.useMemo(()=>({[`__scope${a}`]:{...i,[a]:c}}),[i,c])}};return o.scopeName=a,[n,he(o,...s)]}function he(...a){const s=a[0];if(a.length===1)return s;const r=()=>{const n=a.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(u){const l=n.reduce((i,{useScope:c,scopeName:g})=>{const _=c(u)[`__scope${g}`];return{...i,..._}},{});return p.useMemo(()=>({[`__scope${s.scopeName}`]:l}),[l])}};return r.scopeName=s.scopeName,r}var fe=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],z=fe.reduce((a,s)=>{const r=te(`Primitive.${s}`),n=p.forwardRef((o,u)=>{const{asChild:l,...i}=o,c=l?r:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(c,{...i,ref:u})});return n.displayName=`Primitive.${s}`,{...a,[s]:n}},{}),T="Progress",k=100,[ve]=ge(T),[_e,Ne]=ve(T),J=p.forwardRef((a,s)=>{const{__scopeProgress:r,value:n=null,max:o,getValueLabel:u=be,...l}=a;(o||o===0)&&!F(o)&&console.error(ye(`${o}`,"Progress"));const i=F(o)?o:k;n!==null&&!M(n,i)&&console.error(je(`${n}`,"Progress"));const c=M(n,i)?n:null,g=w(c)?u(c,i):void 0;return e.jsx(_e,{scope:r,value:c,max:i,children:e.jsx(z.div,{"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":w(c)?c:void 0,"aria-valuetext":g,role:"progressbar","data-state":V(c,i),"data-value":c??void 0,"data-max":i,...l,ref:s})})});J.displayName=T;var U="ProgressIndicator",B=p.forwardRef((a,s)=>{const{__scopeProgress:r,...n}=a,o=Ne(U,r);return e.jsx(z.div,{"data-state":V(o.value,o.max),"data-value":o.value??void 0,"data-max":o.max,...n,ref:s})});B.displayName=U;function be(a,s){return`${Math.round(a/s*100)}%`}function V(a,s){return a==null?"indeterminate":a===s?"complete":"loading"}function w(a){return typeof a=="number"}function F(a){return w(a)&&!isNaN(a)&&a>0}function M(a,s){return w(a)&&!isNaN(a)&&a<=s&&a>=0}function ye(a,s){return`Invalid prop \`max\` of value \`${a}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${k}\`.`}function je(a,s){return`Invalid prop \`value\` of value \`${a}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${k} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var q=J,$e=B;const Q=p.forwardRef(({className:a,value:s,...r},n)=>e.jsx(q,{ref:n,className:H("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",a),...r,children:e.jsx($e,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(s||0)}%)`}})}));Q.displayName=q.displayName;const Ce={text:ce,image:ae,video:le,audio:xe},we={text:"text-emerald-400",image:"text-cyan-400",video:"text-purple-400",audio:"text-amber-400"},I={draft:{label:"Rascunho",color:"bg-muted text-muted-foreground"},ready:{label:"Pronto",color:"bg-blue-500/15 text-blue-400"},queued:{label:"Na fila",color:"bg-amber-500/15 text-amber-400"},running:{label:"Treinando",color:"bg-cyan-500/15 text-cyan-400"},completed:{label:"Concluído",color:"bg-emerald-500/15 text-emerald-400"},failed:{label:"Falhou",color:"bg-red-500/15 text-red-400"},cancelled:{label:"Cancelado",color:"bg-muted text-muted-foreground"}},Se={name:"",domain:"image",method:"lora",base_model:"",dataset_source:"",dataset_size:100,status:"draft",config:{learning_rate:1e-4,batch_size:4,epochs:10,rank:16,alpha:32}};function E(a){const s=a.config||{};return a.domain==="text"?`# Fine-tuning ${a.method.toUpperCase()} para texto
# Job: ${a.name}
# Base: ${a.base_model}
# Dataset: ${a.dataset_source}

from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments
from peft import LoraConfig, get_peft_model, TaskType
from datasets import load_dataset
from trl import SFTTrainer

MODEL = "${a.base_model}"
DATASET = "${a.dataset_source}"

tokenizer = AutoTokenizer.from_pretrained(MODEL)
model = AutoModelForCausalLM.from_pretrained(MODEL, load_in_4bit=True, device_map="auto")

lora_config = LoraConfig(
    r=${s.rank||16},
    lora_alpha=${s.alpha||32},
    target_modules=["q_proj", "v_proj"],
    task_type=TaskType.CAUSAL_LM,
)
model = get_peft_model(model, lora_config)

dataset = load_dataset(DATASET, split="train")

args = TrainingArguments(
    output_dir="./output-${a.name.toLowerCase().replace(/\s+/g,"-")}",
    per_device_train_batch_size=${s.batch_size||4},
    learning_rate=${s.learning_rate||1e-4},
    num_train_epochs=${s.epochs||10},
    logging_steps=10,
    save_strategy="epoch",
)

trainer = SFTTrainer(model=model, args=args, train_dataset=dataset, tokenizer=tokenizer)
trainer.train()
trainer.save_model("./final-${a.name.toLowerCase().replace(/\s+/g,"-")}")
print("Treinamento concluído!")
`:a.domain==="image"?`# Fine-tuning ${a.method.toUpperCase()} para imagens (Stable Diffusion)
# Job: ${a.name}
# Base: ${a.base_model}

# Use o kohya_ss ou diffusers para treinar LoRA em imagens
# Documentação: https://github.com/kohya-ss/sd-scripts

accelerate launch \\
  --num_cpu_threads_per_process 4 \\
  train_network.py \\
  --pretrained_model_name_or_path="${a.base_model}" \\
  --train_data_dir="${a.dataset_source}" \\
  --output_dir="./output-${a.name.toLowerCase().replace(/\s+/g,"-")}" \\
  --output_name="${a.name.toLowerCase().replace(/\s+/g,"-")}" \\
  --network_module=networks.lora \\
  --network_dim=${s.rank||16} \\
  --network_alpha=${s.alpha||32} \\
  --learning_rate=${s.learning_rate||1e-4} \\
  --train_batch_size=${s.batch_size||4} \\
  --max_train_epochs=${s.epochs||10} \\
  --save_every_n_epochs=1 \\
  --mixed_precision="fp16" \\
  --gradient_checkpointing \\
  --optimizer_type="AdamW8bit"
`:a.domain==="video"?`# Fine-tuning para vídeo
# Job: ${a.name}
# Base: ${a.base_model}

# Use AnimateDiff ou ModelScope para fine-tune de vídeo
# Frames sequenciais devem estar em ${a.dataset_source}

from diffusers import AnimateDiffPipeline, MotionAdapter
import torch

adapter = MotionAdapter.from_pretrained("guoyww/animatediff-motion-adapter-v1-5-2")
pipe = AnimateDiffPipeline.from_pretrained("${a.base_model}", motion_adapter=adapter, torch_dtype=torch.float16)

# ... configuração de treino LoRA temporal
# Hiperparâmetros: rank=${s.rank||16}, lr=${s.learning_rate||1e-4}, epochs=${s.epochs||10}
`:`# Fine-tuning de áudio
# Job: ${a.name}
# Use Whisper, SpeechT5 ou Bark para fine-tune
# Dataset: ${a.dataset_source}
`}function Te({job:a,onDelete:s,onStart:r,onDownload:n}){const o=Ce[a.domain]||O,u=we[a.domain],l=I[a.status]||I.draft;return e.jsxs(R,{className:"p-4 border-border/60",children:[e.jsx("div",{className:"flex items-start justify-between gap-2",children:e.jsxs("div",{className:"flex items-center gap-3 min-w-0 flex-1",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-secondary/40 border border-border/60 flex items-center justify-center shrink-0",children:e.jsx(o,{className:`w-4 h-4 ${u}`})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"text-sm font-semibold truncate",children:a.name}),e.jsx("div",{className:"text-[10px] text-muted-foreground font-mono truncate",children:a.base_model})]}),e.jsx(C,{className:`text-[10px] ${l.color} border-0`,children:l.label})]})}),e.jsxs("div",{className:"flex gap-1.5 mt-3 flex-wrap",children:[e.jsx(C,{variant:"outline",className:"text-[10px]",children:a.domain}),e.jsx(C,{variant:"outline",className:"text-[10px]",children:a.method}),a.dataset_size&&e.jsxs(C,{variant:"secondary",className:"text-[10px]",children:[a.dataset_size," amostras"]})]}),a.status==="running"&&e.jsxs("div",{className:"mt-3",children:[e.jsx(Q,{value:a.progress||0,className:"h-1.5"}),e.jsxs("span",{className:"text-[10px] text-muted-foreground mt-1 block",children:[a.progress||0,"%"]})]}),e.jsxs("div",{className:"flex gap-1 mt-3 justify-end",children:[a.status==="draft"&&e.jsxs(b,{size:"sm",variant:"outline",className:"h-7 text-xs gap-1",onClick:()=>r(a),children:[e.jsx(de,{className:"w-3 h-3"})," Iniciar"]}),e.jsxs(b,{size:"sm",variant:"outline",className:"h-7 text-xs gap-1",onClick:()=>n(a),children:[e.jsx(ue,{className:"w-3 h-3"})," Script"]}),e.jsx(b,{size:"icon",variant:"ghost",className:"h-7 w-7 text-destructive",onClick:()=>s(a.id),children:e.jsx(me,{className:"w-3.5 h-3.5"})})]})]})}function Ye(){var g,y,_,x;const a=G(),{toast:s}=W(),[r,n]=p.useState(null),{data:o=[]}=X({queryKey:["FineTuneJob"],queryFn:()=>$.entities.FineTuneJob.list("-created_date")}),u=S({mutationFn:t=>{const d={...t,training_script:E(t),status:t.status||"ready"};return t.id?$.entities.FineTuneJob.update(t.id,d):$.entities.FineTuneJob.create(d)},onSuccess:()=>{a.invalidateQueries({queryKey:["FineTuneJob"]}),n(null)}}),l=S({mutationFn:t=>$.entities.FineTuneJob.delete(t),onSuccess:()=>a.invalidateQueries({queryKey:["FineTuneJob"]})}),i=S({mutationFn:async t=>{const d=Y("anx_training_url",""),h=Z("anx_training_token");if(!d||!h)throw new Error("Serviço de treinamento em GPU não configurado.");const j=crypto.randomUUID(),m=await ee(`${d}/v1/training/jobs`,{method:"POST",headers:{Authorization:`Bearer ${h}`,"Content-Type":"application/json","Idempotency-Key":j},body:JSON.stringify({client_job_id:t.id,domain:t.domain,base_model:t.base_model,method:t.method,config:t})},3e4);if(!m.job_id||!["queued","running"].includes(m.status))throw new Error("O serviço não confirmou o agendamento do treinamento.");return $.entities.FineTuneJob.update(t.id,{status:m.status,remote_job_id:m.job_id,started_at:new Date().toISOString()})},onSuccess:()=>{a.invalidateQueries({queryKey:["FineTuneJob"]}),s({title:"Job aceito",description:"O serviço de treinamento confirmou a fila."})},onError:t=>s({title:"Treinamento não iniciado",description:t.message,variant:"destructive"})}),c=t=>{const d=t.training_script||E(t),h=t.domain==="image"||t.domain==="video"?"sh":"py",j=new Blob([d],{type:"text/plain"}),m=document.createElement("a");m.href=URL.createObjectURL(j),m.download=`train-${t.name.toLowerCase().replace(/\s+/g,"-")}.${h}`,m.click(),URL.revokeObjectURL(m.href)};return e.jsxs("div",{className:"p-6 space-y-6 max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold font-heading",children:"Fine-Tuning Automático"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Configure jobs LoRA / QLoRA / DreamBooth para texto, imagem, vídeo e áudio. Os scripts são gerados para execução em máquina com GPU."})]}),e.jsxs(b,{onClick:()=>n({...Se}),className:"gap-1.5",children:[e.jsx(ie,{className:"w-4 h-4"})," Novo Job"]})]}),o.length===0?e.jsxs(R,{className:"p-12 text-center border-dashed border-border/60",children:[e.jsx(O,{className:"w-12 h-12 text-muted-foreground/40 mx-auto mb-3"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Nenhum job configurado."})]}):e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:o.map(t=>e.jsx(Te,{job:t,onDelete:d=>l.mutate(d),onStart:d=>i.mutate(d),onDownload:c},t.id))}),e.jsx(re,{open:!!r,onOpenChange:t=>!t&&n(null),children:e.jsxs(se,{className:"max-w-2xl",children:[e.jsx(ne,{children:e.jsxs(oe,{children:[r!=null&&r.id?"Editar":"Novo"," job de fine-tuning"]})}),r&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx(f,{className:"text-xs",children:"Nome do job"}),e.jsx(N,{value:r.name,onChange:t=>n({...r,name:t.target.value}),placeholder:"Ex: Meu estilo cinematográfico"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx(f,{className:"text-xs",children:"Domínio"}),e.jsxs(P,{value:r.domain,onValueChange:t=>n({...r,domain:t}),children:[e.jsx(A,{children:e.jsx(L,{})}),e.jsxs(D,{children:[e.jsx(v,{value:"text",children:"Texto (LLM)"}),e.jsx(v,{value:"image",children:"Imagem (SD/SDXL/Flux)"}),e.jsx(v,{value:"video",children:"Vídeo (AnimateDiff)"}),e.jsx(v,{value:"audio",children:"Áudio (Whisper/Bark)"})]})]})]}),e.jsxs("div",{children:[e.jsx(f,{className:"text-xs",children:"Método"}),e.jsxs(P,{value:r.method,onValueChange:t=>n({...r,method:t}),children:[e.jsx(A,{children:e.jsx(L,{})}),e.jsxs(D,{children:[e.jsx(v,{value:"lora",children:"LoRA"}),e.jsx(v,{value:"qlora",children:"QLoRA (4-bit)"}),e.jsx(v,{value:"dreambooth",children:"DreamBooth"}),e.jsx(v,{value:"textual_inversion",children:"Textual Inversion"}),e.jsx(v,{value:"full_finetune",children:"Full Fine-tune"})]})]})]})]}),e.jsxs("div",{children:[e.jsx(f,{className:"text-xs",children:"Modelo base (HF repo ou caminho)"}),e.jsx(N,{value:r.base_model,onChange:t=>n({...r,base_model:t.target.value}),placeholder:"stabilityai/stable-diffusion-xl-base-1.0"})]}),e.jsxs("div",{children:[e.jsx(f,{className:"text-xs",children:"Fonte do dataset"}),e.jsx(N,{value:r.dataset_source,onChange:t=>n({...r,dataset_source:t.target.value}),placeholder:"HF dataset ou pasta local"})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:[e.jsxs("div",{children:[e.jsx(f,{className:"text-xs",children:"LR"}),e.jsx(N,{type:"number",step:"0.0001",value:((g=r.config)==null?void 0:g.learning_rate)||1e-4,onChange:t=>n({...r,config:{...r.config,learning_rate:parseFloat(t.target.value)}})})]}),e.jsxs("div",{children:[e.jsx(f,{className:"text-xs",children:"Batch"}),e.jsx(N,{type:"number",value:((y=r.config)==null?void 0:y.batch_size)||4,onChange:t=>n({...r,config:{...r.config,batch_size:parseInt(t.target.value)}})})]}),e.jsxs("div",{children:[e.jsx(f,{className:"text-xs",children:"Epochs"}),e.jsx(N,{type:"number",value:((_=r.config)==null?void 0:_.epochs)||10,onChange:t=>n({...r,config:{...r.config,epochs:parseInt(t.target.value)}})})]}),e.jsxs("div",{children:[e.jsx(f,{className:"text-xs",children:"LoRA rank"}),e.jsx(N,{type:"number",value:((x=r.config)==null?void 0:x.rank)||16,onChange:t=>n({...r,config:{...r.config,rank:parseInt(t.target.value)}})})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 pt-2",children:[e.jsx(b,{variant:"outline",onClick:()=>n(null),children:"Cancelar"}),e.jsx(b,{onClick:()=>u.mutate(r),disabled:!r.name||!r.base_model,children:"Salvar"})]})]})]})})]})}export{Ye as default};
