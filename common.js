const sb=supabase.createClient(CFG.url,CFG.key);
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const rp=n=>n?"Rp"+Number(n).toLocaleString("id-ID"):"";
const safe=u=>/^https?:\/\//i.test(u||"")?u:"#";
const yt=u=>{const m=/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/.exec(u||"");return m?"https://www.youtube.com/embed/"+m[1]:""};
const nm=(a,id)=>(a.find(x=>x.id===id)||{}).name||"";
function toast(t){const d=document.createElement("div");d.className="toast";d.textContent=t;document.body.append(d);setTimeout(()=>d.remove(),2800)}
